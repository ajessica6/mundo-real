import React from "react";
import { motion } from "framer-motion";
import { Sprout, Sun, RefreshCw, Heart } from "lucide-react";

export function Features() {
  const cards = [
    {
      icon: <Sprout className="w-7 h-7" />,
      title: "100% Organic",
      description: "Grown without synthetic pesticides or harmful fertilizers, protecting the ecosystem."
    },
    {
      icon: <Sun className="w-7 h-7" />,
      title: "Fresh Harvest",
      description: "Picked at peak ripeness and delivered directly to ensure maximum nutritional value."
    },
    {
      icon: <RefreshCw className="w-7 h-7" />,
      title: "Eco Packaging",
      description: "All our materials are completely biodegradable, recyclable, or safely compostable."
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Fair Trade",
      description: "We partner directly with small farmers, ensuring fair wages and safe working conditions."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="features" className="py-24 px-6 md:px-[10%] lg:px-[15%] bg-background">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Rooted in Nature</h2>
        <p className="text-muted-foreground text-lg">
          We believe in creating products that don't just minimize harm, but actively contribute to the well-being of our environment.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-8"
      >
        {cards.map((card, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="bg-card w-full sm:w-[calc(50%-16px)] lg:w-[280px] p-8 rounded-2xl shadow-lg shadow-black/5 border border-border/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
