import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Valores", href: "#features" },
    { name: "Processo", href: "#process" },
    { name: "Sobre", href: "#about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-10 py-4",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
        <img 
          src={`${import.meta.env.BASE_URL}images/logo.png`} 
          alt="Logo Natura" 
          className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-sm object-cover bg-white"
        />
        <span className="font-display font-bold text-xl md:text-2xl text-foreground tracking-tight">
          Natura.
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-foreground/80 hover:text-primary font-medium text-[15px] transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden p-2 text-foreground"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out md:hidden flex flex-col",
        mobileMenuOpen ? "max-h-64 opacity-100 border-t border-border" : "max-h-0 opacity-0"
      )}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-4 text-foreground/80 font-medium hover:bg-primary/5 hover:text-primary transition-colors border-b border-border/50 last:border-0"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}
