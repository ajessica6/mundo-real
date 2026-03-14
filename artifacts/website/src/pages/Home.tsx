import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Process } from "@/components/sections/Process";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 w-full">
        <Hero />
        <Features />
        <Process />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
