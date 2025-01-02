import { z } from 'zod';

export const promptSchema = z.object({
  prompt: z.string().min(1, 'Prompt is required'),
});

export type PromptFormData = z.infer<typeof promptSchema>;
