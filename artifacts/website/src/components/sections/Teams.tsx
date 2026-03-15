import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Leaf, Laptop, BookOpen } from "lucide-react";

export function Teams() {
  const areas = [
    {
      title: "Saúde",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600 border-blue-100",
      roles: "Medicina, Enfermagem, Saúde Coletiva, Farmácia, Odontologia..."
    },
    {
      title: "Ciências Ambientais",
      icon: <Leaf className="w-8 h-8" />,
      color: "bg-green-50 text-green-600 border-green-100",
      roles: "Biologia, Ecologia, Gestão Ambiental, Agronomia, Eng. Florestal..."
    },
    {
      title: "Tecnologia & Dados",
      icon: <Laptop className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600 border-purple-100",
      roles: "Computação, Engenharias, Estatística, Sistemas de Informação..."
    },
    {
      title: "Ciências Humanas",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600 border-orange-100",
      roles: "Psicologia, Sociologia, Comunicação, Direito, Administração..."
    }
  ];

  return (
    <section id="equipes" className="py-24 px-6 md:px-10 bg-muted">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/3 flex flex-col gap-6"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Estrutura</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Times de Inovação</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mt-2">
            A inovação genuína não surge em silos. No <strong className="text-foreground">Mundo Real</strong>, você não trabalhará apenas com seus pares.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As equipes serão formadas de maneira estratégica com <strong>3 a 5 participantes</strong> de áreas completamente distintas. A diversidade de pensamento é o nosso maior ativo para desenvolver soluções que a ciência aprova e a sociedade abraça.
          </p>
        </motion.div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border ${area.color.split(' ')[2]} bg-white shadow-xl shadow-black/5 flex flex-col gap-4 hover:-translate-y-1 transition-transform`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${area.color.split(' ')[0]} ${area.color.split(' ')[1]}`}>
                {area.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">{area.title}</h3>
              <p className="text-muted-foreground font-medium">{area.roles}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
