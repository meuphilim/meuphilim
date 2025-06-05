import HeroSection from '@/components/hero-section';
import AiSummarizer from '@/components/ai-summarizer';

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <AiSummarizer /> */}

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-headline font-semibold text-foreground mb-6">
            Explore Novas Possibilidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos constantemente aprimorando nossas tecnologias com recursos inovadores e insights relevantes para apoiá-lo em sua jornada no universo tecnológico.
          </p>
        </div>
      </section>
    </>
  );
}
