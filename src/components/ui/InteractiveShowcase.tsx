"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import {
  MessageSquare,
  Database,
  GraduationCap,
  Send,
  Sparkles,
  CheckCircle,
  HelpCircle,
  FileQuestion,
  ArrowRight,
} from "lucide-react";

// Types for CRM Kanban
interface CRMCard {
  id: string;
  title: string;
  value: number;
  column: "leads" | "propostas" | "fechados";
  contact: string;
}

// Types for WhatsApp Sofia Simulator
interface Message {
  id: string;
  sender: "customer" | "sofia";
  text: string;
  timestamp: string;
}

export const InteractiveShowcase = () => {
  const [activeTab, setActiveTab] = useState<"sofia" | "crm" | "aprendiai">("sofia");

  // Tab 1: Sofia WhatsApp Simulator State
  const [sofiaMessages, setSofiaMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "sofia",
      text: "Olá! Sou a Sofia, assistente inteligente da clínica Fisiopilates. Como posso ajudar com sua saúde e bem-estar hoje?",
      timestamp: "19:42"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const triggerSofiaResponse = (customerText: string, replyText: string) => {
    if (isTyping) return;

    // Add customer message
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "customer",
      text: customerText,
      timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    };
    setSofiaMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate AI thinking and typing
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: Math.random().toString(),
        sender: "sofia",
        text: replyText,
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
      };
      setSofiaMessages((prev) => [...prev, botMsg]);
    }, 1200);
  };

  // Tab 2: CRM Kanban Board State
  const [crmCards, setCrmCards] = useState<CRMCard[]>([
    { id: "1", title: "Dra Alessandra Estética", value: 3200, column: "leads", contact: "Alessandra M." },
    { id: "2", title: "Fisiopilates Centro", value: 1800, column: "propostas", contact: "Marcos Souza" },
    { id: "3", title: "BrasilSul Transportes", value: 9500, column: "fechados", contact: "Ricardo A." },
    { id: "4", title: "Ondas do Conhecimento", value: 5400, column: "leads", contact: "Escola Ondas" },
    { id: "5", title: "Mecânica Ribeiro Pinhel", value: 2100, column: "propostas", contact: "Carlos R." }
  ]);

  const handleDragStart = (e: React.DragEvent, cardId: string) => {
    e.dataTransfer.setData("text/plain", cardId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetColumn: "leads" | "propostas" | "fechados") => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("text/plain");
    
    setCrmCards((prev) => 
      prev.map((card) => 
        card.id === cardId ? { ...card, column: targetColumn } : card
      )
    );
  };

  const moveCardStep = (cardId: string, nextColumn: "leads" | "propostas" | "fechados") => {
    setCrmCards((prev) => 
      prev.map((card) => 
        card.id === cardId ? { ...card, column: nextColumn } : card
      )
    );
  };

  const getPipelineTotal = (col: "leads" | "propostas" | "fechados") => {
    return crmCards
      .filter((c) => c.column === col)
      .reduce((sum, c) => sum + c.value, 0);
  };

  // Tab 3: AprendiAI Generator State
  const [subject, setSubject] = useState("programacao");
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState<{
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  } | null>(null);

  const generateAIQuiz = () => {
    setIsGeneratingQuiz(true);
    setGeneratedQuiz(null);

    setTimeout(() => {
      setIsGeneratingQuiz(false);
      if (subject === "programacao") {
        setGeneratedQuiz({
          question: "Na lógica de programação, qual é a principal utilidade de uma estrutura condicional 'if-else'?",
          options: [
            "Repetir a execução de um bloco de código indefinidamente.",
            "Desviar a execução do programa dependendo se uma condição é verdadeira ou falsa.",
            "Alocar e reservar um espaço de memória estático para uma variável.",
            "Compilar e empacotar o código para publicação em produção."
          ],
          correct: 1,
          explanation: "As estruturas condicionais direcionam o fluxo de controle com base em testes lógicos booleanos (verdadeiro ou falso)."
        });
      } else if (subject === "matematica") {
        setGeneratedQuiz({
          question: "Resolva a seguinte expressão lógica: Se (A = Verdadeiro) e (B = Falso), qual o resultado da operação (A ou B) e (não B)?",
          options: [
            "Verdadeiro",
            "Falso",
            "Indeterminado devido a falta de operandos",
            "Nulo"
          ],
          correct: 0,
          explanation: "(A ou B) resulta em Verdadeiro. (não B) resulta em Verdadeiro. A conjunção (Verdadeiro e Verdadeiro) resulta em Verdadeiro."
        });
      } else {
        setGeneratedQuiz({
          question: "No contexto de Inteligência Artificial, o que descreve o mecanismo de RAG (Retrieval-Augmented Generation)?",
          options: [
            "Treinar um modelo do zero usando bilhões de arquivos da internet pública.",
            "Limitar a geração do modelo ligando e consultando documentos locais relevantes antes de formular a resposta.",
            "Uma técnica de compactação de redes neurais para caber em dispositivos móveis.",
            "Traduzir prompts de português para inglês em tempo real."
          ],
          correct: 1,
          explanation: "O RAG enriquece o prompt consultando uma base de dados externa (vetorial) para que a IA gere respostas com base em fatos reais, reduzindo alucinações."
        });
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-[2rem] border border-slate-200 bg-white/80 backdrop-blur-md shadow-xl overflow-hidden p-6 md:p-8">
      {/* Header and Tabs */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-100 pb-6 mb-8">
        <div>
          <h3 className="text-2xl font-outfit font-extrabold text-slate-800">
            Laboratório de Demonstrações
          </h3>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Interaja diretamente com protótipos funcionais dos nossos principais produtos.
          </p>
        </div>
        
        {/* Tab Controls */}
        <div className="flex flex-wrap items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200/50 w-full md:w-auto">
          <button
            onClick={() => setActiveTab("sofia")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "sofia" 
                ? "bg-white text-indigo-600 shadow-sm border border-slate-200/40" 
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <MessageSquare size={16} /> Sofia AI
          </button>
          <button
            onClick={() => setActiveTab("crm")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "crm" 
                ? "bg-white text-indigo-600 shadow-sm border border-slate-200/40" 
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Database size={16} /> StackFab CRM
          </button>
          <button
            onClick={() => setActiveTab("aprendiai")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "aprendiai" 
                ? "bg-white text-indigo-600 shadow-sm border border-slate-200/40" 
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <GraduationCap size={16} /> AprendiAI
          </button>
        </div>
      </div>

      {/* Tabs Content */}
      <div>
        <AnimatePresence mode="wait">
          {/* TAB 1: SOFIA WHATSAPP SIMULATOR */}
          {activeTab === "sofia" && (
            <motion.div
              key="sofia"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Context Panel */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-bold text-emerald-700 uppercase tracking-wide mb-4">
                    Suporte & Vendas 24/7
                  </span>
                  <h4 className="text-xl font-outfit font-extrabold text-slate-800 mb-4">
                    Experimente falar com a Sofia
                  </h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                    A Sofia opera como um agente WhatsApp. Ela compreende regras de negócios, responde perguntas, negocia agendas no Google Calendar e atualiza o CRM automaticamente.
                  </p>
                  
                  {/* Presets buttons */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Escolha uma mensagem para enviar:</span>
                    <button
                      onClick={() => triggerSofiaResponse(
                        "Quero agendar uma aula experimental amanhã",
                        "Excelente decisão! Tenho os seguintes horários disponíveis na Fisiopilates para amanhã: 09h, 14h ou 18h. Qual funciona melhor para você?"
                      )}
                      disabled={isTyping}
                      className="w-full text-left px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors text-xs font-semibold text-slate-700 flex items-center justify-between group disabled:opacity-50 cursor-pointer"
                    >
                      <span>💬 &quot;Quero agendar uma aula experimental amanhã&quot;</span>
                      <ArrowRight size={14} className="text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <button
                      onClick={() => triggerSofiaResponse(
                        "Qual o valor da mensalidade de 2x na semana?",
                        "Nosso plano de Pilates 2x por semana fica R$ 280,00 mensais no boleto ou cartão. Se fecharmos hoje, consigo holds/remarcações gratuitas. O que acha?"
                      )}
                      disabled={isTyping}
                      className="w-full text-left px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors text-xs font-semibold text-slate-700 flex items-center justify-between group disabled:opacity-50 cursor-pointer"
                    >
                      <span>💬 &quot;Qual o valor da mensalidade de 2x na semana?&quot;</span>
                      <ArrowRight size={14} className="text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <button
                      onClick={() => triggerSofiaResponse(
                        "Falar com atendente humano",
                        "Sem problemas! Estou transferindo esta conversa para a equipe de atendimento humano e pausei minhas respostas temporariamente. Em instantes eles falarão com você!"
                      )}
                      disabled={isTyping}
                      className="w-full text-left px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors text-xs font-semibold text-slate-700 flex items-center justify-between group disabled:opacity-50 cursor-pointer"
                    >
                      <span>💬 &quot;Falar com atendente humano&quot;</span>
                      <ArrowRight size={14} className="text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Integrações: Evolution API + RAG Vector Database</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Interface Mockup */}
              <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50 shadow-inner flex flex-col justify-between overflow-hidden h-[450px]">
                {/* WA Header */}
                <div className="bg-white px-5 py-3 border-b border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-tech flex items-center justify-center font-bold text-white text-sm shadow-sm select-none">
                        SF
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                    </div>
                    <div>
                      <h5 className="font-outfit font-extrabold text-sm text-slate-800">Sofia | Fisiopilates</h5>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Assistente Virtual StackFab</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full">
                    Atendimento IA
                  </span>
                </div>

                {/* WA Messages Area */}
                <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-[#efeae2]">
                  {sofiaMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col max-w-[80%] ${
                        msg.sender === "customer" ? "ml-auto items-end" : "mr-auto items-start"
                      }`}
                    >
                      <div
                        className={`px-4 py-2.5 rounded-2xl shadow-sm text-sm ${
                          msg.sender === "customer"
                            ? "bg-emerald-500 text-white rounded-tr-none"
                            : "bg-white text-slate-800 rounded-tl-none"
                        }`}
                      >
                        <p className="leading-relaxed font-medium break-words">{msg.text}</p>
                        <span
                          className={`text-[9px] block mt-1 text-right font-medium ${
                            msg.sender === "customer" ? "text-emerald-100" : "text-slate-400"
                          }`}
                        >
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex flex-col mr-auto max-w-[80%] items-start">
                      <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  )}
                </div>

                {/* WA Input */}
                <div className="bg-slate-100 p-3 border-t border-slate-200/80 flex items-center gap-2">
                  <input
                    type="text"
                    disabled
                    placeholder="Selecione um preset de teste ao lado..."
                    className="flex-grow bg-white border border-slate-200 rounded-full px-4 py-2 text-xs outline-none text-slate-400 font-medium"
                  />
                  <button disabled className="p-2.5 rounded-full bg-slate-200 text-slate-400">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: CRM KANBAN BOARD */}
          {activeTab === "crm" && (
            <motion.div
              key="crm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Context Block */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-indigo-50/50 border border-indigo-100 rounded-2xl p-5">
                <div className="max-w-2xl">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-bold text-indigo-700 uppercase tracking-wide mb-2">
                    Visualização Kanban
                  </span>
                  <h4 className="text-lg font-outfit font-extrabold text-slate-800">
                    Arrastar e Soltar: Pipeline Comercial Ativo
                  </h4>
                  <p className="text-slate-500 text-sm font-medium mt-1 leading-relaxed">
                    Arraste os cartões de negócios entre as colunas ou clique nos botões de avanço para ver o recálculo automático do valor total do pipeline.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-center shadow-sm">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">Negócios Totais</span>
                    <span className="text-lg font-outfit font-black text-indigo-600">
                      R$ {crmCards.reduce((sum, c) => sum + c.value, 0).toLocaleString("pt-BR")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Kanban columns Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Column 1: Leads */}
                <div
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "leads")}
                  className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 flex flex-col min-h-[300px] shadow-inner"
                >
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200/50">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Leads Qualificados</span>
                    <span className="text-xs font-bold text-slate-400 bg-slate-200/50 px-2 py-0.5 rounded">
                      R$ {getPipelineTotal("leads").toLocaleString("pt-BR")}
                    </span>
                  </div>

                  <div className="space-y-3 flex-grow">
                    {crmCards.filter((c) => c.column === "leads").map((card) => (
                      <div
                        key={card.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, card.id)}
                        className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing transition-shadow group relative"
                      >
                        <h5 className="font-outfit font-extrabold text-xs text-slate-800 mb-1">{card.title}</h5>
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Contato: {card.contact}</p>
                        <div className="flex items-center justify-between border-t border-slate-50 pt-2">
                          <span className="text-xs font-bold text-indigo-600">R$ {card.value.toLocaleString("pt-BR")}</span>
                          <button
                            onClick={() => moveCardStep(card.id, "propostas")}
                            className="p-1 rounded bg-slate-50 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-200 text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
                            title="Mover para Propostas"
                          >
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Propostas */}
                <div
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "propostas")}
                  className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 flex flex-col min-h-[300px] shadow-inner"
                >
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200/50">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Propostas Enviadas</span>
                    <span className="text-xs font-bold text-indigo-500 bg-indigo-50/50 px-2 py-0.5 rounded">
                      R$ {getPipelineTotal("propostas").toLocaleString("pt-BR")}
                    </span>
                  </div>

                  <div className="space-y-3 flex-grow">
                    {crmCards.filter((c) => c.column === "propostas").map((card) => (
                      <div
                        key={card.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, card.id)}
                        className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing transition-shadow group relative"
                      >
                        <h5 className="font-outfit font-extrabold text-xs text-slate-800 mb-1">{card.title}</h5>
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Contato: {card.contact}</p>
                        <div className="flex items-center justify-between border-t border-slate-50 pt-2">
                          <span className="text-xs font-bold text-indigo-600">R$ {card.value.toLocaleString("pt-BR")}</span>
                          <button
                            onClick={() => moveCardStep(card.id, "fechados")}
                            className="p-1 rounded bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer"
                            title="Mover para Fechados"
                          >
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3: Fechados */}
                <div
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "fechados")}
                  className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 flex flex-col min-h-[300px] shadow-inner"
                >
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200/50">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-semibold">Ganhos (Fechado)</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      R$ {getPipelineTotal("fechados").toLocaleString("pt-BR")}
                    </span>
                  </div>

                  <div className="space-y-3 flex-grow">
                    {crmCards.filter((c) => c.column === "fechados").map((card) => (
                      <div
                        key={card.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, card.id)}
                        className="bg-white border border-emerald-100 rounded-xl p-4 shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing transition-shadow group relative"
                      >
                        <div className="absolute top-4 right-4 text-emerald-500">
                          <CheckCircle size={14} />
                        </div>
                        <h5 className="font-outfit font-extrabold text-xs text-slate-800 mb-1">{card.title}</h5>
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Contato: {card.contact}</p>
                        <div className="flex items-center justify-between border-t border-slate-50 pt-2">
                          <span className="text-xs font-bold text-emerald-600">R$ {card.value.toLocaleString("pt-BR")}</span>
                          <span className="text-[9px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded">Ganho</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: APRENDIAI PEDAGOGICAL GENERATOR */}
          {activeTab === "aprendiai" && (
            <motion.div
              key="aprendiai"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Controls Block */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-violet-50 border border-violet-100 text-[10px] font-bold text-violet-700 uppercase tracking-wide mb-4">
                    Orquestrador Pedagógico
                  </span>
                  <h4 className="text-xl font-outfit font-extrabold text-slate-800 mb-4">
                    Gerador de Questões Avaliativas com IA
                  </h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                    Selecione uma matéria e clique no botão para simular o motor do AprendiAI gerando questões avaliativas precisas com base em padrões de ensino.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Matéria de Estudo</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl px-4 py-3 outline-none text-slate-700 text-xs font-semibold cursor-pointer"
                      >
                        <option value="programacao">Lógica de Programação Básica</option>
                        <option value="matematica">Raciocínio Lógico-Matemático</option>
                        <option value="ia_rag">Arquiteturas de IA e RAG</option>
                      </select>
                    </div>

                    <Button
                      onClick={generateAIQuiz}
                      disabled={isGeneratingQuiz}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <Sparkles size={16} />
                      {isGeneratingQuiz ? "Estruturando Questão..." : "Gerar Questão IA"}
                    </Button>
                  </div>
                </div>

                <div className="mt-4 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-2.5">
                    <FileQuestion size={16} className="text-violet-500" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Padrões Pedagógicos Customizáveis</span>
                  </div>
                </div>
              </div>

              {/* Generator Result Preview Panel */}
              <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-center min-h-[350px]">
                <AnimatePresence mode="wait">
                  {isGeneratingQuiz && (
                    <motion.div
                      key="generating"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center space-y-3"
                    >
                      <div className="w-10 h-10 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto" />
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Acessando Roteador de Modelos StackFab...</p>
                    </motion.div>
                  )}

                  {!isGeneratingQuiz && !generatedQuiz && (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center space-y-3"
                    >
                      <HelpCircle size={48} className="text-slate-300 mx-auto" />
                      <p className="text-sm font-semibold text-slate-400">Nenhuma questão gerada.</p>
                      <p className="text-xs text-slate-400 max-w-xs mx-auto">Selecione o tema na lateral e clique em &quot;Gerar Questão IA&quot; para iniciar a orquestração.</p>
                    </motion.div>
                  )}

                  {!isGeneratingQuiz && generatedQuiz && (
                    <motion.div
                      key="quiz"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-5 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600 bg-violet-50 border border-violet-100 px-2.5 py-0.5 rounded-full">
                          Questão Gerada
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">Dificuldade: Média</span>
                      </div>

                      <h5 className="font-outfit font-extrabold text-sm text-slate-800 leading-relaxed">
                        {generatedQuiz.question}
                      </h5>

                      <div className="space-y-2">
                        {generatedQuiz.options.map((opt, i) => (
                          <div
                            key={i}
                            className={`p-3 rounded-xl border text-xs font-medium flex items-start gap-2.5 leading-relaxed ${
                              i === generatedQuiz.correct
                                ? "bg-emerald-50/50 border-emerald-200 text-emerald-800"
                                : "bg-slate-50 border-slate-200/80 text-slate-600"
                            }`}
                          >
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              i === generatedQuiz.correct
                                ? "bg-emerald-500 text-white"
                                : "bg-slate-200 text-slate-500"
                            }`}>
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span className="flex-grow">{opt}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-slate-100 pt-4 mt-2">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Explicação / Feedback da IA:</p>
                        <p className="text-xs text-slate-500 italic leading-relaxed">{generatedQuiz.explanation}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
