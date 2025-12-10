'use server';
/**
 * @fileOverview This file contains a Genkit flow for categorizing contact form messages.
 *
 * The flow uses AI to analyze the content of the message and classify it into predefined categories
 * such as job offer, collaboration, or question. This allows for efficient prioritization and response.
 *
 * @exports categorizeContactFormMessage - The main function to categorize contact form messages.
 * @exports CategorizeContactFormMessageInput - The input type for the categorizeContactFormMessage function.
 * @exports CategorizeContactFormMessageOutput - The output type for the categorizeContactFormMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeContactFormMessageInputSchema = z.object({
  message: z.string().describe('The content of the contact form message.'),
});
export type CategorizeContactFormMessageInput = z.infer<typeof CategorizeContactFormMessageInputSchema>;

const CategorizeContactFormMessageOutputSchema = z.object({
  category: z
    .string()
    .describe(
      'The category of the message, e.g., job offer, collaboration, question, or other.  Use only these exact words for categorization.'
    ),
  reason: z.string().describe('The reasoning behind the categorization.'),
});
export type CategorizeContactFormMessageOutput = z.infer<typeof CategorizeContactFormMessageOutputSchema>;

export async function categorizeContactFormMessage(
  input: CategorizeContactFormMessageInput
): Promise<CategorizeContactFormMessageOutput> {
  return categorizeContactFormMessageFlow(input);
}

const categorizeContactFormMessagePrompt = ai.definePrompt({
  name: 'categorizeContactFormMessagePrompt',
  input: {schema: CategorizeContactFormMessageInputSchema},
  output: {schema: CategorizeContactFormMessageOutputSchema},
  prompt: `You are an AI assistant tasked with categorizing contact form messages.

  Analyze the following message and determine its category. The possible categories are: job offer, collaboration, question, or other.
  For the "reason" field, explain the reasoning behind your categorization.

  Message: {{{message}}}
  Category:`, // Intentionally left open for the model to complete the category
});

const categorizeContactFormMessageFlow = ai.defineFlow(
  {
    name: 'categorizeContactFormMessageFlow',
    inputSchema: CategorizeContactFormMessageInputSchema,
    outputSchema: CategorizeContactFormMessageOutputSchema,
  },
  async input => {
    const {output} = await categorizeContactFormMessagePrompt(input);
    return output!;
  }
);
