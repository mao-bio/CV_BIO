'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { ExperienceSection } from '@/components/sections/Experience';
import { EducationSection } from '@/components/sections/Education';
import { ProjectsSection } from '@/components/sections/Projects';
import { SkillsSection } from '@/components/sections/Skills';
import { CertificationsSection } from '@/components/sections/Certifications';
import { ContactSection } from '@/components/sections/Contact';
import { FloatingCV } from '@/components/sections/FloatingCV';
import { ScrollProgress } from '@/components/ScrollProgress';
import { SpecialtiesSection } from '@/components/sections/Specialties';
import { cvData } from '@/lib/data';



export default function Portfolio() {
  const convaiRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (convaiRef.current) {
      convaiRef.current.setAttribute('agent-id', 'agent_2601kf4fhhr2ecmteasabjm1d6kr');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 bg-grid">
      {/* Noise texture overlay */}
      <div className="noise" />

      <ScrollProgress />
      <Header />

      <main>
        <Hero />
        <SpecialtiesSection />

        {/* Statistics or Social Proof Section */}
        <section className="py-12 border-y border-border bg-muted/50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold gradient-text">1+</div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2 group-hover:text-primary transition-colors italic">Año Exp. Clínica</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold gradient-text">95%</div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2 group-hover:text-primary transition-colors italic">Disponibilidad Equipos</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold gradient-text">40%</div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2 group-hover:text-primary transition-colors italic">Reducción Tiempos</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold gradient-text">5+</div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2 group-hover:text-primary transition-colors italic">Proyectos IA</p>
            </div>
          </div>
        </section>

        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <footer className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight">Bio<span className="text-primary">AI</span></h2>
            <p className="text-muted-foreground mt-2 max-w-sm">
              Ingeniería Biomédica potenciada por IA para transformar el futuro de la salud.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm font-medium">© {new Date().getFullYear()} {cvData.name}</p>
            <p className="text-xs text-muted-foreground">
              Built with Next.js, Framer Motion & BioAI Precision.
            </p>
          </div>
        </div>
      </footer>

      <FloatingCV />

      {/* ConvAI Widget */}
      <elevenlabs-convai ref={convaiRef}></elevenlabs-convai>
      <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async />
    </div>
  );
}
