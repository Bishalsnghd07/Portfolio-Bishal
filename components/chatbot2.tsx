"use client";
import { useState } from "react";
import { X } from "lucide-react"; // or any close icon
import { motion } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // const res = await fetch("/api/chat", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ messages: [...messages, userMessage] }),
    // });

    // if (!res.ok) {
    //   const errorMsg = `API error: ${res.status}`;
    //   console.error(errorMsg);
    //   setMessages((prev) => [
    //     ...prev,
    //     { role: "assistant", content: "Oops! Something went wrong. 🤖" },
    //   ]);
    //   return;
    // }

    // const data = await res.json();
    // const botMessage = { role: "assistant", content: data.reply };
    // setMessages((prev) => [...prev, botMessage]);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!res.ok) throw new Error(`API error: ${res.status}`);

      const data = await res.json();
      const botMessage = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Oops! Something went wrong. 🤖" },
      ]);
    }
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition"
      >
        Chat 💬
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <motion.div
          className="fixed bottom-20 right-6 w-80 h-[450px] bg-white border shadow-xl rounded-lg flex flex-col z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-center p-3 border-b">
            <h2 className="font-semibold">Ask Me Anything</h2>
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md ${
                  msg.role === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex items-center gap-2">
            <input
              className="flex-1 border px-2 py-1 rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about my work..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
