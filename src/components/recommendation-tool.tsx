"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { getRecommendedProjects } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { portfolioProjects } from "@/lib/data";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const FormSchema = z.object({
  interests: z.string().min(10, {
    message: "Please describe your interests in at least 10 characters.",
  }),
});

export function RecommendationTool() {
  const [recommended, setRecommended] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      interests: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (data) => {
    setIsLoading(true);
    setRecommended([]);
    
    const projectTitles = portfolioProjects.map(p => p.title);
    const recommendations = await getRecommendedProjects({
      visitorInterests: data.interests,
      portfolioProjects: projectTitles,
    });
    
    setRecommended(recommendations);
    setIsLoading(false);
  };
  
  const recommendedProjectDetails = portfolioProjects.filter(p => recommended.includes(p.title));

  return (
    <div className="mx-auto grid max-w-4xl gap-8">
      <div className="space-y-2 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Personalized Recommendations</h2>
        <p className="text-muted-foreground md:text-xl/relaxed">
          Not sure where to start? Describe your interests, and my AI assistant will suggest the most relevant projects from my portfolio.
        </p>
      </div>
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Interests</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'I'm interested in predictive analytics for clinical trials' or 'I want to see applications of computer vision in diagnostics'."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : 'Get Recommendations'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isLoading && (
         <div className="text-center text-muted-foreground">
            <Loader2 className="mx-auto h-8 w-8 animate-spin" />
            <p>Analyzing your interests and finding relevant projects...</p>
         </div>
      )}

      {recommended.length > 0 && (
        <div>
          <h3 className="font-headline text-2xl font-bold tracking-tighter mb-4 text-center">Recommended For You:</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {recommendedProjectDetails.map((project) => (
               <Link href={`#portfolio`} key={project.id}>
                <Card className="h-full hover:bg-muted/50 transition-colors">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
