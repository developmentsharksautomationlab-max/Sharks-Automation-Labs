import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Turbopack configuration (Next.js 16 default)
  turbopack: {},
  
  // === PERFORMANCE OPTIMIZATIONS ===
  
  // Note: SWC minification is enabled by default in Next.js 16, no need to specify
  
  // Compress output
  compress: true,
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75, 90, 100], // Required for Next.js 16
  },
  
  // Production optimizations
  poweredByHeader: false,
  
  // Experimental features for performance
  experimental: {
    // optimizeCss: true, // Disabled - requires critters package
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@react-three/fiber',
      '@react-three/drei',
      'three',
    ],
  },
  
  // Note: Webpack config removed for Next.js 16 (Turbopack is default)
  // Turbopack handles optimizations automatically
  // If you need webpack, use --webpack flag or configure turbopack
};

export default nextConfig;
