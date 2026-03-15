import React from "react";
import { Mail, MapPin, Calendar, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A0F00] text-white/80 pt-20 pb-10 px-6 border-t-[6px] border-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16">
        
        {/* Brand Col */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-2xl">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo-embaixadores-fundo.png`} 
                alt="Embaixadores Logo" 
                className="w-16 h-16 object-contain rounded-xl"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-white leading-none">Mundo Real</h3>
              <p className="text-accent font-medium mt-1">Saúde Planetária 2026</p>
            </div>
          </div>
          <p className="text-white/70 leading-relaxed text-sm max-w-md">
            Uma imersão baseada na metodologia Design Sprint para transformar desafios climáticos reais em soluções inovadoras.
          </p>
          
          <div className="flex flex-col gap-3 mt-2 text-sm">
            <div className="flex items-center gap-3 text-white/90">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Imperatriz – MA, Brasil</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Edição 2026</span>
            </div>
            <div className="flex items-center gap-3 text-white/90 hover:text-accent transition-colors cursor-pointer w-fit">
              <Mail className="w-4 h-4 text-primary" />
              <span>contato@embaixadoressp.com.br</span>
            </div>
          </div>
        </div>

        {/* Links Col */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-6">
          <h4 className="font-display font-bold text-xl text-white">Navegação</h4>
          <ul className="flex flex-col gap-3">
            {[
              { name: "Sobre o Evento", href: "#sobre" },
              { name: "Desafios do Mundo Real", href: "#desafios" },
              { name: "A Jornada", href: "#jornada" },
              { name: "Times de Inovação", href: "#equipes" },
              { name: "Inscrição", href: "#inscricao" }
            ].map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-white/70 hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ODS Col */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
          <h4 className="font-display font-bold text-xl text-white">Alinhamento Global</h4>
          <p className="text-sm text-white/70">
            Nossos desafios e metodologia estão em sinergia direta com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1.5 rounded-lg bg-[#4C9F38]/20 text-[#4C9F38] border border-[#4C9F38]/30 font-bold text-xs">ODS 3: Saúde</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#C5192D]/20 text-[#C5192D] border border-[#C5192D]/30 font-bold text-xs">ODS 4: Educação</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#3F7E44]/20 text-[#3F7E44] border border-[#3F7E44]/30 font-bold text-xs">ODS 13: Clima</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#19486A]/20 text-[#19486A] border border-[#19486A]/30 font-bold text-xs">ODS 17: Parcerias</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center md:text-left">
        <p>© 2026 Programa Embaixadores Saúde Planetária. Todos os direitos reservados.</p>
        <p>Desenvolvido para o mundo real.</p>
      </div>
    </footer>
  );
}
