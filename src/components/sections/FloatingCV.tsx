'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { CvMenuItems, type CvLink } from '@/components/CvMenu';

export const FloatingCV = ({ links, label }: { links: CvLink[]; label: string }) => {
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
                    className="fixed bottom-24 left-4 sm:bottom-8 sm:left-8 z-40"
                >
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size="icon" className="h-14 w-14 rounded-full shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-transform duration-300">
                                <Download className="h-6 w-6" />
                                <span className="sr-only">{label}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="top" align="start" className="rounded-2xl p-2 mb-4 border-none bg-background/80 backdrop-blur-xl shadow-2xl">
                            <CvMenuItems links={links} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
