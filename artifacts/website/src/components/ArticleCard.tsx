import React from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Article, CATEGORY_STYLES } from "@/data/content";
import { useFilter } from "@/context/FilterContext";

interface ArticleCardProps {
  article: Article;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  const { setSelectedArticle } = useFilter();
  const style = CATEGORY_STYLES[article.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="glass-panel rounded-xl overflow-hidden flex flex-col cursor-pointer group h-full relative border-t-2"
      style={{ borderTopColor: style.color }}
      onClick={() => setSelectedArticle(article)}
    >
      {/* Background glow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${style.color}, transparent 60%)` }}
      />

      <div className="w-full h-48 relative overflow-hidden">
        <img 
          src={article.img} 
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-110"
        />
        <div className="absolute top-4 left-4">
          <span 
            className="px-3 py-1 rounded-md font-mono text-xs font-bold uppercase tracking-wider text-background shadow-lg"
            style={{ backgroundColor: style.color }}
          >
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 leading-tight group-hover:text-white transition-colors">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
            <Clock className="w-3.5 h-3.5" /> {article.duration}
          </div>
          
          <span 
            className="flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300"
            style={{ color: style.color }}
          >
            Ler <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
