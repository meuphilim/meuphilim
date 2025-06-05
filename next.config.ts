
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Essencial para GitHub Pages
  // Se o seu site GitHub Pages for servido de um subdiretório (ex: https://<username>.github.io/<repository-name>/),
  // você precisará descomentar e configurar basePath e assetPrefix.
  // Exemplo para um repositório chamado 'meu-app':
  // basePath: '/meu-app',
  // assetPrefix: '/meu-app/',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Para 'next export', o otimizador de imagem padrão pode não funcionar sem um servidor Next.js em execução.
    // 'unoptimized: true' é frequentemente a solução mais simples para o GitHub Pages se você usar imagens locais.
    // Como você está usando apenas placehold.co (URLs externas), o loader padrão deve funcionar.
    // Se adicionar imagens locais, pode precisar de: unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
