import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChallengeModal, type ChallengeData } from "@/components/ui/ChallengeModal";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const challengesData: ChallengeData[] = [
  {
    id: "alimentacao",
    title: "Segurança Alimentar e Clima",
    icon: "🌾",
    color: "#E67E22",
    category: "Alimentação",
    sdg: "ODS 2 + ODS 13",
    problem: "As mudanças climáticas já comprometem a produção de alimentos em regiões vulneráveis do Brasil. Secas prolongadas, chuvas irregulares e eventos extremos ameaçam colheitas e a nutrição de populações inteiras.",
    stats: "40% das zonas agrícolas brasileiras enfrentam aumento de estresse hídrico até 2050",
    actions: ["Sistemas agroflorestais digitais", "Agricultura de precisão comunitária", "Distribuição inteligente de sementes"]
  },
  {
    id: "doencas",
    title: "Doenças Emergentes e Vetores",
    icon: "🦟",
    color: "#8E44AD",
    category: "Saúde Coletiva",
    sdg: "ODS 3 + ODS 13",
    problem: "O aquecimento global expande as áreas de incidência de doenças transmitidas por vetores como dengue, malária e leishmaniose. Novas regiões antes temperadas tornam-se altamente vulneráveis.",
    stats: "Dengue registrou 4,2 milhões de casos no Brasil em 2024, recorde histórico",
    actions: ["Vigilância epidemiológica preditiva", "Engajamento comunitário no controle", "Tecnologia de monitoramento rápido"]
  },
  {
    id: "mental",
    title: "Saúde Mental e Crise Climática",
    icon: "🧠",
    color: "#2980B9",
    category: "Saúde Mental",
    sdg: "ODS 3 + ODS 13",
    problem: "A ecoansiedade, o luto ecológico e o trauma pós-desastres climáticos afetam milhões de pessoas. Comunidades que perdem seus territórios sofrem impactos psicológicos profundos e invisíveis.",
    stats: "1 em cada 4 jovens relata ansiedade climática como impacto significativo no dia a dia",
    actions: ["Plataformas de apoio psicossocial", "Educação para resiliência emocional", "Protocolos de trauma climático"]
  },
  {
    id: "agua",
    title: "Recursos Hídricos e Secas",
    icon: "💧",
    color: "#1ABC9C",
    category: "Água",
    sdg: "ODS 6 + ODS 13",
    problem: "O Brasil enfrenta o paradoxo hídrico: enchentes devastadoras em algumas regiões e seca extrema em outras. Rios vitais registram níveis baixos que afetam abastecimento, energia e saúde.",
    stats: "O Rio Amazonas atingiu nível recorde de seca em 2024, afetando mais de 500 mil pessoas",
    actions: ["Gestão descentralizada de cisternas", "Purificação de baixo custo", "Sistemas de alerta precoce"]
  },
  {
    id: "ar",
    title: "Poluição do Ar e Queimadas",
    icon: "💨",
    color: "#E74C3C",
    category: "Ar e Saúde",
    sdg: "ODS 3 + ODS 11",
    problem: "Queimadas recordes, desmatamento e emissão urbana degradam drasticamente a qualidade do ar, superlotando hospitais com crises respiratórias e cardiovasculares.",
    stats: "Queimadas de 2024 geraram a maior pluma de fumaça já registrada no Brasil, cobrindo 25 estados",
    actions: ["Sensores de ar de código aberto", "Telessaúde para crises respiratórias", "Máscaras/filtros sustentáveis"]
  },
  {
    id: "biodiversidade",
    title: "Perda de Biodiversidade e Zoonoses",
    icon: "🌿",
    color: "#27AE60",
    category: "Biodiversidade",
    sdg: "ODS 15 + ODS 3",
    problem: "A destruição de ecossistemas florestais aumenta exponencialmente o risco de zoonoses e novas pandemias. Saúde humana, animal e ambiental são um sistema único (One Health).",
    stats: "75% das doenças infecciosas emergentes em humanos têm origem animal, ligadas à perda de habitat",
    actions: ["Mapeamento de risco zoonótico", "Restauração ecológica baseada em dados", "Educação em Saúde Única"]
  }
];

export function Challenges() {
  const [activeChallenge, setActiveChallenge] = useState<ChallengeData | null>(null);
  
  // Fake state for interactive "interests"
  const [interests, setInterests] = useState<Record<string, boolean>>({});
  const [interestCounts, setInterestCounts] = useState<Record<string, number>>({
    alimentacao: 12, doencas: 18, mental: 24, agua: 15, ar: 21, biodiversidade: 14
  });

  const toggleInterest = (id: string) => {
    setInterests(prev => {
      const isCurrentlyInterested = prev[id] || false;
      
      // Update count
      setInterestCounts(counts => ({
        ...counts,
        [id]: counts[id] + (isCurrentlyInterested ? -1 : 1)
      }));

      return { ...prev, [id]: !isCurrentlyInterested };
    });
  };

  return (
    <section id="desafios" className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Os Desafios do Mundo Real</h2>
          <p className="text-xl text-muted-foreground">
            Seis macrotendências que ameaçam a saúde planetária. Qual problema você e sua equipe vão resolver durante a imersão?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challengesData.map((challenge, idx) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setActiveChallenge(challenge)}
              className="group cursor-pointer bg-white rounded-3xl p-8 border border-border shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden"
            >
              {/* Color accent bar on top */}
              <div 
                className="absolute top-0 left-0 right-0 h-2 w-full transition-transform origin-left group-hover:scale-y-150"
                style={{ backgroundColor: challenge.color }}
              />

              <div className="flex justify-between items-start mb-6 mt-2">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
                  style={{ backgroundColor: `${challenge.color}15` }}
                >
                  {challenge.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-muted text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {challenge.category}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {challenge.title}
              </h3>
              
              <p className="text-muted-foreground line-clamp-3 mb-8">
                {challenge.problem}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    Interessados
                  </span>
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    {interestCounts[challenge.id]} Pessoas
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <ChallengeModal 
        challenge={activeChallenge}
        isOpen={!!activeChallenge}
        onClose={() => setActiveChallenge(null)}
        isInterested={activeChallenge ? !!interests[activeChallenge.id] : false}
        onToggleInterest={() => activeChallenge && toggleInterest(activeChallenge.id)}
      />
    </section>
  );
}
