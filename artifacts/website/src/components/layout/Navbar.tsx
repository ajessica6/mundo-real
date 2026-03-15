import React, { useState, useEffect } from "react";
import { Search, Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFilter } from "@/context/FilterContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useFilter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Fases", href: "#content-grid" },
    { name: "Recursos", href: "#content-grid" },
    { name: "Sobre", href: "#footer" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
        isScrolled 
          ? "glass-panel bg-background/60 py-3 shadow-[0_0_20px_rgba(0,245,255,0.05)] border-b border-secondary/20" 
          : "bg-transparent py-5 border-b border-transparent"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
        <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/30 group-hover:border-secondary transition-colors">
          <Zap className="w-5 h-5 text-secondary neon-text-cyan" />
        </div>
        <span className="font-mono font-bold text-xl md:text-2xl text-foreground tracking-tighter">
          SPRINT_HUB<span className="animate-pulse text-secondary">_</span>
        </span>
      </div>

      {/* Desktop Nav & Search */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm uppercase text-muted-foreground hover:text-foreground hover:neon-text-cyan transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-muted-foreground group-focus-within:text-secondary transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Buscar recursos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-muted/50 border border-border text-foreground text-sm rounded-md pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all font-mono"
          />
        </div>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden p-2 text-foreground hover:text-secondary transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      <div className={cn(
        "absolute top-full left-0 right-0 glass-panel border-t border-secondary/20 overflow-hidden transition-all duration-300 ease-in-out md:hidden flex flex-col",
        mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
      )}>
        <div className="p-4 border-b border-border/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-muted/50 border border-border text-foreground text-sm rounded-md pl-10 pr-4 py-2 focus:outline-none focus:border-secondary font-mono"
            />
          </div>
        </div>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-4 font-mono text-sm uppercase text-foreground/80 hover:bg-secondary/10 hover:text-secondary transition-colors border-b border-border/50 last:border-0"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}
