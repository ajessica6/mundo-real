import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Challenges } from "@/components/sections/Challenges";
import { Timeline } from "@/components/sections/Timeline";
import { Teams } from "@/components/sections/Teams";
import { Pitch } from "@/components/sections/Pitch";
import { Registration } from "@/components/sections/Registration";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Challenges />
        <Timeline />
        <Teams />
        <Pitch />
        <Registration />
      </main>

      <Footer />
    </div>
  );
}
