import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  slogan: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  color: string; // e.g., "indigo", "sky", "violet", "emerald", "rose", "amber"
  badge?: string;
  techStack?: string[];
}

export const ProductCard = ({ title, slogan, description, icon, link, color, badge, techStack }: ProductCardProps) => {
  const colorMap: Record<string, string> = {
    indigo: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    sky: 'text-sky-600 bg-sky-50 border-sky-100',
    violet: 'text-violet-600 bg-violet-50 border-violet-100',
    emerald: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    rose: 'text-rose-600 bg-rose-50 border-rose-100',
    amber: 'text-amber-700 bg-amber-50 border-amber-100',
  };

  const borderHoverMap: Record<string, string> = {
    indigo: 'group-hover:border-indigo-200 group-hover:shadow-indigo-500/5',
    sky: 'group-hover:border-sky-200 group-hover:shadow-sky-500/5',
    violet: 'group-hover:border-violet-200 group-hover:shadow-violet-500/5',
    emerald: 'group-hover:border-emerald-200 group-hover:shadow-emerald-500/5',
    rose: 'group-hover:border-rose-200 group-hover:shadow-rose-500/5',
    amber: 'group-hover:border-amber-200 group-hover:shadow-amber-500/5',
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-3xl glass p-8 transition-all duration-300 hover:shadow-xl bg-white/70 ${borderHoverMap[color] || 'group-hover:border-slate-300'}`}
    >
      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className={`p-3.5 rounded-2xl border ${colorMap[color] || 'bg-slate-50 border-slate-200 text-slate-700'}`}>
            {icon}
          </div>
          {badge && (
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${colorMap[color] || 'bg-slate-50 border-slate-200 text-slate-700'}`}>
              {badge}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-outfit font-bold mb-1 text-slate-800 transition-colors group-hover:text-indigo-600">
          {title}
        </h3>
        
        <p className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">
          {slogan}
        </p>
        
        <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {techStack.map((tech) => (
              <span key={tech} className="text-[10px] font-medium bg-slate-50 border border-slate-100 text-slate-400 px-2 py-0.5 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors uppercase tracking-wider group/link"
          >
            Acessar Plataforma <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-0.5" />
          </a>
        ) : (
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            SaaS Proprietário
          </span>
        )}
      </div>
      
      {/* Background Soft Radial Glow */}
      <div className={`absolute -bottom-20 -right-20 w-44 h-44 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full
        ${color === 'indigo' ? 'bg-indigo-500' : ''}
        ${color === 'sky' ? 'bg-sky-500' : ''}
        ${color === 'violet' ? 'bg-violet-500' : ''}
        ${color === 'emerald' ? 'bg-emerald-500' : ''}
        ${color === 'rose' ? 'bg-rose-500' : ''}
        ${color === 'amber' ? 'bg-amber-500' : ''}
      `} />
    </motion.div>
  );
};

