import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Zap } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-muted relative overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="mb-2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">O Que É Esta Imersão?</span>
              <h2 className="text-4xl md:text-5xl font-display mt-3 text-foreground leading-tight">
                Um Laboratório Vivo para o Futuro
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              O <strong className="text-foreground">Mundo Real – Saúde Planetária</strong> é uma imersão intensiva presencial focada na resolução de problemas complexos gerados pelas mudanças climáticas no Brasil.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Utilizando a metodologia <strong className="text-foreground">Design Sprint</strong>, times interdisciplinares são desafiados a entender a raiz de um problema, idear soluções fora da caixa, prototipar ideias e validar conceitos em um curto espaço de tempo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa abordagem une rigor científico e ação prática, reconhecendo que a saúde humana e a saúde do planeta são sistemas interdependentes que requerem intervenção imediata.
            </p>

            {/* ODS Badges */}
            <div className="mt-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Alinhamento Agenda 2030</h4>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-xl bg-white shadow-sm border border-border flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#4C9F38]" />
                  <span className="font-bold text-sm text-foreground">ODS 3</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white shadow-sm border border-border flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C5192D]" />
                  <span className="font-bold text-sm text-foreground">ODS 4</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white shadow-sm border border-border flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#3F7E44]" />
                  <span className="font-bold text-sm text-foreground">ODS 13</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white shadow-sm border border-border flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#19486A]" />
                  <span className="font-bold text-sm text-foreground">ODS 17</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Column */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 border border-border group hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Metodologia Design Sprint</h3>
              <p className="text-muted-foreground">
                Um processo estruturado de 5 fases para responder questões críticas de negócios (ou socioambientais) através de design, prototipagem e teste de ideias.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 border border-border group hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Times Multidisciplinares</h3>
              <p className="text-muted-foreground">
                A inovação acontece nas interseções. Equipes formadas por pessoas de Saúde, Tecnologia, Humanas e Ambientais colaborando radicalmente.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 border border-border group hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Impacto Real</h3>
              <p className="text-muted-foreground">
                Não é apenas um exercício acadêmico. As propostas são avaliadas por uma banca de especialistas visando viabilidade e implementação no mundo real.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
