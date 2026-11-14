'use client';

import { motion } from 'framer-motion';
import { Brain, Database, Briefcase, Code, ShieldCheck, Wrench } from 'lucide-react';
import { Section } from '@/components/Section';
import { formatMarkdown } from '@/lib/format-text';
import type { Specialty, Stat } from '@/content';

const iconMap = {
    brain: Brain,
    database: Database,
    briefcase: Briefcase,
    code: Code,
    shield: ShieldCheck,
    wrench: Wrench,
};

export const SpecialtiesSection = ({ specialties }: { specialties: Specialty[] }) => {
    return (
        <Section id="especialidades" className="relative py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {specialties.map((spec, index) => {
                    const Icon = iconMap[spec.icon];
                    return (
                        <motion.div
                            key={spec.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative p-8 rounded-[2.5rem] bg-card/40 backdrop-blur-md border border-border/50 hover:bg-card/60 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                        >
                            <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg shadow-primary/5">
                                <Icon className="h-6 w-6" />
                            </div>

                            <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {spec.title}
                            </h4>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {formatMarkdown(spec.description)}
                            </p>

                            {/* Subtle decorative element */}
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                                <Icon className="h-24 w-24 -mr-8 -mt-8 rotate-12" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};

export const StatsStrip = ({ stats }: { stats: Stat[] }) => (
    <section className="py-12 border-y border-border bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                    <div className="text-4xl md:text-5xl font-bold gradient-text">{stat.value}</div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2 group-hover:text-primary transition-colors">
                        {stat.label}
                    </p>
                </div>
            ))}
        </div>
    </section>
);
