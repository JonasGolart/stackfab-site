"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  MessageSquare, 
  Database, 
  FileText, 
  Code, 
  Calendar,
  ArrowRight,
  ChevronRight,
  Activity,
  Sparkles,
  Cpu,
  Lock,
  Workflow,
  Users
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import { TerminalMock } from "@/components/ui/TerminalMock";
import { InteractiveShowcase } from "@/components/ui/InteractiveShowcase";

export default function Home() {
  const products = [
    {
      title: "Sofia",
      slogan: "Agente Conversacional Autônomo",
      description: "Agente de vendas e suporte via WhatsApp conectado às regras de negócio da empresa (RAG), com memória de curto prazo (Redis), agendamento nativo e recaptura ativa.",
      icon: <MessageSquare size={22} />,
      color: "emerald",
      badge: "SaaS Ativo",
      techStack: ["NextJS", "Evolution API", "Redis", "Gemini/OpenAI"]
    },
    {
      title: "StackFab CRM",
      slogan: "CRM Comercial AI-Native",
      description: "CRM de alta performance com assistente de prospecção autônoma (SDR), leitura inteligente de intenções, enriquecimento automático de dados e copiloto de escrita.",
      icon: <Database size={22} />,
      color: "indigo",
      badge: "SaaS Ativo",
      techStack: ["NextJS", "Prisma", "PostgreSQL", "LLMs API"]
    },
    {
      title: "AprendiAI",
      slogan: "Gestão Inteligente de Avaliações",
      description: "Plataforma pedagógica completa que automatiza a criação, distribuição e correção de avaliações, gerando relatórios de proficiência orientados por IA.",
      icon: <GraduationCap size={22} />,
      link: "https://www.brasilsul.log.br/",
      color: "violet",
      badge: "SaaS Ativo",
      techStack: ["React", "AI Prompting", "Fastify", "PostgreSQL"]
    },
    {
      title: "FazAI",
      slogan: "Formulários e Questionários Instantâneos",
      description: "Geração sob demanda de questionários interativos de mercado. Modelo pay-per-use sem mensalidade, escalando com a necessidade do projeto.",
      icon: <FileText size={22} />,
      color: "amber",
      badge: "SaaS Ativo",
      techStack: ["NextJS", "TailwindCSS", "Serverless API"]
    },
    {
      title: "StackFab 2",
      slogan: "EdTech Segura de Programação",
      description: "Ambiente educacional gamificado e protegido para ensino de código para crianças e jovens, focado em segurança de dados e interatividade.",
      icon: <Code size={22} />,
      color: "sky",
      badge: "SaaS Ativo",
      techStack: ["NextJS", "Docker Sandbox", "TailwindCSS"]
    },
    {
      title: "Dra Alessandra",
      slogan: "Portal de Agendamento Estético",
      description: "Plataforma personalizada para gerenciamento de fichas de anamnese, registros de procedimentos clínicos e fluxos de agendamento via SMTP Hostinger.",
      icon: <Calendar size={22} />,
      color: "rose",
      badge: "Case Integrado",
      techStack: ["React", "SMTP Integration", "TailwindCSS"]
    }
  ];

  const playbookSteps = [
    {
      step: "01",
      title: "Ideação & Viabilidade",
      description: "Analisamos seus gargalos comerciais e operacionais para estruturar uma solução baseada em agentes de IA com claro retorno de investimento."
    },
    {
      step: "02",
      title: "MVP Agêntico em 4 Semanas",
      description: "Entregamos a primeira versão funcional em tempo recorde: design premium, integração de IA validada e infraestrutura inicial configurada."
    },
    {
      step: "03",
      title: "Multitenancy & Produção",
      description: "Estruturamos o ecossistema com bancos de dados isolados, conformidade estrita com a LGPD e monitoramento ativo de consumo de tokens."
    }
  ];

  const coreDiferenciais = [
    {
      title: "Orquestração de Tokens",
      description: "Nossa arquitetura de roteador local direciona tarefas simples para modelos de baixa latência e tarefas complexas para modelos de raciocínio, otimizando em até 60% os custos de API.",
      icon: <Cpu className="text-indigo-600" />
    },
    {
      title: "Anti-Alucinação RAG",
      description: "Alinhamos os agentes de IA estritamente às bases de dados e regras fornecidas pelo seu negócio, garantindo precisão e evitando falsos orçamentos ou respostas incorretas.",
      icon: <Sparkles className="text-sky-600" />
    },
    {
      title: "Transbordo Humano Inteligente",
      description: "Caso o cliente solicite intervenção ou um operador envie uma mensagem manual pelo painel, a IA silencia automaticamente para garantir uma transição sem atrito.",
      icon: <Workflow className="text-violet-600" />
    },
    {
      title: "Segurança Multitenant",
      description: "Isolamento lógico completo de dados por cliente (tenancy isolada) e criptografia nas pontas, garantindo segurança corporativa e conformidade à LGPD.",
      icon: <Lock className="text-emerald-600" />
    }
  ];

  return (
    <main className="min-h-screen relative bg-slate-50 font-sans text-slate-800">
      <BackgroundGrid />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-700 mb-6 uppercase tracking-wider">
                <Activity size={12} className="animate-pulse" /> Estúdio de SaaS & Soluções Agênticas
              </span>
              <h1 className="text-4xl md:text-6xl font-outfit font-extrabold mb-6 leading-[1.1] text-slate-900 tracking-tight">
                Nós fabricamos sistemas inteligentes e <br />
                <span className="text-gradient">produtos SaaS de alta performance</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
                Aceleramos negócios com agentes de IA autônomos, integrações de APIs, 
                interfaces corporativas de alta conversão e arquiteturas multitenant seguras.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
                  Solicitar Proposta
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}>
                  Ver Ecossistema
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terminal Mock Section & Interactive Showcase */}
      <section className="pb-24">
        <div className="container mx-auto px-6 space-y-16">
          <div className="text-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Tecnologia em Ação</h2>
            <h3 className="text-3xl font-outfit font-extrabold text-slate-900 mb-4">Veja as Nossas Soluções Operando em Tempo Real</h3>
            <p className="text-slate-500 max-w-xl mx-auto font-medium text-sm">
              Do log de orquestração do back-end ao simulador de conversas e pipelines comerciais no front-end.
            </p>
          </div>
          <TerminalMock />
          <InteractiveShowcase />
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-24 bg-white border-y border-slate-100 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Nosso Ecossistema</h2>
            <h3 className="text-3xl md:text-4xl font-outfit font-extrabold text-slate-900 mb-4">SaaS Criados & Operados pela StackFab</h3>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Conheça as plataformas e agentes inteligentes que desenvolvemos para resolver dores comerciais, pedagógicas e operacionais.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Playbook Section */}
      <section id="metodo" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Nosso Playbook</h2>
            <h3 className="text-3xl font-outfit font-extrabold text-slate-900 mb-4">Como Construímos Soluções em Lote</h3>
            <p className="text-slate-500 max-w-xl mx-auto font-medium">
              Nossa metodologia ágil minimiza riscos de engenharia e foca na validação rápida das regras de negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {playbookSteps.map((step) => (
              <div key={step.step} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative">
                <span className="absolute top-6 right-8 text-4xl font-outfit font-black text-indigo-50/70 select-none">
                  {step.step}
                </span>
                <h4 className="text-lg font-outfit font-extrabold text-slate-800 mb-3 mt-4">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section (Bento Grid) */}
      <section id="diferenciais" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Diferenciais Técnicos</h2>
            <h3 className="text-3xl font-outfit font-extrabold text-slate-900 mb-4">Por que a StackFab é diferente?</h3>
            <p className="text-slate-500 max-w-xl mx-auto font-medium">
              Garantimos viabilidade de custos de API e segurança regulatória em todos os projetos que assinamos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreDiferenciais.map((dif) => (
              <div key={dif.title} className="bg-white/80 border border-slate-100 rounded-3xl p-8 flex gap-5 shadow-sm">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 h-fit">
                  {dif.icon}
                </div>
                <div>
                  <h4 className="text-lg font-outfit font-extrabold text-slate-800 mb-2">{dif.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{dif.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-bold text-indigo-600 uppercase tracking-wide">
              Fale Conosco
            </span>
            <h2 className="text-3xl font-outfit font-extrabold text-slate-900 mt-4 mb-3">Vamos estruturar seu próximo SaaS?</h2>
            <p className="text-slate-500 font-medium">Descreva o desafio operacional ou o produto que deseja lançar e nosso time fará o contato em até 24 horas.</p>
          </div>
          
          <div className="bg-white/80 border border-slate-200/80 shadow-md shadow-indigo-100/10 rounded-3xl p-8 md:p-12">
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
                } catch (err) {
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
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Descreva seu Desafio / Ideia</label>
                <textarea name="message" required rows={4} className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl px-4 py-3 outline-none transition-colors text-slate-800 text-sm font-medium" placeholder="Como podemos te ajudar com automações agênticas ou desenvolvimento de software?" />
              </div>
              <Button type="submit" className="md:col-span-2 w-full">Solicitar Orçamento</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-tech rounded flex items-center justify-center font-bold text-white italic text-xs">S</div>
              <span className="font-outfit font-extrabold text-slate-700 normal-case text-sm tracking-normal">Stack<span className="text-indigo-600">Fab</span></span>
              <span className="font-medium text-[10px] text-slate-400 select-none">|</span>
              <span className="font-semibold text-slate-400">© 2026 Todos os direitos reservados.</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-indigo-600 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

