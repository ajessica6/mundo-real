import React from "react";
import { Zap, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-background border-t border-white/5 pt-20 pb-10 px-6 mt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-3xl h-[200px] bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative flex items-center justify-center w-8 h-8 rounded bg-secondary/10 border border-secondary/30">
                <Zap className="w-4 h-4 text-secondary" />
              </div>
              <span className="font-mono font-bold text-xl text-foreground tracking-tighter">
                SPRINT_HUB
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              A plataforma definitiva para aprender, aplicar e dominar a metodologia Design Sprint. Acelere a inovação na sua equipe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/50 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-mono font-bold text-white uppercase tracking-widest mb-6 text-sm">Plataforma</h4>
            <ul className="flex flex-col gap-3 font-mono text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">Artigos</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Ferramentas</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Casos de Uso</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Templates</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono font-bold text-white uppercase tracking-widest mb-6 text-sm">Fases</h4>
            <ul className="flex flex-col gap-3 font-mono text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-phase-1 transition-colors">1. Entender</a></li>
              <li><a href="#" className="hover:text-phase-2 transition-colors">2. Definir</a></li>
              <li><a href="#" className="hover:text-phase-3 transition-colors">3. Divergir</a></li>
              <li><a href="#" className="hover:text-phase-4 transition-colors">4. Prototipar</a></li>
              <li><a href="#" className="hover:text-phase-5 transition-colors">5. Testar</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono font-bold text-white uppercase tracking-widest mb-6 text-sm">Empresa</h4>
            <ul className="flex flex-col gap-3 font-mono text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Termos</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Sprint Hub. Todos os direitos reservados.</p>
          <p>Feito com <Zap className="inline w-3 h-3 text-secondary mx-1" /> no Brasil.</p>
        </div>
      </div>
    </footer>
  );
}
