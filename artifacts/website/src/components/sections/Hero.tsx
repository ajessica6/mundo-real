import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export function Hero() {
  const scrollToContent = () => {
    document.getElementById("content-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh] md:min-h-screen">
      
      {/* Animated Gradient Background Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/20 rounded-full blur-[100px] animate-float z-0" />
      <div className="absolute bottom-[20%] right-[15%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-secondary/15 rounded-full blur-[100px] animate-float-delayed z-0" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-accent/15 rounded-full blur-[80px] animate-float z-0" style={{ animationDuration: '12s' }} />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 md:mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-secondary/30 text-secondary font-mono text-xs font-bold tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ boxShadow: "0 0 10px #00F5FF" }} />
          Metodologia Oficial GV
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center uppercase"
        >
          <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-widest opacity-90 mb-[-10px] md:mb-[-20px] z-10">
            Domine o
          </span>
          <span className="text-6xl md:text-8xl lg:text-[9rem] font-bold text-transparent bg-clip-text bg-gradient-to-br from-secondary via-primary to-accent tracking-tighter leading-none" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
            DESIGN SPRINT
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed font-sans"
        >
          A metodologia desenvolvida no Google para resolver grandes problemas e testar novas ideias em apenas <strong className="text-white">5 dias</strong>. Usada por Airbnb, Slack e Uber.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
        >
          <button 
            onClick={scrollToContent}
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-mono font-bold uppercase text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(191,95,255,0.4)] hover:shadow-[0_0_30px_rgba(191,95,255,0.6)] hover:-translate-y-1 rounded-sm"
          >
            Começar Agora
            <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={scrollToContent}
            className="w-full sm:w-auto px-8 py-4 glass-panel border-secondary/50 text-secondary font-mono font-bold uppercase text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-secondary/10 transition-all hover:-translate-y-1 rounded-sm"
          >
            <BookOpen className="w-4 h-4" />
            Ver Conteúdo
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-3xl mt-20"
        >
          {[
            { value: "200+", label: "Recursos", color: "text-secondary" },
            { value: "5", label: "Fases Práticas", color: "text-primary" },
            { value: "10k+", label: "Alunos Formados", color: "text-accent" },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-6 rounded-lg flex flex-col items-center justify-center border-white/5 hover:border-white/10 transition-colors">
              <span className={`text-4xl font-bold font-mono ${stat.color}`}>{stat.value}</span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest mt-2 font-mono">{stat.label}</span>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
