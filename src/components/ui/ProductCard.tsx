import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  title: string;
  slogan: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string; // e.g., "cyan", "purple", "orange"
}

export const ProductCard = ({ title, slogan, description, icon, link, color }: ProductCardProps) => {
  const colorMap: Record<string, string> = {
    cyan: 'group-hover:text-cyan-400 border-cyan-500/20',
    purple: 'group-hover:text-purple-400 border-purple-500/20',
    orange: 'group-hover:text-orange-400 border-orange-500/20',
    green: 'group-hover:text-green-400 border-green-500/20',
  };

  const glowMap: Record<string, string> = {
    cyan: 'group-hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.5)]',
    purple: 'group-hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.5)]',
    orange: 'group-hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.5)]',
    green: 'group-hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.5)]',
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`group relative overflow-hidden rounded-3xl glass p-8 transition-all duration-300 ${glowMap[color] || ''}`}
    >
      <div className="flex flex-col h-full">
        <div className={`mb-6 p-4 rounded-2xl bg-black/[0.03] w-fit ${colorMap[color] || ''}`}>
          {icon}
        </div>
        
        <h3 className="text-2xl font-outfit font-bold mb-2 group-hover:translate-x-1 transition-transform text-black">
          {title}
        </h3>
        
        <p className={`text-sm font-medium mb-4 opacity-80 ${colorMap[color] || ''}`}>
          {slogan}
        </p>
        
        <p className="text-gray-600 mb-8 flex-grow">
          {description}
        </p>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
        >
          Visitar site <ExternalLink size={16} />
        </a>
      </div>
      
      {/* Background Glow */}
      <div className={`absolute -bottom-20 -right-20 w-40 h-40 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full
        ${color === 'cyan' ? 'bg-cyan-500' : ''}
        ${color === 'purple' ? 'bg-purple-500' : ''}
        ${color === 'orange' ? 'bg-orange-500' : ''}
        ${color === 'green' ? 'bg-green-500' : ''}
      `} />
    </motion.div>
  );
};
