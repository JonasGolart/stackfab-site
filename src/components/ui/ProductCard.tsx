import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  slogan: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  link?: string;
  color: string; // e.g., "indigo", "sky", "violet", "emerald", "rose", "amber"
  badge?: string;
  techStack?: string[];
}

export const ProductCard = ({ title, slogan, description, icon, image, link, color, badge, techStack }: ProductCardProps) => {
  const headerBgMap: Record<string, string> = {
    indigo: 'bg-indigo-100 border-indigo-950 text-indigo-900',
    sky: 'bg-sky-100 border-sky-950 text-sky-900',
    violet: 'bg-violet-100 border-violet-950 text-violet-900',
    emerald: 'bg-emerald-100 border-emerald-950 text-emerald-900',
    rose: 'bg-rose-100 border-rose-950 text-rose-900',
    amber: 'bg-amber-100 border-amber-950 text-amber-900',
  };

  const iconBgMap: Record<string, string> = {
    indigo: 'bg-indigo-500 text-white',
    sky: 'bg-sky-500 text-white',
    violet: 'bg-violet-500 text-white',
    emerald: 'bg-emerald-500 text-white',
    rose: 'bg-rose-500 text-white',
    amber: 'bg-amber-500 text-white',
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative flex flex-col justify-between cartoon-box cartoon-box-interactive rounded-2xl overflow-hidden bg-white"
    >
      {/* Card Header Strip */}
      <div className={`px-6 py-4 border-b-2 border-slate-900 flex items-center justify-between ${headerBgMap[color] || 'bg-slate-100'}`}>
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] ${iconBgMap[color] || 'bg-slate-800 text-white'}`}>
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-outfit font-black text-slate-900 tracking-tight leading-tight">
              {title}
            </h3>
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
              {slogan}
            </p>
          </div>
        </div>

        {badge && (
          <span className="cartoon-sticker bg-white text-slate-900 -rotate-2 group-hover:rotate-0 transition-transform">
            {badge}
          </span>
        )}
      </div>

      {/* Optional Mascot Preview Banner */}
      {image && (
        <div className="relative w-full h-44 bg-stone-100 border-b-2 border-slate-900 overflow-hidden flex items-center justify-center p-3">
          <img 
            src={image} 
            alt={title} 
            className="h-full object-contain drop-shadow-[3px_3px_0px_rgba(15,23,42,0.3)] group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      )}

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <p className="text-sm font-medium text-slate-700 leading-relaxed mb-5">
          {description}
        </p>


        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-[11px] font-bold bg-stone-100 border-1.5 border-slate-900 text-slate-800 px-2.5 py-0.5 rounded-lg shadow-[1px_1px_0px_#0f172a]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Card Footer Action */}
        <div className="pt-4 border-t-2 border-dashed border-slate-200 mt-auto">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-900 text-white font-outfit font-bold text-xs uppercase tracking-wider cartoon-btn hover:bg-indigo-600 transition-colors"
            >
              <span>Acessar Plataforma</span>
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-stone-100 border-2 border-slate-900 text-slate-700 font-extrabold text-[11px] uppercase tracking-wider">
              <span>SaaS Proprietário</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse border border-slate-900"></span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};


