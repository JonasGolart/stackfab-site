---
version: alpha
name: StackFAB Official Site Design
description: Sistema de design do site oficial da StackFAB, com estética tecnológica, limpa e estilo Light Glassmorphism.
colors:
  primary: "#4f46e5"       # Indigo 600 (Confiança, Tech, Primário)
  secondary: "#0ea5e9"     # Sky 500 (Modernidade, Fluidez)
  accent: "#6366f1"        # Indigo 500 (Destaque, Dica visual)
  muted: "#f8fafc"         # Slate 50 (Cor sutil, fundo secundário)
  background: "#f8fafc"    # Slate 50 (Fundo principal da tela)
  foreground: "#0f172a"    # Slate 900 (Texto e títulos)
  card: "rgba(255, 255, 255, 0.85)" # Vidro opaco leve
  border: "rgba(226, 232, 240, 0.8)" # Borda sutil de vidro
typography:
  sans:
    fontFamily: var(--font-inter), sans-serif
  outfit:
    fontFamily: var(--font-outfit), sans-serif
  h1:
    fontFamily: var(--font-outfit), sans-serif
    fontSize: 3.75rem      # 60px
    fontWeight: 800
    lineHeight: 1.05
  h2:
    fontFamily: var(--font-outfit), sans-serif
    fontSize: 2.25rem      # 36px
    fontWeight: 800
  body-md:
    fontFamily: var(--font-inter), sans-serif
    fontSize: 1rem         # 16px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 6px
  md: 12px
  lg: 24px
  xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  glass-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  glass-premium:
    backgroundColor: "rgba(255, 255, 255, 0.85)"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
---

# StackFAB Official Site Design System

## Overview
A marca StackFAB evoca o encontro de **Engenharia de Alta Tecnologia** (IA Agêntica, Sistemas auto-hospedados robustos) com **Experiência Premium** (interfaces rápidas, limpas, minimalistas e sem atrito). 
O site foi construído sob um tema claro premium (*Light Mode Tech*), combinando superfícies translúcidas (Glassmorphism), padrões de fundo estruturados (Dot Pattern) e tipografia elegante e moderna (Inter + Outfit).

## Colors
A paleta cromática é limpa e corporativa, mas com o brilho elétrico do Indigo e do Sky:
- **Primary Indigo (`#4f46e5`):** Utilizada nas âncoras principais, botões primários e identidade de marca.
- **Secondary Sky (`#0ea5e9`):** Traz contraste dinâmico, usada em gradientes, ícones e badges.
- **Muted & Background (`#f8fafc`):** O Slate 50 dá um tom cinza-azulado muito claro e limpo para o fundo, fugindo do branco puro tradicional e reduzindo a fadiga visual.
- **Foreground (`#0f172a`):** Slate 900 garante alto contraste e leitura confortável.

## Typography
Utilizamos duas fontes principais carregadas de forma otimizada no Next.js:
- **Outfit:** Fonte display elegante e geométrica com grande impacto, aplicada a títulos de seções e headlines (`h1`, `h2`, `h3`).
- **Inter:** Fonte utilitária e extremamente legível, aplicada a textos corporativos, descrições, botões e labels.

## Layout & Spacing
A estrutura visual segue grades limpas e espaçamentos geométricos.
- **Gaps e Margens:** Uso preferencial de múltiplos de 8px (escala do Tailwind).
- **Dot Pattern:** O padrão de grade pontilhada dá uma sensação de blueprint de engenharia e precisão.
- **Bento Grid:** Seções estruturadas dividem blocos de informações em cards de vidro translúcido de tamanhos diferentes, mas harmoniosamente alinhados.

## Elevation & Depth
Não são usadas sombras projetadas pesadas. A profundidade tridimensional é criada por:
1. **Opacidades do Vidro (`backdrop-filter: blur(12px)`):** Dá a sensação de que os cards flutuam sobre o gradiente ou dot pattern de fundo.
2. **Bordas finas e sutis (`border: 1px solid rgba(226, 232, 240, 0.8)`):** Definem a silhueta dos elementos sem peso visual desnecessário.

## Shapes
O site adota cantos generosamente arredondados para passar uma sensação moderna, amigável e refinada:
- Cantos arredondados padrão de **24px (`rounded.lg` / `3xl` no Tailwind)** para os principais cards de produtos.
- Cantos arredondados de **9999px (`rounded.full`)** para botões redondos e badges pill.

## Components
- **Botões:** Transições suaves de cor com `ease-in-out` de 0.2s. Hover ativo altera opacidade e sombras suaves.
- **ProductCard:** Utiliza o estilo `glass` premium com detalhes de tecnologia aplicados a cada produto e badges semânticos.
- **BackgroundGrid:** Grade estrutural pontilhada aplicada ao fundo de todo o layout.

## Do's and Don'ts
- **DO:** Utilizar o gradiente de texto (`text-gradient`) para slogans de 2 ou 3 palavras dentro do título principal.
- **DO:** Manter o fundo limpo (`bg-slate-50`) com o padrão de dot pattern sutil.
- **DON'T:** Adicionar cards com fundos cinzas ou pretos opacos e pesados.
- **DON'T:** Usar fontes diferentes de Inter e Outfit, pois prejudica a consistência visual.
- **DON'T:** Criar botões com cantos vivos/quadrados.
