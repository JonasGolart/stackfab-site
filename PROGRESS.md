# 📈 Progress - StackFab Site

Histórico de desenvolvimento e marcos atingidos.

## 🚀 Marcos Concluídos

### Fase 1: Setup e Infraestrutura (2026-05-04)
- [x] Inicialização do projeto Next.js 14+ com App Router.
- [x] Configuração de Produção (API Key Resend).
- [x] Criação de repositório GitHub e Push inicial.
- [x] Configuração de padrões técnicos da StackFAB (Armazém).
- [x] Instalação de dependências (Framer Motion, Lucide React).
- [x] Configuração do Design System Global (globals.css, layout.tsx).

### Fase 2: Componentes Core (2026-05-04)
- [x] Criação do componente `Button` com variantes tech.
- [x] Criação do componente `ProductCard` com efeitos hover e glassmorphism.
- [x] Implementação da `Navbar` responsiva.

### Fase 3: Landing Page e Integrações (2026-05-04)
- [x] Implementação da Hero Section (Impacto visual).
- [x] Seção Sobre Nós com grid de diferenciais.
- [x] Grid de Produtos integrado (AprendiAI, StackFab 2, FazAI).
- [x] Seção de Serviços Sob Demanda (CTA).
- [x] Implementação do Formulário de Contato com API Route.
- [x] Integração com Resend (emailService.ts).
- [x] Rodapé institucional.
- [x] Validação de Build Production.

### Fase 4: Reposicionamento para SaaS Studio (2026-07-07)
- [x] Reposicionamento estratégico como Estúdio de SaaS e Soluções Agênticas de Elite.
- [x] Design visual Light Theme Premium com foco em credibilidade e corporativismo.
- [x] Implementação do componente `TerminalMock` interativo demonstrando orquestração de agentes.
- [x] Expansão do portfólio para 6 produtos core (Sofia, CRM, AprendiAI, FazAI, StackFab 2 e Dra Alessandra).
- [x] Migração de envio de e-mails de Resend para SMTP Hostinger (`suporte@stackfab.com.br`) usando Nodemailer.
- [x] Validação bem-sucedida do build de produção (`npm run build`).

### Fase 6: Redesign Cartoon Tech & Sofia Live Widget (2026-08-31)
- [x] Reformulação visual completa para a estética **Cartoon Tech / Neo-Brutalist** (contornos marcados `border-2/3`, *hard-shadows* táteis e paleta quente).
- [x] Geração e integração de 4 mascotes 2D temáticos (`mascot-sofia`, `mascot-linuxlab`, `mascot-aprendiai`, `mascot-crm`).
- [x] Implementação da nova seção de **Serviços Sob Demanda** (Fábrica de Micro-SaaS & ERPs, Agentes WhatsApp e Infraestrutura Self-Hosted).
- [x] Isolamento e remoção de produtos exclusivos privados do catálogo público.
- [x] Criação do componente `SofiaChatWidget` conectado ao backend oficial da Sofia via proxy API `/api/sofia-chat`.
- [x] Injeção contextual da base institucional da StackFAB no motor da Sofia.
- [x] Atualização de contatos oficiais para o WhatsApp `+55 (41) 9848-6414`.
- [x] Sincronização e push das alterações no GitHub (`main`).

## ⏳ Próximos Passos
- [ ] Criar e anexar as subpáginas dedicadas para produtos chave (AprendiAI e Sofia).
- [ ] Implementar calculadora interativa de ROI / Economia com IA.
- [ ] Otimização avançada de SEO institucional.

## 🛠️ Notas Técnicas
- **Design Tokens:** Estilo Cartoon Neo-Brutalist com utilitários customizados `.cartoon-box`, `.cartoon-btn` e `.cartoon-sticker`.
- **Paleta:** Fundo Stone (#fafaf9), contornos (#0f172a) e acentos em Amarelo Sol (#facc15), Roxo (#8b5cf6) e Esmeralda (#10b981).
- **Tipografia:** Inter (corpo) e Outfit (títulos ultra-bold).
- **Agente IA:** Conexão direta com a API pública da Sofia (`https://sofias.stackfab.com.br/api/public/chat`) via Next.js proxy route `/api/sofia-chat`.

