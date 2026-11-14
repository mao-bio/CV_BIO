import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Old CV links (printed CVs, LinkedIn) keep working.
  async redirects() {
    return [
      { source: '/CV_MARIO_2026.pdf', destination: '/cv/CV_Mario_Hernandez_Ing_Biomedico_ES.pdf', permanent: false },
      { source: '/CV_MARIO_H_DATA_A.pdf', destination: '/cv/CV_Mario_Hernandez_Datos_IA_ES.pdf', permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-3.expansion.mx',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
