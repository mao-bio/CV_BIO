'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Script from 'next/script';
import { Mail, Phone, Github, MapPin, Briefcase, GraduationCap, Award, Code, Database, Brain, Menu, X, Linkedin, Download, FileText, Activity, Star, Cpu, FlaskConical, BookOpen, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useScrollspy } from '@/hooks/use-scrollspy';
import { cn } from '@/lib/utils';
import { cvData, skillsData, experienceData, certificationsData, projectsData, type Experience } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

function AnimatedSection({ children, id }: { children: React.ReactNode, id: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id={id} ref={ref} className={cn('py-20 px-4 flex items-center', isVisible ? 'fade-in-up' : 'opacity-0')}>
      {children}
    </section>
  );
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback((ctx: CanvasRenderingContext2D, frame: number, particles: any[]) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > ctx.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > ctx.canvas.height) p.vy *= -1;
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2D');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: any[] = [];
    const particleCount = 25;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles.length = 0;
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          color: Math.random() > 0.5 ? `hsla(${accentColor}, 0.7)`: `hsla(${primaryColor}, 0.7)`,
        });
      }
    };

    resizeCanvas();
    
    let frame = 0;
    const render = () => {
      frame++;
      draw(ctx, frame, particles);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [draw]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};

const BoldRenderer = ({ text }: { text: string }) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return (
      <>
        {parts.map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i} className="font-semibold text-foreground/90">
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </>
    );
};

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const [isOpen, setIsOpen] = useState(false);
  const image = experience.imageUrlId ? getImage(experience.imageUrlId) : null;

  const ExperienceIcon = ({ iconName }: { iconName: string | undefined }) => {
    const icons: { [key: string]: React.ElementType } = {
      corporate: Briefcase,
      research: FlaskConical,
      academic: BookOpen,
    };
    const Icon = iconName ? icons[iconName] : Briefcase;
    return <Icon className="text-accent h-8 w-8" />;
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full bg-card/50 border border-border rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 mb-4"
    >
      {image && (
        <Image
          src={image.imageUrl}
          alt={`Imagen para ${experience.empresa}`}
          width={600}
          height={400}
          className="w-full h-auto aspect-video object-cover rounded-t-lg"
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="p-6">
        <div className="flex flex-row items-start gap-4 text-left w-full">
          <div className="bg-accent/10 p-3 rounded-full mt-1">
            <ExperienceIcon iconName={experience.icon} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl text-accent font-headline">{experience.puesto}</h3>
            <p className="text-md text-foreground">{experience.empresa}</p>
            <p className="text-sm text-muted-foreground mt-1">{experience.periodo} &middot; {experience.ubicacion}</p>
          </div>
        </div>
      </div>
      
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        <div className="px-6 pt-0 pb-4">
          <div className="pl-[4.25rem] space-y-3 text-sm">
              {experience.logros.map((logro, i) => {
                  if (logro.startsWith('## ')) {
                      return <h2 key={i} className="text-lg font-bold text-accent font-headline pt-2">{logro.substring(3)}</h2>;
                  }
                  if (logro.startsWith('### ')) {
                      return <h3 key={i} className="text-md font-bold text-foreground uppercase pt-1">{logro.substring(4)}</h3>;
                  }
                  if (logro.startsWith('#### ')) {
                      return <h4 key={i} className="font-semibold text-accent/90">{logro.substring(5)}</h4>;
                  }
                  if (logro.startsWith('- ')) {
                      return <div key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1">&bull;</span>
                          <p className="text-muted-foreground flex-1"><BoldRenderer text={logro.substring(2)} /></p>
                      </div>;
                  }
                  if (logro.startsWith('✅ ')) {
                     return <div key={i} className="flex items-start gap-2">
                          <span className="text-green-500">✅</span>
                          <p className="text-muted-foreground flex-1"><BoldRenderer text={logro.substring(2)} /></p>
                      </div>;
                  }
                  if (logro === '---') {
                      return <hr key={i} className="my-3 border-border/50" />;
                  }
                  if (logro.startsWith('# ')) {
                      return null;
                  }
                  return <p key={i} className="text-muted-foreground pb-2"><BoldRenderer text={logro} /></p>;
              })}
          </div>
        </div>
      </CollapsibleContent>

      <div className="px-6 pb-4 border-t border-border/20 pt-4">
        <CollapsibleTrigger asChild>
          <Button
              variant="ghost"
              className="w-full text-accent hover:text-accent hover:bg-accent/10"
          >
              {isOpen ? 'Ver menos' : 'Ver más'}
              {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
      </div>
    </Collapsible>
  );
};


export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const sectionIds = ['inicio', 'educacion', 'experiencia', 'proyectos', 'habilidades', 'certificaciones', 'contacto'];
  const activeSection = useScrollspy(sectionIds, { offset: 100 });

  const convaiRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (convaiRef.current) {
      convaiRef.current.setAttribute('agent-id', 'agent_2601kf4fhhr2ecmteasabjm1d6kr');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowFloatingButton(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const profileImage = getImage('profile');

  const skillIcons: { [key: string]: React.ElementType } = {
    programacion: Code,
    ia: Brain,
    profesionales: Briefcase,
    blandas: MessageCircle,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold gradient-text font-headline">
              BioAI CV
            </div>
            
            <div className="hidden md:flex space-x-8">
              {sectionIds.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-accent transition-colors duration-300 ${activeSection === item ? 'text-accent font-semibold' : ''}`}
                >
                  {item === 'inicio' ? 'Inicio' : item === 'educacion' ? 'Educación' : item}
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sectionIds.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-muted rounded-md"
                >
                  {item === 'inicio' ? 'Inicio' : item === 'educacion' ? 'Educación' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        <ParticleBackground />
        <div className="max-w-6xl mx-auto z-10 w-full">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                    {profileImage && (
                        <Image
                            src={profileImage.imageUrl}
                            alt="Foto de perfil de Mario Hernández"
                            width={250}
                            height={250}
                            className="rounded-full border-4 border-primary/50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20"
                            data-ai-hint={profileImage.imageHint}
                        />
                    )}
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text font-headline">
                        {cvData.name}
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mb-6 mx-auto md:mx-0"></div>
                    <p className="text-2xl md:text-3xl text-accent mb-4 font-headline">
                        {cvData.title}
                    </p>
                    <div className="text-lg text-muted-foreground mb-8 max-w-2xl space-y-4">
                        {cvData.summary.map((paragraph, index) => (
                            <p key={index}>
                                <BoldRenderer text={paragraph} />
                            </p>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
                            <a href="#contacto">
                                <Mail className="mr-2" /> Contactar
                            </a>
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="secondary" size="lg" className="transition-transform duration-300 hover:scale-105">
                                    <Download className="mr-2" /> Descargar CV
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem asChild>
                                    <a href="https://drive.google.com/uc?export=download&id=1tXlXo8psiKUyFIF75CWkFhvZu1OrfxNX" download>
                                        <FileText className="mr-2" /> CV Analista de Datos
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="https://drive.google.com/uc?export=download&id=1r9OgNObhdZu3niT-rHVqfJ1LMPZBlx2k" download>
                                        <Activity className="mr-2" /> CV Ing. Biomédico
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button asChild variant="secondary" size="lg" className="transition-transform duration-300 hover:scale-105">
                            <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2" /> GitHub
                            </a>
                        </Button>
                        <Button asChild variant="secondary" size="lg" className="transition-transform duration-300 hover:scale-105">
                            <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="mr-2" /> LinkedIn
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-20">
              <Card className="bg-card/50 border-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2 animated-gradient-border">
                <CardContent className="p-6">
                  <Brain className="text-accent mb-3" size={32} />
                  <h3 className="text-xl font-semibold mb-2 font-headline">Inteligencia Artificial</h3>
                  <p className="text-muted-foreground text-sm">Especialización en IA aplicada a datos clínicos y gestión biomédica.</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2 animated-gradient-border">
                <CardContent className="p-6">
                  <Database className="text-accent mb-3" size={32} />
                  <h3 className="text-xl font-semibold mb-2 font-headline">Análisis de Datos</h3>
                  <p className="text-muted-foreground text-sm">Transformación de datos en insights con Python, SQL y Power BI.</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2 animated-gradient-border">
                <CardContent className="p-6">
                  <Briefcase className="text-accent mb-3" size={32} />
                  <h3 className="text-xl font-semibold mb-2 font-headline">Ingeniería Biomédica</h3>
                  <p className="text-muted-foreground text-sm">Gestión tecnológica hospitalaria y mantenimiento de equipos médicos.</p>
                </CardContent>
              </Card>
            </div>
        </div>
      </section>

      {/* --- ESTADÍSTICAS RÁPIDAS --- */}
      <section className="py-12 bg-secondary/20 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text font-headline">1+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mt-2">Año Exp. Clínica</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text font-headline">95%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mt-2">Disponibilidad Equipos</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text font-headline">40%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mt-2">Reducción Tiempos</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text font-headline">5+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mt-2">Proyectos IA</div>
          </div>
        </div>
      </section>

      <AnimatedSection id="educacion">
        <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-headline gradient-text">
                <GraduationCap className="inline mr-3 text-accent" size={40} />
                Educación
            </h2>
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm p-8 border-border">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {cvData.education.map((edu, i) => (
                    <div key={i} className="bg-card/50 p-6 rounded-lg animated-gradient-border hover:shadow-lg hover:shadow-accent/10 transition-all">
                      <h3 className="text-xl font-bold text-accent mb-2 font-headline">{edu.degree}</h3>
                      <p className="text-lg text-foreground mb-1">{edu.institution}</p>
                      <p className="text-md text-muted-foreground">{edu.period}</p>
                      {edu.honor && <p className="text-accent text-sm mt-2 flex items-center gap-2"><Star size={16} /> {edu.honor}</p>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
        </div>
      </AnimatedSection>
      
      <AnimatedSection id="experiencia">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-headline gradient-text">
            <Briefcase className="inline mr-3 text-accent" size={40} />
            Experiencia Profesional
          </h2>
          <div className="w-full space-y-4">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection id="proyectos">
        <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-headline gradient-text">
                <Code className="inline mr-3 text-accent" size={40} />
                Proyectos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => {
                  const image = getImage(project.imageUrlId);
                  return(
                    <Card key={project.id} className="bg-card/50 border-border transition-all duration-300 transform hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 flex flex-col animated-gradient-border">
                        {image && <Image
                          src={image.imageUrl}
                          alt={`visual del proyecto ${project.title}`}
                          width={600}
                          height={400}
                          className="w-full h-auto aspect-video object-cover rounded-t-lg"
                          data-ai-hint={image.imageHint}
                        />}
                        <CardContent className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-accent mb-2 font-headline">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {project.tags.map((tag) => (
                                <div key={tag} className="text-xs bg-primary/20 text-primary-foreground border border-primary/30 rounded-full px-3 py-1 transition-all hover:bg-primary/40 hover:scale-105">{tag}</div>
                              ))}
                            </div>
                        </CardContent>
                    </Card>
                )})}
            </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="habilidades">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-headline gradient-text">
            <Cpu className="inline mr-3 text-accent" size={40} />
            Habilidades Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skillsData).map(([category, skills]) => {
              const Icon = skillIcons[category as keyof typeof skillIcons];
              return (
                <Card key={category} className="bg-card/50 border-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 animated-gradient-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {Icon && <Icon className="text-accent h-8 w-8 mt-1 flex-shrink-0" />}
                      <div>
                        <h3 className="text-xl font-bold text-accent mb-2 font-headline">{skills.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {skills.items.join(' · ')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="certificaciones">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-headline gradient-text">
            <Award className="inline mr-3 text-accent" size={40} />
            Certificaciones y Logros
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <Card key={index} className="bg-card/50 border-border animated-gradient-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 flex flex-col h-full">
                <CardContent className="p-6 flex-1 flex items-center">
                  <div className="flex items-start gap-4">
                    <Award className="text-accent flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground text-sm">{cert}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contacto">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-headline gradient-text">
            <Mail className="inline mr-3 text-accent" size={40} />
            Contacto
          </h2>

          <Card className="bg-card/50 backdrop-blur-sm p-8 md:p-12 border-border">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <p className="text-xl text-muted-foreground mb-6">
                  ¿Interesado en colaborar en proyectos de IA, análisis de datos o ingeniería biomédica?
                </p>
                <p className="text-2xl text-accent font-headline">¡Hablemos!</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Button asChild className="h-auto text-left justify-start transition-transform duration-300 hover:scale-105" size="lg">
                    <a href={`mailto:${cvData.contact.email}`} className="flex items-center gap-4 p-6 rounded-lg">
                      <Mail size={32} className="flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm font-normal text-primary-foreground/80">{cvData.contact.email}</p>
                      </div>
                    </a>
                </Button>
                
                <Button asChild variant="secondary" className="h-auto text-left justify-start transition-transform duration-300 hover:scale-105" size="lg">
                  <a href={`tel:${cvData.contact.phone}`} className="flex items-center gap-4 p-6 rounded-lg">
                    <Phone size={32} className="flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <p className="text-sm font-normal text-secondary-foreground/80">{cvData.contact.phone}</p>
                    </div>
                  </a>
                </Button>

                <Button asChild variant="secondary" className="h-auto text-left justify-start transition-transform duration-300 hover:scale-105" size="lg">
                  <a href={`https://wa.me/${cvData.contact.phone.replace(/\\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-lg">
                    <MessageCircle size={32} className="flex-shrink-0" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm font-normal text-secondary-foreground/80">{cvData.contact.phone}</p>
                    </div>
                  </a>
                </Button>

                <Button asChild variant="secondary" className="h-auto text-left justify-start transition-transform duration-300 hover:scale-105" size="lg">
                  <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-lg">
                    <Github size={32} className="flex-shrink-0" />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="text-sm font-normal text-secondary-foreground/80">@{cvData.contact.github.split('/').pop()}</p>
                    </div>
                  </a>
                </Button>
                
                <div className="flex items-center gap-4 bg-muted p-6 rounded-lg md:col-span-2">
                  <MapPin size={32} className="flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-muted-foreground">{cvData.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground text-sm">
                  Idiomas: Español (Nativo) | Inglés (Avanzado)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <footer className="bg-background py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {cvData.name}. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground/50 text-sm mt-2">
            Diseñado con Next.js y Tailwind CSS en Firebase Studio.
          </p>
        </div>
      </footer>
      {showFloatingButton && (
        <div className="fixed bottom-8 left-8 z-50 animate-in fade-in duration-300">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size="icon" className="rounded-full h-14 w-14 shadow-lg transition-transform duration-300 hover:scale-110">
                        <Download className="h-6 w-6" />
                        <span className="sr-only">Descargar CV</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top" align="start">
                    <DropdownMenuItem asChild>
                        <a href="https://drive.google.com/uc?export=download&id=1tXlXo8psiKUyFIF75CWkFhvZu1OrfxNX" download>
                            <FileText className="mr-2" /> CV Analista de Datos
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <a href="https://drive.google.com/uc?export=download&id=1r9OgNObhdZu3niT-rHVqfJ1LMPZBlx2k" download>
                            <Activity className="mr-2" /> CV Ing. Biomédico
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      )}
      <elevenlabs-convai ref={convaiRef}></elevenlabs-convai>
      <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async />
    </div>
  );
}
