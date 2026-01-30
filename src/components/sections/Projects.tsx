import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Layout, Database, Brain, ChevronLeft, ChevronRight, X, Download } from 'lucide-react';
import { Section } from '@/components/Section';
import { projectsData, type Project } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { formatMarkdown } from '@/lib/format-text';
import { Button } from '@/components/ui/button';

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const image = getImage(project.imageUrlId);
    const isLarge = index === 0 || index === 3; // Bento pattern

    const allImages = project.images ? [image?.imageUrl, ...project.images].filter(Boolean) as string[] : [image?.imageUrl].filter(Boolean) as string[];

    const nextImage = () => setCurrentImageIndex((prev: number) => (prev + 1) % allImages.length);
    const prevImage = () => setCurrentImageIndex((prev: number) => (prev - 1 + allImages.length) % allImages.length);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                    "group relative rounded-3xl overflow-hidden border border-border/50 bg-card/40 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10",
                    isLarge ? "md:col-span-2 md:row-span-2" : "col-span-1"
                )}
            >
                <div className="relative h-full flex flex-col">
                    {/* Project Image Area */}
                    <div
                        className={cn(
                            "relative overflow-hidden cursor-zoom-in",
                            isLarge ? "h-64 md:h-[400px]" : "h-48"
                        )}
                        onClick={() => setIsGalleryOpen(true)}
                    >
                        {image && (
                            <Image
                                src={image.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Featured Badge for projects with multiple images */}
                        {allImages.length > 1 && (
                            <div className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] text-white flex items-center gap-1.5 border border-white/10">
                                <Layout className="h-3 w-3" />
                                {allImages.length} vistas
                            </div>
                        )}
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start gap-4 mb-4">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="glass-badge">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-2">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 bg-card text-foreground border border-border rounded-xl hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
                                        title="Ver Repositorio"
                                    >
                                        <Github className="h-4 w-4" />
                                    </a>
                                )}

                                {project.embedUrl && (
                                    <>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button className="p-2.5 bg-primary/10 text-primary border border-primary/20 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all shadow-sm" title="Vista rápida">
                                                    <ExternalLink className="h-4 w-4" />
                                                </button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 overflow-hidden rounded-3xl border-none">
                                                <DialogHeader className="absolute top-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md z-10 border-b">
                                                    <DialogTitle>{project.title}</DialogTitle>
                                                </DialogHeader>
                                                <iframe
                                                    src={project.embedUrl}
                                                    className="w-full h-full pt-16"
                                                    frameBorder="0"
                                                    allowFullScreen
                                                    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                                                />
                                            </DialogContent>
                                        </Dialog>
                                        <a
                                            href={project.embedUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 bg-card text-primary border border-primary/20 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
                                            title="Abrir en pestaña nueva"
                                        >
                                            <Layout className="h-4 w-4" />
                                        </a>
                                    </>
                                )}

                                {project.downloadUrl && (
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button className="p-2.5 bg-accent/10 text-accent border border-accent/20 rounded-xl hover:bg-accent hover:text-white transition-all shadow-sm" title="Descargar archivos">
                                                <Download className="h-4 w-4" />
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-md rounded-3xl">
                                            <DialogHeader>
                                                <DialogTitle className="flex items-center gap-2">
                                                    <Database className="h-5 w-5 text-accent" />
                                                    Descargar Proyecto
                                                </DialogTitle>
                                            </DialogHeader>
                                            <div className="py-6 space-y-4">
                                                <p className="text-muted-foreground text-sm">
                                                    Estás a punto de descargar los archivos fuente de <strong>{project.title}</strong> desde Google Drive.
                                                </p>
                                                <Button asChild className="w-full rounded-xl bg-accent hover:bg-accent/90">
                                                    <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                                        <ExternalLink className="h-4 w-4" /> Confirmar Descarga
                                                    </a>
                                                </Button>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                )}
                            </div>
                        </div>

                        <h3 className={cn(
                            "font-bold mb-2 group-hover:text-primary transition-colors",
                            isLarge ? "text-2xl" : "text-xl"
                        )}>
                            {project.title}
                        </h3>

                        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                            {formatMarkdown(project.description)}
                        </p>

                        {/* Image Preview strip */}
                        {project.images && (
                            <div className="flex gap-2 mt-6">
                                {allImages.slice(0, 4).map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => { setCurrentImageIndex(i); setIsGalleryOpen(true); }}
                                        className="relative w-12 h-12 rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors"
                                    >
                                        <Image src={img} alt="Vista previa" fill className="object-cover" />
                                        {i === 3 && allImages.length > 4 && (
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-[10px] font-bold text-white">
                                                +{allImages.length - 4}
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Fullscreen Gallery */}
            <AnimatePresence>
                {isGalleryOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                    >
                        <button
                            onClick={() => setIsGalleryOpen(false)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                            <Image
                                src={allImages[currentImageIndex]}
                                alt="Vista ampliada"
                                fill
                                className="object-contain p-2 md:p-0"
                            />

                            {allImages.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/40 hover:bg-primary backdrop-blur-md text-white transition-all z-10"
                                    >
                                        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/40 hover:bg-primary backdrop-blur-md text-white transition-all z-10"
                                    >
                                        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                                    </button>

                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm">
                                        {currentImageIndex + 1} / {allImages.length}
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export const ProjectsSection = () => {
    return (
        <Section id="proyectos" className="relative">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Portfolio</h2>
                <h3 className="text-4xl md:text-5xl font-bold">Proyectos Destacados</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                {projectsData.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
};
