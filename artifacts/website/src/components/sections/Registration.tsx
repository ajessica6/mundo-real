import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3, "Nome completo é obrigatório"),
  institution: z.string().min(2, "Instituição é obrigatória"),
  course: z.string().min(2, "Curso/Área é obrigatório"),
  city: z.string().min(2, "Cidade é obrigatória"),
  area: z.string().min(1, "Selecione uma área de interesse"),
  motivation: z.string().min(10, "A motivação deve ter pelo menos 10 caracteres").max(300, "Máximo de 300 caracteres")
});

type FormValues = z.infer<typeof formSchema>;

export function Registration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const motivationText = watch("motivation") || "";

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Fake API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="inscricao" className="py-24 px-6 md:px-10 bg-gradient-to-br from-[#1A2E0D] to-secondary relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,100 C20,80 40,90 60,50 C80,10 100,20 100,0 L100,100 Z" fill="currentColor" className="text-accent" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-12 text-white">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Pronto para o Mundo Real?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            São apenas <span className="text-accent font-bold">24 vagas</span> disponíveis. A diversidade de áreas, instituições e perfis é o principal critério de seleção.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">Nome Completo</label>
                    <input 
                      {...register("name")}
                      className="w-full px-5 py-4 rounded-xl bg-input border-2 border-transparent focus:border-primary focus:outline-none transition-colors text-foreground"
                      placeholder="Ex: Maria Silva"
                    />
                    {errors.name && <span className="text-destructive text-xs font-medium">{errors.name.message}</span>}
                  </div>

                  {/* Institution */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">Instituição de Ensino / Trabalho</label>
                    <input 
                      {...register("institution")}
                      className="w-full px-5 py-4 rounded-xl bg-input border-2 border-transparent focus:border-primary focus:outline-none transition-colors text-foreground"
                      placeholder="Ex: Universidade Federal..."
                    />
                    {errors.institution && <span className="text-destructive text-xs font-medium">{errors.institution.message}</span>}
                  </div>

                  {/* Course */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">Curso / Área de Atuação</label>
                    <input 
                      {...register("course")}
                      className="w-full px-5 py-4 rounded-xl bg-input border-2 border-transparent focus:border-primary focus:outline-none transition-colors text-foreground"
                      placeholder="Ex: Enfermagem, Engenharia..."
                    />
                    {errors.course && <span className="text-destructive text-xs font-medium">{errors.course.message}</span>}
                  </div>

                  {/* City */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-foreground">Cidade de Residência</label>
                    <input 
                      {...register("city")}
                      className="w-full px-5 py-4 rounded-xl bg-input border-2 border-transparent focus:border-primary focus:outline-none transition-colors text-foreground"
                      placeholder="Ex: Imperatriz - MA"
                    />
                    {errors.city && <span className="text-destructive text-xs font-medium">{errors.city.message}</span>}
                  </div>
                </div>

                {/* Area Dropdown */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-foreground">Macrogrupo de Interesse</label>
                  <select 
                    {...register("area")}
                    className="w-full px-5 py-4 rounded-xl bg-input border-2 border-transparent focus:border-primary focus:outline-none transition-colors text-foreground appearance-none"
                  >
                    <option value="">Selecione sua área principal...</option>
                    <option value="saude">Saúde e Biológicas</option>
                    <option value="ambiental">Ciências Ambientais e Terra</option>
                    <option value="tech">Tecnologia, Dados e Exatas</option>
                    <option value="humanas">Ciências Humanas e Sociais</option>
                    <option value="outra">Outra / Interdisciplinar</option>
                  </select>
                  {errors.area && <span className="text-destructive text-xs font-medium">{errors.area.message}</span>}
                </div>

                {/* Motivation Textarea */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-bold text-foreground">Motivação para participar</label>
                    <span className={`text-xs font-medium ${motivationText.length > 300 ? 'text-destructive' : 'text-muted-foreground'}`}>
                      {motivationText.length}/300
                    </span>
                  </div>
                  <textarea 
                    {...register("motivation")}
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl bg-input border-2 border-transparent focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                    placeholder="Por que você deseja resolver desafios climáticos?"
                  />
                  {errors.motivation && <span className="text-destructive text-xs font-medium">{errors.motivation.message}</span>}
                </div>

                {/* Submit */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full py-5 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" /> Processando...
                    </>
                  ) : (
                    "Enviar Inscrição"
                  )}
                </button>
                <p className="text-center text-xs text-muted-foreground font-medium mt-2">
                  Seus dados estão seguros e serão usados apenas para seleção do programa.
                </p>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="font-display text-4xl font-bold text-foreground mb-4">Inscrição Recebida!</h3>
                <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-8">
                  Agradecemos o seu interesse no <strong className="text-primary">Mundo Real</strong>. Nossa equipe vai analisar seu perfil e entraremos em contato pelos canais oficiais em breve.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Fazer outra inscrição
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
