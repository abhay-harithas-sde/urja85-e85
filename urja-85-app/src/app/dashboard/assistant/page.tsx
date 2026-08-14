"use client";
import { useState, useRef, useEffect } from "react";
import { Mic, Send, Bot, User } from "lucide-react";

export default function PrakritiAssistant() {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: 'Namaste! I am Prakriti, your Urja-85 AI Guide. How can I assist you with E85 fuel, carbon credits, or Kisan Connect today?' }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch("/api/prakriti-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: userMessage, 
          chatHistory: messages.slice(1) // exclude initial greeting from history to save tokens
        }),
      });
      const data = await res.json();
      
      if (data.response) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting to the network right now." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto h-[80vh] flex flex-col">
      <div className="mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Bot className="text-urja-green h-8 w-8" /> Prakriti AI
        </h2>
        <p className="text-slate-400">Your intelligent voice assistant for green energy navigation.</p>
      </div>

      <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-xl">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-urja-saffron/20 text-urja-saffron' : 'bg-urja-green/20 text-urja-green'}`}>
                {msg.role === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
              </div>
              <div className={`max-w-[75%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-slate-800 text-white rounded-tr-none' : 'bg-urja-green/10 border border-urja-green/20 text-slate-200 rounded-tl-none'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-urja-green/20 text-urja-green flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div className="bg-urja-green/10 border border-urja-green/20 text-urja-green p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
                <div className="w-2 h-2 bg-urja-green rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-urja-green rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-urja-green rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 bg-slate-800 border-t border-slate-700">
          <form onSubmit={handleSend} className="flex gap-2">
            <button type="button" className="p-3 bg-slate-700 text-slate-300 rounded-xl hover:bg-slate-600 transition-colors">
              <Mic className="h-5 w-5" />
            </button>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message or use voice..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 text-white focus:outline-none focus:border-urja-green"
              disabled={loading}
            />
            <button 
              type="submit" 
              disabled={loading || !input.trim()}
              className="p-3 bg-urja-green text-urja-bg rounded-xl hover:bg-emerald-400 transition-colors disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
