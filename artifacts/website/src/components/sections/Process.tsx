import React from "react";
import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Mindful Sourcing",
      description: "We travel the globe to find the most fertile soils and partner with generational farmers who practice regenerative agriculture."
    },
    {
      number: "02",
      title: "Natural Cultivation",
      description: "Our ingredients grow at their own pace, nourished only by sunlight, rainwater, and natural compost without artificial acceleration."
    },
    {
      number: "03",
      title: "Careful Extraction",
      description: "Using cold-press and gentle steam extraction methods, we preserve the delicate phytonutrients and vital properties of every plant."
    },
    {
      number: "04",
      title: "Sustainable Delivery",
      description: "Packaged in minimal, post-consumer recycled materials and shipped using carbon-neutral logistics to arrive fresh at your door."
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
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold">From Seed to Soul.</h2>
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
