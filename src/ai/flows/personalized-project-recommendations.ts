'use server';

/**
 * @fileOverview A personalized project recommendation AI agent.
 *
 * - personalizedProjectRecommendations - A function that handles the project recommendation process.
 * - PersonalizedProjectRecommendationsInput - The input type for the personalizedProjectRecommendations function.
 * - PersonalizedProjectRecommendationsOutput - The return type for the personalizedProjectRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedProjectRecommendationsInputSchema = z.object({
  visitorInterests: z
    .string()
    .describe('A description of the visitors interests.'),
  portfolioProjects: z.array(z.string()).describe('A list of available portfolio projects.'),
});
export type PersonalizedProjectRecommendationsInput = z.infer<
  typeof PersonalizedProjectRecommendationsInputSchema
>;

const PersonalizedProjectRecommendationsOutputSchema = z.object({
  recommendedProjects: z
    .array(z.string())
    .describe('A list of recommended projects based on the visitor interests.'),
});
export type PersonalizedProjectRecommendationsOutput = z.infer<
  typeof PersonalizedProjectRecommendationsOutputSchema
>;

export async function personalizedProjectRecommendations(
  input: PersonalizedProjectRecommendationsInput
): Promise<PersonalizedProjectRecommendationsOutput> {
  return personalizedProjectRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedProjectRecommendationsPrompt',
  input: {schema: PersonalizedProjectRecommendationsInputSchema},
  output: {schema: PersonalizedProjectRecommendationsOutputSchema},
  prompt: `You are an expert AI assistant specializing in recommending relevant projects based on user interests.

You will receive a description of a visitor's interests, and a list of available projects from a portfolio.
Based on the visitor's interests, you will make a determination as to which projects would be most relevant to the visitor.

Visitor Interests: {{{visitorInterests}}}
Portfolio Projects: {{#each portfolioProjects}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Recommended Projects:`,
});

const personalizedProjectRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedProjectRecommendationsFlow',
    inputSchema: PersonalizedProjectRecommendationsInputSchema,
    outputSchema: PersonalizedProjectRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
