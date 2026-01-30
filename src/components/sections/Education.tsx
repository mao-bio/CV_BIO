'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, School } from 'lucide-react';
import { Section } from '@/components/Section';
import { cvData } from '@/lib/data';
import { formatMarkdown } from '@/lib/format-text';

export const EducationSection = () => {
    return (
        <Section id="educacion" className="relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="text-center mb-16 space-y-4">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Formación Académica</h2>
                <h3 className="text-4xl md:text-5xl font-bold">Educación</h3>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {cvData.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-md hover:bg-card/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                    >
                        {/* Icon Container */}
                        <div className="flex-shrink-0">
                            <div className="relative p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg shadow-primary/5">
                                <GraduationCap className="h-8 w-8" />
                                {edu.honor && (
                                    <div className="absolute -top-2 -right-2 p-1.5 rounded-full bg-accent text-white shadow-lg">
                                        <Award className="h-3 w-3" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-3">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {edu.degree}
                                </h4>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                                    <Calendar className="h-3.5 w-3.5" />
                                    {edu.period}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-lg text-muted-foreground">
                                <School className="h-5 w-5 text-accent" />
                                {edu.institution}
                            </div>

                            {edu.honor && (
                                <div className="pt-2 flex flex-wrap gap-2">
                                    {edu.honor.split('|').map((h, i) => (
                                        <span key={i} className="glass-badge">
                                            {formatMarkdown(h.trim())}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Decorative background number */}
                        <span className="absolute top-4 right-8 text-8xl font-black text-primary/5 select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                            0{index + 1}
                        </span>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
