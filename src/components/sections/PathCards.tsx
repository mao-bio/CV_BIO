'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, BrainCircuit, CheckCircle2, Download } from 'lucide-react';
import { Section } from '@/components/Section';
import { cn } from '@/lib/utils';
import type { Track } from '@/lib/i18n';
import type { UI } from '@/content';

export type PathCard = {
    track: Track;
    label: string;
    role: string;
    text: string;
    points: string[];
    href: string;
    cvHref: string;
    cvDownload: string;
};

const icons = { bio: Activity, data: BrainCircuit };

export const PathCards = ({ cards, t }: { cards: PathCard[]; t: UI['paths'] }) => (
    <Section id="perfiles" className="relative py-16">
        <div className="text-center mb-12 space-y-4">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">{t.eyebrow}</h2>
            <h3 className="text-4xl md:text-5xl font-bold">{t.title}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
            {cards.map((card, index) => {
                const Icon = icons[card.track];
                const isBio = card.track === 'bio';
                return (
                    <motion.article
                        key={card.track}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={cn(
                            'group relative flex flex-col overflow-hidden rounded-[2.5rem] border bg-card/50 backdrop-blur-md p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl',
                            isBio
                                ? 'border-primary/20 hover:border-primary/50 hover:shadow-primary/10'
                                : 'border-accent/30 hover:border-accent/60 hover:shadow-accent/10'
                        )}
                    >
                        <Icon
                            className={cn(
                                'absolute -right-6 -top-6 h-40 w-40 rotate-12 opacity-[0.06] transition-opacity group-hover:opacity-[0.12]',
                                isBio ? 'text-primary' : 'text-accent'
                            )}
                        />

                        <div
                            className={cn(
                                'mb-6 inline-flex w-fit p-4 rounded-2xl shadow-lg',
                                isBio ? 'bg-primary/10 text-primary shadow-primary/5' : 'bg-accent/15 text-accent shadow-accent/5'
                            )}
                        >
                            <Icon className="h-7 w-7" />
                        </div>

                        <p className={cn('text-xs font-bold uppercase tracking-[0.2em] mb-2', isBio ? 'text-primary' : 'text-accent')}>
                            {card.role}
                        </p>
                        <h4 className="text-3xl font-bold tracking-tight mb-4">{card.label}</h4>
                        <p className="text-muted-foreground leading-relaxed mb-6">{card.text}</p>

                        <ul className="space-y-3 mb-8">
                            {card.points.map((point) => (
                                <li key={point} className="flex gap-3 text-sm font-medium">
                                    <CheckCircle2 className={cn('h-5 w-5 flex-shrink-0', isBio ? 'text-primary' : 'text-accent')} />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto flex flex-wrap gap-3">
                            <Link
                                href={card.href}
                                className={cn(
                                    'inline-flex items-center gap-2 rounded-full px-6 h-12 font-semibold text-sm transition-transform hover:scale-105 active:scale-95',
                                    isBio ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                                )}
                            >
                                {t.view} <ArrowRight className="h-4 w-4" />
                            </Link>
                            <a
                                href={card.cvHref}
                                download={card.cvDownload}
                                className="inline-flex items-center gap-2 rounded-full px-6 h-12 font-semibold text-sm border border-border bg-card hover:bg-muted transition-colors"
                            >
                                <Download className="h-4 w-4" /> {t.cv}
                            </a>
                        </div>
                    </motion.article>
                );
            })}
        </div>
    </Section>
);
