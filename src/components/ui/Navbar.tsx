"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
    { name: 'Desafios', href: '#desafios' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Infraestrutura', href: '#pilares' },
    { name: 'Fale Conosco', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`glass-premium rounded-full px-6 py-3 flex items-center justify-between transition-all ${
          isScrolled ? 'shadow-lg border-slate-200/50' : 'border-transparent bg-white/40'
        }`}>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-tech rounded-lg flex items-center justify-center font-bold text-white italic shadow-sm">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-outfit font-bold tracking-tight text-slate-800 leading-none">
                Stack<span className="text-indigo-600">Fab</span>
              </span>
              <span className="text-[9px] font-medium text-slate-400 mt-0.5 tracking-wider uppercase">Software que pensa</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            
            {/* Status dot */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">Agentes Ativos</span>
            </div>

            <Button size="sm" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
              Fale Conosco
            </Button>
          </div>

          <button 
            className="md:hidden text-slate-700 p-1"
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
            className="md:hidden absolute top-full left-0 right-0 mt-2 px-6"
          >
            <div className="glass rounded-3xl p-6 flex flex-col gap-4 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex items-center gap-1.5 py-1 px-2 rounded-lg bg-emerald-50 border border-emerald-100/50 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">Agentes Ativos</span>
              </div>

              <Button className="w-full" onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Fale Conosco
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

