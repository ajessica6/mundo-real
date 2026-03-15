import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar } from "lucide-react";
import { useFilter } from "@/context/FilterContext";
import { CATEGORY_STYLES } from "@/data/content";

export function ArticleModal() {
  const { selectedArticle, setSelectedArticle } = useFilter();

  if (!selectedArticle) return null;

  const style = CATEGORY_STYLES[selectedArticle.category];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-md"
          onClick={() => setSelectedArticle(null)}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 30 }}
          className="relative w-full max-w-4xl glass-panel bg-background/95 rounded-xl border border-white/10 shadow-2xl overflow-hidden my-auto"
          style={{ boxShadow: `0 0 40px ${style.color}20` }}
        >
          {/* Top colored accent line */}
          <div className="h-1 w-full" style={{ backgroundColor: style.color }} />

          <button 
            onClick={() => setSelectedArticle(null)}
            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
          >
            <X size={18} />
          </button>

          <div className="overflow-y-auto max-h-[85vh] no-scrollbar">
            {/* Hero Image */}
            <div className="w-full h-64 sm:h-80 relative">
              <img 
                src={selectedArticle.img} 
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span 
                  className="inline-block px-3 py-1 mb-4 rounded-md font-mono text-xs font-bold uppercase tracking-wider text-background shadow-lg"
                  style={{ backgroundColor: style.color }}
                >
                  {selectedArticle.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-white/10 text-sm font-mono text-muted-foreground uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: style.color }} /> 
                  Tempo estimado: {selectedArticle.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" style={{ color: style.color }} /> 
                  Publicado em: {selectedArticle.date}
                </span>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-white/90 leading-relaxed font-medium mb-8">
                  {selectedArticle.excerpt}
                </p>
                
                {selectedArticle.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="px-8 py-3 rounded-md font-mono font-bold uppercase tracking-wider text-background transition-all hover:scale-105"
                  style={{ backgroundColor: style.color, boxShadow: `0 0 20px ${style.color}50` }}
                >
                  Fechar Artigo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
