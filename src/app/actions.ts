'use server';

import {
  personalizedProjectRecommendations,
  PersonalizedProjectRecommendationsInput,
} from '@/ai/flows/personalized-project-recommendations';
import {
  categorizeContactFormMessage,
  CategorizeContactFormMessageInput,
} from '@/ai/flows/categorize-contact-form-messages';

export async function getRecommendedProjects(
  input: PersonalizedProjectRecommendationsInput
): Promise<string[]> {
  try {
    const result = await personalizedProjectRecommendations(input);
    return result.recommendedProjects;
  } catch (error) {
    console.error('Error in getRecommendedProjects:', error);
    // In a real app, you might want to throw a more specific error
    // or return a friendly message.
    return [];
  }
}

export async function getMessageCategory(
  input: CategorizeContactFormMessageInput
): Promise<string> {
  try {
    const result = await categorizeContactFormMessage(input);
    return result.category;
  } catch (error) {
    console.error('Error in getMessageCategory:', error);
    return "undetermined";
  }
}
