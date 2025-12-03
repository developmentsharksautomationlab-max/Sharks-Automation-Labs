# Sharks Automation Labs - Complete Project Documentation

A modern, high-performance Next.js 15 website featuring cutting-edge 3D animations, responsive design, and premium user experience. Built with React Three Fiber, Framer Motion, and TypeScript.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Features](#features)
- [Components Documentation](#components-documentation)
- [Pages & Routes](#pages--routes)
- [Configuration Files](#configuration-files)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [Performance Optimizations](#performance-optimizations)
- [Development Guidelines](#development-guidelines)

---

## 🎯 Project Overview

**Sharks Automation Labs** is a full-stack Next.js application showcasing IT services, digital solutions, and automation capabilities. The project features:

- **3D Interactive Elements**: React Three Fiber powered 3D scenes
- **Advanced Animations**: Framer Motion for smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Code splitting, lazy loading, and optimized builds
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Contact Form**: Resend API integration for email handling

---

## 🛠 Tech Stack

### Core Framework
- **Next.js 15.5.6** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety

### 3D & Graphics
- **@react-three/fiber 9.4.2** - React renderer for Three.js
- **@react-three/drei 10.7.7** - Useful helpers for R3F
- **@react-three/postprocessing 3.0.4** - Post-processing effects
- **three 0.181.2** - 3D graphics library

### Animation & UI
- **framer-motion 12.23.25** - Animation library
- **gsap 3.13.0** - Advanced animations
- **@gsap/react 2.1.2** - GSAP React integration
- **lucide-react 0.546.0** - Icon library

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Sass 1.94.2** - CSS preprocessor

### Utilities
- **resend 6.4.2** - Email API
- **react-fast-marquee 1.6.5** - Marquee animations
- **swiper 12.0.3** - Touch slider
- **matter-js 0.20.0** - Physics engine

---

## 📁 Project Structure

```
Sharks-Automation-Labs/
├── app/                          # Next.js App Router
│   ├── about/                    # About Us page
│   │   └── page.tsx
│   ├── contact/                 # Contact page
│   │   └── page.tsx
│   ├── services/                # Services listing page
│   │   └── page.tsx
│   ├── our-services/            # Service category pages
│   │   ├── creative-services/
│   │   │   ├── creative/
│   │   │   └── creative-design/
│   │   ├── digital-services/
│   │   │   ├── app-development/
│   │   │   ├── performance-marketing/
│   │   │   ├── seo/
│   │   │   ├── social-media/
│   │   │   └── web-development/
│   │   ├── emerging-technologies/
│   │   │   ├── ar/
│   │   │   ├── blockchain/
│   │   │   ├── nfts/
│   │   │   ├── vr/
│   │   │   └── web3/
│   │   ├── industry-plans/
│   │   │   ├── cleaning/
│   │   │   ├── digital-agency/
│   │   │   ├── ecommerce/
│   │   │   ├── financial/
│   │   │   ├── healthcare/
│   │   │   ├── law-firms/
│   │   │   ├── professional/
│   │   │   ├── real-estate/
│   │   │   ├── restaurants/
│   │   │   └── vehicle-rental/
│   │   ├── outsourcing-partnership/
│   │   │   ├── agency-plan/
│   │   │   └── outsourcing/
│   │   └── virtual-resources/
│   │       ├── designer-resources/
│   │       ├── developer-resources/
│   │       ├── marketing-resources/
│   │       └── virtual-assistant/
│   ├── api/                     # API routes
│   │   └── contact/
│   │       └── route.ts        # Contact form API
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   └── favicon.ico
│
├── components/                  # React components
│   ├── Header.tsx               # Navigation header
│   ├── Hero.tsx                 # Homepage hero section
│   ├── OurStoryHero.tsx         # About page 3D hero
│   ├── FallingLogosSection.tsx # Physics-based logo animation
│   ├── InvestmentLifecycle.tsx # Services carousel
│   ├── MarqueeSection.tsx       # Marquee animation
│   ├── WhySharkRetail.tsx       # 3D box section
│   ├── CallToAction.tsx         # CTA section
│   ├── ContactSection.tsx       # Contact form
│   ├── Footer.tsx               # Footer component
│   ├── MegaMenu.tsx             # Mega menu dropdown
│   ├── MetaPixel.tsx            # Facebook Pixel
│   ├── PageLoader.tsx           # Page loader animation
│
├── contexts/                    # React contexts
│   └── LoadingContext.tsx       # Loading state management
│
├── public/                      # Static assets
│   ├── images/
│   │   ├── companies/           # Company logos
│   │   └── logo_main_dark.png
│   ├── fonts/
│   │   └── ITCAvantGardeStd-Bk.otf
│   ├── manifest.json
│   ├── robots.txt
│   └── banner_robot.png
│
├── scripts/                     # Utility scripts
│   ├── create-all-service-pages.js
│   ├── fix-all-buttons-links.js
│   ├── fix-all-service-buttons.js
│   ├── generate-all-service-pages.js
│   ├── generate-service-pages.js
│   └── make-pages-responsive.js
│
├── .npmrc                       # NPM configuration
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── vercel.json                  # Vercel deployment config
├── package.json                 # Dependencies
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sharksautomationlabs/shark-automation-lab.git
   cd Sharks-Automation-Labs
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   > Note: `--legacy-peer-deps` is required due to React 19 peer dependency conflicts

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   touch .env.local
   ```
   Add the following:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   NEXT_PUBLIC_SITE_URL=https://thesharkretail.com
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Resend API Key (for contact form)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Site URL (for metadata)
NEXT_PUBLIC_SITE_URL=https://thesharkretail.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Getting Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Create an API key in the dashboard
3. Add it to `.env.local`

---

## ✨ Features

### 🎨 Design System

#### Color Palette
- **Primary Dark**: `#052126` - Main background
- **Primary Cyan**: `#35c4dd` - Accent color, CTAs
- **Primary White**: `#f2f4f4` - Text, light backgrounds
- **Gold**: `#ffd700` - Highlights
- **Purple**: `#bc13fe` - Secondary accent

#### Typography
- **Primary Font**: `ITCAvantGardeStd-Bk` (ITC Avant Garde Std Book)
- **Fallback**: Arial, Helvetica, sans-serif
- **Font Loading**: Preloaded in `layout.tsx` for performance

#### Animations
- **Gradient Animation**: `animate-gradient-x` - Smooth gradient movement
- **Smooth Scroll**: Global smooth scrolling behavior
- **Custom Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` - Apple-like transitions

### 🎭 Animation Patterns

1. **Ripple Effect** (Buttons)
   - Expanding circle from center
   - Duration: 500ms
   - Ease: ease-out

2. **Slide Down** (Header)
   - Initial: `y: -200, opacity: 0`
   - Animate: `y: 0, opacity: 1`
   - Duration: 1.2s

3. **Scale Animation** (Hero Robot)
   - Multi-step animation
   - Duration: 1.5s

4. **3D Tilt** (Cards)
   - RotateX: `-12deg` to `12deg`
   - RotateY: `-12deg` to `12deg`
   - Perspective: 1000px

### 📱 Responsive Design

- **Mobile First**: Base styles for mobile, enhanced for desktop
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px

---

## 🧩 Components Documentation

### Header Component (`components/Header.tsx`)

**Purpose**: Main navigation header with responsive menu

**Features**:
- Fixed header with slide-down animation
- Glass morphism effect with backdrop blur
- Responsive navigation (desktop: glass capsule, mobile: hamburger)
- Magnetic button effect on logo and CTA
- Scroll-triggered styling
- Mobile menu with full-screen overlay

**Props**: None (uses context and hooks)

**Key Animations**:
- Initial slide down from `y: -200`
- Scroll-triggered background change
- Nav links hover animation
- Button ripple effect

### Hero Component (`components/Hero.tsx`)

**Purpose**: Homepage hero section with 3-column layout

**Layout**:
- Desktop: 3-column grid (Content | Robot | Socials)
- Mobile: Stacked (Content bottom, Robot centered)

**Features**:
- Icon badge with "CYBER SECURE" label
- Animated heading with gradient text
- Description text
- CTA buttons with ripple effect
- 3D robot model (center)
- Social media icons (right)

### OurStoryHero Component (`components/OurStoryHero.tsx`)

**Purpose**: About page with 3D interactive scene

**Features**:
- React Three Fiber 3D scene
- Scroll-controlled camera movement
- Evolving planet with morphing colors
- Post-processing effects (Bloom, Vignette, Chromatic Aberration)
- Multiple content sections:
  1. Hero section
  2. Core Values
  3. Our Heritage (Timeline)

**3D Elements**:
- `EvolvingPlanet`: Morphing icosahedron with MeshDistortMaterial
- `SpaceDust`: Stars and sparkles
- `Environment`: City preset for reflections

**Scroll Sections**:
- Section 1: Hero (0-15%)
- Section 2: Core Values (15-40%)
- Section 3: Heritage (40-65%)
- Section 4: CTA (65-85%)
- Section 5: Footer (85-100%)

### FallingLogosSection Component (`components/FallingLogosSection.tsx`)

**Purpose**: Physics-based falling company logos

**Features**:
- Matter.js physics engine
- Company logos (Amazon, Google, Meta, Microsoft, Netflix, Tesla)
- Gravity and collision detection
- Reset animation on scroll

### InvestmentLifecycle Component (`components/InvestmentLifecycle.tsx`)

**Purpose**: Services carousel with 3D cards

**Features**:
- Swiper.js touch slider
- 3D card tilt effect
- Service cards with icons and descriptions
- Responsive grid layout

### MarqueeSection Component (`components/MarqueeSection.tsx`)

**Purpose**: Infinite scrolling marquee

**Features**:
- `react-fast-marquee` library
- Duplicate content for seamless loop
- Custom styling with gradient fade

### WhySharkRetail Component (`components/WhySharkRetail.tsx`)

**Purpose**: 3D interactive box section

**Features**:
- React Three Fiber 3D box
- Mouse interaction
- Animated rotation
- Glass morphism cards

### CallToAction Component (`components/CallToAction.tsx`)

**Purpose**: Call-to-action section

**Features**:
- Gradient background
- Animated heading
- CTA buttons
- Responsive layout

### ContactSection Component (`components/ContactSection.tsx`)

**Purpose**: Contact form section

**Features**:
- Form validation
- Resend API integration
- Success/error states
- Responsive design

### Footer Component (`components/Footer.tsx`)

**Purpose**: Site footer

**Features**:
- Links organized by category
- Social media icons
- Copyright information
- Responsive grid layout

### MegaMenu Component (`components/MegaMenu.tsx`)

**Purpose**: Mega menu dropdown for services

**Features**:
- Multi-column layout
- Service categories
- Hover animations
- Responsive design

---

## 📄 Pages & Routes

### Homepage (`/`)
- **File**: `app/page.tsx`
- **Sections**:
  1. Header
  2. Hero
  3. Falling Logos
  4. Investment Lifecycle
  5. Marquee
  6. Why Shark Retail
  7. Call to Action
  8. Contact Section
  9. Footer

### About Us (`/about`)
- **File**: `app/about/page.tsx`
- **Features**:
  - 3D interactive scene
  - Scroll-controlled animations
  - Core Values section
  - Heritage Timeline

### Contact (`/contact`)
- **File**: `app/contact/page.tsx`
- **Features**:
  - Contact form
  - Form validation
  - Email integration

### Services (`/services`)
- **File**: `app/services/page.tsx`
- **Purpose**: Services listing page

### Service Category Pages

All service pages follow the pattern: `/our-services/{category}/{service}`

#### Creative Services
- `/our-services/creative-services/creative`
- `/our-services/creative-services/creative-design`

#### Digital Services
- `/our-services/digital-services/app-development`
- `/our-services/digital-services/performance-marketing`
- `/our-services/digital-services/seo`
- `/our-services/digital-services/social-media`
- `/our-services/digital-services/web-development`

#### Emerging Technologies
- `/our-services/emerging-technologies/ar`
- `/our-services/emerging-technologies/blockchain`
- `/our-services/emerging-technologies/nfts`
- `/our-services/emerging-technologies/vr`
- `/our-services/emerging-technologies/web3`

#### Industry Plans
- `/our-services/industry-plans/cleaning`
- `/our-services/industry-plans/digital-agency`
- `/our-services/industry-plans/ecommerce`
- `/our-services/industry-plans/financial`
- `/our-services/industry-plans/healthcare`
- `/our-services/industry-plans/law-firms`
- `/our-services/industry-plans/professional`
- `/our-services/industry-plans/real-estate`
- `/our-services/industry-plans/restaurants`
- `/our-services/industry-plans/vehicle-rental`

#### Outsourcing Partnership
- `/our-services/outsourcing-partnership/agency-plan`
- `/our-services/outsourcing-partnership/outsourcing`

#### Virtual Resources
- `/our-services/virtual-resources/designer-resources`
- `/our-services/virtual-resources/developer-resources`
- `/our-services/virtual-resources/marketing-resources`
- `/our-services/virtual-resources/virtual-assistant`

---

## ⚙️ Configuration Files

### `next.config.ts`

**Key Settings**:
- ESLint and TypeScript errors ignored during builds
- Image optimization (AVIF, WebP)
- Package import optimization
- Webpack code splitting:
  - Vendor chunk
  - Three.js chunk
  - Framer Motion chunk
  - Common chunk

### `vercel.json`

**Settings**:
- Install command: `npm install --legacy-peer-deps`
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Redirects for `/cgi-bin/*` to 404

### `tsconfig.json`

**Settings**:
- Target: ES2017
- Module: ESNext
- JSX: preserve
- Strict mode: enabled
- Path aliases: `@/*` → `./*`

### `tailwind.config.ts`

**Settings**:
- Custom color palette
- Custom animations
- Font family configuration
- Responsive breakpoints

### `.npmrc`

**Settings**:
- `legacy-peer-deps=true` - Required for React 19 compatibility

---

## 🚢 Deployment

### Vercel Deployment

1. **Connect Repository**
   - Push code to GitHub
   - Import project in Vercel dashboard

2. **Environment Variables**
   - Add `RESEND_API_KEY` in Vercel dashboard
   - Add `NEXT_PUBLIC_SITE_URL` if needed

3. **Build Settings**
   - Framework Preset: Next.js
   - Install Command: `npm install --legacy-peer-deps` (auto-configured)
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Deploy**
   - Vercel automatically deploys on push to main branch
   - Preview deployments for pull requests

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

### Environment Variables for Production

Ensure these are set in your hosting platform:
- `RESEND_API_KEY`
- `NEXT_PUBLIC_SITE_URL`

---

## 📜 Scripts

### Available NPM Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

### Utility Scripts

Located in `scripts/` directory:

- `create-all-service-pages.js` - Generate all service pages
- `fix-all-buttons-links.js` - Fix button links across pages
- `fix-all-service-buttons.js` - Fix service page buttons
- `generate-all-service-pages.js` - Generate service pages
- `generate-service-pages.js` - Generate individual service pages
- `make-pages-responsive.js` - Make pages responsive

---

## ⚡ Performance Optimizations

### Code Splitting
- Dynamic imports for below-the-fold components
- Route-based code splitting (automatic with Next.js)
- Webpack chunk optimization

### Image Optimization
- Next.js Image component with automatic optimization
- AVIF and WebP formats
- Responsive image sizes
- Lazy loading

### 3D Performance
- Reduced geometry complexity (64 segments instead of 128)
- DPR capped at 1.25
- `frameloop="demand"` for Canvas
- `multisampling={0}` for EffectComposer
- Optimized particle counts

### Bundle Optimization
- Package import optimization (lucide-react, framer-motion, etc.)
- Tree shaking enabled
- Minification enabled

### Loading Strategies
- Suspense boundaries for async components
- Loading states for dynamic imports
- Preload critical assets

---

## 💻 Development Guidelines

### Code Style

1. **TypeScript**: Use TypeScript for all new files
2. **Components**: Use functional components with hooks
3. **Naming**: PascalCase for components, camelCase for functions
4. **Imports**: Group imports (React, Next.js, third-party, local)

### Component Structure

```typescript
'use client'; // If using hooks

import React from 'react';

interface Props {
  // Define props
}

export default function ComponentName({ prop }: Props) {
  // Component logic
  return (
    // JSX
  );
}
```

### Styling Guidelines

1. **Tailwind CSS**: Use utility classes
2. **Responsive**: Mobile-first approach
3. **Colors**: Use design system colors
4. **Animations**: Use Framer Motion for complex animations

### 3D Component Guidelines

1. **Performance**: Keep geometry simple
2. **Materials**: Reuse materials when possible
3. **Effects**: Use post-processing sparingly
4. **Loading**: Use Suspense for 3D components

### Git Workflow

1. **Branch**: Create feature branch
2. **Commit**: Descriptive commit messages
3. **Push**: Push to remote
4. **PR**: Create pull request for review

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Peer Dependency Errors
```bash
# Solution: Use legacy peer deps
npm install --legacy-peer-deps
```

#### 2. TypeScript Errors
- Check `tsconfig.json` settings
- Ensure types are installed
- Use `@ts-ignore` sparingly (only for known issues)

#### 3. Build Errors
- Clear `.next` folder: `rm -rf .next`
- Clear `node_modules`: `rm -rf node_modules && npm install --legacy-peer-deps`

#### 4. 3D Performance Issues
- Reduce geometry complexity
- Lower DPR in Canvas
- Disable post-processing effects in development

#### 5. Contact Form Not Working
- Check `RESEND_API_KEY` in `.env.local`
- Verify API route: `app/api/contact/route.ts`
- Check browser console for errors

---

## 📚 Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Project-Specific Docs
- `LITESPEED_CONFIG.md` - LiteSpeed server configuration
- `FIX_DIRECTORY_LISTING.md` - Directory listing fix guide

---

## 📝 License

This project is proprietary and confidential.

---

## 👥 Contributors

- Sharks Automation Labs Team

---

## 📞 Support

For issues or questions:
- Create an issue in the repository
- Contact the development team

---

**Last Updated**: 2024
**Version**: 0.1.0
