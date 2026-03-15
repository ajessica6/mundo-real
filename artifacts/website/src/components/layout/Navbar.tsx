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
    { name: "Sobre", href: "#sobre" },
    { name: "Desafios", href: "#desafios" },
    { name: "Jornada", href: "#jornada" },
    { name: "Equipes", href: "#equipes" },
    { name: "Pitch", href: "#pitch" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 md:px-10 flex items-center justify-between",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div 
        className="flex items-center gap-3 cursor-pointer group" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/logo-embaixadores.png`} 
          alt="Embaixadores Saúde Planetária" 
          className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <div className="flex flex-col">
          <span className={cn(
            "font-display font-bold text-lg md:text-xl leading-tight transition-colors duration-300",
            isScrolled ? "text-foreground" : "text-white"
          )}>
            Mundo Real
          </span>
          <span className={cn(
            "font-sans text-xs md:text-sm font-medium tracking-wide uppercase opacity-90 transition-colors duration-300",
            isScrolled ? "text-primary" : "text-accent"
          )}>
            Saúde Planetária
          </span>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={cn(
              "font-medium text-sm tracking-wide transition-all relative group overflow-hidden px-1 py-2",
              isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            )}
          >
            {link.name}
            <span className={cn(
              "absolute bottom-0 left-0 w-full h-0.5 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
              isScrolled ? "bg-primary" : "bg-accent"
            )} />
          </a>
        ))}
        <a 
          href="#inscricao"
          className="px-6 py-2.5 rounded-full font-bold text-sm bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
        >
          Inscreva-se
        </a>
      </nav>

      {/* Mobile Toggle */}
      <button 
        className={cn(
          "lg:hidden p-2 rounded-full transition-colors",
          isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/20"
        )}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-white shadow-2xl overflow-hidden transition-all duration-300 ease-in-out lg:hidden flex flex-col origin-top",
        mobileMenuOpen ? "scale-y-100 opacity-100 border-t border-border" : "scale-y-0 opacity-0"
      )}>
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-foreground font-medium hover:bg-muted hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2 px-4">
            <a 
              href="#inscricao"
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-center w-full px-6 py-3 rounded-xl font-bold text-base bg-primary text-primary-foreground shadow-lg shadow-primary/20"
            >
              Inscreva-se Agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
