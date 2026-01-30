'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Briefcase, MessageCircle, Database, ChevronRight, Zap } from 'lucide-react';
import { Section } from '@/components/Section';
import { skillsData } from '@/lib/data';
import { cn } from '@/lib/utils';

const iconMap: { [key: string]: any } = {
    programacion: Code,
    ia: Brain,
    profesionales: Briefcase,
    blandas: MessageCircle,
};

export const SkillsSection = () => {
    return (
        <Section id="habilidades" className="relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="space-y-4">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Competencias</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Stack Tecnológico</h3>
                </div>
                <p className="text-muted-foreground max-w-md md:text-right">
                    Sinergia entre la ingeniería biomédica y la inteligencia artificial para resolver problemas complejos.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(skillsData).map(([key, category], index) => {
                    const Icon = iconMap[key] || Zap;
                    return (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                        >
                            <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                                <Icon className="h-6 w-6" />
                            </div>

                            <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {category.title}
                            </h4>

                            <ul className="space-y-3">
                                {category.items.map((skill, i) => (
                                    <li key={i} className="flex items-center gap-2 group/item">
                                        <ChevronRight className="h-3 w-3 text-accent opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                                            {skill}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};
