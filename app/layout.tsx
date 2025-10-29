import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shark Retail - E-commerce Automation Solutions",
  description: "Transform your capital into systematically managed, cash-flow generative e-commerce enterprises. We deploy sophisticated automation technologies for Amazon, Shopify, TikTok Shop, and Walmart to scale your operations while you focus on strategic growth.",
  keywords: ["e-commerce automation", "Amazon automation", "Shopify automation", "TikTok Shop automation", "Walmart automation", "PPC management", "virtual assistant", "account reinstatement", "content creation", "keyword research", "product hunting"],
  authors: [{ name: "Shark Retail" }],
  creator: "Shark Retail",
  publisher: "Shark Retail",
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
    url: 'https://sharkretail.com',
    siteName: 'Shark Retail',
    title: 'Shark Retail - E-commerce Automation Solutions',
    description: 'Transform your capital into systematically managed, cash-flow generative e-commerce enterprises. We deploy sophisticated automation technologies for Amazon, Shopify, TikTok Shop, and Walmart.',
    images: [
      {
        url: '/images/sharks-retail-logo.png',
        width: 1200,
        height: 630,
        alt: 'Shark Retail Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shark Retail - E-commerce Automation Solutions',
    description: 'Transform your capital into systematically managed, cash-flow generative e-commerce enterprises.',
    images: ['/images/sharks-retail-logo.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
