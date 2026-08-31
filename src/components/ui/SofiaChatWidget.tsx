"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Check, Sparkles } from "lucide-react";

interface Message {
  sender: "user" | "sofia";
  text: string;
  time: string;
}

export const SofiaChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "sofia",
      text: "Olá! 👋 Sou a Sofia, Agente de IA da StackFab. Como posso ajudar seu negócio a automatizar atendimentos e ERPs hoje?",
      time: "Agora",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Inicializa ou recupera o sessionId persistente do visitante
  React.useEffect(() => {
    let currentSession = localStorage.getItem("sofia_session_id");
    if (!currentSession) {
      currentSession = `web_test_${Math.random().toString(36).substring(2, 9)}_${Date.now()}`;
      localStorage.setItem("sofia_session_id", currentSession);
    }
    setSessionId(currentSession);
  }, []);

  const quickQuestions = [
    "Quanto custa um ERP sob medida?",
    "Como funciona a IA no WhatsApp?",
    "Quero agendar uma demonstração",
  ];

  const handleSend = async (userText: string) => {
    if (!userText.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const newMsg: Message = {
      sender: "user",
      text: userText,
      time: currentTime,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setIsTyping(true);

    try {
      // Chamada à rota integrada da Sofia
      const res = await fetch("/api/sofia-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          sessionId: sessionId || `web_test_${Date.now()}`,
        }),
      });

      const data = await res.json();
      const botResponseText = data.response || "Olá! Como posso ajudar você hoje?";

      setMessages((prev) => [
        ...prev,
        {
          sender: "sofia",
          text: botResponseText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } catch (err) {
      console.error("Erro na resposta da Sofia:", err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "sofia",
          text: "Nossos engenheiros estão ajustando a conexão neste instante! Você também pode falar diretamente no nosso WhatsApp: (41) 9848-6414.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="cartoon-box rounded-2xl bg-amber-400 p-4 text-slate-950 flex items-center gap-3 cursor-pointer shadow-[4px_4px_0px_#0f172a] hover:bg-amber-300 transition-colors"
        >
          <div className="relative">
            <img 
              src="/mascot-sofia.jpg" 
              alt="Sofia Mascot" 
              className="w-10 h-10 rounded-xl border-2 border-slate-900 object-cover" 
            />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-900 animate-pulse" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-black uppercase tracking-wider text-slate-900 leading-tight">
              Fale com a Sofia
            </div>
            <div className="text-[10px] font-bold text-slate-700 flex items-center gap-1">
              <Sparkles size={10} className="text-indigo-700" /> Agente IA Online
            </div>
          </div>
        </motion.button>
      )}

      {/* Chat Window Emulation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="cartoon-box-lg rounded-2xl bg-white w-[350px] sm:w-[380px] h-[520px] flex flex-col overflow-hidden shadow-[8px_8px_0px_#0f172a]"
          >
            {/* Chat Header */}
            <div className="bg-amber-300 border-b-2.5 border-slate-900 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="/mascot-sofia.jpg" 
                  alt="Sofia" 
                  className="w-10 h-10 rounded-xl border-2 border-slate-900 object-cover shadow-[2px_2px_0px_#0f172a]" 
                />
                <div>
                  <h4 className="font-outfit font-black text-slate-950 text-sm leading-tight flex items-center gap-1.5">
                    Sofia Agent <span className="cartoon-sticker bg-emerald-400 text-[8px] py-0 px-1.5 border border-slate-900">IA</span>
                  </h4>
                  <p className="text-[10px] font-extrabold text-slate-700">Simulador de Atendimento</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg border-2 border-slate-900 bg-white hover:bg-rose-100 text-slate-900 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-stone-100 space-y-3 font-sans text-xs">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] ${
                      msg.sender === "user"
                        ? "bg-indigo-500 text-white"
                        : "bg-white text-slate-900 font-medium"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] font-bold text-slate-600 mt-1 px-1">{msg.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 bg-white border-2 border-slate-900 p-2.5 rounded-xl w-fit shadow-[2px_2px_0px_#0f172a]">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Quick Prompts */}
            <div className="px-3 py-2 bg-stone-50 border-t border-slate-200 flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="cartoon-btn text-[10px] font-bold bg-white text-slate-800 px-2.5 py-1 rounded-lg border border-slate-900 whitespace-nowrap hover:bg-amber-100"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 bg-white border-t-2 border-slate-900 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pergunte à Sofia..."
                className="flex-1 bg-stone-100 border-2 border-slate-900 rounded-xl px-3 py-2 text-xs font-bold outline-none focus:bg-amber-50"
              />
              <button
                type="submit"
                className="cartoon-btn bg-indigo-500 text-white p-2 rounded-xl border-2 border-slate-900 hover:bg-indigo-600 cursor-pointer"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
