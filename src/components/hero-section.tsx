import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cvData } from "@/lib/data";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const heroBg = PlaceHolderImages.find(p => p.id === 'hero-bg');

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
       {heroBg && <Image
          src={heroBg.imageUrl}
          alt={heroBg.description}
          fill
          className="object-cover"
          data-ai-hint={heroBg.imageHint}
          priority
        />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="relative container px-4 md:px-6 z-10">
        <div className="grid gap-6">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-headline tracking-tighter text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              {cvData.name}
            </h1>
            <p className="max-w-[700px] text-lg text-gray-200 md:text-xl">
              {cvData.title}
            </p>
            <p className="max-w-[700px] text-gray-300">
              {cvData.summary}
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#portfolio">View My Work</Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <Link href={`mailto:${cvData.contact.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Mail className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              </Link>
              <Link href={`https://${cvData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              </Link>
              <Link href={`https://${cvData.contact.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
