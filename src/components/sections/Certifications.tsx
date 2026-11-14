'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { Section } from '@/components/Section';
import type { Certification, UI } from '@/content';

export const CertificationsSection = ({ items, t }: { items: Certification[]; t: UI['certifications'] }) => {
    return (
        <Section id="certificaciones" className="relative">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">{t.eyebrow}</h2>
                <h3 className="text-4xl md:text-5xl font-bold">{t.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group flex items-center gap-4 p-5 rounded-2xl bg-card/40 border border-border/50 hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                            <Award className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold leading-tight">{cert.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                {[cert.issuer, cert.date].filter(Boolean).join(' · ')}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
