'use server';
/**
 * @fileOverview Resume um conceito tecnológico a partir de um bloco de texto.
 *
 * - summarizeTechConcept - Uma função que resume o conceito tecnológico.
 * - SummarizeTechConceptInput - O tipo de entrada para a função summarizeTechConcept.
 * - SummarizeTechConceptOutput - O tipo de retorno para a função summarizeTechConcept.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTechConceptInputSchema = z.object({
  text: z.string().describe('O texto a ser resumido.'),
});
export type SummarizeTechConceptInput = z.infer<typeof SummarizeTechConceptInputSchema>;

const SummarizeTechConceptOutputSchema = z.object({
  summary: z.string().describe('O resumo do texto.'),
});
export type SummarizeTechConceptOutput = z.infer<typeof SummarizeTechConceptOutputSchema>;

export async function summarizeTechConcept(input: SummarizeTechConceptInput): Promise<SummarizeTechConceptOutput> {
  return summarizeTechConceptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTechConceptPrompt',
  input: {schema: SummarizeTechConceptInputSchema},
  output: {schema: SummarizeTechConceptOutputSchema},
  prompt: `Resuma o seguinte texto:\n\n{{{text}}}`,
});

const summarizeTechConceptFlow = ai.defineFlow(
  {
    name: 'summarizeTechConceptFlow',
    inputSchema: SummarizeTechConceptInputSchema,
    outputSchema: SummarizeTechConceptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
