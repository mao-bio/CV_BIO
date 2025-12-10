import { cvData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Cpu, Database, Dna } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am an innovative Biomedical Engineer with a passion for leveraging artificial intelligence and data analysis to solve complex healthcare challenges. My expertise lies in developing predictive models, analyzing medical imagery, and creating data-driven solutions for both clinical and research environments.
            </p>
          </div>
          <div className="space-y-6">
             <h3 className="font-headline text-2xl font-bold tracking-tighter">Core Competencies</h3>
             <div className="flex flex-wrap gap-2">
                {cvData.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                ))}
             </div>
             <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-primary" />
                    <span>AI & Machine Learning</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Dna className="w-5 h-5 text-primary" />
                    <span>Biomedical Data</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-primary" />
                    <span>Deep Learning Models</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    <span>Healthcare Analytics</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
