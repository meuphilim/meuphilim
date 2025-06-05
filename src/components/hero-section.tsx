
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Threads from '@/components/effects/threads'; // Importe o novo componente

const HeroSection: React.FC = () => {
  // Cor primária: #4285F4 (Azul vibrante)
  // R = 66 / 255 = 0.2588
  // G = 133 / 255 = 0.5215
  // B = 244 / 255 = 0.9568
  const primaryColorRGB = [0.2588, 0.5215, 0.9568];

  return (
    <section className="relative bg-transparent text-foreground h-[calc(100vh-80px)] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Threads
          color={primaryColorRGB}
          amplitude={0.6} // Ajuste a amplitude conforme necessário
          distance={0.1}   // Ajuste a distância conforme necessário
          enableMouseInteraction={true}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 drop-shadow-lg">
          Criatividade Impulsionada por Tecnologia.
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto drop-shadow-md">
          Combinamos design inovador e inteligência de ponta para transformar suas ideias em realidade digital impactante.
        </p>
        <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          Explore Nossas Soluções
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
