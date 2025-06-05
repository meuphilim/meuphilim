"use client";

import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { summarizeTechConcept, type SummarizeTechConceptInput } from '@/ai/flows/summarize-tech-concept';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { BrainCircuit, Loader2 } from 'lucide-react';

const FormSchema = z.object({
  textToSummarize: z.string().min(50, {
    message: "Por favor, insira pelo menos 50 caracteres para resumir.",
  }).max(5000, {
    message: "O texto não pode exceder 5000 caracteres.",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

const AiSummarizer: React.FC = () => {
  const [summary, setSummary] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      textToSummarize: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    startTransition(async () => {
      setSummary(null);
      try {
        const input: SummarizeTechConceptInput = { text: data.textToSummarize };
        const result = await summarizeTechConcept(input);
        setSummary(result.summary);
        toast({
          title: "Sucesso!",
          description: "Conceito tecnológico resumido com sucesso.",
        });
      } catch (error) {
        console.error("Erro na sumarização:", error);
        setSummary(null);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Falha ao resumir o texto. Por favor, tente novamente.",
        });
      }
    });
  };

  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <BrainCircuit className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-3xl font-headline">Sumarizador de Tecnologia com IA</CardTitle>
            <CardDescription>
              Cole qualquer conceito tecnológico complexo abaixo, e nossa IA fornecerá um resumo conciso.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="textToSummarize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="textToSummarize" className="text-lg">Texto para Sumarizar</FormLabel>
                      <FormControl>
                        <Textarea
                          id="textToSummarize"
                          placeholder="Insira um conceito tecnológico complexo, trecho de artigo ou explicação aqui..."
                          className="min-h-[150px] resize-y"
                          {...field}
                          aria-describedby="textToSummarize-message"
                        />
                      </FormControl>
                      <FormMessage id="textToSummarize-message" />
                    </FormItem>
                  )}
                />
                {summary && (
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Resumo:</h3>
                    <div className="p-4 bg-muted rounded-md border border-border">
                      <p className="text-muted-foreground whitespace-pre-wrap">{summary}</p>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Resumindo...
                    </>
                  ) : (
                    'Sumarizar Conceito'
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default AiSummarizer;
