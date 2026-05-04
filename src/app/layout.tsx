import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "StackFab | Automação Web e Inteligência Artificial",
  description: "A StackFab cria soluções inteligentes em automação web e IA para empresas e instituições de ensino. Aceleramos seus processos com tecnologia de ponta.",
  keywords: ["automação", "inteligência artificial", "web scraping", "nextjs", "aprendiai", "fazai", "stackfab"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
