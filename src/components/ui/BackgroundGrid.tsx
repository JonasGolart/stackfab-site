"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden bg-slate-50">
      {/* Dot matrix pattern */}
      <div className="absolute inset-0 bg-dot-pattern" />

      {/* Floating radial soft lighting orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-200/30 blur-[130px] pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-sky-200/30 blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] rounded-full bg-violet-200/20 blur-[140px] pointer-events-none"
        />
      </div>
    </div>
  );
};
