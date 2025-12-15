'use server';

/**
 * @fileOverview Analyzes code snippets for disallowed branding and generates reports.
 *
 * - evaluateCodeQuality - A function that handles the code quality evaluation process.
 * - CodeQualityInput - The input type for the evaluateCodeQuality function.
 * - CodeQualityOutput - The return type for the evaluateCodeQuality function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CodeQualityInputSchema = z.object({
  codeSnippet: z.string().describe('The code snippet to analyze.'),
  projectName: z.string().describe('The name of the project.'),
});
export type CodeQualityInput = z.infer<typeof CodeQualityInputSchema>;

const CodeQualityOutputSchema = z.object({
  hasDisallowedBranding: z
    .boolean()
    .describe('Whether the code snippet contains disallowed branding.'),
  report: z.string().describe('A report of the code quality evaluation.'),
});
export type CodeQualityOutput = z.infer<typeof CodeQualityOutputSchema>;

export async function evaluateCodeQuality(
  input: CodeQualityInput
): Promise<CodeQualityOutput> {
  return evaluateCodeQualityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'codeQualityPrompt',
  input: {schema: CodeQualityInputSchema},
  output: {schema: CodeQualityOutputSchema},
  prompt: `You are a code quality expert.

You will analyze the given code snippet for disallowed branding related to Firebase and other potential issues based on project guidelines.

Project Name: {{{projectName}}}
Code Snippet:
\`\`\`
{{{codeSnippet}}}
\`\`\`

Generate a report indicating whether the code snippet contains disallowed branding and any other potential issues.
Set hasDisallowedBranding to true if any disallowed branding is found, otherwise false.
`,
});

const evaluateCodeQualityFlow = ai.defineFlow(
  {
    name: 'evaluateCodeQualityFlow',
    inputSchema: CodeQualityInputSchema,
    outputSchema: CodeQualityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
