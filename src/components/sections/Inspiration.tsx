'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Sparkles, Zap, Brain, HeartPulse } from 'lucide-react';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';

const quotes = [
    {
        text: "La tecnología más avanzada es la que se vuelve invisible y se enfoca en lo que realmente importa: la vida humana.",
        author: "Visión BioAI",
        icon: HeartPulse
    },
    {
        text: "En la intersección entre la ingeniería clínica y la IA, no solo procesamos datos, salvamos futuros.",
        author: "Propósito Profesional",
        icon: Brain
    },
    {
        text: "La verdadera innovación no es crear máquinas que piensen como humanos, sino herramientas que permitan a los humanos sanar mejor.",
        author: "Filosofía Técnica",
        icon: Sparkles
    }
];

export const Inspiration = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextQuote = () => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
    };

    useEffect(() => {
        const timer = setInterval(nextQuote, 8000);
        return () => clearInterval(timer);
    }, []);

    const CurrentIcon = quotes[currentIndex].icon;

    return (
        <Section id="inspiracion" className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
            </div>

            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -top-12 -left-8 text-primary/10">
                        <Quote size={120} />
                    </div>

                    <div 
                        className="relative z-10 bg-card/30 backdrop-blur-xl border border-primary/10 rounded-[2rem] p-12 md:p-16 text-center shadow-2xl overflow-hidden group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Interactive Digital Pulse Background */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 pointer-events-none"
                                >
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1.5, opacity: [0, 0.2, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                                            className="absolute inset-0 border border-primary/20 rounded-full"
                                        />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-8"
                            >
                                <div className="flex justify-center">
                                    <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                                        <CurrentIcon size={40} className="animate-pulse" />
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight italic text-foreground/90">
                                    "{quotes[currentIndex].text}"
                                </h3>

                                <div className="flex flex-col items-center gap-2">
                                    <span className="text-sm font-black uppercase tracking-[0.4em] text-primary">
                                        {quotes[currentIndex].author}
                                    </span>
                                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-12 flex justify-center gap-4">
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={nextQuote}
                                className="rounded-full px-6 hover:bg-primary/10 text-[10px] font-black uppercase tracking-widest border border-primary/5"
                            >
                                <Zap className="w-3 h-3 mr-2 text-primary" />
                                Generar Inspiración
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};
