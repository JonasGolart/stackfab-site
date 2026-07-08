"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ChevronRight,
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

export default function Home() {
  const products = [
    {
      title: "StackFab CRM",
      slogan: "stackfab.com.br",
      description: "CRM comercial com pipeline em kanban, contatos, WhatsApp, e-mail, tarefas, campanhas e copiloto de atendimento.",
      icon: <Database size={22} />,
      color: "emerald",
      badge: "Sales Ops",
      techStack: ["CRM", "Kanban", "WhatsApp", "Pipeline"],
      link: "https://stackfab.com.br",
    },
    {
      title: "Sofia",
      slogan: "Secretariado Conversacional",
      description: "Assistente virtual para WhatsApp e Telegram com RAG, agenda interna, Google Calendar e transbordo humano.",
      icon: <MessageSquare size={22} />,
      color: "indigo",
      badge: "Secretaria IA",
      techStack: ["Prompting", "LLMs", "WhatsApp", "Automação"],
      link: "https://sofias.stackfab.com.br",
    },
    {
      title: "Questione Online",
      slogan: "Blueprints & Provisionamento",
      description: "Plataforma de blueprints e provisionamento com dashboard, marketplace e fluxo guiado para iniciar novas soluções.",
      icon: <Workflow size={22} />,
      color: "violet",
      badge: "Blueprints & Deploy",
      techStack: ["Blueprints", "Provisionamento", "Dashboard", "Deploy"],
      link: "https://quest.stackfab.com.br",
    },
    {
      title: "AprendiAI",
      slogan: "Aprendizado Adaptativo",
      description: "LMS com IA para gerar questões, corrigir discursivas, criar recuperação personalizada e acompanhar desempenho.",
      icon: <GraduationCap size={22} />,
      color: "amber",
      badge: "LMS Adaptativo",
      techStack: ["Aprendizado", "IA", "Treinamento", "Interatividade"],
      link: "https://aprendiai.info",
    },
  ];

  const challenges = [
    {
      title: "Atendimento travado?",
      description: "Chatbots engessados frustram o cliente. Sofia entende intenção, responde e encaminha o próximo passo.",
    },
    {
      title: "Processos desconectados?",
      description: "Planilhas, retrabalho e perda de dados. Questione Online organiza projetos, blueprints e entregas para operar com menos ruído.",
    },
  ];

  const pillars = [
    {
      title: "Web Apps Premium",
      description: "Interfaces rápidas, limpas e focadas em conversão, construídas com o stack certo para escalar.",
      icon: <Cpu className="text-indigo-600" />,
    },
    {
      title: "Engenharia Agêntica de IA",
      description: "Agentes integrados a LLMs que entendem contexto, consultam sistemas e executam tarefas reais.",
      icon: <Sparkles className="text-sky-600" />,
    },
    {
      title: "Automação & Infraestrutura Self-Hosted",
      description: "Stack self-hosted com mais controle, menos custo recorrente e privacidade de verdade.",
      icon: <Workflow className="text-violet-600" />,
    },
  ];

  const navLinks = [
    { name: "Desafios", href: "#desafios" },
    { name: "Produtos", href: "#produtos" },
    { name: "Infraestrutura", href: "#pilares" },
    { name: "Fale Conosco", href: "#contato" },
  ];

  const footerLinks = [
    { label: "StackFab CRM", href: "https://stackfab.com.br" },
    { label: "Sofia", href: "https://sofias.stackfab.com.br" },
    { label: "Questione Online", href: "https://quest.stackfab.com.br" },
    { label: "AprendiAI", href: "https://aprendiai.info" },
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent("Quero projetar minha solução com a StackFab.");
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen relative bg-slate-50 font-sans text-slate-800">
      <BackgroundGrid />
      <Navbar />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl pointer-events-none" />
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[11px] font-bold text-indigo-700 mb-6 uppercase tracking-[0.24em]">
                <Activity size={12} className="animate-pulse" /> Web premium + IA agêntica
              </span>
              <h1 className="text-4xl md:text-6xl font-outfit font-extrabold mb-5 leading-[1.05] text-slate-900 tracking-tight">
                Software que pensa,
                <span className="block text-gradient">age e escala com o seu negócio.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-9 max-w-2xl mx-auto font-medium leading-relaxed">
                Criamos aplicações web premium e agentes de IA que automatizam atendimento, operação e decisões repetitivas.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" onClick={openWhatsApp}>
                  Projetar minha Solução
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("produtos")}>
                  Conhecer nossos Produtos
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
                {[
                  { value: "4", label: "frentes ativas" },
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

      <section id="desafios" className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Desafios</h2>
            <h3 className="text-3xl md:text-4xl font-outfit font-extrabold text-slate-900 mb-4">Crescer sem travar a operação.</h3>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Se o sistema ainda depende de cliques e respostas manuais, ele está consumindo tempo onde deveria gerar escala.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <div key={challenge.title} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-indigo-600 font-bold">
                    0{index + 1}
                  </span>
                  <h4 className="text-xl font-outfit font-extrabold text-slate-900">{challenge.title}</h4>
                </div>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="produtos" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Ecossistema StackFab</h2>
            <h3 className="text-3xl md:text-4xl font-outfit font-extrabold text-slate-900 mb-4">Soluções reais, em um só ecossistema.</h3>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Quatro frentes que compartilham a mesma base técnica e a mesma lógica de entrega.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section id="pilares" className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Pilares Tecnológicos</h2>
            <h3 className="text-3xl md:text-4xl font-outfit font-extrabold text-slate-900 mb-4">Menos agência. Mais engenharia.</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-100 w-fit mb-5">{pillar.icon}</div>
                <h4 className="text-lg font-outfit font-extrabold text-slate-900 mb-3">{pillar.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agente" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Explicativo</h2>
              <h3 className="text-3xl md:text-4xl font-outfit font-extrabold text-slate-900 mb-6 leading-tight">
                Chatbots tradicionais seguem regras. Nossos Agentes tomam decisões.
              </h3>
              <div className="space-y-5 text-slate-500 leading-relaxed font-medium">
                <p>
                  Um chatbot comum lê palavras-chave e devolve menus. Se a conversa sai do script, ele quebra.
                </p>
                <p>
                  Um <span className="font-bold text-slate-800">Agente StackFab</span> entende contexto, consulta sistemas e conclui o fluxo sem intervenção humana.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <ChevronRight size={14} className="text-indigo-600" /> WhatsApp
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <ChevronRight size={14} className="text-indigo-600" /> CRM
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <ChevronRight size={14} className="text-indigo-600" /> Agendamento
                </span>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-slate-900/10 border border-slate-800">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">StackFab Agent</p>
                  <h4 className="text-2xl font-outfit font-extrabold">Fluxo em 3 passos</h4>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(74,222,128,0.8)] animate-pulse" />
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400 mb-2">Cliente</p>
                  <p className="text-sm text-slate-200">Quero agendar e tirar uma dúvida sobre o plano.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-indigo-500/10 p-4">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-indigo-200 mb-2">Agente StackFab</p>
                  <p className="text-sm text-slate-100">Entendi. Vou validar, registrar e responder com a melhor opção disponível.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-emerald-500/10 p-4">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-200 mb-2">Resultado</p>
                  <p className="text-sm text-slate-100">Agendamento confirmado, registro salvo e conversa encerrada com clareza.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-slate-900 mb-4">Quer um agente para um fluxo específico?</h2>
          <p className="text-slate-500 font-medium mb-10 max-w-2xl mx-auto">
            Podemos desenhar web, automação ou IA para atendimento, operação ou produto novo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection("contato")}>
              Quero um fluxo automatizado
            </Button>
            <Button variant="outline" size="lg" onClick={openWhatsApp}>
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

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
              <p className="text-slate-500 font-medium max-w-sm">StackFab — software web, automação e IA agêntica para operações que precisam escalar.</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">© 2026 StackFab. Todos os direitos reservados.</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">Links de Navegação</h4>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-slate-600 hover:text-indigo-600 transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">Nossos Produtos</h4>
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
