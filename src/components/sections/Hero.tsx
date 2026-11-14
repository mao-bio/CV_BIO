'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { formatMarkdown } from '@/lib/format-text';
import { CvMenuItems, type CvLink } from '@/components/CvMenu';
import type { UI } from '@/content';

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

type HeroProps = {
    name: string;
    role: string;
    headline: [string, string];
    summary: string[];
    cvLinks: CvLink[];
    contact: { linkedin: string; github: string };
    /** Where the main button scrolls to. */
    ctaHref: string;
    ctaLabel: string;
    t: UI['hero'];
};

export const Hero = ({ name, role, headline, summary, cvLinks, contact, ctaHref, ctaLabel, t }: HeroProps) => {
    const profileImage = getImage('profile');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <section id="inicio" className="relative flex items-center justify-center overflow-hidden pt-36 pb-16">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] motion-safe:animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] motion-safe:animate-pulse delay-700" />
                <div className="scanline opacity-[0.05]" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-[1.4fr_1fr] items-center gap-12"
            >
                <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
                    <motion.div variants={itemVariants} className="space-y-4">
                        <p className="text-lg md:text-xl font-semibold text-foreground">
                            {t.greeting} <span className="text-primary">{name}</span>
                        </p>
                        <h2 className="text-accent font-medium tracking-wider uppercase text-sm">{role}</h2>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            {headline[0]} <br />
                            <span className="gradient-text text-glow">{headline[1]}</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {summary.map((text, i) => (
                            <p key={i} className="mb-3 last:mb-0">{formatMarkdown(text)}</p>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <Button asChild size="lg" className="rounded-full px-8 h-12 shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
                            <a href={ctaHref}>
                                {ctaLabel} <ChevronRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 transition-transform hover:scale-105 active:scale-95">
                                    <Download className="mr-2 h-4 w-4" /> {t.cv}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="center" className="rounded-xl p-2">
                                <CvMenuItems links={cvLinks} />
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <div className="flex items-center gap-3">
                            <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 bg-card hover:bg-accent/10 border border-border rounded-full transition-colors group">
                                <Github className="h-5 w-5 group-hover:text-accent transition-colors" />
                            </a>
                            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-card hover:bg-accent/10 border border-border rounded-full transition-colors group">
                                <Linkedin className="h-5 w-5 group-hover:text-accent transition-colors" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="relative flex justify-center order-first lg:order-none">
                    <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-[360px] lg:h-[360px]">
                        {/* Animated Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 border border-dashed border-accent/20 rounded-full"
                        />

                        <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                            {profileImage && (
                                <Image
                                    src={profileImage.imageUrl}
                                    alt={name}
                                    fill
                                    sizes="(min-width: 1024px) 360px, 288px"
                                    className="object-cover object-top transition-transform duration-700 hover:scale-110"
                                    priority
                                />
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
