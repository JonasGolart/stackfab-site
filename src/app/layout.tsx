import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "StackFab | Software que pensa, age e escala",
  description: "Landing page da StackFab com foco em desenvolvimento web premium, automação agêntica e infraestrutura self-hosted para empresas que querem escalar com IA.",
  keywords: ["StackFab", "IA agêntica", "automação", "web apps", "infraestrutura self-hosted", "nextjs", "workflow", "WhatsApp"],
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
