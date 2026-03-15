import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero dense lush green brazilian amazon forest canopy aerial view */}
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&fit=crop&q=80" 
          alt="Floresta" 
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E0D]/80 via-[#2D5016]/70 to-[#1A0F00]/90" />
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
            Programa Embaixadores Saúde Planetária 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center mb-8"
        >
          <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white leading-[0.9] drop-shadow-2xl">
            Mundo Real
          </h1>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-accent mt-2 tracking-tight">
            Saúde Planetária
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl text-white/90 max-w-2xl text-balance leading-relaxed mb-12 font-medium"
        >
          Uma imersão presencial para transformar desafios climáticos urgentes em soluções inovadoras. Você está pronto para o mundo real?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="#inscricao" 
            className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-[0_0_40px_rgba(78,124,30,0.4)] hover:shadow-[0_0_60px_rgba(78,124,30,0.6)] transition-all duration-300 hover:-translate-y-1"
          >
            Quero Participar
          </a>
          <a 
            href="#desafios" 
            className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1"
          >
            Conhecer os Desafios
          </a>
        </motion.div>

      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 w-full border-t border-white/10 bg-black/30 backdrop-blur-md z-10"
      >
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-wrap justify-center sm:justify-between items-center gap-6 text-white text-center">
          <div className="flex flex-col">
            <span className="font-display font-bold text-3xl text-accent">24</span>
            <span className="text-xs uppercase tracking-widest text-white/70 mt-1">Vagas</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/20" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-3xl text-accent">6</span>
            <span className="text-xs uppercase tracking-widest text-white/70 mt-1">Times</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/20" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-3xl text-accent">5</span>
            <span className="text-xs uppercase tracking-widest text-white/70 mt-1">Dias</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/20" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-3xl text-accent">4</span>
            <span className="text-xs uppercase tracking-widest text-white/70 mt-1">ODS Foco</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
