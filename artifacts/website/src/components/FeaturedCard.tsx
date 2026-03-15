import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star } from "lucide-react";
import { FEATURED_ARTICLE, CATEGORY_STYLES } from "@/data/content";
import { useFilter } from "@/context/FilterContext";

export function FeaturedCard() {
  const { setSelectedArticle } = useFilter();
  const style = CATEGORY_STYLES[FEATURED_ARTICLE.category];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto mb-16 group cursor-pointer"
      onClick={() => setSelectedArticle(FEATURED_ARTICLE)}
    >
      <div className="glass-panel rounded-xl overflow-hidden flex flex-col md:flex-row relative border-l-4" style={{ borderLeftColor: style.color }}>
        
        {/* Glow behind card */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at 0% 0%, ${style.color}, transparent 70%)` }} />

        <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded-md font-mono text-xs font-bold uppercase tracking-wider">
              <Star className="w-3 h-3" /> Destaque
            </span>
            <span 
              className="px-3 py-1 rounded-md font-mono text-xs font-bold uppercase tracking-wider text-background"
              style={{ backgroundColor: style.color }}
            >
              {FEATURED_ARTICLE.category}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
            {FEATURED_ARTICLE.title}
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed line-clamp-3">
            {FEATURED_ARTICLE.excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {FEATURED_ARTICLE.duration}
              </span>
              <span>•</span>
              <span>{FEATURED_ARTICLE.date}</span>
            </div>
            
            <span 
              className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform"
              style={{ color: style.color }}
            >
              Ler Completo <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        <div className="md:w-[45%] h-64 md:h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10 hidden md:block" />
          <img 
            src={FEATURED_ARTICLE.img} 
            alt={FEATURED_ARTICLE.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-125 saturate-110"
          />
        </div>
      </div>
    </motion.div>
  );
}
