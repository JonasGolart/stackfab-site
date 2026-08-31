"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Cpu,
  Database,
  GraduationCap,
  MessageSquare,
  Sparkles,
  Workflow,
  CheckCircle2,
  XCircle,
  Zap,
  ArrowRight,
  Flame,
  ShieldCheck,
  Code2,
  Server,
  Layers,
  Wrench,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { TerminalMock } from "@/components/ui/TerminalMock";
import { SofiaChatWidget } from "@/components/ui/SofiaChatWidget";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"todos" | "erp-gestao" | "ia-edu">("todos");

  const categories = [
    { id: "todos", name: "Todos os Produtos", color: "bg-indigo-400" },
    { id: "erp-gestao", name: "Gestão & ERPs", color: "bg-emerald-400" },
    { id: "ia-edu", name: "IA & Educação", color: "bg-amber-400" },
  ];

  const products = [
    {
      title: "Sofia",
      slogan: "Secretariado Conversacional",
      description: "Assistente virtual de IA com RAG no Redis Stack, histórico persistente de conversas, roteamento inteligente e agendamento automático de compromissos via Google Calendar.",
      icon: <MessageSquare size={22} />,
      image: "/mascot-sofia.jpg",
      color: "indigo",
      badge: "IA & Automação",
      techStack: ["Python", "Redis Stack", "Google Calendar API", "WhatsApp/Telegram"],
      category: "ia-edu",
      link: "https://sofias.stackfab.com.br",
    },
    {
      title: "Linux Lab",
      slogan: "PRCbook Vivo v2.0",
      description: "Containers Linux reais, seguros e interativos diretamente no navegador para alunos de 12 a 16 anos, dispensando qualquer instalação de emuladores ou softwares locais.",
      icon: <Cpu size={22} />,
      image: "/mascot-linuxlab.jpg",
      color: "sky",
      badge: "Infra & Educação",
      techStack: ["Docker", "Python/FastAPI", "React", "Linux Containers"],
      category: "ia-edu",
      link: "https://linuxlab.stackfab.com.br",
    },
    {
      title: "AprendiAI",
      slogan: "LMS com IA Adaptativa",
      description: "Plataforma avançada de gestão de aprendizagem (LMS) que usa Inteligência Artificial para gerar questões, corrigir discursivas e criar rotas de recuperação personalizadas.",
      icon: <GraduationCap size={22} />,
      image: "/mascot-aprendiai.jpg",
      color: "amber",
      badge: "LMS Adaptativo",
      techStack: ["Next.js", "Tailwind CSS", "Shadcn UI", "LLMs"],
      category: "ia-edu",
      link: "https://aprendiai.info",
    },
    {
      title: "StackFab CRM",
      slogan: "Sales Ops & WhatsApp",
      description: "CRM comercial corporativo com pipeline Kanban, gestão unificada de contatos, campanhas em massa, disparador WhatsApp e copiloto inteligente de atendimento.",
      icon: <Database size={22} />,
      image: "/mascot-crm.jpg",
      color: "emerald",
      badge: "Vendas & Ops",
      techStack: ["Next.js", "Prisma ORM", "WAHA API", "PostgreSQL"],
      category: "erp-gestao",
      link: "https://crm.stackfab.com.br",
    },
    {
      title: "ERP Oficinas",
      slogan: "Multi-Tenant Automotivo",
      description: "Plataforma de gestão SaaS para oficinas mecânicas e funilarias, englobando controle de fluxo de agendamento, ordens de serviço e faturamento automatizado.",
      icon: <Database size={22} />,
      color: "rose",
      badge: "ERP SaaS",
      techStack: ["FastAPI", "Next.js", "Celery Workers", "PostgreSQL"],
      category: "erp-gestao",
    },
    {
      title: "FisioPilates",
      slogan: "Gestão de Pilates",
      description: "Plataforma focada no controle de estúdios de Pilates e fisioterapia, englobando agendamento dinâmico de turmas, fichas de acompanhamento físico e cobrança recorrente.",
      icon: <Activity size={22} />,
      color: "emerald",
      badge: "Fitness",
      techStack: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      category: "erp-gestao",
    },
    {
      title: "Questionário Online",
      slogan: "Avaliações UTFPR",
      description: "Plataforma oficial de questionários acadêmicos desenvolvida em cooperação técnica, com geração de tokens seguros de acesso e relatórios automatizados de feedback.",
      icon: <GraduationCap size={22} />,
      color: "violet",
      badge: "Educação",
      techStack: ["Node.js", "Express", "PostgreSQL", "Resend API"],
      category: "ia-edu",
      link: "https://quest.stackfab.com.br",
    },
    {
      title: "Ondas do Conhecimento",
      slogan: "Extensão & Rádio",
      description: "Portal voltado a disseminar o radioamadorismo e a cultura científica para grupos de escotismo do Paraná, em convênio com a UTFPR e a ARPA-PR.",
      icon: <Workflow size={22} />,
      color: "amber",
      badge: "Extensão Social",
      techStack: ["HTML5", "Node.js", "Express", "PostgreSQL", "JWT"],
      category: "ia-edu",
      link: "https://ondas.stackfab.com.br",
    }
  ];

  const onDemandServices = [
    {
      title: "Fábrica de Micro-SaaS & ERPs",
      tag: "Desenvolvimento Sob Medida",
      badgeBg: "bg-indigo-300",
      description: "Construímos sistemas corporativos nichados completos com arquitetura multi-tenant, painéis Kanban, relatórios em PDF e integração bancária.",
      icon: <Code2 size={24} className="text-slate-900" />,
      features: ["Next.js / React / FastAPI", "PostgreSQL & Prisma", "Painéis Responsivos"],
    },
    {
      title: "Agentes de WhatsApp & Automações",
      tag: "Inteligência Conversacional",
      badgeBg: "bg-emerald-300",
      description: "Integração do motor de IA da Sofia ao seu WhatsApp comercial (WAHA) com busca RAG no Redis e sincronização em tempo real no seu CRM.",
      icon: <Layers size={24} className="text-slate-900" />,
      features: ["Agendamento no Google Calendar", "Anti-Alucinação Guardrails", "Atendimento 24/7"],
    },
    {
      title: "Infraestrutura Self-Hosted & Docker",
      tag: "Economia & Soberania de Dados",
      badgeBg: "bg-amber-300",
      description: "Configuração de servidores dedicados com Coolify, Docker Swarm, backups automatizados e SSL Cloudflare, eliminando custos abusivos de nuvem.",
      icon: <Server size={24} className="text-slate-900" />,
      features: ["Deploy Contínuo Git", "Zero Lock-in de Nuvem", "Redução de até 70% em custos"],
    },
  ];

  const challenges = [
    {
      type: "problem",
      tag: "O Problema",
      badgeColor: "bg-rose-400 text-slate-950",
      title: "Chatbots com menus que ninguém aguenta?",
      description: "Robôs antigos que só respondem 'Digite 1 para suporte'. Se o cliente mandar um áudio ou mudar de assunto, o fluxo quebra e o cliente desiste.",
    },
    {
      type: "solution",
      tag: "Super Solução",
      badgeColor: "bg-emerald-400 text-slate-950",
      title: "Agentes de IA que Agem no Mundo Real",
      description: "Agentes que conversam naturalmente pelo WhatsApp, analisam o histórico, verificam horários na sua agenda do Google e fecham negócios sozinhos.",
    },
    {
      type: "problem",
      tag: "O Problema",
      badgeColor: "bg-rose-400 text-slate-950",
      title: "Planilhas soltas e retrabalho manual diário?",
      description: "Vendedores preenchendo cadastros na mão, pedidos perdidos em mensagens de WhatsApp e sistemas que não se comunicam.",
    },
    {
      type: "solution",
      tag: "Super Solução",
      badgeColor: "bg-emerald-400 text-slate-950",
      title: "Infraestrutura Integrada & Autônoma",
      description: "Sistemas ERPs sob medida e automações de segundo plano conectadas a bancos de dados ultrarrápidos, operando 24 horas por dia.",
    },
  ];

  const pillars = [
    {
      title: "Web Apps de Alta Precisão",
      description: "Interfaces com resposta instantânea, arquitetura limpa em React/Next.js/FastAPI e taxas de conversão recordes.",
      sticker: "Velocidade Máxima",
      stickerBg: "bg-amber-300",
      icon: <Cpu size={24} className="text-slate-900" />,
    },
    {
      title: "Engenharia Agêntica de IA",
      description: "Agentes autônomos integrados a modelos de ponta que triam leads, agendam reuniões e emitem ordens automaticamente.",
      sticker: "IA de Ponta",
      stickerBg: "bg-purple-300",
      icon: <Sparkles size={24} className="text-slate-900" />,
    },
    {
      title: "Infraestrutura Self-Hosted",
      description: "Diga adeus a faturas abusivas de nuvem. Servidores dedicados com Docker e Coolify com 100% de controle sobre seus dados.",
      sticker: "Zero Lock-In",
      stickerBg: "bg-emerald-300",
      icon: <ShieldCheck size={24} className="text-slate-900" />,
    },
  ];

  const navLinks = [
    { name: "Soluções", href: "#solucoes" },
    { name: "Serviços", href: "#servicos" },
    { name: "Produtos", href: "#produtos" },
    { name: "Infraestrutura", href: "#infraestrutura" },
    { name: "Agentes", href: "#agentes" },
  ];

  const footerLinks = [
    { label: "stackfab.com.br", href: "https://stackfab.com.br" },
    { label: "sofias.stackfab.com.br", href: "https://sofias.stackfab.com.br" },
    { label: "quest.stackfab.com.br", href: "https://quest.stackfab.com.br" },
    { label: "aprendiai.info", href: "https://aprendiai.info" },
  ];

  const filteredProducts = products.filter(
    (product) => activeCategory === "todos" || product.category === activeCategory
  );

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de projetar minha solução de software/IA com a StackFab.");
    window.open(`https://wa.me/554198486414?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen relative bg-[#fafaf9] font-sans text-slate-900">
      {/* Background Dots Pattern */}
      <div className="fixed inset-0 bg-cartoon-dots pointer-events-none z-0" />

      <Navbar />

      {/* Hero Section Cartoon Tech */}
      <section id="solucoes" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center relative">
            
            {/* Top Floating Badges / Stickers */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className="cartoon-sticker bg-amber-300 text-slate-900 -rotate-2 animate-wiggle">
                <Flame size={14} className="text-rose-600 fill-rose-600" /> Fábrica de Software & IA
              </span>
              <span className="cartoon-sticker bg-indigo-200 text-indigo-950 rotate-1">
                ⚡ Sistemas Auto-Hospedados
              </span>
              <span className="cartoon-sticker bg-emerald-200 text-emerald-950 -rotate-1">
                🤖 Agentes no WhatsApp
              </span>
            </div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-black mb-6 leading-[1.05] tracking-tight text-slate-950">
                Nós não apenas programamos.
                <span className="block mt-2 text-indigo-600 underline decoration-amber-400 decoration-wavy decoration-4">
                  Criamos software que pensa & age.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Desenvolvemos aplicações web ultrarrápidas e orquestramos <strong>Agentes Autônomos de IA</strong> que automatizam suas vendas, integram com WhatsApp e operam 24 horas por dia.
              </p>

              {/* Action Buttons with 3D Effect */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button size="lg" variant="primary" onClick={openWhatsApp}>
                  <span className="flex items-center gap-2">
                    Projetar Minha Solução <ArrowRight size={18} />
                  </span>
                </Button>
                <Button variant="secondary" size="lg" onClick={() => scrollToSection("produtos")}>
                  Explorar Catálogo ({products.length})
                </Button>
              </div>

              {/* Hero Key Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                  { value: `${products.length}+`, label: "Softwares Construídos", bg: "bg-amber-100" },
                  { value: "24/7", label: "Automação com IA", bg: "bg-purple-100" },
                  { value: "100%", label: "Controle dos Dados", bg: "bg-emerald-100" },
                ].map((stat, i) => (
                  <div 
                    key={stat.label} 
                    className={`cartoon-box rounded-2xl p-5 text-center ${stat.bg} ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition-transform`}
                  >
                    <div className="text-3xl font-outfit font-black text-slate-950">{stat.value}</div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services On-Demand Section (Fábrica de Software & IA) */}
      <section id="servicos" className="py-20 md:py-28 bg-white border-y-3 border-slate-900 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="cartoon-sticker bg-indigo-200 text-indigo-950 mb-3 rotate-1">
              💼 Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-5xl font-outfit font-black text-slate-950 mb-4 tracking-tight">
              O Que Podemos Construir Para a Sua Empresa?
            </h2>
            <p className="text-base md:text-lg text-slate-700 font-medium">
              Da concepção à hospedagem definitiva em servidores dedicados com entrega ágil e sem intermediários:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {onDemandServices.map((service, i) => (
              <div 
                key={service.title} 
                className="cartoon-box-lg rounded-2xl p-7 bg-[#fafaf9] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-white border-2 border-slate-900 rounded-xl shadow-[2px_2px_0px_#0f172a]">
                      {service.icon}
                    </div>
                    <span className={`cartoon-sticker ${service.badgeBg} text-slate-950 ${i % 2 === 0 ? '-rotate-2' : 'rotate-1'}`}>
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-outfit font-black text-slate-950 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-700 leading-relaxed font-medium mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6 border-t-2 border-dashed border-slate-200 pt-4">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 size={15} className="text-emerald-600 stroke-[3]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  size="sm" 
                  variant="primary" 
                  className="w-full"
                  onClick={openWhatsApp}
                >
                  Contratar Este Serviço
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions (Cartoon Blocks) */}
      <section id="infraestrutura" className="py-20 md:py-28 bg-stone-100 border-b-3 border-slate-900 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="cartoon-sticker bg-rose-300 text-slate-900 mb-3 -rotate-2">
              ⚠️ O Dilema Moderno
            </span>
            <h2 className="text-3xl md:text-5xl font-outfit font-black text-slate-950 mb-4 tracking-tight">
              Sua empresa está crescendo, mas seus sistemas são estáticos?
            </h2>
            <p className="text-base md:text-lg text-slate-700 font-medium">
              Softwares antigos dependem de cliques e comandos manuais para tudo. Nós construímos sistemas que entendem contexto e agem sozinhos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => {
              const isProblem = challenge.type === "problem";
              return (
                <div
                  key={index}
                  className={`cartoon-box-lg rounded-2xl p-7 flex flex-col justify-between ${
                    isProblem ? "bg-rose-50/80" : "bg-emerald-50/80"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`cartoon-sticker ${challenge.badgeColor}`}>
                        {challenge.tag}
                      </span>
                      {isProblem ? (
                        <XCircle size={24} className="text-rose-500 stroke-[2.5]" />
                      ) : (
                        <CheckCircle2 size={24} className="text-emerald-600 stroke-[2.5]" />
                      )}
                    </div>
                    <h3 className="text-xl font-outfit font-black text-slate-900 mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Ecosystem Section */}
      <section id="produtos" className="py-20 md:py-28 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="cartoon-sticker bg-amber-400 text-slate-950 mb-3 rotate-1">
              🚀 Ecossistema de Ativos
            </span>
            <h2 className="text-3xl md:text-5xl font-outfit font-black text-slate-950 mb-4 tracking-tight">
              Produtos Reais Construídos por Nós
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Conheça as plataformas SaaS, laboratórios e automações que operam com a tecnologia StackFab:
            </p>
          </div>

          {/* Categories Selector Tabs with Sticker Style */}
          <div className="flex items-center justify-center gap-3 mb-14 flex-wrap">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`cartoon-btn px-6 py-3 rounded-xl font-outfit font-black text-xs uppercase tracking-wider cursor-pointer ${
                    isActive
                      ? `${cat.color} text-slate-950 shadow-[4px_4px_0px_#0f172a] -translate-y-1`
                      : "bg-white text-slate-700 hover:bg-stone-50"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={product.title}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Differentiation / Pillars */}
      <section id="pilares" className="py-20 md:py-28 bg-amber-50/60 border-y-3 border-slate-900 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="cartoon-sticker bg-purple-300 text-slate-950 mb-3 -rotate-1">
              🏆 Nosso DNA
            </span>
            <h2 className="text-3xl md:text-5xl font-outfit font-black text-slate-950 mb-4 tracking-tight">
              O que nos torna diferentes de agências tradicionais?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pillars.map((pillar, i) => (
              <div 
                key={pillar.title} 
                className="cartoon-box-lg rounded-2xl p-7 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-stone-100 border-2 border-slate-900 rounded-xl shadow-[2px_2px_0px_#0f172a]">
                      {pillar.icon}
                    </div>
                    <span className={`cartoon-sticker ${pillar.stickerBg} text-slate-950 ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                      {pillar.sticker}
                    </span>
                  </div>
                  <h3 className="text-xl font-outfit font-black text-slate-950 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Arena / Duel Section (Cartoon Tech) */}
      <section id="agentes" className="py-20 md:py-28 bg-slate-950 text-white relative z-10 border-b-3 border-slate-900">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="cartoon-sticker bg-amber-400 text-slate-950 mb-3 rotate-1">
              🥊 O Grande Duelo
            </span>
            <h2 className="text-3xl md:text-5xl font-outfit font-black text-white mb-4 tracking-tight">
              Chatbots seguem regras. Nossos Agentes tomam decisões.
            </h2>
            <p className="text-stone-300 max-w-2xl mx-auto font-medium">
              Veja a diferença prática entre um atendimento engessado e a inteligência viva da Sofia:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            <div className="cartoon-box rounded-2xl p-7 bg-slate-900 border-rose-400 text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="cartoon-sticker bg-rose-500 text-white">
                  Chatbot Antigo
                </span>
                <XCircle className="text-rose-400" size={24} />
              </div>
              <h3 className="text-xl font-outfit font-black text-rose-300 mb-3">
                Menu Fixo & Sem Contexto
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-medium">
                Respostas pré-programadas. Se o cliente mandar um áudio de 15 segundos ou fizer uma pergunta não cadastrada, o robô entra em looping infinito.
              </p>
            </div>
            
            <div className="cartoon-box rounded-2xl p-7 bg-slate-900 border-emerald-400 text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="cartoon-sticker bg-emerald-400 text-slate-950">
                  Agente Sofia (StackFab)
                </span>
                <CheckCircle2 className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-outfit font-black text-emerald-300 mb-3">
                Inteligência Contextual & RAG
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-medium">
                Compreende áudios e textos, consulta a base de conhecimento no Redis, verifica disponibilidade de agenda no Google Calendar e cadastra o lead no CRM.
              </p>
            </div>
          </div>

          {/* Interactive Terminal Demo */}
          <div className="mt-8">
            <TerminalMock />
          </div>
        </div>
      </section>

      {/* CTA Section (Sticker Banner) */}
      <section className="py-20 md:py-28 bg-amber-300 border-b-3 border-slate-900 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <span className="cartoon-sticker bg-white text-slate-900 mb-4 -rotate-1">
            ⚡ Vamos Construir
          </span>
          <h2 className="text-3xl md:text-5xl font-outfit font-black text-slate-950 mb-6 tracking-tight">
            Pronto para colocar IA para trabalhar de verdade na sua empresa?
          </h2>
          <p className="text-base md:text-lg text-slate-900 font-bold mb-10 max-w-2xl mx-auto">
            Projetamos a arquitetura do seu novo SaaS ou integramos agentes de inteligência no seu WhatsApp em dias.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="primary" onClick={() => scrollToSection("contato")}>
              Solicitar Orçamento
            </Button>
            <Button variant="secondary" size="lg" onClick={openWhatsApp}>
              Conversar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-28 relative z-10 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="cartoon-sticker bg-indigo-200 text-indigo-950 mb-3 rotate-1">
              📬 Contato Direto
            </span>
            <h2 className="text-3xl md:text-4xl font-outfit font-black text-slate-950 mt-2 mb-3">
              Vamos estruturar sua próxima entrega?
            </h2>
            <p className="text-slate-600 font-medium">Conte o problema ou o produto. Respondemos em até 24 horas úteis.</p>
          </div>

          <div className="cartoon-box-lg rounded-2xl p-8 md:p-10 bg-[#fafaf9]">
            <form
              className="grid md:grid-cols-2 gap-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const target = e.target as HTMLFormElement;
                const formData = new FormData(target);
                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  message: formData.get('message'),
                };

                const button = target.querySelector('button');
                if (button) button.disabled = true;

                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });

                  if (res.ok) {
                    alert('Mensagem enviada com sucesso!');
                    target.reset();
                  } else {
                    alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
                  }
                } catch {
                  alert('Erro de conexão. Verifique sua internet.');
                } finally {
                  if (button) button.disabled = false;
                }
              }}
            >
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-wide">Seu Nome</label>
                <input 
                  name="name" 
                  required 
                  type="text" 
                  className="w-full bg-white border-2 border-slate-900 rounded-xl px-4 py-3 outline-none focus:bg-amber-50 text-slate-900 text-sm font-bold shadow-[2px_2px_0px_#0f172a]" 
                  placeholder="Ex: Jonas Golart" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-wide">E-mail Corporativo</label>
                <input 
                  name="email" 
                  required 
                  type="email" 
                  className="w-full bg-white border-2 border-slate-900 rounded-xl px-4 py-3 outline-none focus:bg-amber-50 text-slate-900 text-sm font-bold shadow-[2px_2px_0px_#0f172a]" 
                  placeholder="Ex: contato@suaempresa.com" 
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-wide">Descreva seu Desafio</label>
                <textarea 
                  name="message" 
                  required 
                  rows={4} 
                  className="w-full bg-white border-2 border-slate-900 rounded-xl px-4 py-3 outline-none focus:bg-amber-50 text-slate-900 text-sm font-bold shadow-[2px_2px_0px_#0f172a]" 
                  placeholder="Como podemos ajudar com SaaS, automação ou agentes de IA?" 
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="md:col-span-2 w-full">
                Enviar Mensagem & Solicitar Proposta
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-3 border-slate-900 bg-stone-100 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr] items-start text-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-400 border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] rounded-lg flex items-center justify-center font-black text-slate-900 text-sm">
                  S
                </div>
                <span className="font-outfit font-black text-slate-900 text-lg tracking-tight">
                  Stack<span className="text-indigo-600">Fab</span>
                </span>
              </div>
              <p className="text-slate-700 font-medium max-w-sm">
                Fábrica de Soluções Web, Automações Inteligentes e Modelos Agênticos de Alta Performance.
              </p>
              <p className="mt-4 text-xs font-black uppercase tracking-wider text-slate-500">
                © 2026 StackFab. Todos os direitos reservados.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">Navegação</h4>
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-slate-700 font-bold hover:text-indigo-600 transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">Produtos</h4>
              <div className="flex flex-col gap-2.5">
                {footerLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-slate-700 font-bold hover:text-indigo-600 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Sofia WhatsApp Simulator */}
      <SofiaChatWidget />
    </main>
  );
}


