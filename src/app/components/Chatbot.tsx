import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const suggestedQuestions = [
  "What programs do you offer?",
  "How do I apply?",
  "What are the admission requirements?",
  "Tell me about campus life",
];

const botResponses: Record<string, string> = {
  "programs": "We offer undergraduate, postgraduate, and doctoral programs across Engineering, Business, Arts, Sciences, and more. Visit our Academics page for details.",
  "apply": "You can apply through our Admissions page. The application process includes submitting your documents, entrance exam scores, and an online application form.",
  "requirements": "Admission requirements vary by program. Generally, you need qualifying exam scores, academic transcripts, recommendation letters, and a statement of purpose.",
  "campus": "Our campus offers state-of-the-art facilities, diverse clubs, sports complexes, modern hostels, and a vibrant student community. Check our Campus Life section!",
  "default": "Thank you for your question! For detailed information, please visit our website or contact our admissions office at admissions@rnsit.ac.in",
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! How can I help you today?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { text, isBot: false }]);
    setInputValue('');

    // Simple keyword matching for bot response
    setTimeout(() => {
      let response = botResponses.default;
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('program') || lowerText.includes('course')) {
        response = botResponses.programs;
      } else if (lowerText.includes('apply') || lowerText.includes('application')) {
        response = botResponses.apply;
      } else if (lowerText.includes('requirement') || lowerText.includes('eligib')) {
        response = botResponses.requirements;
      } else if (lowerText.includes('campus') || lowerText.includes('life') || lowerText.includes('club')) {
        response = botResponses.campus;
      }

      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">University Assistant</h3>
                  <p className="text-blue-100 text-xs">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700 rounded-full"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.isBot
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Suggested questions:</p>
                  {suggestedQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(question)}
                      className="block w-full text-left p-2 text-sm bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-300 transition"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:shadow-xl transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </>
  );
}
