import React, { createContext, useContext, useState, ReactNode } from "react";
import { Category, Article } from "@/data/content";

interface FilterContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: Category | "Todos";
  setActiveCategory: (category: Category | "Todos") => void;
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article | null) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "Todos">("Todos");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <FilterContext.Provider 
      value={{ 
        searchQuery, 
        setSearchQuery, 
        activeCategory, 
        setActiveCategory,
        selectedArticle,
        setSelectedArticle
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
