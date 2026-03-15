import React, { useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { FilterBar } from "@/components/FilterBar";
import { FeaturedCard } from "@/components/FeaturedCard";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleModal } from "@/components/ArticleModal";
import { Footer } from "@/components/layout/Footer";
import { useFilter } from "@/context/FilterContext";
import { ARTICLES } from "@/data/content";
import { SearchX } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { searchQuery, activeCategory } = useFilter();

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory = activeCategory === "Todos" || article.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = query === "" || 
        article.title.toLowerCase().includes(query) || 
        article.excerpt.toLowerCase().includes(query);
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Marquee />
      
      <main id="content-grid" className="flex-1 relative pt-10">
        <FilterBar />
        
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Only show featured if no active search or filter */}
          {activeCategory === "Todos" && !searchQuery && (
            <FeaturedCard />
          )}

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((article, idx) => (
                <ArticleCard key={article.id} article={article} index={idx} />
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]"
            >
              <SearchX className="w-16 h-16 text-muted-foreground mb-6 opacity-50" />
              <h3 className="text-2xl font-bold text-white mb-2">Nenhum resultado encontrado</h3>
              <p className="text-muted-foreground font-mono">Tente buscar com outros termos ou limpe os filtros.</p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
      <ArticleModal />
    </div>
  );
}
