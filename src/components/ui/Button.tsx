import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'variant'> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-outfit font-extrabold uppercase tracking-wider rounded-xl cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-indigo-500 text-white cartoon-btn hover:bg-indigo-600',
    secondary: 'bg-white text-slate-900 cartoon-btn hover:bg-slate-50',
    accent: 'bg-amber-400 text-slate-950 cartoon-btn hover:bg-amber-300',
    outline: 'border-2 border-slate-900 bg-transparent text-slate-900 shadow-[2px_2px_0px_#0f172a] hover:bg-slate-100 hover:shadow-[3px_3px_0px_#0f172a] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-200/60 font-bold',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};


