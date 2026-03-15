import React from "react";
import { motion } from "framer-motion";
import { Video, Mic, FileText, Presentation } from "lucide-react";

export function Pitch() {
  const criteria = [
    { title: "Problema", desc: "Clareza na definição e relevância do problema escolhido.", pts: 20 },
    { title: "Base Científica", desc: "Uso de evidências e literatura para embasar a proposta.", pts: 20 },
    { title: "Inovação", desc: "Originalidade e criatividade da solução apresentada.", pts: 20 },
    { title: "Impacto", desc: "Contribuição potencial para a saúde humana e planetária.", pts: 20 },
    { title: "Viabilidade", desc: "Plausibilidade técnica e econômica de implementação.", pts: 20 },
  ];

  return (
    <section id="pitch" className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Idea Pitch</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Sua proposta em ação. O momento ápice onde as equipes defendem suas soluções para uma banca avaliadora de especialistas.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left: Criteria */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-2xl font-bold font-display text-primary flex items-center gap-3">
            Critérios de Avaliação
            <span className="text-sm font-sans font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">100 Pts</span>
          </h3>
          
          <div className="space-y-4">
            {criteria.map((item, idx) => (
              <div key={idx} className="bg-muted p-5 rounded-2xl border border-border flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row">
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
                <div className="font-display font-bold text-2xl text-accent shrink-0">
                  {item.pts} <span className="text-sm text-muted-foreground font-sans font-medium">pts</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Format */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#2D5016] rounded-3xl p-8 md:p-12 text-white flex flex-col shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
          
          <h3 className="text-3xl font-bold font-display mb-8 relative z-10">Formato da Entrega</h3>
          
          <div className="flex flex-col gap-8 relative z-10 flex-grow">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Video className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Vídeo Pitch (5 min)</h4>
                <p className="text-white/70 leading-relaxed">Vídeo gravado pela equipe apresentando a solução de forma clara, criativa e persuasiva.</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Resumo Escrito</h4>
                <p className="text-white/70 leading-relaxed">Texto de até 300 palavras sintetizando o problema atacado e o núcleo da inovação proposta.</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Mic className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Sabatina (3 min)</h4>
                <p className="text-white/70 leading-relaxed">Sessão ao vivo de Perguntas e Respostas com a banca após a exibição do vídeo.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Presentation className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Material de Apoio</h4>
                <p className="text-white/70 leading-relaxed">Uso opcional de slides ou protótipos físicos/digitais durante a defesa presencial.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
