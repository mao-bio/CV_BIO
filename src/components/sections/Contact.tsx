'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Github, MapPin, Send, ArrowRight } from 'lucide-react';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cvData } from '@/lib/data';

export const ContactSection = () => {
    const contactLinks = [
        {
            label: 'Email',
            value: cvData.contact.email,
            href: `mailto:${cvData.contact.email}`,
            icon: Mail,
            color: 'bg-blue-500/10 text-blue-500'
        },
        {
            label: 'WhatsApp',
            value: cvData.contact.phone,
            href: `https://wa.me/${cvData.contact.phone.replace(/\+/g, '')}`,
            icon: MessageCircle,
            color: 'bg-green-500/10 text-green-500'
        },
        {
            label: 'LinkedIn',
            value: 'Mario Hernández',
            href: cvData.contact.linkedin,
            icon: Send,
            color: 'bg-sky-500/10 text-sky-500'
        },
        {
            label: 'GitHub',
            value: '@mao-bio',
            href: cvData.contact.github,
            icon: Github,
            color: 'bg-slate-500/10 text-slate-500'
        }
    ];

    return (
        <Section id="contacto" className="relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 text-center lg:text-left">
                    <div className="space-y-4">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Contacto</h2>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                            ¿Listo para empezar <br />
                            <span className="gradient-text">algo innovador?</span>
                        </h3>
                        <p className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0">
                            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para formar parte de tus visiones.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/40 border border-border/50 group hover:border-primary/50 transition-all mx-auto lg:mx-0 w-fit">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ubicación</p>
                                <p className="font-medium">{cvData.location}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {contactLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-card/40 border border-border/50 hover:bg-card/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className={cn("p-4 rounded-2xl w-fit mb-6 transition-transform group-hover:scale-110 duration-500", link.color)}>
                                <link.icon className="h-6 w-6" />
                            </div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">{link.label}</p>
                            <p className="font-bold mb-4">{link.value}</p>
                            <div className="flex items-center gap-2 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                                CONECTAR <ArrowRight className="h-3 w-3" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </Section>
    );
};

import { cn } from '@/lib/utils';
