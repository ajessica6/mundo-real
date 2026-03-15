import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ChallengeData = {
  id: string;
  title: string;
  icon: string;
  color: string;
  category: string;
  sdg: string;
  problem: string;
  stats: string;
  actions: string[];
};

interface ChallengeModalProps {
  challenge: ChallengeData | null;
  isOpen: boolean;
  onClose: () => void;
  isInterested: boolean;
  onToggleInterest: () => void;
}

export function ChallengeModal({ challenge, isOpen, onClose, isInterested, onToggleInterest }: ChallengeModalProps) {
  if (!challenge) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl pointer-events-auto flex flex-col"
            >
              {/* Header Header with dynamic color */}
              <div 
                className="relative pt-12 pb-8 px-8 text-white rounded-t-3xl overflow-hidden shrink-0"
                style={{ backgroundColor: challenge.color }}
              >
                <div className="absolute top-0 right-0 p-4">
                  <button 
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{challenge.icon}</span>
                  <div>
                    <div className="flex gap-2 items-center mb-1">
                      <span className="px-2.5 py-1 rounded-md bg-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-sm">
                        {challenge.category}
                      </span>
                      <span className="text-white/80 font-medium text-xs">
                        {challenge.sdg}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                      {challenge.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col gap-8">
                
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" /> O Problema
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                    {challenge.problem}
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-2xl border border-border">
                  <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Dado Alarmante</h3>
                  <p className="font-display text-xl md:text-2xl font-bold text-foreground">
                    "{challenge.stats}"
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" /> Caminhos de Solução (Design Sprint)
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {challenge.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-3 bg-white border border-border p-4 rounded-xl shadow-sm">
                        <ArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/80 font-medium">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-border flex justify-between items-center mt-auto">
                  <p className="text-sm text-muted-foreground max-w-[200px] hidden sm:block">
                    Sinalize interesse para trabalhar com este tema durante a imersão.
                  </p>
                  <button
                    onClick={onToggleInterest}
                    className={cn(
                      "w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3",
                      isInterested 
                        ? "bg-primary text-white shadow-lg shadow-primary/30 scale-[1.02]" 
                        : "bg-muted text-foreground hover:bg-border border border-border"
                    )}
                  >
                    {isInterested ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        Interesse Sinalizado
                      </>
                    ) : (
                      "Sinalizar Interesse"
                    )}
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
