import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Cta() {
  const handleJoin = () => {
    alert("Em um app real, isso abriria um modal de cadastro ou redirecionaria para a loja!");
  };

  return (
    <section id="about" className="py-24 px-6 md:px-10 relative overflow-hidden flex justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/cta-bg.png`}
          alt="Textura de fundo terrosa"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-16 rounded-3xl max-w-4xl text-center text-white shadow-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Adote um Estilo de Vida Natural
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Junte-se a milhares de pessoas conscientes que fizeram a transição para uma vida sustentável. Comece sua jornada com a Natura hoje e sinta a diferença orgânica.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all text-lg font-bold" onClick={handleJoin}>
            Comece Agora
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-lg" onClick={() => window.scrollTo(0,0)}>
            Voltar ao Topo
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
