"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Infraestrutura', href: '#infraestrutura' },
    { name: 'Agentes', href: '#agentes' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2.5' : 'py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="cartoon-box rounded-2xl px-5 py-3 flex items-center justify-between bg-white">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-400 border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] rounded-xl flex items-center justify-center font-black text-slate-900 text-lg">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-outfit font-black tracking-tight text-slate-900 leading-none">
                Stack<span className="text-indigo-600">Fab</span>
              </span>
              <span className="text-[10px] font-extrabold text-slate-500 mt-0.5 tracking-wider uppercase">
                Software que pensa & age
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-black text-slate-700 hover:text-indigo-600 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            
            {/* Status Sticker */}
            <div className="cartoon-sticker bg-emerald-100 text-emerald-950 rotate-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse border border-slate-900" />
              <span>Agentes Ativos</span>
            </div>

            <Button 
              size="sm" 
              variant="accent"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Fale Conosco
            </Button>
          </div>

          <button 
            className="md:hidden text-slate-900 p-1.5 cartoon-box rounded-lg bg-stone-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 px-4"
          >
            <div className="cartoon-box rounded-2xl p-6 flex flex-col gap-4 bg-white">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-black text-slate-800 hover:text-indigo-600 transition-colors uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="cartoon-sticker bg-emerald-100 text-emerald-950 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse border border-slate-900" />
                <span>Agentes Ativos</span>
              </div>

              <Button 
                variant="accent"
                className="w-full" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Fale Conosco
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


