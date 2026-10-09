import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { ExperienceSection } from '@/components/sections/Experience';
import { EducationSection } from '@/components/sections/Education';
import { AwardsSection } from '@/components/sections/Awards';
import { ProjectsSection } from '@/components/sections/Projects';
import { SkillsSection } from '@/components/sections/Skills';
import { CertificationsSection } from '@/components/sections/Certifications';
import { Inspiration } from '@/components/sections/Inspiration';
import { ContactSection } from '@/components/sections/Contact';
import { FloatingCV } from '@/components/sections/FloatingCV';
import { ScrollProgress } from '@/components/ScrollProgress';
import { SpecialtiesSection } from '@/components/sections/Specialties';
import { ConvaiWidget } from '@/components/ConvaiWidget';
import { MotionProvider } from '@/components/MotionProvider';
import { cvData, statsData } from '@/lib/data';

export default function Portfolio() {
  return (
    <MotionProvider>
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
            {statsData.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold gradient-text">{stat.value}</div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2 group-hover:text-primary transition-colors italic">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <ExperienceSection />
        <EducationSection />
        <AwardsSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <Inspiration />
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

      <ConvaiWidget />
    </div>
    </MotionProvider>
  );
}
