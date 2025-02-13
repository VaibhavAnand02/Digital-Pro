import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [botTyping, setBotTyping] = useState(false);

  const welcomeMessage = "👋 Hi! I'm your digital assistant. How can I help you today?";

  const preTemplatedResponses: { [key: string]: string } = {
    "What services do you offer?": "We offer services like Ambulance, Physiotherapy, Nurse at Home, and more. How can I assist you further?",
    "How can I contact support?": "You can contact us through the chat or call our support team at 123-456-789.",
    "What are your operating hours?": "We operate 24/7, so feel free to reach out at any time!",
    "Do you have a refund policy?": "Yes, we do. Our refund policy is detailed on our website. Please check the refund section for more info."
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setIsMinimized(false);

      setBotTyping(true);
      let currentText = '';
      let index = 0;

      const typingInterval = setInterval(() => {
        if (index < welcomeMessage.length) {
          currentText += welcomeMessage[index];
          setMessages([{ text: currentText, isBot: true, timestamp: new Date() }]);
          index++;
        } else {
          clearInterval(typingInterval);
          setBotTyping(false);
        }
      }, 50);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');

    setTimeout(() => {
      setBotTyping(true);

      // Check for pre-templated answers
      const botResponseText = preTemplatedResponses[inputMessage.trim()] || "Thanks for your message! Our team will get back to you shortly.";

      setTimeout(() => {
        const botResponse: Message = {
          text: botResponseText,
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setBotTyping(false);
      }, 1000);
    }, 500);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-20 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center gap-2"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div
          className={`fixed bottom-16 right-4 bg-white shadow-lg rounded-lg border border-gray-300 z-50 flex flex-col transition-all duration-300 ${
            isMinimized ? 'w-20 h-12' : 'w-96'
          }`}
          style={{ height: isMinimized ? '100px' : '65vh' }}
        >
          <div className="flex items-center justify-between bg-blue-600 text-white p-3 rounded-t-lg">
            <span>Chat Support</span>
            <div className="flex gap-10">
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="p-3 flex-1 overflow-y-auto max-h-full" style={{ height: 'calc(100% - 100px)' }}>
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                    <div className={`p-2 rounded-lg text-white ${msg.isBot ? 'bg-gray-600' : 'bg-blue-600'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {botTyping && <div className="text-gray-500 text-sm">Bot is typing...</div>}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSendMessage} className="p-3 border-t flex items-center gap-2 text-gray-800">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 border rounded-lg p-2"
                />
                <button type="submit" className="text-blue-600 hover:text-blue-800">
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
