import React from "react";
import { Leaf, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground pt-16 pb-8 px-6 md:px-[15%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-secondary" />
            <span className="font-display font-bold text-2xl tracking-tight text-white">Natura.</span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed max-w-xs">
            Comprometidos em trazer os produtos mais puros e sustentáveis, diretamente da terra para a sua casa.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-display font-semibold text-lg text-white">Links Rápidos</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="#home" className="text-white/80 hover:text-secondary transition-colors">Início</a></li>
            <li><a href="#features" className="text-white/80 hover:text-secondary transition-colors">Nossos Valores</a></li>
            <li><a href="#process" className="text-white/80 hover:text-secondary transition-colors">Como Funciona</a></li>
            <li><a href="#about" className="text-white/80 hover:text-secondary transition-colors">Sobre Nós</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-display font-semibold text-lg text-white">Contato</h4>
          <ul className="flex flex-col gap-2 text-white/80 text-center md:text-left">
            <li>Rua das Palmeiras, 123</li>
            <li>São Paulo, SP 01310-100</li>
            <li className="mt-2 text-secondary hover:text-white transition-colors cursor-pointer">ola@natura.com.br</li>
            <li className="text-secondary hover:text-white transition-colors cursor-pointer">(11) 9 1234-5678</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Natura Orgânicos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
