import React from "react";
import { useFilter } from "@/context/FilterContext";
import { ALL_CATEGORIES, Category, CATEGORY_STYLES } from "@/data/content";

export function FilterBar() {
  const { activeCategory, setActiveCategory } = useFilter();

  return (
    <div className="sticky top-[73px] z-40 w-full glass-panel border-x-0 border-y border-white/10 py-4 px-6 md:px-10 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-3 min-w-max max-w-7xl mx-auto">
        <button
          onClick={() => setActiveCategory("Todos")}
          className={`px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
            activeCategory === "Todos"
              ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              : "bg-white/5 text-muted-foreground border border-white/10 hover:border-white/30 hover:text-white"
          }`}
        >
          Todos
        </button>
        
        {ALL_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          const style = CATEGORY_STYLES[cat];
          
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                isActive
                  ? `${style.bg} text-background ${style.border} ${style.shadow}`
                  : `bg-white/5 text-muted-foreground border-white/10 hover:border-white/30 hover:text-white`
              }`}
              style={isActive ? { boxShadow: `0 0 15px ${style.color}80` } : {}}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
