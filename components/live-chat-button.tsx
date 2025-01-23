"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Edit2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot" | "error";
  isEditing?: boolean;
}

export function LiveChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: "Hello! I'm IVBS, the chatbot for In Vivo Business Solutions. How can I assist you today?",
            sender: "bot",
          },
        ]);
        setIsTyping(false);
      }, 1500);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const newMessage: Message = { id: Date.now(), text: inputMessage, sender: "user" };
      setMessages((prev) => [...prev, newMessage]);
      setInputMessage("");
      setIsTyping(true);
      setError(null);

      try {
        const history = messages.map((msg) => ({
          role: msg.sender === "user" ? "user" : "model",
          parts: msg.text,
        }));

        const response = await fetch("/api/route", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: inputMessage, history }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Oops, we haven't got JSON!");
        }

        const data = await response.json();

        const botResponse: Message = {
          id: Date.now() + 1,
          text: data.response,
          sender: "bot",
        };
        setMessages((prev) => [...prev, botResponse]);
      } catch (error: unknown) {
        console.error("Error:", error);
        let errorMessage = "An unknown error occurred. Please try again later.";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        setError(errorMessage);
        const errorResponse: Message = {
          id: Date.now() + 1,
          text: `Error: ${errorMessage}`,
          sender: "error",
        };
        setMessages((prev) => [...prev, errorResponse]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const handleEditMessage = (id: number) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, isEditing: true } : msg))
    );
  };

  const handleSaveEdit = (id: number, newText: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, text: newText, isEditing: false } : msg))
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="bg-card text-card-foreground rounded-lg shadow-lg p-4 mb-4 w-80 h-[70vh] flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Chat with IVBS</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="flex-grow overflow-y-auto mb-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {message.isEditing ? (
                    <div className="flex items-center">
                      <Textarea
                        defaultValue={message.text}
                        className="flex-grow mr-2"
                        onBlur={(e) => handleSaveEdit(message.id, e.target.value)}
                      />
                      <Button
                        size="sm"
                        onClick={() => handleSaveEdit(message.id, message.text)}
                      >
                        Save
                      </Button>
                    </div>
                  ) : (
                    <div className="group relative">
                      <span
                        className={`inline-block p-2 rounded-lg ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : message.sender === "error"
                            ? "bg-destructive text-destructive-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {message.text}
                      </span>
                      {message.sender === "bot" && (
                        <button
                          onClick={() => handleEditMessage(message.id)}
                          className="absolute top-0 right-0 p-1 bg-background rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="text-left">
                  <span className="inline-block p-2 rounded-lg bg-muted">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.5,
                        repeatType: "reverse",
                      }}
                    >
                      ...
                    </motion.span>
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-grow mr-2"
              />
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        size="lg"
        className="rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="h-6 w-6 mr-2" />
        Chat with IVBS
      </Button>
    </div>
  );
}
