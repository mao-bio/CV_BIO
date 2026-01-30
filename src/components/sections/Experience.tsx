'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, FlaskConical, BookOpen, Star, CheckCircle2, Zap, Cpu, Award } from 'lucide-react';
import { Section } from '@/components/Section';
import { experienceData, type Experience } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatMarkdown } from '@/lib/format-text';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

const ExperienceIcon = ({ iconName }: { iconName: string }) => {
    const icons: { [key: string]: any } = {
        corporate: Briefcase,
        research: FlaskConical,
        academic: BookOpen,
    };
    const Icon = icons[iconName] || Briefcase;
    return <Icon className="h-5 w-5" />;
};

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const expImage = exp.imageUrlId ? getImage(exp.imageUrlId) : null;

    // Parse logros into structured data
    const parseExperience = (logros: string[]) => {
        let summary = "";
        let sections: { title: string; items: string[] }[] = [];
        let technologies: string[] = [];
        let impact: string[] = [];
        let currentSection: { title: string; items: string[] } | null = null;
        let captureTech = false;

        logros.forEach((line) => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('## RESPONSABILIDADES') || trimmedLine.startsWith('## DESCRIPCIÓN') || trimmedLine.startsWith('## DESCRIPCIÓN GENERAL')) {
                return;
            } else if (trimmedLine.startsWith('#### ')) {
                if (currentSection) sections.push(currentSection);
                currentSection = { title: trimmedLine.replace('#### ', ''), items: [] };
                captureTech = false;
            } else if (trimmedLine.startsWith('- ')) {
                if (currentSection) currentSection.items.push(trimmedLine.replace('- ', ''));
            } else if (trimmedLine.startsWith('## TECNOLOGÍAS CLAVE')) {
                captureTech = true;
                if (currentSection) {
                    sections.push(currentSection);
                    currentSection = null;
                }
            } else if (trimmedLine.startsWith('## IMPACTO')) {
                captureTech = false;
                if (currentSection) {
                    sections.push(currentSection);
                    currentSection = null;
                }
            } else if (trimmedLine.startsWith('✅') || (trimmedLine.includes('✅'))) {
                impact.push(trimmedLine.replace('✅ ', '').replace('✅', ''));
            } else if (captureTech && trimmedLine !== "" && !trimmedLine.startsWith('#')) {
                technologies = trimmedLine.split(',').map(t => t.trim());
            } else if (!trimmedLine.startsWith('#') && trimmedLine !== "" && !currentSection && summary === "" && !captureTech) {
                summary = trimmedLine;
            } else if (!trimmedLine.startsWith('#') && currentSection && trimmedLine !== "") {
                currentSection.items.push(trimmedLine);
            }
        });
        if (currentSection) sections.push(currentSection);

        return { summary, sections, technologies, impact };
    };

    const parsed = parseExperience(exp.logros);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative pl-12 md:pl-0 mb-12 last:mb-0"
        >
            {/* Timeline connector */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/10 to-transparent md:-translate-x-px" />

            {/* Timeline dot/icon */}
            <div className="absolute left-4 md:left-1/2 top-4 w-10 h-10 -translate-x-1/2 rounded-2xl border-2 border-primary/20 bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 z-10">
                <ExperienceIcon iconName={exp.icon} />
            </div>

            <div className={cn(
                "md:w-[45%] transition-all duration-500",
                index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
            )}>
                <Card
                    className={cn(
                        "relative overflow-hidden border-primary/10 hover:border-primary/25 transition-all duration-500",
                        "bg-card/40 backdrop-blur-xl hover:shadow-[0_30px_60px_-15px_rgba(var(--primary-rgb),0.1)]",
                        isExpanded ? "ring-1 ring-primary/20 shadow-2xl scale-[1.01]" : ""
                    )}
                >
                    <div className="p-6 md:p-8">
                        <div className="flex flex-col gap-4 mb-6">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 font-bold tracking-widest uppercase text-[9px] py-0.5 px-2">
                                        <Calendar className="w-3 h-3 mr-1 opacity-70" />
                                        {exp.periodo}
                                    </Badge>
                                </div>
                                <h3 className="text-2xl font-black text-foreground tracking-tight leading-tight mb-1 group-hover:text-primary transition-colors">
                                    {exp.puesto}
                                </h3>
                                <div className="flex items-center gap-2 text-muted-foreground/80 font-bold italic">
                                    <span className="text-primary/70 not-italic">at</span>
                                    <span>{exp.empresa}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
                                <span className="flex items-center gap-1.5 font-medium">
                                    <MapPin className="h-3.5 w-3.5 text-primary/40" />
                                    {exp.ubicacion}
                                </span>
                            </div>
                        </div>

                        <p className="text-muted-foreground/90 text-[15px] mb-6 leading-relaxed">
                            {formatMarkdown(parsed.summary)}
                        </p>

                        {/* Preview Image - Always visible when collapsed if available */}
                        {!isExpanded && expImage && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mb-6 relative aspect-video w-full rounded-xl overflow-hidden border border-primary/10 shadow-sm group/thumb"
                            >
                                <Image
                                    src={expImage.imageUrl}
                                    alt={exp.empresa}
                                    fill
                                    className={cn(
                                        "object-cover transition-transform duration-700 group-hover/thumb:scale-110",
                                        exp.empresa.includes('Pabón') ? "object-[center_20%]" : "object-center"
                                    )}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                <div className="absolute bottom-2 right-2">
                                    <Badge className="bg-black/40 backdrop-blur-md text-[8px] border-white/10 uppercase tracking-widest px-2 py-0.5 font-bold">Evidencia Técnica</Badge>
                                </div>
                            </motion.div>
                        )}

                        {!isExpanded && (
                            <div className="flex flex-wrap gap-1.5 mb-6">
                                {parsed.technologies.slice(0, 4).map((tech, i) => (
                                    <Badge key={i} variant="outline" className="text-[9px] font-bold border-primary/5 bg-primary/5 text-primary/70 py-0 px-2 uppercase tracking-tighter">
                                        {tech}
                                    </Badge>
                                ))}
                                {parsed.technologies.length > 4 && (
                                    <span className="text-[10px] text-muted-foreground/50 self-center px-1 font-mono font-bold">
                                        +{parsed.technologies.length - 4}
                                    </span>
                                )}
                            </div>
                        )}

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className={cn(
                                "w-full transition-all duration-300 gap-2 font-black uppercase tracking-[0.2em] text-[10px] h-12 border border-primary/10",
                                isExpanded ? "bg-primary/5 text-primary border-primary/20" : "hover:bg-primary hover:text-primary-foreground"
                            )}
                        >
                            {isExpanded ? 'Ocultar Detalles' : 'Expandir Trayectoria'}
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
                                    <div className="pt-8 mt-8 border-t border-primary/10 space-y-10">
                                        {/* Grid for Sections */}
                                        <div className="grid gap-8">
                                            {parsed.sections.map((section, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 * idx }}
                                                    className="space-y-4"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                                            <Zap className="w-4 h-4 fill-primary/20" />
                                                        </div>
                                                        <h4 className="font-black text-[10px] tracking-[0.2em] uppercase text-primary/80">{section.title}</h4>
                                                    </div>
                                                    <div className="space-y-3.5 pl-4 border-l border-primary/10 ml-4">
                                                        {section.items.map((item, i) => (
                                                            <div key={i} className="flex gap-3.5 text-sm text-muted-foreground/90 leading-relaxed">
                                                                <CheckCircle2 className="h-4.5 w-4.5 mt-0.5 text-primary flex-shrink-0 opacity-40" />
                                                                <span>{formatMarkdown(item)}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Impact Section */}
                                        {parsed.impact.length > 0 && (
                                            <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-primary/5 p-6 group/impact">
                                                <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover/impact:opacity-[0.1] transition-opacity">
                                                    <Award className="w-16 h-16 text-primary" />
                                                </div>
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                                    <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary">Logros Destacados</h4>
                                                </div>
                                                <div className="space-y-3">
                                                    {parsed.impact.map((imp, i) => (
                                                        <p key={i} className="text-sm font-bold text-foreground/90 leading-snug flex gap-2">
                                                            <span className="text-primary italic">›</span>
                                                            {formatMarkdown(imp)}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Technologies */}
                                        {parsed.technologies.length > 0 && (
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 text-[9px] font-black text-muted-foreground/60 uppercase tracking-[0.3em]">
                                                    <Cpu className="w-3.5 h-3.5" />
                                                    Stack Tecnológico
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {parsed.technologies.map((tech, i) => (
                                                        <Badge key={i} variant="secondary" className="bg-muted/10 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default text-[10px] py-1 px-3 border border-primary/5">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Full Image in expanded view */}
                                        {expImage && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-4 relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-primary/10 shadow-2xl"
                                            >
                                                <Image
                                                    src={expImage.imageUrl}
                                                    alt={exp.empresa}
                                                    fill
                                                    className={cn(
                                                        "object-cover",
                                                        exp.empresa.includes('Pabón') ? "object-[center_20%]" : "object-center"
                                                    )}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                                    <p className="text-white text-xs font-bold backdrop-blur-sm bg-black/20 px-4 py-2 rounded-xl border border-white/10 uppercase tracking-[0.2em]">
                                                        Registro de Campo / Laboratorio
                                                    </p>
                                                </div>
                                            </motion.div>
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

export const ExperienceSection = () => {
    return (
        <Section id="experiencia" className="relative py-32 overflow-hidden">
            <div className="text-center mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <Badge variant="outline" className="border-primary/20 text-primary uppercase tracking-[0.4em] font-black px-4 py-1.5 text-[10px]">
                        Mi Trayectoria
                    </Badge>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                        Experiencia <span className="text-primary">Profesional</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground/80 text-lg">
                        Soluciones biomédicas potenciadas por <span className="text-foreground font-bold italic">Inteligencia Artificial</span> y una visión enfocada en la innovación.
                    </p>
                </motion.div>
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="space-y-4">
                    {experienceData.map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
};
