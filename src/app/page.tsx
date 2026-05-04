"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap, 
  BrainCircuit, 
  Code,
  GraduationCap,
  Puzzle,
  FileQuestion,
  ChevronRight
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";

export default function Home() {
  const products = [
    {
      title: "AprendiAI",
      slogan: "Gestão inteligente de avaliações",
      description: "Plataforma pedagógica que automatiza a criação e correção de avaliações, gerando relatórios detalhados com IA.",
      icon: <GraduationCap size={32} />,
      link: "https://www.aprendiai.info",
      color: "green"
    },
    {
      title: "StackFab 2",
      slogan: "Aprenda programação de forma segura",
      description: "Ambiente controlado e estimulante para o ensino de código para crianças e jovens, democratizando o acesso à tecnologia.",
      icon: <Puzzle size={32} />,
      link: "https://www.stackfab.com.br",
      color: "cyan"
    },
    {
      title: "FazAI",
      slogan: "Questionários instantâneos",
      description: "Gere e gerencie formulários e questionários online na velocidade da luz. Modelo sob demanda, sem mensalidades.",
      icon: <FileQuestion size={32} />,
      link: "https://quest.stackfab.com.br",
      color: "orange"
    }
  ];

  const features = [
    { title: "Agilidade", icon: <Zap className="text-yellow-400" />, text: "Entregas rápidas com metodologias ágeis." },
    { title: "IA Aplicada", icon: <BrainCircuit className="text-purple-400" />, text: "Inteligência artificial integrada aos seus fluxos." },
    { title: "Segurança", icon: <ShieldCheck className="text-green-400" />, text: "Privacidade e proteção de dados em primeiro lugar." },
    { title: "Customização", icon: <Code className="text-cyan-400" />, text: "Soluções sob medida para o seu desafio." }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6 text-primary">
                Empresa Júnior de Automação e IA
              </span>
              <h1 className="text-5xl md:text-7xl font-outfit font-bold mb-6 leading-tight">
                Soluções Inteligentes em <br />
                <span className="text-gradient">Automação Web e IA</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                A StackFab desenvolve plataformas escaláveis e automações personalizadas 
                que agilizam processos e potencializam resultados reais.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
                  Conheça nossas soluções
                </Button>
                <Button variant="outline" size="lg">
                  Ver Portfolio
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Logo Wall Placeholder */}
      <section className="py-12 border-y border-black/5 bg-black/[0.02]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Partner Logos or Tech Icons */}
             <div className="flex items-center gap-2 font-outfit font-bold text-2xl"><Cpu /> UTFPR</div>
             <div className="flex items-center gap-2 font-outfit font-bold text-2xl"><Layers /> Vercel</div>
             <div className="flex items-center gap-2 font-outfit font-bold text-2xl"><Rocket /> Cloudflare</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-tech p-1 shadow-2xl shadow-cyan-500/20">
                <div className="w-full h-full rounded-[22px] bg-white flex items-center justify-center p-8 overflow-hidden relative">
                   <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                   <div className="z-10 text-center">
                     <BrainCircuit size={120} className="mx-auto mb-6 text-primary animate-float" />
                     <p className="text-2xl font-outfit font-bold">Inovação movida por propósitos</p>
                   </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-outfit font-bold mb-6">Sobre a StackFab</h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos uma empresa júnior focada em transformar desafios operacionais em automações eficientes e acessíveis. Nossa missão é simplificar tarefas repetitivas através do uso inteligente de tecnologia.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((f) => (
                  <div key={f.title} className="p-4 rounded-2xl glass border-white/5">
                    <div className="mb-2">{f.icon}</div>
                    <h4 className="font-bold mb-1">{f.title}</h4>
                    <p className="text-xs text-gray-500">{f.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-outfit font-bold mb-4">Nosso Ecossistema</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Desenvolvemos produtos próprios que resolvem dores reais do mercado, da educação à gestão de dados.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section id="servicos" className="py-24">
        <div className="container mx-auto px-6">
          <div className="rounded-[3rem] bg-gradient-tech p-px">
            <div className="rounded-[3rem] bg-background/80 backdrop-blur-xl p-12 md:p-20 relative overflow-hidden">
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6">Precisa de algo sob demanda?</h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Desenvolvemos robôs, integrações de APIs, dashboards personalizados e fluxos de IA customizados para sua necessidade específica.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {["Web Automations", "Relatórios Automatizados", "Bots de Atendimento", "MVPs Rápidos"].map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-primary/20 text-primary">
                          <ChevronRight size={16} />
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    Solicitar Orçamento Personalizado
                  </Button>
                </div>
                <div className="hidden md:flex justify-center">
                   <div className="relative w-72 h-72">
                      <div className="absolute inset-0 bg-primary blur-[80px] opacity-10" />
                      <Cpu size={240} className="text-primary/20 animate-float" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contato" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-outfit font-bold mb-4">Vamos conversar?</h2>
            <p className="text-gray-600">Preencha o formulário e nosso time entrará em contato em breve.</p>
          </div>
          
          <div className="glass rounded-3xl p-8 md:p-12 border-white/10">
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
                <label className="text-sm font-medium text-gray-300">Nome</label>
                <input name="name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors" placeholder="seu@email.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-gray-300">Mensagem</label>
                <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors" placeholder="Como podemos te ajudar?" />
              </div>
              <Button type="submit" className="md:col-span-2 w-full">Enviar Proposta</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-tech rounded flex items-center justify-center font-bold text-white italic text-xs">S</div>
              <span className="font-outfit font-bold text-white">StackFab</span>
              <span>© 2026 Todos os direitos reservados.</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
