import React from "react";
import { motion } from "framer-motion";
import { Tent, Lightbulb, Trophy } from "lucide-react";

export function Timeline() {
  const steps = [
    {
      title: "1º Fim de Semana",
      subtitle: "Imersão & Descoberta",
      icon: <Tent className="w-8 h-8" />,
      items: [
        "Abertura e apresentação do programa",
        "Introdução aos conceitos de Saúde Planetária",
        "Apresentação profunda dos 6 Desafios",
        "Formação dinâmica das equipes multidisciplinares",
        "Design Sprint: Mapeamento e Análise do Problema",
        "Ideação inicial de soluções (Divergir)"
      ]
    },
    {
      title: "Semana Intermediária",
      subtitle: "Construção Remota",
      icon: <Lightbulb className="w-8 h-8" />,
      items: [
        "Desenvolvimento remoto e assíncrono das propostas",
        "Sessões de mentoria online com especialistas",
        "Refinamento do conceito da solução",
        "Produção do roteiro e gravação do Idea Pitch (5 min)",
        "Elaboração do resumo executivo escrito (300 palavras)"
      ]
    },
    {
      title: "2º Fim de Semana",
      subtitle: "Validação & Pitch",
      icon: <Trophy className="w-8 h-8" />,
      items: [
        "Design Sprint: Preparação final para teste",
        "Apresentação oficial dos Pitches para a banca",
        "Sessão de sabatina e defesa de ideias (Q&A)",
        "Avaliação dos Projetos com base em critérios técnicos",
        "Premiação: Solução Mais Inovadora do evento",
        "Networking, Encerramento e Certificação"
      ]
    }
  ];

  return (
    <section id="jornada" className="py-24 px-6 md:px-10 bg-[#2D5016] text-white relative overflow-hidden">
      
      {/* Subtle Leaf Pattern Background (using CSS grid dots as fallback) */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">Cronograma</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white">A Jornada</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-1 bg-white/20 z-0" />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Icon Node */}
              <div className="w-36 h-36 rounded-full bg-[#1A2E0D] border-[6px] border-[#2D5016] flex items-center justify-center text-accent mb-8 shadow-2xl group-hover:scale-110 group-hover:bg-accent group-hover:text-[#1A2E0D] group-hover:border-white/20 transition-all duration-500">
                {step.icon}
              </div>

              {/* Content */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 w-full h-full text-left shadow-xl">
                <div className="mb-6 text-center border-b border-white/10 pb-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-accent font-medium uppercase tracking-wider text-xs">{step.subtitle}</p>
                </div>
                <ul className="space-y-4">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      <span className="leading-snug text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
