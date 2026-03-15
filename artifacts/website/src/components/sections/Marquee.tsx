import React from "react";

export function Marquee() {
  const words = [
    "DESIGN SPRINT", 
    "PROTOTIPAGEM RÁPIDA", 
    "TESTE COM USUÁRIOS", 
    "GOOGLE VENTURES", 
    "INOVAÇÃO", 
    "5 DIAS",
    "DESIGN SPRINT", 
    "PROTOTIPAGEM RÁPIDA", 
    "TESTE COM USUÁRIOS", 
    "GOOGLE VENTURES", 
    "INOVAÇÃO", 
    "5 DIAS"
  ];

  return (
    <div className="w-full bg-secondary/10 border-y border-secondary/20 py-3 overflow-hidden flex items-center relative">
      <div className="w-full flex animate-marquee whitespace-nowrap">
        {words.map((word, idx) => (
          <React.Fragment key={idx}>
            <span className="text-secondary font-mono font-bold tracking-widest uppercase text-sm mx-4 neon-text-cyan opacity-80">
              {word}
            </span>
            <span className="text-muted-foreground/50 mx-4">•</span>
          </React.Fragment>
        ))}
        {/* Duplicate for seamless loop */}
        {words.map((word, idx) => (
          <React.Fragment key={`dup-${idx}`}>
            <span className="text-secondary font-mono font-bold tracking-widest uppercase text-sm mx-4 neon-text-cyan opacity-80">
              {word}
            </span>
            <span className="text-muted-foreground/50 mx-4">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
