// // import React, { useState } from "react";
// // import { chatbotData } from "@/constants";

// // interface ChatbotProps {
// //   initialOpen?: boolean; // Whether the chatbot starts open or closed
// // }

// // const Chatbot: React.FC<ChatbotProps> = ({ initialOpen = false }) => {
// //   const [isOpen, setIsOpen] = useState(initialOpen);
// //   const [messages, setMessages] = useState<
// //     { sender: string; text: string; followUpQuestions?: any[] }[]
// //   >([]);
// //   const [userInput, setUserInput] = useState("");

// //   // const handleSendMessage = (inputText: string) => {
// //   //   if (!inputText.trim()) return;

// //   //   // Add user message to chat
// //   //   setMessages((prev) => [...prev, { sender: "user", text: inputText }]);

// //   //   const lowerCaseInput = inputText.toLowerCase();

// //   //   // Function to find the response recursively
// //   //   const findResponse = (
// //   //     data: typeof chatbotData,
// //   //     input: string
// //   //   ): { text: string; followUpQuestions?: any[] } | null => {
// //   //     for (const item of data) {
// //   //       if (item.question.toLowerCase() === input) {
// //   //         const followUpQuestions = item.options.map((opt) => ({
// //   //           question: opt.option,
// //   //         }));
// //   //         return { text: item.question, followUpQuestions };
// //   //       }

// //   //       // Check nested follow-ups recursively
// //   //       for (const option of item.options) {
// //   //         if (option.option.toLowerCase() === input) {
// //   //           const followUpQuestions = option.followUp?.options.map((opt) => ({
// //   //             question: opt.option,
// //   //           }));
// //   //           return { text: option.option, followUpQuestions };
// //   //         }
// //   //       }
// //   //     }
// //   //     return null; // No match found
// //   //   };

// //   //   // Find the matched response
// //   //   const matchedResponse = findResponse(chatbotData, lowerCaseInput);

// //   //   if (matchedResponse) {
// //   //     setMessages((prev) => [
// //   //       ...prev,
// //   //       {
// //   //         sender: "bot",
// //   //         text: matchedResponse.text,
// //   //         followUpQuestions: matchedResponse.followUpQuestions || [],
// //   //       },
// //   //     ]);
// //   //   } else {
// //   //     // Default response if no match found
// //   //     setMessages((prev) => [
// //   //       ...prev,
// //   //       { sender: "bot", text: "Sorry, I don't have an answer for that." },
// //   //     ]);
// //   //   }
// //   // };

// //   const [conversationState, setConversationState] = useState<string | null>(
// //     null
// //   );

// //   const handleSendMessage = (inputText: string, parentQuestion?: string) => {
// //     if (!inputText.trim()) return;

// //     // Add user message to chat
// //     setMessages((prev) => [...prev, { sender: "user", text: inputText }]);

// //     const lowerCaseInput = inputText.toLowerCase();

// //     // Function to find the response recursively based on the current conversation state
// //     const findResponse = (
// //       data: typeof chatbotData,
// //       input: string,
// //       parentQuestion?: string
// //     ): { text: string; followUpQuestions?: any[] } | null => {
// //       for (const item of data) {
// //         if (parentQuestion && item.question === parentQuestion) {
// //           for (const option of item.options) {
// //             if (option.option.toLowerCase() === input) {
// //               return {
// //                 text: `You selected: ${option.option}`,
// //                 followUpQuestions: option.followUp?.options || [],
// //               };
// //             }
// //           }
// //         }

// //         if (item.question.toLowerCase() === input) {
// //           const followUpQuestions = item.options.map((opt) => ({
// //             question: opt.option,
// //             followUp: opt.followUp,
// //           }));
// //           return { text: item.question, followUpQuestions };
// //         }

// //         // Check nested follow-ups recursively
// //         for (const option of item.options) {
// //           if (option.option.toLowerCase() === input) {
// //             const followUpQuestions = option.followUp?.options.map((opt) => ({
// //               question: opt.option,
// //             }));
// //             return { text: option.option, followUpQuestions };
// //           }

// //           if (option.followUp?.question.toLowerCase() === input) {
// //             const followUpQuestions = option.followUp?.options.map((opt) => ({
// //               question: opt.option,
// //             }));
// //             return {
// //               text: option.followUp.question,
// //               followUpQuestions,
// //             };
// //           }
// //         }
// //       }
// //       return null; // No match found
// //     };

// //     // Find the matched response
// //     const matchedResponse = findResponse(
// //       chatbotData,
// //       lowerCaseInput,
// //       parentQuestion
// //     );

// //     if (matchedResponse) {
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           sender: "bot",
// //           text: matchedResponse.text,
// //           followUpQuestions: matchedResponse.followUpQuestions || [],
// //         },
// //       ]);
// //       setConversationState(lowerCaseInput); // Update the conversation state
// //     } else {
// //       // Default response if no match found
// //       setMessages((prev) => [
// //         ...prev,
// //         { sender: "bot", text: "Sorry, I don't have an answer for that." },
// //       ]);
// //     }
// //   };

// //   const handleBackToMenu = () => {
// //     setMessages([]); // Clear the current messages
// //     setConversationState(null); // Reset the conversation state
// //   };

// //   return (
// //     <>
// //       {/* Floating Chatbot Button */}
// //       <button
// //         onClick={() => setIsOpen(!isOpen)}
// //         className="fixed bottom-3 right-6 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600"
// //       >
// //         💬
// //       </button>

// //       {/* Popup Chat Window */}
// //       {isOpen && (
// //         <div className="fixed bottom-20 right-6 w-80 h-96 bg-white border rounded-lg shadow-lg flex flex-col">
// //           {/* Chat Header */}
// //           <div className="flex items-center justify-between p-3 bg-blue-500 text-white rounded-t-lg">
// //             <h3 className="text-lg font-semibold">Chatbot</h3>
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               className="text-xl bg-white font-bold"
// //             >
// //               ✖
// //             </button>
// //           </div>

// //           {/* Chat Messages */}
// //           <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
// //             {/* Display starter options if no messages */}
// //             {messages.length === 0 ? (
// //               <div className="space-y-2">
// //                 <p className="text-gray-600 mb-2">
// //                   👋 Hello there, what do you like to do
// //                 </p>
// //                 {chatbotData.map((data, index) => (
// //                   <button
// //                     key={index}
// //                     onClick={() => handleSendMessage(data.question)}
// //                     className="w-full text-left bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded-lg text-sm"
// //                   >
// //                     {data.question}
// //                   </button>
// //                 ))}
// //               </div>
// //             ) : (
// //               messages.map((msg, index) => (
// //                 <div key={index} className="mb-2">
// //                   {/* User Message */}
// //                   {msg.sender === "user" ? (
// //                     <div className="text-right">
// //                       <span className="inline-block px-3 py-2 bg-blue-500 text-white rounded-lg">
// //                         {msg.text}
// //                       </span>
// //                     </div>
// //                   ) : (
// //                     // Bot Response
// //                     <div className="text-left">
// //                       <span className="inline-block px-3 py-2 bg-gray-300 text-black rounded-lg">
// //                         {msg.text}
// //                       </span>

// //                       {/* Follow-Up Questions */}
// //                       {msg.followUpQuestions &&
// //                         msg.followUpQuestions.length > 0 && (
// //                           <div className="mt-2 space-y-1">
// //                             {msg.followUpQuestions.map((followUp, i) => (
// //                               <button
// //                                 key={i}
// //                                 onClick={() =>
// //                                   handleSendMessage(followUp.question)
// //                                 }
// //                                 className="w-full text-left bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded-lg text-sm"
// //                               >
// //                                 {followUp.question}
// //                               </button>
// //                             ))}
// //                           </div>
// //                         )}
// //                     </div>
// //                   )}
// //                 </div>
// //               ))
// //             )}
// //           </div>

// //           {/* Back Button */}
// //           <div className="p-3 bg-white border-t">
// //             <button
// //               onClick={handleBackToMenu}
// //               className="w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-3 py-2"
// //             >
// //               Back to Main Menu
// //             </button>
// //           </div>

// //           {/* Chat Input */}
// //           <div className="p-3 border-t bg-white flex items-center">
// //             <input
// //               type="text"
// //               className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
// //               placeholder="Type your message..."
// //               value={userInput}
// //               onChange={(e) => setUserInput(e.target.value)}
// //               onKeyDown={(e) =>
// //                 e.key === "Enter" && handleSendMessage(userInput)
// //               }
// //             />
// //             <button
// //               onClick={() => handleSendMessage(userInput)}
// //               className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
// //             >
// //               Send
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Chatbot;

// import React, { useState } from "react";
// import { chatbotData } from "@/constants";

// interface ChatbotProps {
//   initialOpen?: boolean;
// }

// const Chatbot: React.FC<ChatbotProps> = ({ initialOpen = false }) => {
//   const [isOpen, setIsOpen] = useState(initialOpen);
//   const [messages, setMessages] = useState<
//     { sender: string; text: string; followUpQuestions?: any[] }[]
//   >([]);
//   const [userInput, setUserInput] = useState("");
//   const [conversationState, setConversationState] = useState<string | null>(
//     null
//   );

//   const handleSendMessage = (inputText: string, parentQuestion?: string) => {
//     if (!inputText.trim()) return;

//     // Add user message to chat
//     setMessages((prev) => [...prev, { sender: "user", text: inputText }]);

//     const lowerCaseInput = inputText.toLowerCase();

//     // Function to find the response recursively based on the current conversation state
//     const findResponse = (
//       data: typeof chatbotData,
//       input: string,
//       parentQuestion?: string
//     ): { text: string; followUpQuestions?: any[] } | null => {
//       for (const item of data) {
//         if (parentQuestion && item.question === parentQuestion) {
//           for (const option of item.options) {
//             if (option.option.toLowerCase() === input) {
//               return {
//                 text: `You selected: ${option.option}`,
//                 followUpQuestions: option.followUp?.options || [],
//               };
//             }
//           }
//         }

//         if (item.question.toLowerCase() === input) {
//           const followUpQuestions = item.options.map((opt) => ({
//             question: opt.option,
//             followUp: opt.followUp,
//           }));
//           return { text: item.question, followUpQuestions };
//         }

//         // Check nested follow-ups recursively
//         for (const option of item.options) {
//           if (option.option.toLowerCase() === input) {
//             const followUpQuestions = option.followUp?.options.map((opt) => ({
//               question: opt.option,
//             }));
//             return { text: option.option, followUpQuestions };
//           }

//           if (option.followUp?.question.toLowerCase() === input) {
//             const followUpQuestions = option.followUp?.options.map((opt) => ({
//               question: opt.option,
//             }));
//             return {
//               text: option.followUp.question,
//               followUpQuestions,
//             };
//           }
//         }
//       }
//       return null; // No match found
//     };

//     // Find the matched response
//     const matchedResponse = findResponse(
//       chatbotData,
//       lowerCaseInput,
//       parentQuestion
//     );

//     if (matchedResponse) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "bot",
//           text: matchedResponse.text,
//           followUpQuestions: matchedResponse.followUpQuestions || [],
//         },
//       ]);
//       setConversationState(lowerCaseInput); // Update the conversation state
//     } else {
//       // Default response if no match found
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "Sorry, I don't have an answer for that." },
//       ]);
//     }
//   };

//   // const handleSendMessage = (inputText: string, parentQuestion?: string) => {
//   //   if (!inputText.trim()) return;

//   //   // Add user message to chat
//   //   setMessages((prev) => [...prev, { sender: "user", text: inputText }]);

//   //   const lowerCaseInput = inputText.toLowerCase();

//   //   // Function to find the response recursively
//   //   const findResponse = (
//   //     data: typeof chatbotData,
//   //     input: string,
//   //     parentQuestion?: string
//   //   ): { text: string; followUpQuestions?: any[] } | null => {
//   //     for (const item of data) {
//   //       // If current question matches user input, return the corresponding follow-up
//   //       if (
//   //         item.question.toLowerCase() === input ||
//   //         (parentQuestion &&
//   //           item.question.toLowerCase() === parentQuestion.toLowerCase())
//   //       ) {
//   //         const followUpQuestions = item.options?.map((opt) => ({
//   //           question: opt.option,
//   //           followUp: opt.followUp,
//   //         }));

//   //         return {
//   //           text: item.question,
//   //           followUpQuestions,
//   //         };
//   //       }

//   //       // Check nested options and follow-ups
//   //       for (const option of item.options) {
//   //         if (option.option.toLowerCase() === input) {
//   //           const followUpQuestions = option.followUp?.options.map((opt) => ({
//   //             question: opt.option,
//   //             followUp: opt.followUp,
//   //           }));

//   //           return {
//   //             text: option.option,
//   //             followUpQuestions,
//   //           };
//   //         }
//   //       }
//   //     }
//   //     return null; // No match found
//   //   };

//   //   // Find matched response
//   //   const matchedResponse = findResponse(
//   //     chatbotData,
//   //     lowerCaseInput,
//   //     parentQuestion
//   //   );

//   //   if (matchedResponse) {
//   //     setMessages((prev) => [
//   //       ...prev,
//   //       { sender: "bot", text: matchedResponse.text },
//   //     ]);

//   //     // If there are follow-up questions, show them
//   //     if (matchedResponse.followUpQuestions?.length > 0) {
//   //       setMessages((prev) => [
//   //         ...prev,
//   //         {
//   //           sender: "bot",
//   //           text: "Please choose an option:",
//   //         },
//   //       ]);
//   //       matchedResponse.followUpQuestions.forEach((question) => {
//   //         setMessages((prev) => [
//   //           ...prev,
//   //           {
//   //             sender: "bot",
//   //             text: question.question,
//   //           },
//   //         ]);
//   //       });
//   //     } else {
//   //       // If no follow-up questions, end the conversation or trigger the next step
//   //       setMessages((prev) => [
//   //         ...prev,
//   //         { sender: "bot", text: "Thank you for your responses!" }, // Example message
//   //       ]);
//   //     }
//   //   } else {
//   //     setMessages((prev) => [
//   //       ...prev,
//   //       { sender: "bot", text: "Sorry, I don't have an answer for that." },
//   //     ]);
//   //   }
//   // };

//   const handleBackToMenu = () => {
//     setMessages([]); // Clear the current messages
//     setConversationState(null); // Reset the conversation state
//   };

//   return (
//     <>
//       {/* Floating Chatbot Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-3 right-6 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600"
//       >
//         💬
//       </button>

//       {/* Popup Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-20 right-6 w-80 h-96 bg-white border rounded-lg shadow-lg flex flex-col">
//           {/* Chat Header */}
//           <div className="flex items-center justify-between p-3 bg-blue-500 text-white rounded-t-lg">
//             <h3 className="text-lg font-semibold">Chatbot</h3>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-xl bg-white font-bold"
//             >
//               ✖
//             </button>
//           </div>

//           {/* Chat Messages */}
//           <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
//             {/* Display starter options if no messages */}
//             {messages.length === 0 ? (
//               <div className="space-y-2">
//                 <p className="text-gray-600 mb-2">
//                   👋 Hello there, what would you like to know?
//                 </p>
//                 {chatbotData.map((data, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleSendMessage(data.question)}
//                     className="w-full text-left bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded-lg text-sm"
//                   >
//                     {data.question}
//                   </button>
//                 ))}
//               </div>
//             ) : (
//               messages.map((msg, index) => (
//                 <div key={index} className="mb-2">
//                   {/* User Message */}
//                   {msg.sender === "user" ? (
//                     <div className="text-right">
//                       <span className="inline-block px-3 py-2 bg-blue-500 text-white rounded-lg">
//                         {msg.text}
//                       </span>
//                     </div>
//                   ) : (
//                     // Bot Response
//                     <div className="text-left">
//                       <span className="inline-block px-3 py-2 bg-gray-300 text-black rounded-lg">
//                         {msg.text}
//                       </span>

//                       {/* Follow-Up Questions */}
//                       {msg.followUpQuestions &&
//                         msg.followUpQuestions.length > 0 && (
//                           <div className="mt-2 space-y-1">
//                             {msg.followUpQuestions.map((followUp, i) => (
//                               <button
//                                 key={i}
//                                 onClick={() =>
//                                   handleSendMessage(followUp.question, msg.text)
//                                 }
//                                 className="w-full text-left bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded-lg text-sm"
//                               >
//                                 {followUp.question}
//                               </button>
//                             ))}
//                           </div>
//                         )}
//                     </div>
//                   )}
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Back Button */}
//           <div className="p-3 bg-white border-t">
//             <button
//               onClick={handleBackToMenu}
//               className="w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-3 py-2"
//             >
//               Back to Main Menu
//             </button>
//           </div>

//           {/* Chat Input */}
//           <div className="p-3 border-t bg-white flex items-center">
//             <input
//               type="text"
//               className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
//               placeholder="Type your message..."
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               onKeyDown={(e) =>
//                 e.key === "Enter" && handleSendMessage(userInput)
//               }
//             />
//             <button
//               onClick={() => handleSendMessage(userInput)}
//               className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Chatbot;

// import React, { useState } from "react";
// import { chatbotData } from "@/constants";

// interface ChatbotProps {
//   initialOpen?: boolean; // Whether the chatbot starts open or closed
// }

// interface FollowUpOption {
//   option: string;
//   answer?: string;
//   followUp?: FollowUpQuestion;
// }

// interface FollowUpQuestion {
//   question: string;
//   options: FollowUpOption[];
//   answer?: string;
// }

// interface ChatbotDataItem {
//   question: string;
//   options: FollowUpOption[];
//   answer?: string;
// }

// const Chatbot: React.FC<ChatbotProps> = ({ initialOpen = false }) => {
//   const [isOpen, setIsOpen] = useState(initialOpen);
//   const [messages, setMessages] = useState<
//     { sender: string; text: string; followUpQuestions?: any[] }[]
//   >([]);
//   const [userInput, setUserInput] = useState("");

//   const handleSendMessage = (inputText: string) => {
//     if (!inputText.trim()) return;

//     // Add user message to chat
//     setMessages((prev) => [...prev, { sender: "user", text: inputText }]);

//     const lowerCaseInput = inputText.toLowerCase();

//     // Function to find the response recursively
//     // const findResponse = (
//     //   data: typeof chatbotData,
//     //   input: string
//     // ): { text: string; followUpQuestions?: any[] } | null => {
//     //   for (const item of data) {
//     //     if (item.question.toLowerCase() === input) {
//     //       const followUpQuestions = item.options.map((opt) => ({
//     //         question: opt.option,
//     //         followUp: opt.followUp, // Store the followUp in the result
//     //       }));
//     //       return { text: item.question, followUpQuestions };
//     //     }

//     //     // Check nested follow-ups recursively
//     //     for (const option of item.options) {
//     //       if (option.option.toLowerCase() === input) {
//     //         const followUpQuestions = option.followUp?.options.map((opt) => ({
//     //           question: opt.option,
//     //         }));
//     //         return { text: option.option, followUpQuestions };
//     //       }

//     //       // If there are nested follow-up questions, check recursively
//     //       if (option.followUp?.question.toLowerCase() === input) {
//     //         const followUpQuestions = option.followUp?.options.map((opt) => ({
//     //           question: opt.option,
//     //         }));
//     //         return {
//     //           text: option.followUp.question,
//     //           followUpQuestions,
//     //         };
//     //       }
//     //     }
//     //   }
//     //   return null; // No match found
//     // };

//     const findResponse = (
//       data: ChatbotDataItem[],
//       input: string
//     ): {
//       text: string;
//       followUpQuestions?: FollowUpOption[];
//       answer?: string;
//     } | null => {
//       for (const item of data) {
//         if (item.question.toLowerCase() === input) {
//           if (item.answer) {
//             return { text: item.answer };
//           } else if (item.options) {
//             return {
//               text: item.question,
//               followUpQuestions: item.options,
//               answer: item.answer,
//             };
//           }
//         }

//         for (const option of item.options) {
//           if (option.option.toLowerCase() === input) {
//             if (option.answer) {
//               return { text: option.answer };
//             } else if (option.followUp) {
//               return {
//                 text: option.followUp.question,
//                 followUpQuestions: option.followUp.options,
//               };
//             }
//           }

//           if (option.followUp?.question.toLowerCase() === input) {
//             return {
//               text: option.followUp.question,
//               followUpQuestions: option.followUp.options,
//             };
//           }
//         }
//       }
//       return null;
//     };

//     //   const findResponse = (
//     //   data: ChatbotDataItem[],
//     //   input: string
//     // ): { text: string; followUpQuestions?: FollowUpOption[]; answer?: string } | null => {
//     //   for (const item of data) {
//     //     if (item.question.toLowerCase() === input) {
//     //       if (item.answer) {
//     //         return { text: item.answer };
//     //       } else if (item.options) {
//     //         const followUpQuestions = item.options.map(opt => ({
//     //           question: opt.option,
//     //           followUp: opt.followUp,
//     //           answer: opt.answer,
//     //         }));
//     //         return { text: item.question, followUpQuestions, answer: item.answer };
//     //       }
//     //     }

//     //     for (const option of item.options) {
//     //       if (option.option.toLowerCase() === input) {
//     //         if (option.answer) {
//     //           return { text: option.answer };
//     //         } else if (option.followUp) {
//     //           const followUpQuestions = option.followUp.options.map(opt => ({
//     //             question: opt.option,
//     //             followUp: opt.followUp,
//     //             answer: opt.answer,
//     //           }));
//     //           return { text: option.followUp.question, followUpQuestions };
//     //         }
//     //       }

//     //       if (option.followUp?.question.toLowerCase() === input) {
//     //         const followUpQuestions = option.followUp.options.map(opt => ({
//     //           question: opt.option,
//     //           followUp: opt.followUp,
//     //           answer: opt.answer,
//     //         }));
//     //         return { text: option.followUp.question, followUpQuestions };
//     //       }
//     //     }
//     //   }
//     //   return null;
//     // };

//     // Find the matched response
//     const matchedResponse = findResponse(chatbotData, lowerCaseInput);

//     if (matchedResponse) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "bot",
//           text: matchedResponse.text,
//           followUpQuestions: matchedResponse.followUpQuestions || [],
//         },
//       ]);
//     } else {
//       // Default response if no match found
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "Sorry, I don't have an answer for that." },
//       ]);
//     }
//   };

//   const handleBackToMenu = () => {
//     setMessages([]); // Clear the current messages
//   };

//   return (
//     <>
//       {/* Floating Chatbot Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-6 right-6 bg-red-600 text-white px-3 py-[0.4rem] rounded-full shadow-lg hover:bg-red-700 transition"
//       >
//         Chat 💬
//       </button>

//       {/* Popup Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-20 right-6 w-[19rem] h-[24rem] bg-white rounded-xl shadow-lg border-none flex flex-col">
//           {/* Chat Header */}
//           <div className="flex items-center justify-between p-3 bg-blue-500 text-white rounded-t-lg">
//             <h3 className="text-lg font-semibold">Chatbot</h3>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-xl font-bold"
//             >
//               ✖
//             </button>
//           </div>

//           {/* Chat Messages */}
//           <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
//             {/* Display starter options if no messages */}
//             {messages.length === 0 ? (
//               <div className="space-y-2">
//                 <p className="text-gray-600 mb-2">
//                   👋 Hello there, what would you like to know?
//                 </p>
//                 {chatbotData.map((data, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleSendMessage(data.question)}
//                     className="w-full text-left bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded-lg text-sm"
//                   >
//                     {data.question}
//                   </button>
//                 ))}
//               </div>
//             ) : (
//               messages.map((msg, index) => (
//                 <div key={index} className="mb-2">
//                   {/* User Message */}
//                   {msg.sender === "user" ? (
//                     <div className="text-right">
//                       <span className="inline-block px-3 py-2 bg-blue-500 text-white rounded-lg">
//                         {msg.text}
//                       </span>
//                     </div>
//                   ) : (
//                     // Bot Response
//                     <div className="text-left">
//                       <span className="inline-block px-3 py-2 bg-gray-300 text-black rounded-lg">
//                         {msg.text}
//                       </span>

//                       {/* Follow-Up Questions */}
//                       {msg.followUpQuestions &&
//                         msg.followUpQuestions.length > 0 && (
//                           <div className="mt-2 space-y-1">
//                             {msg.followUpQuestions.map((followUp, i) => (
//                               <button
//                                 key={i}
//                                 onClick={() =>
//                                   handleSendMessage(followUp.question)
//                                 }
//                                 className="w-full text-left bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded-lg text-sm"
//                               >
//                                 {followUp.question}
//                               </button>
//                             ))}
//                           </div>
//                         )}
//                     </div>
//                   )}
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Back Button */}
//           <div className="p-3 bg-white border-t">
//             <button
//               onClick={handleBackToMenu}
//               className="w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-3 py-2"
//             >
//               Back to Main Menu
//             </button>
//           </div>

//           {/* Chat Input */}
//           <div className="p-3 border-t bg-white flex items-center">
//             <input
//               type="text"
//               className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
//               placeholder="Type your message..."
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               onKeyDown={(e) =>
//                 e.key === "Enter" && handleSendMessage(userInput)
//               }
//             />
//             <button
//               onClick={() => handleSendMessage(userInput)}
//               className="ml-2 px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Chatbot;

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

  const handleSendMessage = (inputText: string) => {
    if (!inputText.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: inputText }]);

    const lowerCaseInput = inputText.toLowerCase();

    const findResponse = (
      data: ChatbotDataItem[],
      input: string
    ): { text: string; followUpQuestions?: FollowUpOption[] } | null => {
      // First check direct matches in main questions
      for (const item of data) {
        if (item.question.toLowerCase() === input) {
          return {
            text: item.answer || item.question,
            followUpQuestions: item.options,
          };
        }
      }

      // Then check all nested options recursively
      const searchNestedOptions = (
        options: FollowUpOption[]
      ): ReturnType<typeof findResponse> => {
        for (const option of options) {
          // Check if current option matches
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

          // Recursively search in follow-up questions
          if (option.followUp) {
            const nestedResult = searchNestedOptions(option.followUp.options);
            if (nestedResult) return nestedResult;
          }
        }
        return null;
      };

      // Start recursive search from top-level options
      for (const item of data) {
        const result = searchNestedOptions(item.options);
        if (result) return result;
      }

      return null;
    };

    const matchedResponse = findResponse(chatbotData, lowerCaseInput);

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text:
          matchedResponse?.text || "Sorry, I don't have an answer for that.",
        followUpQuestions: matchedResponse?.followUpQuestions,
      },
    ]);
  };

  const handleBackToMenu = () => setMessages([]);

  return (
    <>
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-red-600 text-white px-3 py-[0.4rem] rounded-full shadow-lg hover:bg-red-700 transition"
      >
        Chat 💬
      </button> */}

      <div className="group fixed bottom-6 right-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-red-600 text-white px-3 py-[0.4rem] rounded-full shadow-lg 
                 hover:bg-red-700 transition-all duration-300
                 ring-0 hover:ring-8 ring-red-100/50"
        >
          Chat 💬
          {/* Animated border effect */}
          <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping-slow opacity-0 group-hover:opacity-100"></span>
        </button>

        {/* Modern tooltip */}
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
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-blue-500 text-white rounded-t-lg">
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold"
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
            {messages.length === 0 ? (
              <div className="space-y-2">
                <p className="text-gray-600 mb-2">
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

          {/* Back Button */}
          <div className="p-3 bg-white border-t">
            <button
              onClick={handleBackToMenu}
              className="w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-3 py-2"
            >
              Back to Main Menu
            </button>
          </div>

          {/* Input */}
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
              className="ml-2 px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
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
