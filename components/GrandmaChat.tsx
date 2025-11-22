import React, { useState, useRef, useEffect } from 'react';
    import { MessageSquare, X, Send, Cpu, Sparkles, Bot } from 'lucide-react';
    import { sendMessageToGrandma } from '../services/geminiService';
    import { ChatMessage } from '../types';
    
    const GrandmaChat: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: 'Система инициализирована. Привет, юзер! Бабушка Нина на связи. Нужна консультация по патчам (грядкам)?' }
      ]);
      const [input, setInput] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const messagesEndRef = useRef<HTMLDivElement>(null);
    
      const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      };
    
      useEffect(() => {
        scrollToBottom();
      }, [messages, isOpen]);
    
      const handleSend = async () => {
        if (!input.trim() || isLoading) return;
    
        const userMessage: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
    
        const responseText = await sendMessageToGrandma(input);
        
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
        setIsLoading(false);
      };
    
      return (
        <>
          {/* Floating Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl shadow-tomato-900/50 transition-all duration-300 hover:scale-110 flex items-center gap-2 border border-white/10 ${isOpen ? 'bg-dark-800 rotate-90 opacity-0 pointer-events-none' : 'bg-tomato-600 text-white animate-bounce-gentle'}`}
          >
            <Bot size={28} />
            <span className="font-mono font-bold hidden md:block text-sm">ЧАТ С БАБУШКОЙ</span>
          </button>
    
          {/* Chat Window */}
          <div className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] bg-dark-900/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-500 origin-bottom-right border border-gray-700 ${isOpen ? 'scale-100 opacity-100 h-[600px]' : 'scale-0 opacity-0 h-0'}`}>
            
            {/* Header */}
            <div className="bg-gradient-to-r from-dark-800 to-dark-900 p-4 flex justify-between items-center border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-tomato-600/20 flex items-center justify-center border border-tomato-600/50">
                   <Cpu size={20} className="text-tomato-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-mono text-sm">Бабушка_AI v2.5</h3>
                  <div className="flex items-center gap-1 text-green-400 text-[10px] font-mono">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    В СЕТИ
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
    
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed font-mono ${
                    msg.role === 'user' 
                      ? 'bg-tomato-600 text-white rounded-tr-none' 
                      : 'bg-dark-800 text-gray-200 border border-gray-700 rounded-tl-none'
                  }`}>
                    {msg.role === 'model' && <div className="text-[10px] text-tomato-500 mb-1 opacity-70">&gt; ОТВЕТ СИСТЕМЫ:</div>}
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-dark-800 p-3 rounded-xl rounded-tl-none border border-gray-700 flex items-center gap-2">
                    <Sparkles size={14} className="text-tomato-500 animate-spin" />
                    <span className="text-xs text-gray-400 font-mono">Обработка запроса...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
    
            {/* Input Area */}
            <div className="p-4 bg-dark-900 border-t border-gray-800">
              <div className="flex gap-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Введите вопрос..."
                  className="flex-1 bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white font-mono focus:ring-1 focus:ring-tomato-500 outline-none transition-all placeholder-gray-600"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-white text-black p-3 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[9px] text-gray-600 font-mono uppercase tracking-widest">Powered by Google Gemini Model</span>
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default GrandmaChat;