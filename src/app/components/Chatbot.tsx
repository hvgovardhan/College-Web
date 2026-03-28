import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const suggestedQuestions = [
  "What programs do you offer?",
  "How do I apply?",
  "What are the admission requirements?",
  "Tell me about campus life",
];

const botResponses: Record<string, string> = {
  "programs": "We offer B.E., M.Tech, and Ph.D programs across CSE, ECE, Mechanical, Civil, ISE, and Electrical Engineering. Visit our Academics page for details.",
  "apply": "You can apply through our Admissions page. Submit your documents, entrance exam scores, and complete the online application form.",
  "requirements": "Admission requirements vary by program. Generally you need qualifying exam scores (CET/COMED-K), academic transcripts, and a valid ID.",
  "campus": "RNSIT campus offers modern labs, a library, sports complex, hostels, cafeteria, and 100+ student clubs. Check our Campus Life section!",
  "default": "Thank you for your question! For detailed information, please contact our admissions office at admissions@rnsit.ac.in or call +91 80 2860 7999.",
};

// Particle spark component
function Spark({ angle, delay }: { angle: number; delay: number }) {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
      style={{ top: '50%', left: '50%', originX: '50%', originY: '50%' }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{
        x: Math.cos((angle * Math.PI) / 180) * 40,
        y: Math.sin((angle * Math.PI) / 180) * 40,
        opacity: 0,
        scale: 0,
      }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    />
  );
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "👋 Hello! I'm the RNSIT Assistant. How can I help you today?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [sparks, setSparks] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [pulse, setPulse] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const btnControls = useAnimation();

  // Stop idle pulse after first open
  useEffect(() => {
    if (isOpen) setPulse(false);
  }, [isOpen]);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleToggle = async () => {
    // Trigger spark burst
    setSparks(true);
    setTimeout(() => setSparks(false), 700);

    // Button bounce
    await btnControls.start({
      scale: [1, 1.3, 0.85, 1.1, 1],
      rotate: isOpen ? [0, -15, 15, 0] : [0, 15, -15, 0],
      transition: { duration: 0.45, ease: 'easeInOut' },
    });

    setIsOpen(prev => !prev);
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { text, isBot: false }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let response = botResponses.default;
      const lower = text.toLowerCase();
      if (lower.includes('program') || lower.includes('course')) response = botResponses.programs;
      else if (lower.includes('apply') || lower.includes('application')) response = botResponses.apply;
      else if (lower.includes('requirement') || lower.includes('eligib')) response = botResponses.requirements;
      else if (lower.includes('campus') || lower.includes('life') || lower.includes('club')) response = botResponses.campus;
      setIsTyping(false);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 900);
  };

  const sparkAngles = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92, originX: 1, originY: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="fixed bottom-24 right-4 w-80 sm:w-96 bg-white dark:bg-[#0f1e35] rounded-3xl shadow-2xl shadow-blue-500/20 border border-blue-100 dark:border-blue-900/40 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="flex items-center gap-3 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30"
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-white font-bold text-sm">RNSIT Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="w-1.5 h-1.5 bg-green-400 rounded-full"
                    />
                    <p className="text-white/70 text-xs">Online · Ready to help</p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleToggle}
                className="w-8 h-8 bg-white/15 hover:bg-white/25 rounded-xl flex items-center justify-center transition relative z-10"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-blue-50/30 dark:from-blue-950/10 to-transparent">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {msg.isBot && (
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.isBot
                      ? 'bg-white dark:bg-[#1a2f50] text-gray-800 dark:text-gray-200 shadow-sm border border-blue-100 dark:border-blue-900/30 rounded-tl-sm'
                      : 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-tr-sm shadow-md shadow-blue-500/20'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-white dark:bg-[#1a2f50] border border-blue-100 dark:border-blue-900/30 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 shadow-sm">
                      {[0, 0.2, 0.4].map((d, i) => (
                        <motion.div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                          animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: d }} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Suggested questions */}
              {messages.length === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-1.5">
                  <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider px-1">Quick questions</p>
                  {suggestedQuestions.map((q, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.08 }}
                      onClick={() => handleSend(q)}
                      className="block w-full text-left px-3 py-2 text-xs bg-white dark:bg-[#1a2f50] hover:bg-blue-50 dark:hover:bg-blue-950/50 border border-blue-100 dark:border-blue-900/30 rounded-xl text-gray-700 dark:text-gray-300 transition-all hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                      {q}
                    </motion.button>
                  ))}
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-blue-100 dark:border-blue-900/30 bg-white dark:bg-[#0f1e35]">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }} className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 rounded-xl text-sm border-blue-100 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-950/20 focus:ring-blue-500"
                />
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.88 }}
                  className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/30 hover:opacity-90 transition flex-shrink-0"
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 z-50">
        {/* Idle pulse rings */}
        {pulse && !isOpen && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500"
              animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-400"
              animate={{ scale: [1, 2.2], opacity: [0.3, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, delay: 0.4, ease: 'easeOut' }}
            />
          </>
        )}

        {/* Spark particles on click */}
        {sparks && sparkAngles.map((angle, i) => (
          <Spark key={i} angle={angle} delay={i * 0.03} />
        ))}

        {/* Main button */}
        <motion.button
          animate={btnControls}
          onClick={handleToggle}
          whileHover={{ scale: 1.12 }}
          className="relative w-14 h-14 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 text-white rounded-full shadow-xl shadow-blue-500/40 flex items-center justify-center overflow-hidden"
        >
          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', repeatDelay: 1 }}
          />
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
