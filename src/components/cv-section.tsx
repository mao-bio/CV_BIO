import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cvData } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

export function CvSection() {
  return (
    <section id="cv" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-start gap-8">
          <div className="space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Curriculum Vitae
            </h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and academic background in biomedical engineering and artificial intelligence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 font-headline text-2xl font-bold">
                <Briefcase className="h-6 w-6" />
                Work Experience
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {cvData.experience.map((exp, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>
                      <div className="text-left">
                        <p className="font-semibold">{exp.role}</p>
                        <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>{exp.description}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 font-headline text-2xl font-bold">
                <GraduationCap className="h-6 w-6" />
                Education
              </h3>
               <Accordion type="single" collapsible className="w-full">
                {cvData.education.map((edu, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>
                       <div className="text-left">
                        <p className="font-semibold">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">{edu.institution} | {edu.period}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>{edu.description}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
