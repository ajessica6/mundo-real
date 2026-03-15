import React from "react";
import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Origem Consciente",
      description: "Percorremos o mundo em busca dos solos mais férteis e estabelecemos parcerias com agricultores tradicionais que praticam a agricultura regenerativa."
    },
    {
      number: "02",
      title: "Cultivo Natural",
      description: "Nossos ingredientes crescem no seu próprio ritmo, nutridos apenas pela luz do sol, água da chuva e composto natural, sem aceleração artificial."
    },
    {
      number: "03",
      title: "Extração Cuidadosa",
      description: "Usando métodos de prensagem a frio e extração suave a vapor, preservamos os delicados fitonutrientes e as propriedades vitais de cada planta."
    },
    {
      number: "04",
      title: "Entrega Sustentável",
      description: "Embalado em materiais reciclados pós-consumo e enviado com logística de carbono neutro para chegar fresco à sua porta."
    }
  ];

  return (
    <section id="process" className="py-24 px-6 md:px-[15%] bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-background to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Como Funciona</span>
          <h2 className="text-3xl md:text-5xl font-bold">Da Semente à Alma.</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-[39px] top-4 bottom-4 w-1 bg-secondary rounded-full" />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20 md:pl-28 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group"
              >
                {/* Number Circle */}
                <div className="absolute left-0 top-0 w-14 h-14 md:w-20 md:h-20 rounded-full bg-white border-4 border-secondary flex items-center justify-center font-display font-bold text-lg md:text-2xl text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 z-10 shadow-sm">
                  {step.number}
                </div>
                
                <div className="pt-2 md:pt-4">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
