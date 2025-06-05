/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1';

const repo = 'meuphilim'; // nome do seu repositório

const nextConfig = {
  output: 'export',
  // Só define basePath/assetPrefix se NÃO estiver na Vercel
  ...(isVercel
    ? {}
    : {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }),
};

module.exports = nextConfig;