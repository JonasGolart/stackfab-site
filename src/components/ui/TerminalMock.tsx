"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, RefreshCw, Sparkles } from "lucide-react";

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
  { type: "agent", text: "[Brain Router] Routed to Gemini Flash (Optimized for latency: 135ms)" },
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
        setVisibleLines((prev) => [...prev, formattedText].slice(-8));
        setIndex((prev) => prev + 1);
      } else {
        setVisibleLines([]);
        setIndex(0);
      }
    }, 1800);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl border-3 border-slate-900 shadow-[6px_6px_0px_#0f172a] bg-slate-950 overflow-hidden">
      {/* Header Bar Retro */}
      <div className="flex items-center justify-between px-4 py-3 bg-amber-300 border-b-3 border-slate-900">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-rose-500 border-1.5 border-slate-900" />
          <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border-1.5 border-slate-900" />
          <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-1.5 border-slate-900" />
        </div>
        <div className="flex items-center gap-1.5 text-xs font-black text-slate-900 uppercase tracking-widest">
          <Terminal size={14} className="text-slate-900 stroke-[3]" /> Console de Orquestração IA
        </div>
        <div className="flex items-center gap-1">
          <span className="cartoon-sticker bg-white text-slate-900 text-[9px] py-0.5 px-2">
            Live Stream
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 bg-slate-950 font-mono text-[12px] leading-relaxed min-h-[250px] flex flex-col justify-end">
        <div className="space-y-1.5">
          {visibleLines.map((line, i) => {
            let colorClass = "text-slate-300";
            if (line.includes("⚙️")) colorClass = "text-amber-300 font-bold";
            else if (line.includes("📥")) colorClass = "text-sky-300";
            else if (line.includes("🤖")) colorClass = "text-purple-300 font-bold";
            else if (line.includes("✅")) colorClass = "text-emerald-400 font-bold";

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
          
          <div className="flex items-center gap-1 text-emerald-400 font-bold mt-1">
            <span className="text-slate-600 mr-2 select-none">&gt;</span>
            <span className="w-2 h-4 bg-emerald-400 animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="flex items-center justify-between px-6 py-2.5 bg-slate-900 border-t-2 border-slate-800 text-[11px] text-slate-400 font-bold">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <Shield size={13} /> Guardrails Anti-Alucinação Ativos
        </div>
        <div className="text-stone-300 font-mono text-[10px]">
          Latency ~120ms • Docker Multi-Host
        </div>
      </div>
    </div>
  );
};

