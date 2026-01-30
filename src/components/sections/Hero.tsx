'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, FileText, Activity, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { cvData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { formatMarkdown } from '@/lib/format-text';

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

export const Hero = () => {
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
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-20">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700" />
                <div className="scanline opacity-[0.05]" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center gap-12"
            >
                <div className="flex flex-col gap-8 items-center max-w-3xl">
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h2 className="text-accent font-medium tracking-wider uppercase text-sm">Bio-Engineering x AI</h2>
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                            Transformando <br />
                            <span className="gradient-text text-glow">Datos en Vida</span>
                        </h1>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
                        {cvData.summary.map((text, i) => (
                            <span key={i} className="block mb-2">{formatMarkdown(text)}</span>
                        ))}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
                        <Button asChild size="lg" className="rounded-full px-8 h-12 shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
                            <a href="#contacto">
                                Contactar <ChevronRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 transition-transform hover:scale-105 active:scale-95">
                                    <Download className="mr-2 h-4 w-4" /> CV
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="center" className="rounded-xl p-2">
                                <DropdownMenuItem asChild>
                                    <a href="https://drive.google.com/uc?export=download&id=1tXlXo8psiKUyFIF75CWkFhvZu1OrfxNX" className="flex items-center gap-2 cursor-pointer">
                                        <FileText className="h-4 w-4" /> Analista de Datos
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="https://drive.google.com/uc?export=download&id=1r9OgNObhdZu3niT-rHVqfJ1LMPZBlx2k" className="flex items-center gap-2 cursor-pointer">
                                        <Activity className="h-4 w-4" /> Ing. Biomédico
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <div className="flex items-center gap-3">
                            <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-card hover:bg-accent/10 border border-border rounded-full transition-colors group">
                                <Github className="h-5 w-5 group-hover:text-accent transition-colors" />
                            </a>
                            <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-card hover:bg-accent/10 border border-border rounded-full transition-colors group">
                                <Linkedin className="h-5 w-5 group-hover:text-accent transition-colors" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={itemVariants}
                    className="relative flex justify-center mt-4 lg:mt-8"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
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
                                    alt={cvData.name}
                                    fill
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
