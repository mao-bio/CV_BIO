'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

export const FloatingCV = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 500);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-8 left-8 z-40"
                >
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size="icon" className="h-14 w-14 rounded-full shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-transform duration-300">
                                <Download className="h-6 w-6" />
                                <span className="sr-only">Descargar CV</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="top" align="start" className="rounded-2xl p-2 mb-4 border-none bg-background/80 backdrop-blur-xl shadow-2xl">
                            <DropdownMenuItem asChild>
                                <a href="https://drive.google.com/uc?export=download&id=1tXlXo8psiKUyFIF75CWkFhvZu1OrfxNX" className="flex items-center gap-2 p-3 rounded-xl cursor-pointer">
                                    <FileText className="h-4 w-4 text-primary" />
                                    <span className="font-medium text-sm">Analista de Datos</span>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <a href="https://drive.google.com/uc?export=download&id=1r9OgNObhdZu3niT-rHVqfJ1LMPZBlx2k" className="flex items-center gap-2 p-3 rounded-xl cursor-pointer">
                                    <Activity className="h-4 w-4 text-accent" />
                                    <span className="font-medium text-sm">Ing. Biomédico</span>
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
