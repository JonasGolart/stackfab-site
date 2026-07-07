"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, RefreshCw } from "lucide-react";

interface LogLine {
  type: "system" | "info" | "agent" | "success";
  text: string;
}

const LOG_LINES: LogLine[] = [
  { type: "system", text: "Initializing StackFab Agentic Orchestrator v1.4..." },
  { type: "system", text: "Connection active: Evolution API -> WhatsApp Gateway (Ready)" },
  { type: "info", text: "[Evolution API] Inbound Message from +55 (41) 99823-0192" },
  { type: "info", text: "Message: 'Preciso de um sistema para minha clínica. Quanto custa?'" },
  { type: "agent", text: "[Sofia Agent] Intent Analysis: 'orçamento_servico' (Confidence: 99.2%)" },
  { type: "agent", text: "[Brain Router] Routed to Gemini 2.5 Flash (Optimized for latency: 135ms)" },
  { type: "agent", text: "[Knowledge RAG] Querying vector db: 'preços_desenvolvimento'..." },
  { type: "agent", text: "[Knowledge RAG] 3 relevant snippets retrieved. Anti-hallucination engine: ACTIVE." },
  { type: "success", text: "[Sofia Agent] Draft generated and sent via WhatsApp API (200 OK)" },
  { type: "success", text: "[Sofia Agent] Log: 'Explicado modelo de Fábrica de SaaS e solicitado agendamento.'" },
  { type: "system", text: "Cron job 'Auto-Recaptura' triggered for sales follow-ups (6 records checked)" },
  { type: "info", text: "[Evolution API] Inbound Message from +55 (41) 99823-0192: 'Quero agendar'" },
  { type: "agent", text: "[CRM SDR] Direct action: Moving lead 'Clínica Exemplo' to stage: 'Agendamento'" },
  { type: "agent", text: "[CRM SDR] Auto-enriching lead from domain: 'clinicaexemplo.com.br'..." },
  { type: "success", text: "[CRM SDR] Data enriched: CNPJ, address, and socials synchronized in database." },
  { type: "system", text: "Handoff triggered by operator manual message. Agent status: paused (chatBotActive: false)" },
  { type: "system", text: "Waiting for incoming requests..." },
];

export const TerminalMock = () => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < LOG_LINES.length) {
        const line = LOG_LINES[index];
        let prefix = "";
        
        if (line.type === "system") {
          prefix = "⚙️ [SYS] ";
        } else if (line.type === "info") {
          prefix = "📥 [INB] ";
        } else if (line.type === "agent") {
          prefix = "🤖 [AGT] ";
        } else if (line.type === "success") {
          prefix = "✅ [OK]  ";
        }

        const formattedText = `${prefix}${line.text}`;
        setVisibleLines((prev) => [...prev, formattedText].slice(-8)); // Keep last 8 lines
        setIndex((prev) => prev + 1);
      } else {
        setVisibleLines([]);
        setIndex(0);
      }
    }, 1800);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-indigo-100/30 overflow-hidden">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-slate-300" />
          <div className="w-3 h-3 rounded-full bg-slate-200" />
          <div className="w-3 h-3 rounded-full bg-slate-100" />
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <Terminal size={12} className="text-indigo-500" /> Console de Orquestração
        </div>
        <div className="flex items-center gap-1">
          <RefreshCw size={11} className="text-slate-400 animate-spin" />
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 bg-slate-950 font-mono text-[11px] leading-relaxed min-h-[240px] flex flex-col justify-end">
        <div className="space-y-1.5">
          {visibleLines.map((line, i) => {
            let colorClass = "text-slate-300";
            if (line.includes("⚙️")) colorClass = "text-indigo-400 font-semibold";
            else if (line.includes("📥")) colorClass = "text-sky-300";
            else if (line.includes("🤖")) colorClass = "text-violet-400";
            else if (line.includes("✅")) colorClass = "text-emerald-400 font-medium";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={colorClass}
              >
                <span className="text-slate-600 mr-2 select-none">&gt;</span>
                {line}
              </motion.div>
            );
          })}
          
          <div className="flex items-center gap-1 text-indigo-400 font-semibold mt-1">
            <span className="text-slate-600 mr-2 select-none">&gt;</span>
            <span className="w-1.5 h-3.5 bg-indigo-400 animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Bottom Bar info */}
      <div className="flex items-center justify-between px-6 py-2.5 bg-slate-50 border-t border-slate-200 text-[10px] text-slate-400 font-semibold">
        <div className="flex items-center gap-1">
          <Shield size={12} className="text-emerald-500" /> Guardrails Ativos
        </div>
        <div>
          Hostinger SMTP Conectado
        </div>
      </div>
    </div>
  );
};
