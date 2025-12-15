'use server';

/**
 * @fileOverview Provides code quality assurance by detecting Firebase branding in code snippets.
 *
 * - codeQualityAssurance - A function that analyzes code for Firebase branding.
 * - CodeQualityInput - The input type for the codeQualityAssurance function.
 * - CodeQualityOutput - The return type for the codeQualityAssurance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CodeQualityInputSchema = z.object({
  codeSnippet: z.string().describe('The code snippet to analyze for branding.'),
});
export type CodeQualityInput = z.infer<typeof CodeQualityInputSchema>;

const CodeQualityOutputSchema = z.object({
  hasFirebaseBranding: z
    .boolean()
    .describe('Indicates whether Firebase branding is present in the code snippet.'),
  report: z.string().describe('A detailed report on the presence of Firebase branding.'),
});
export type CodeQualityOutput = z.infer<typeof CodeQualityOutputSchema>;

export async function codeQualityAssurance(
  input: CodeQualityInput
): Promise<CodeQualityOutput> {
  return codeQualityAssuranceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'codeQualityAssurancePrompt',
  input: {schema: CodeQualityInputSchema},
  output: {schema: CodeQualityOutputSchema},
  prompt: `You are a code analysis expert tasked with identifying Firebase branding in code.

Analyze the following code snippet for any Firebase logos, icons, text references, or unwanted dependencies.

Code Snippet:
```
{{{codeSnippet}}}
```

Provide a report detailing the findings and indicate whether Firebase branding is present.
Set hasFirebaseBranding to true if any Firebase branding is found, otherwise false.`,
});

const codeQualityAssuranceFlow = ai.defineFlow(
  {
    name: 'codeQualityAssuranceFlow',
    inputSchema: CodeQualityInputSchema,
    outputSchema: CodeQualityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
