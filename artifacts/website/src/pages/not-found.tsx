import { Link } from "wouter";
import { Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        <Zap className="w-20 h-20 text-accent mb-8" />
        <h1 className="text-8xl md:text-9xl font-black font-mono text-white mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Página não encontrada</h2>
        <p className="text-muted-foreground max-w-md mb-10 font-mono">
          O link que você acessou pode estar quebrado ou a página foi removida da plataforma.
        </p>
        
        <Link 
          href="/" 
          className="px-8 py-4 bg-secondary text-background font-mono font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-[0_0_20px_rgba(0,245,255,0.4)] rounded-sm"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
