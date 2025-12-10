"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioProjects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";

const allTags = [...new Set(portfolioProjects.flatMap((p) => p.tags))];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.tags.includes(activeFilter));
      
  const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">My Portfolio</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of my projects in AI, data science, and biomedical engineering.
            </p>
          </div>
        </div>

        <div className="my-8 flex justify-center flex-wrap gap-2">
          <Button
            variant={activeFilter === "All" ? "default" : "outline"}
            onClick={() => setActiveFilter("All")}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={activeFilter === tag ? "default" : "outline"}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const image = getImage(project.imageUrlId);
            return (
            <Card key={project.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                {image && <Image
                  src={image.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  width={600}
                  height={400}
                  className="w-full h-auto aspect-video object-cover"
                  data-ai-hint={image.imageHint}
                />}
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4">
                 <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                 <div className="flex gap-4">
                    <Button variant="outline" asChild>
                        <Link href={project.liveLink} target="_blank">
                            Live Demo <ExternalLink className="ml-2 h-4 w-4"/>
                        </Link>
                    </Button>
                     <Button variant="ghost" asChild>
                        <Link href={project.repoLink} target="_blank">
                            GitHub Repo
                        </Link>
                    </Button>
                </div>
              </CardFooter>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
}
