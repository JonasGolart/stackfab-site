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
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import { TerminalMock } from "@/components/ui/TerminalMock";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"todos" | "erp-gestao" | "ia-edu">("todos");

  const categories = [
    { id: "todos", name: "Todos os Produtos" },
    { id: "erp-gestao", name: "Gestão & ERPs" },
    { id: "ia-edu", name: "IA & Educação" },
  ];

  const products = [
    {
      title: "Sofia",
      slogan: "Secretariado Conversacional",
      description: "Assistente virtual de IA com RAG no Redis Stack, histórico persistente de conversas, roteamento inteligente e agendamento automático de compromissos via Google Calendar.",
      icon: <MessageSquare size={22} />,
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
      color: "emerald",
      badge: "Vendas & Ops",
      techStack: ["Next.js", "Prisma ORM", "WAHA API", "PostgreSQL"],
      category: "erp-gestao",
      link: "https://crm.stackfab.com.br",
    },
    {
      title: "BrasilSul ERP",
      slogan: "Gestão de Transportes",
      description: "Sistema ERP completo sob medida para o setor de transportes e logística, integrando gestão de frotas, escalas de motoristas, controle de combustíveis e financeiro.",
      icon: <Workflow size={22} />,
      color: "violet",
      badge: "Logística",
      techStack: ["React", "Vite", "Node.js/Express", "PostgreSQL"],
      category: "erp-gestao",
      link: "https://brasilsul.log.br",
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
      title: "Dra Alessandra CRM",
      slogan: "CRM para Clínicas",
      description: "Software de gestão especializada para consultórios de dermatologia, cobrindo prontuário eletrônico completo, agenda médica e controle de fluxo financeiro.",
      icon: <Activity size={22} />,
      color: "sky",
      badge: "Healthcare",
      techStack: ["React", "Vite", "Tailwind CSS", "PostgreSQL"],
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

  const challenges = [
    {
      type: "problem",
      title: "Atendimento Gargalado?",
      description: "Chatbots antigos irritam o cliente com respostas prontas. Qualquer desvio quebra a experiência.",
    },
    {
      type: "solution",
      title: "Agentes Inteligentes",
      description: "Nossos Agentes de IA conversam via WhatsApp, entendem intenções, resolvem dúvidas e efetuam agendamentos em tempo real no seu CRM.",
    },
    {
      type: "problem",
      title: "Processos Manuais Desconexos?",
      description: "Planilhas soltas, retrabalho e perda de dados entre sistemas que não conversam.",
    },
    {
      type: "solution",
      title: "Infraestrutura Unificada",
      description: "Unificamos sua infraestrutura conectando automações avançadas e bancos de dados robustos que trabalham 24/7 em segundo plano.",
    },
  ];

  const pillars = [
    {
      title: "Web Apps Premium",
      description: "Interfaces ultra velozes com ecossistema JS/Python + Tailwind CSS. Foco total em experiência, escaneabilidade e taxas de conversão elevadas.",
      icon: <Cpu className="text-indigo-600" />,
    },
    {
      title: "Engenharia Agêntica de IA",
      description: "Agentes integrados a LLMs que se conectam aos seus sistemas internos para agendar, preencher, triar e operar de forma autônoma.",
      icon: <Sparkles className="text-sky-600" />,
    },
    {
      title: "Infraestrutura Self-Hosted",
      description: "Economize com taxas abusivas de nuvem. Servidores dedicados com Docker, Coolify, n8n e AWS garantindo privacidade, segurança e controle total.",
      icon: <Workflow className="text-violet-600" />,
    },
  ];

  const navLinks = [
    { name: "Soluções", href: "#solucoes" },
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
    const message = encodeURIComponent("Quero projetar minha solução com a StackFab.");
    window.open(`https://wa.me/554194394373?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen relative bg-slate-50 font-sans text-slate-800">
      <BackgroundGrid />
      <Navbar />

      {/* Hero Section */}
      <section id="solucoes" className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-indigo-50/20 via-slate-50 to-slate-50">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-indigo-100/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl pointer-events-none" />
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[11px] font-bold text-indigo-700 mb-6 uppercase tracking-[0.24em]">
                <Activity size={12} className="animate-pulse" /> 🤖 O Futuro do Desenvolvimento Web + IA Agêntica
              </span>
              <h1 className="text-4xl md:text-6xl font-outfit font-extrabold mb-5 leading-[1.08] text-slate-900 tracking-tight">
                Nós não apenas programamos.
                <span className="block text-gradient">Nós criamos software que pensa, age e escala.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-9 max-w-3xl mx-auto font-medium leading-relaxed">
                Desenvolvemos aplicações web de alta performance e integramos agentes autônomos de IA capazes de automatizar o atendimento, gerenciar fluxos de trabalho complexos e tomar decisões inteligentes para o seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" onClick={openWhatsApp}>
                  Projetar minha Solução
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("produtos")}>
                  Conhecer nossos Produtos
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
                {[
                  { value: `${products.length}`, label: "frentes ativas" },
                  { value: "24/7", label: "automações e agentes" },
                  { value: "1", label: "stack unificada" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur px-5 py-4 shadow-sm">
                    <div className="text-2xl font-outfit font-extrabold text-slate-900">{stat.value}</div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges / Infrastructure Section */}
      <section id="infraestrutura" className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Infraestrutura</h2>
            <h3 className="text-3xl md:text-4xl font-outfit font-extrabold text-slate-900 mb-4">
              Sua empresa está crescendo, mas seus sistemas continuam estáticos?
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Softwares tradicionais dependem de cliques e comandos manuais para tudo. Nós criamos sistemas que entendem o contexto e resolvem problemas sozinhos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => {
              const isProblem = challenge.type === "problem";
              return (
                <div
                  key={index}
                  className={`border rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 ${
                    isProblem
                      ? "bg-slate-50/50 border-slate-200/60"
                      : "bg-indigo-50/30 border-indigo-100/50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      isProblem
                        ? "bg-rose-50 border-rose-100 text-rose-600"
                        : "bg-indigo-50 border-indigo-100 text-indigo-600"
                    }`}>
                      {isProblem ? "Problema" : "Solução StackFab"}
                    </span>
                    <h4 className="text-xl font-outfit font-extrabold text-slate-900">{challenge.title}</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">{challenge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Ecosystem Section */}
      <section id="produtos" className="py-24 relative bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Ecossistema StackFab</h2>
            <h3 className="text-3xl md:text-4xl font-outfit font-extrabold text-slate-900 mb-4">Soluções reais construídas por nós.</h3>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Conheça as plataformas, ferramentas e laboratórios digitais que carregam o DNA de engenharia da StackFab:
            </p>
          </div>

          {/* Categories Selector Tabs */}
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`relative px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full border transition-all cursor-pointer ${
                    isActive
                      ? "border-indigo-600 text-white bg-indigo-600 shadow-md shadow-indigo-600/10"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-800"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-cat-bg"
                      className="absolute inset-0 bg-indigo-600 rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.name}</span>
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

      {/* Differentiation / Pillars Section */}
      <section id="pilares" className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Diferenciais</h2>
            <h3 className="text-3xl md:text-4xl font-outfit font-extrabold text-slate-900 mb-4">O que nos torna diferentes das agências tradicionais?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-100 w-fit mb-5">{pillar.icon}</div>
                <h4 className="text-lg font-outfit font-extrabold text-slate-900 mb-3">{pillar.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Comparison Section */}
      <section id="agentes" className="py-24 relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(79,70,229,0.15),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Agentes vs Chatbots</h2>
            <h3 className="text-3xl md:text-4xl font-outfit font-extrabold text-white mb-4">
              Chatbots seguem regras. Nossos Agentes tomam decisões.
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">
              Um chatbot comum lê uma palavra-chave e exibe um menu. Se o cliente sair do script, o sistema falha.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 transition-colors hover:bg-white/10">
              <h4 className="text-xl font-outfit font-extrabold text-white flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-sm font-bold">✕</span>
                Chatbot Tradicional
              </h4>
              <p className="text-slate-300 leading-relaxed font-medium">
                Menu fixo, respostas pré-programadas, zero contexto. Qualquer desvio quebra a experiência e o cliente desiste.
              </p>
            </div>
            
            <div className="bg-white/5 border border-indigo-500/20 rounded-3xl p-8 transition-colors hover:bg-white/10">
              <h4 className="text-xl font-outfit font-extrabold text-indigo-400 flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold">✓</span>
                Agente StackFab
              </h4>
              <p className="text-slate-300 leading-relaxed font-medium">
                Usa inteligência contextual. Entende a dor do cliente no WhatsApp, consulta disponibilidade no banco, insere no CRM, agenda e confirma — tudo fluido, natural e sem intervenção humana.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <TerminalMock />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-slate-900 mb-4">
            Pronto para colocar a IA para trabalhar de verdade na sua empresa?
          </h2>
          <p className="text-slate-500 font-medium mb-10 max-w-2xl mx-auto">
            Vamos desenhar juntos a arquitetura web e os agentes que vão transformar a eficiência da sua operação.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection("contato")}>
              Quero automatizar meu negócio
            </Button>
            <Button variant="outline" size="lg" onClick={openWhatsApp}>
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-bold text-indigo-600 uppercase tracking-wide">
              Fale Conosco
            </span>
            <h2 className="text-3xl font-outfit font-extrabold text-slate-900 mt-4 mb-3">Vamos estruturar sua próxima entrega?</h2>
            <p className="text-slate-500 font-medium">Conte o problema ou o produto. A resposta volta em até 24 horas úteis.</p>
          </div>

          <div className="bg-white/90 border border-slate-200/80 shadow-md shadow-indigo-100/10 rounded-3xl p-8 md:p-12">
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
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Nome</label>
                <input name="name" required type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl px-4 py-3 outline-none transition-colors text-slate-800 text-sm font-medium" placeholder="Ex: Jonas Golart" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">E-mail Corporativo</label>
                <input name="email" required type="email" className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl px-4 py-3 outline-none transition-colors text-slate-800 text-sm font-medium" placeholder="Ex: contato@suaempresa.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Descreva seu Desafio</label>
                <textarea name="message" required rows={4} className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl px-4 py-3 outline-none transition-colors text-slate-800 text-sm font-medium" placeholder="Como podemos ajudar com web, automação ou IA?" />
              </div>
              <Button type="submit" className="md:col-span-2 w-full">Solicitar Proposta</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-slate-50/70">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr] items-start text-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-gradient-tech rounded flex items-center justify-center font-bold text-white italic text-xs">S</div>
                <span className="font-outfit font-extrabold text-slate-800 normal-case text-base tracking-normal">
                  Stack<span className="text-indigo-600">Fab</span>
                </span>
              </div>
              <p className="text-slate-500 font-medium max-w-sm">Fábrica de Soluções Web, Automações de Ponta e Modelos Agênticos Inteligentes.</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">© 2026 StackFab. Todos os direitos reservados.</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">Navegação</h4>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-slate-600 hover:text-indigo-600 transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">Produtos</h4>
              <div className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-600 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
