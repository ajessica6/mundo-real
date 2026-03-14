import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-background z-0" />
      
      {/* Decorative Blur Circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-primary/20 text-primary font-medium text-sm mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          100% Certified Organic
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-balance mb-6"
        >
          Grow Naturally, <br className="hidden md:block" />
          <span className="text-primary relative inline-block">
            Live Sustainably
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance mb-10 leading-relaxed"
        >
          Discover our range of carefully curated organic products, crafted with deep respect for you and the planet we share. Experience nature's finest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="w-full sm:w-auto group" onClick={scrollToFeatures}>
            Explore Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm" onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}>
            Our Process
          </Button>
        </motion.div>
      </div>

      {/* Stock Image Decorative Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto mt-20"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[21/9] bg-white border-4 border-white">
          {/* landing page hero scenic organic farm field */}
          <img 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=1080&fit=crop" 
            alt="Organic lush field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
