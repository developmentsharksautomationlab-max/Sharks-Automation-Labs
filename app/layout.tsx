import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import PageLoader from "@/components/PageLoader";
import { LoadingProvider } from "@/contexts/LoadingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thesharkretail.com'),
  title: "Sharks Automation Lab - E-commerce Automation Solutions",
  description: "Sharks Automation Lab - Transform your capital into systematically managed, cash-flow generative e-commerce enterprises. We deploy sophisticated automation technologies for Amazon, Shopify, TikTok Shop, and Walmart to scale your operations while you focus on strategic growth.",
  keywords: ["e-commerce automation", "Amazon automation", "Shopify automation", "TikTok Shop automation", "Walmart automation", "PPC management", "virtual assistant", "account reinstatement", "content creation", "keyword research", "product hunting", "The Shark Retail"],
  authors: [{ name: "The Shark Retail" }],
  creator: "The Shark Retail",
  publisher: "The Shark Retail",
  applicationName: "The Shark Retail",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesharkretail.com',
    siteName: 'Sharks Automation Lab',
    title: 'Sharks Automation Lab - E-commerce Automation Solutions',
    description: 'Sharks Automation Lab - Transform your capital into systematically managed, cash-flow generative e-commerce enterprises. We deploy sophisticated automation technologies for Amazon, Shopify, TikTok Shop, and Walmart to scale your operations while you focus on strategic growth.',
    images: [
      {
        url: '/logo_main.png',
        width: 1200,
        height: 630,
        alt: 'Sharks Automation Lab Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sharkretail',
    creator: '@sharkretail',
    title: 'Sharks Automation Lab - E-commerce Automation Solutions',
    description: 'Sharks Automation Lab - Transform your capital into systematically managed, cash-flow generative e-commerce enterprises. We deploy sophisticated automation technologies for Amazon, Shopify, TikTok Shop, and Walmart.',
    images: ['/logo_main.png'],
  },
  icons: {
    icon: [
      { url: '/logo_main.png', sizes: 'any' },
      { url: '/logo_main.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo_main.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo_main.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/logo_main.png',
    apple: [
      { url: '/logo_main.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/logo_main.png',
      },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://thesharkretail.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <LoadingProvider>
          <PageLoader />
          <MetaPixel />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
