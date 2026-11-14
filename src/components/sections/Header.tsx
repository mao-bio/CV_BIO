'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ChevronRight, Github, Linkedin, Languages, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollspy } from '@/hooks/use-scrollspy';
import type { UI } from '@/content';

export type NavItem = { name: string; id: string };

type HeaderProps = {
    nav: NavItem[];
    homeHref: string;
    /** Links to the career-path pages (the current one is left out). */
    profiles: { label: string; href: string }[];
    langHref: string;
    contact: { linkedin: string; github: string };
    t: UI['nav'];
};

export const Header = ({ nav, homeHref, profiles, langHref, contact, t }: HeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const sectionIds = useMemo(() => nav.map(item => item.id), [nav]);
    const activeSection = useScrollspy(sectionIds, { offset: 100 });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string, e?: React.MouseEvent) => {
        e?.preventDefault();
        setMobileMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            history.replaceState(null, '', `#${id}`);
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4",
                isScrolled ? "py-3" : "py-6"
            )}
        >
            <div className={cn(
                "max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 md:px-6 py-3 rounded-2xl transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-xl border border-border shadow-lg" : "bg-transparent"
            )}>
                <Link href={homeHref} aria-label={t.goHome} className="flex items-center gap-2 group">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Terminal className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">
                        Bio<span className="text-primary">AI</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-0.5">
                    {nav.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => scrollTo(item.id, e)}
                            aria-current={activeSection === item.id ? 'true' : undefined}
                            className={cn(
                                "px-3 py-2.5 rounded-xl text-sm font-medium transition-all relative",
                                activeSection === item.id
                                    ? "text-primary bg-primary/5"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            )}
                        >
                            {item.name}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                                />
                            )}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    {profiles.map((profile) => (
                        <Link
                            key={profile.href}
                            href={profile.href}
                            className="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold border border-primary/20 text-primary bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                            {profile.label}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                    ))}

                    <Link
                        href={langHref}
                        aria-label={t.switchLang}
                        title={t.switchLang}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold border border-border bg-card/60 hover:bg-muted transition-colors"
                    >
                        <Languages className="h-4 w-4" />
                        {t.langCode}
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="xl:hidden p-2 rounded-xl hover:bg-muted transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-background/60 backdrop-blur-md z-[60] xl:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background border-l border-border z-[70] xl:hidden flex flex-col p-8 pt-20 pb-28 shadow-2xl overflow-y-auto"
                        >
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label={t.closeMenu}
                                className="absolute top-8 right-8 p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            <div className="flex flex-col gap-1">
                                {nav.map((item, index) => (
                                    <motion.a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                        onClick={(e) => scrollTo(item.id, e)}
                                        className={cn(
                                            "flex items-center justify-between px-4 py-3 rounded-2xl text-lg font-bold transition-all",
                                            activeSection === item.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
                                        )}
                                    >
                                        {item.name}
                                        <ChevronRight className={cn("h-5 w-5 transition-transform", activeSection === item.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0")} />
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-col gap-2">
                                {profiles.map((profile) => (
                                    <Link
                                        key={profile.href}
                                        href={profile.href}
                                        className="flex items-center justify-between px-4 py-3 rounded-2xl font-bold border border-primary/20 text-primary bg-primary/5"
                                    >
                                        {profile.label}
                                        <ArrowUpRight className="h-5 w-5" />
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-auto pt-6 border-t border-border/50">
                                <p className="text-sm text-muted-foreground font-medium mb-4">{t.connect}</p>
                                <div className="flex gap-4">
                                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                                        <Github className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};
