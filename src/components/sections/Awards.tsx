'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Trophy, Globe2, Medal, Star, Calendar, FlaskConical, GraduationCap } from 'lucide-react';
import { Section } from '@/components/Section';
import { awardsData, type Award } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

const iconMap = {
    trophy: Trophy,
    globe: Globe2,
    medal: Medal,
    star: Star,
};

const categoryMeta = {
    investigacion: { label: 'Investigación', icon: FlaskConical },
    academico: { label: 'Académico', icon: GraduationCap },
};

const AwardMeta = ({ award }: { award: Award }) => {
    const category = categoryMeta[award.category];
    return (
        <div className="flex flex-wrap items-center gap-2">
            <span className="glass-badge inline-flex items-center gap-1">
                <category.icon className="h-3 w-3" />
                {category.label}
            </span>
            {award.year && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                    <Calendar className="h-3 w-3" />
                    {award.year}
                </span>
            )}
        </div>
    );
};

export const AwardsSection = () => {
    const featured = awardsData.filter(a => a.imageUrlId);
    const others = awardsData.filter(a => !a.imageUrlId);

    return (
        <Section id="logros" className="relative">
            <div className="absolute top-1/3 -left-24 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="text-center mb-16 space-y-4">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Reconocimientos</h2>
                <h3 className="text-4xl md:text-5xl font-bold">Logros y Premios</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Distinciones académicas y de investigación que respaldan mi trayectoria.
                </p>
            </div>

            {/* Featured awards with photo evidence */}
            <div className="grid gap-6 lg:grid-cols-2">
                {featured.map((award, index) => {
                    const Icon = iconMap[award.icon];
                    const image = award.imageUrlId ? getImage(award.imageUrlId) : null;
                    return (
                        <motion.article
                            key={award.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group flex flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-md hover:bg-card/60 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                        >
                            {image && (
                                <div className="relative aspect-[16/9] w-full overflow-hidden">
                                    <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        fill
                                        sizes="(min-width: 1024px) 50vw, 100vw"
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4 p-3 rounded-2xl bg-background/90 text-primary shadow-lg backdrop-blur-md">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                </div>
                            )}
                            <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
                                <AwardMeta award={award} />
                                <h4 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                    {award.title}
                                </h4>
                                <p className="text-sm font-semibold text-accent">{award.issuer}</p>
                                <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                            </div>
                        </motion.article>
                    );
                })}
            </div>

            {/* Academic distinctions */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
                {others.map((award, index) => {
                    const Icon = iconMap[award.icon];
                    return (
                        <motion.article
                            key={award.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="group flex gap-5 p-6 md:p-8 rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-md hover:bg-card/60 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="flex-shrink-0">
                                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                                    <Icon className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <AwardMeta award={award} />
                                <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{award.title}</h4>
                                <p className="text-sm font-semibold text-accent">{award.issuer}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </Section>
    );
};
