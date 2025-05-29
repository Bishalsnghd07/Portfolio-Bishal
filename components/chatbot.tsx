import React, { useState } from "react";
import { chatbotData } from "@/constants";

interface ChatbotProps {
  initialOpen?: boolean;
}

interface FollowUpOption {
  option: string;
  answer?: string;
  followUp?: FollowUpQuestion;
}

interface FollowUpQuestion {
  question: string;
  options: FollowUpOption[];
  answer?: string;
}

interface ChatbotDataItem {
  question: string;
  options: FollowUpOption[];
  answer?: string;
}

interface ChatMessage {
  sender: string;
  text: string;
  followUpQuestions?: FollowUpOption[];
}

const Chatbot: React.FC<ChatbotProps> = ({ initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [navHistory, setNavHistory] = useState<FollowUpOption[][]>([]);

  const handleBack = () => {
    if (navHistory.length > 1) {
      // Only allow back if there's history
      setMessages((prev) => {
        // Remove last user-bot pair (last 2 messages)
        const newMessages = prev.slice(0, -2);
        return newMessages;
      });
      setNavHistory((prev) => prev.slice(0, -1));
    }
  };

  const handleSendMessage = (inputText: string) => {
    if (!inputText.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: inputText }]);

    const lowerCaseInput = inputText.toLowerCase();

    const findResponse = (
      data: ChatbotDataItem[],
      input: string
    ): { text: string; followUpQuestions?: FollowUpOption[] } | null => {
      // Handle greetings first
      const greetings = ["hi", "hello", "hey", "hola", "howdy"];
      if (greetings.includes(input)) {
        return {
          text: "Hello buddy! How may I help you? 😊",
          followUpQuestions: data[0].options, // Show first-level options
        };
      }

      // Check direct matches in main questions
      for (const item of data) {
        if (item.question.toLowerCase() === input) {
          return {
            text: item.answer || item.question,
            followUpQuestions: item.options,
          };
        }
      }

      // Search nested options recursively
      const searchNestedOptions = (
        options: FollowUpOption[]
      ): ReturnType<typeof findResponse> => {
        for (const option of options) {
          if (option.option.toLowerCase() === input) {
            if (option.answer) {
              return { text: option.answer };
            }
            if (option.followUp) {
              return {
                text: option.followUp.question,
                followUpQuestions: option.followUp.options,
              };
            }
          }

          if (option.followUp) {
            const nestedResult = searchNestedOptions(option.followUp.options);
            if (nestedResult) return nestedResult;
          }
        }
        return null;
      };

      for (const item of data) {
        const result = searchNestedOptions(item.options);
        if (result) return result;
      }

      return null;
    };

    const matchedResponse = findResponse(chatbotData, lowerCaseInput);

    // Corrected messages update with proper scoping
    setMessages((prevMessages) => {
      const newMessages = [
        ...prevMessages,
        {
          sender: "bot",
          text:
            matchedResponse?.text || "Sorry, I don't have an answer for that.",
          followUpQuestions: matchedResponse?.followUpQuestions,
        },
      ];

      // Update navigation history using correct references
      if (matchedResponse?.followUpQuestions) {
        setNavHistory((prevHistory) => [
          ...prevHistory,
          prevMessages.length > 0
            ? prevMessages[prevMessages.length - 1]?.followUpQuestions || []
            : chatbotData[0].options,
        ]);
      }

      return newMessages;
    });
  };

  // const handleBackToMenu = () => {
  //   setMessages([]);
  //   setNavHistory([]);
  // };

  const handleBackToMenu = () => setMessages([]);

  return (
    <>
      <div className="group fixed bottom-6 right-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-yellow-600 text-white px-3 py-[0.4rem] rounded-full shadow-lg 
                 hover:bg-yellow-700 transition-all duration-300
                 ring-0 hover:ring-8 ring-red-100/50"
        >
          Chat 💬
          <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping-slow opacity-0 group-hover:opacity-100"></span>
        </button>

        <div
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                    opacity-0 group-hover:opacity-100 transition-opacity 
                    duration-200 delay-300 pointer-events-none"
        >
          <div
            className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg 
                       shadow-xl flex items-center gap-2 relative
                       before:content-[''] before:absolute before:top-full before:left-1/2
                       before:-translate-x-1/2 before:w-3 before:h-1.5 before:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Ask me anything!
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-[19rem] h-[24rem] bg-white rounded-xl shadow-lg border-none flex flex-col">
          <div className="flex items-center justify-between p-3 bg-yellow-600 text-white rounded-t-lg">
            {navHistory.length > 1 && (
              <button
                onClick={handleBack}
                className="hover:bg-yellow-700 p-1 rounded-md"
              >
                ←
              </button>
            )}
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
            {messages.length === 0 ? (
              <div className="space-y-2">
                <p className="text-gray-600 mb-2">
                  {/* 👋 Hello buddy! How may I help you? 😊 */}
                  👋 Hello there, what would you like to know?
                </p>
                {chatbotData.map((data, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(data.question)}
                    className="w-full text-left bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded-lg text-sm"
                  >
                    {data.question}
                  </button>
                ))}
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="mb-2">
                  {msg.sender === "user" ? (
                    <div className="text-right">
                      <span className="inline-block px-3 py-2 bg-blue-500 text-white rounded-lg">
                        {msg.text}
                      </span>
                    </div>
                  ) : (
                    <div className="text-left">
                      <span className="inline-block px-3 py-2 bg-gray-200 text-black rounded-lg">
                        {msg.text}
                      </span>
                      {msg.followUpQuestions && (
                        <div className="mt-2 space-y-1">
                          {msg.followUpQuestions.map((followUp, i) => (
                            <button
                              key={i}
                              onClick={() => handleSendMessage(followUp.option)}
                              className="w-full text-left bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded-lg text-sm"
                            >
                              {followUp.option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="p-3 bg-white border-t">
            <button
              onClick={handleBackToMenu}
              className="w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-3 py-2"
            >
              Back to Main Menu
            </button>
          </div>

          <div className="p-3 border-t bg-white flex items-center">
            <input
              type="text"
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleSendMessage(userInput)
              }
            />
            <button
              onClick={() => handleSendMessage(userInput)}
              className="ml-2 px-2 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
