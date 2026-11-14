'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, FlaskConical, BookOpen, Star, CheckCircle2, Cpu, Award } from 'lucide-react';
import { Section } from '@/components/Section';
import type { ExperienceView, UI } from '@/content';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatMarkdown } from '@/lib/format-text';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

const icons = {
    corporate: Briefcase,
    research: FlaskConical,
    academic: BookOpen,
};

type T = UI['experience'];

const ExperienceCard = ({ exp, index, t }: { exp: ExperienceView; index: number; t: T }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const expImage = exp.imageUrlId ? getImage(exp.imageUrlId) : null;
    const Icon = icons[exp.icon];
    const imagePosition = exp.id === 'pabon' ? 'object-[center_20%]' : 'object-center';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: Math.min(index, 3) * 0.1 }}
            className="group relative pl-12 md:pl-0 mb-12 last:mb-0"
        >
            {/* Timeline connector */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/10 to-transparent md:-translate-x-px" />

            {/* Timeline dot/icon */}
            <div className="absolute left-4 md:left-1/2 top-4 w-10 h-10 -translate-x-1/2 rounded-2xl border-2 border-primary/20 bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 z-10">
                <Icon className="h-5 w-5" />
            </div>

            <div className={cn(
                "md:w-[45%] transition-all duration-500",
                index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
            )}>
                <Card
                    className={cn(
                        "relative overflow-hidden border-primary/10 hover:border-primary/25 transition-all duration-500",
                        "bg-card/40 backdrop-blur-xl",
                        isExpanded ? "ring-1 ring-primary/20 shadow-2xl" : ""
                    )}
                >
                    <div className="p-6 md:p-8">
                        <div className="flex flex-col gap-4 mb-6">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 font-bold tracking-widest uppercase text-[10px] py-0.5 px-2">
                                        <Calendar className="w-3 h-3 mr-1 opacity-70" />
                                        {exp.period}
                                    </Badge>
                                </div>
                                <h3 className="text-2xl font-black text-foreground tracking-tight leading-tight mb-1 group-hover:text-primary transition-colors">
                                    {exp.role}
                                </h3>
                                <div className="flex items-center gap-2 text-muted-foreground font-bold">
                                    <span className="text-primary/70 font-medium">{t.at}</span>
                                    <span>{exp.company}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1.5 font-medium">
                                    <MapPin className="h-3.5 w-3.5 text-primary/60" />
                                    {exp.location}
                                </span>
                            </div>
                        </div>

                        <p className="text-muted-foreground text-[15px] mb-6 leading-relaxed">
                            {formatMarkdown(exp.summary)}
                        </p>

                        {/* Achievements stay visible without expanding */}
                        {exp.impact && exp.impact.length > 0 && (
                            <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-primary/5 p-5 mb-6">
                                <Award className="absolute top-3 right-3 w-10 h-10 text-primary opacity-10" />
                                <div className="flex items-center gap-2 mb-3">
                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                    <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary">{t.highlights}</h4>
                                </div>
                                <div className="space-y-2">
                                    {exp.impact.map((imp, i) => (
                                        <p key={i} className="text-sm font-bold text-foreground/90 leading-snug flex gap-2">
                                            <span className="text-primary">›</span>
                                            {formatMarkdown(imp)}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsExpanded(!isExpanded)}
                            aria-expanded={isExpanded}
                            className={cn(
                                "w-full transition-all duration-300 gap-2 font-black uppercase tracking-[0.2em] text-[10px] h-12 border border-primary/10",
                                isExpanded ? "bg-primary/5 text-primary border-primary/20" : "hover:bg-primary hover:text-primary-foreground"
                            )}
                        >
                            {isExpanded ? t.collapse : t.expand}
                            <ChevronDown className={cn("h-4 w-4 transition-transform duration-500", isExpanded ? "rotate-180" : "")} />
                        </Button>

                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-8 mt-8 border-t border-primary/10 space-y-8">
                                        <div className="space-y-3.5">
                                            {exp.bullets.map((item, i) => (
                                                <div key={i} className="flex gap-3.5 text-sm text-muted-foreground leading-relaxed">
                                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0 opacity-60" />
                                                    <span>{formatMarkdown(item)}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {exp.tech.length > 0 && (
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                                                    <Cpu className="w-3.5 h-3.5" />
                                                    {t.stack}
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.tech.map((tech) => (
                                                        <Badge key={tech} variant="secondary" className="bg-muted/40 text-[10px] py-1 px-3 border border-primary/5">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {expImage && (
                                            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-primary/10 shadow-xl">
                                                <Image
                                                    src={expImage.imageUrl}
                                                    alt={`${exp.role} · ${exp.company}`}
                                                    fill
                                                    sizes="(min-width: 768px) 40vw, 90vw"
                                                    className={cn("object-cover", imagePosition)}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                                    <p className="text-white text-[10px] font-bold backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-xl border border-white/10 uppercase tracking-[0.2em]">
                                                        {t.evidence}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </Card>
            </div>
        </motion.div>
    );
};

type ExperienceSectionProps = {
    items: ExperienceView[];
    other: ExperienceView[];
    subtitle: string;
    t: T;
};

export const ExperienceSection = ({ items, other, subtitle, t }: ExperienceSectionProps) => {
    return (
        <Section id="experiencia" className="relative py-24 overflow-hidden">
            <div className="text-center mb-20 relative z-10 space-y-4">
                <Badge variant="outline" className="border-primary/20 text-primary uppercase tracking-[0.3em] font-black px-4 py-1.5 text-[10px]">
                    {t.eyebrow}
                </Badge>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                    {t.titleA} <span className="text-primary">{t.titleB}</span>
                </h2>
                <p className="max-w-2xl mx-auto text-muted-foreground text-lg">{subtitle}</p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {items.map((exp, index) => (
                    <ExperienceCard key={exp.id} exp={exp} index={index} t={t} />
                ))}
            </div>

            {other.length > 0 && (
                <div className="max-w-6xl mx-auto mt-16">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6 text-center">{t.other}</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        {other.map((exp) => (
                            <div key={exp.id} className="flex gap-4 p-6 rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-md">
                                <div className="flex-shrink-0 h-fit p-3 rounded-2xl bg-accent/10 text-accent">
                                    <BookOpen className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{exp.period}</p>
                                    <h4 className="text-lg font-bold leading-tight">{exp.role}</h4>
                                    <p className="text-sm font-semibold text-muted-foreground">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">{formatMarkdown(exp.summary)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Section>
    );
};
