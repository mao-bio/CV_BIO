

'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Mail, Phone, Github, MapPin, Briefcase, GraduationCap, Award, Code, Database, Brain, ChevronRight, Menu, X, Linkedin, Download, FileText, Activity, Users, Star, Cpu, HeartPulse, FlaskConical, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useScrollspy } from '@/hooks/use-scrollspy';
import { cn } from '@/lib/utils';
import { cvData, skillsData, experienceData, certificationsData, projectsData } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
    <section id={id} ref={ref} className={cn('min-h-screen py-20 px-4 flex items-center', isVisible ? 'fade-in-up' : 'opacity-0')}>
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
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: any[] = [];
    const particleCount = 350;

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
          vx: (Math.random() - 0.5) * 1.8,
          vy: (Math.random() - 0.5) * 1.8,
          size: Math.random() * 2.5 + 1,
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


export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = ['inicio', 'experiencia', 'proyectos', 'habilidades', 'certificaciones', 'contacto'];
  const activeSection = useScrollspy(sectionIds, { offset: 100 });


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);
  const profileImage = getImage('profile');

  const SkillIcon = ({ iconName }: { iconName: string }) => {
    const icons: { [key: string]: React.ElementType } = {
      programacion: Code,
      ia: Brain,
      profesionales: HeartPulse,
      blandas: Users,
    };
    const Icon = icons[iconName] || Star;
    return <Icon className="mr-3 text-accent" size={28} />;
  };
  
  const ExperienceIcon = ({ iconName }: { iconName: string | undefined }) => {
    const icons: { [key: string]: React.ElementType } = {
      corporate: Briefcase,
      research: FlaskConical,
      academic: BookOpen,
    };
    const Icon = iconName ? icons[iconName] : Briefcase;
    return <Icon className="text-accent" />;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold gradient-text font-headline">
              {cvData.name.split(' ').slice(0, 2).join(' ')}
            </div>
            
            <div className="hidden md:flex space-x-8">
              {sectionIds.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-accent transition-colors duration-300 ${activeSection === item ? 'text-accent font-semibold' : ''}`}
                >
                  {item === 'inicio' ? 'Inicio' : item}
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
                  {item === 'inicio' ? 'Inicio' : item}
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
                            className="rounded-full border-4 border-primary/50 shadow-lg"
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
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                        {cvData.summary}
                    </p>
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
      
      <AnimatedSection id="experiencia">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center font-headline gradient-text">
            <Briefcase className="inline mr-3 text-accent" size={40} />
            Experiencia Profesional
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/70 hidden md:block"></div>
            
            <div className="space-y-16">
              {experienceData.map((exp, index) => (
                <div key={index} className={cn(
                  "flex flex-col md:flex-row items-center",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}>
                  
                  <div className="w-full md:w-5/12">
                    <Card className="bg-card/50 border-border transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:scale-[1.01] hover:border-accent/50 animated-gradient-border">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="md:hidden z-10 bg-background p-2 rounded-full border-2 border-accent flex-shrink-0 mt-1">
                                <ExperienceIcon iconName={exp.icon} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-accent mb-1 font-headline">{exp.puesto}</h3>
                                <p className="text-lg text-foreground">{exp.empresa}</p>
                                <div className="text-sm text-muted-foreground mt-2 flex flex-wrap gap-x-4 gap-y-1">
                                  <span>{exp.periodo}</span>
                                  <span className="flex items-center gap-1">
                                    <MapPin size={14} />
                                    {exp.ubicacion}
                                  </span>
                                </div>
                            </div>
                        </div>
                        <ul className="mt-4 space-y-3">
                          {exp.logros.map((logro, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <ChevronRight className="text-accent flex-shrink-0 mt-1" size={16} />
                              <span>{logro}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="w-2/12 h-16 md:h-auto flex justify-center items-center relative">
                    <div className="h-full w-0.5 md:w-full md:h-0.5 bg-border/70"></div>
                    <div className="absolute z-10 bg-background p-3 rounded-full border-2 border-accent shadow-lg">
                      <ExperienceIcon iconName={exp.icon} />
                    </div>
                  </div>

                  <div className="hidden md:block w-5/12"></div>

                </div>
              ))}
            </div>
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
                    <Card key={project.id} className="bg-card/50 border-border transition-all duration-300 transform hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 flex flex-col overflow-hidden animated-gradient-border">
                        {image && <Image
                          src={image.imageUrl}
                          alt={`visual del proyecto ${project.title}`}
                          width={600}
                          height={400}
                          className="w-full h-auto aspect-video object-cover"
                          data-ai-hint={image.imageHint}
                        />}
                        <CardContent className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-accent mb-2 font-headline">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {project.tags.map((tag) => (
                                <div key={tag} className="text-xs bg-primary/20 text-primary-foreground border border-primary/50 rounded-full px-3 py-1 transition-all hover:bg-primary/40 hover:scale-105">{tag}</div>
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

          <div className="space-y-10">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category}>
                <h3 className="flex items-center text-2xl font-bold text-accent mb-4 font-headline">
                  <SkillIcon iconName={skills.icon} />
                  {skills.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 rounded-full border border-border bg-card/50 text-muted-foreground hover:bg-accent/10 hover:text-accent transition-all duration-300 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm p-8 border-border mt-16">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold text-accent mb-6 flex items-center gap-3 font-headline">
                <GraduationCap size={32} />
                Educación
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {cvData.education.map((edu, i) => (
                  <div key={i}>
                    <h4 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-muted-foreground/80 text-sm">{edu.period}</p>
                    {edu.honor && <p className="text-accent text-sm mt-1">⭐ {edu.honor}</p>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection id="certificaciones">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-headline gradient-text">
            <Award className="inline mr-3 text-accent" size={40} />
            Certificaciones y Logros
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <Card key={index} className="bg-card/50 border-border transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/10 animated-gradient-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
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
                  <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-lg">
                    <Github size={32} className="flex-shrink-0" />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="text-sm font-normal text-secondary-foreground/80">@{cvData.contact.github.split('/').pop()}</p>
                    </div>
                  </a>
                </Button>
                
                <div className="flex items-center gap-4 bg-muted p-6 rounded-lg">
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
    </div>
  );
}
