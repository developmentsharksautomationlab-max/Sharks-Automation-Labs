# Shark Retail - E-Commerce Automation Platform

A modern, pixel-perfect Next.js website featuring cutting-edge animations, responsive design, and a premium user experience.

## 🎨 Design System

### Color Theme
The entire website uses a consistent color palette:

- **Primary Green**: `#052126` - Main background, dark elements
- **Primary Blue**: `#35c4dd` - Accent color, CTAs, highlights
- **Primary White**: `#f2f4f4` - Text, light backgrounds

### Typography
- **Primary Font**: `ITCAvantGardeStd-Bk` (Itcavantgardestd Bk)
- **Fallback**: Arial, Helvetica, sans-serif

### Custom Animations
- **Gradient Animation**: `animate-gradient-x` - Smooth gradient movement
- **Smooth Scroll**: Global smooth scrolling behavior
- **Custom Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` - Apple-like smooth transitions

---

## 📄 Homepage Structure

The homepage consists of the following sections in order:

### 1. **Header** (`components/Header.tsx`)
- **Features**:
  - Fixed header with slide-down animation on page load
  - Glass morphism effect with backdrop blur
  - Responsive navigation (desktop: glass capsule nav, mobile: hamburger menu)
  - Magnetic button effect on logo and CTA
  - Scroll-triggered styling (padding, background, blur)
  
- **Animations**:
  - Initial: Slide down from `y: -200` with fade-in
  - Scroll: Smooth transition to glass effect
  - Nav links: Hover animation with text swap effect
  - Button: Ripple effect on hover

- **Mobile Menu**:
  - Full-screen overlay with canvas background
  - Animated menu items with stagger effect
  - Social icons in footer
  - Text size: `text-4xl sm:text-5xl` (optimized for mobile)

### 2. **Hero Section** (`components/Hero.tsx`)
- **Layout**:
  - Desktop: 3-column grid (Left: Content, Center: Robot, Right: Socials)
  - Mobile: Stacked layout (Content at bottom, Robot centered)
  
- **Content**:
  - Icon badge with "CYBER SECURE" label
  - Main heading: "DIGITAL DEFENSE"
  - Description text with left border accent
  - CTA button: "CONTACT US" with ripple animation
  
- **Robot Image**:
  - Desktop: `w-[550px] h-[750px]` with scale animation
  - Mobile: `w-[300px] h-[380px]` to `w-[500px] h-[500px]` (responsive)
  - Animation: Scale from 4x to 1x, then to 1.5x with position shift
  
- **Background Elements**:
  - Vertical animated lines
  - Large text watermark: "SHARKS AUTOMATION LABS" (hidden on mobile)
  - Preloader animation on initial load
  
- **Responsive**:
  - Section height: `min-h-[90vh]` mobile, `h-screen` desktop
  - Content padding: `px-2 sm:px-4` mobile
  - Button size: `px-5 py-2.5` mobile, `px-10 py-4` desktop

### 3. **FallingLogosSection** (`components/FallingLogosSection.tsx`)
- **Type**: Physics-based animation using Matter.js
- **Features**:
  - Interactive falling logos with physics simulation
  - Mouse drag on desktop
  - Touch interaction on mobile
  - Click/tap to apply force
  
- **Logo Count**:
  - Desktop: 15 logos
  - Tablet: 10 logos
  - Mobile: 6 logos
  
- **Logo Size**:
  - Desktop: 110px squares
  - Tablet: 90px squares
  - Mobile: 70px squares
  
- **Background**: Gradient glow with theme colors
- **Text Overlay**: "Our Partner" with description

### 4. **InvestmentLifecycle** (`components/InvestmentLifecycle.tsx`)
- **Type**: 3D carousel with perspective effect
- **Layout**: 3D card stack with rotation
- **Features**:
  - Auto-rotation every 8 seconds
  - Manual navigation buttons
  - Progress indicators
  - Holographic text effect
  - 3D tilt on hover
  
- **Cards**:
  - 4 service cards: Design, Engineering, Growth, Consulting
  - Each card has: Image background, category, description, tags, CTA button
  - Hover effects: Border glow, scale, lighting
  
- **Responsive**:
  - Desktop: 3 cards visible (center + 2 sides)
  - Mobile: Only center card visible
  - Spacing: `420px` desktop, `350px` tablet, `0px` mobile

### 5. **MarqueeSection** (`components/MarqueeSection.tsx`)
- **Type**: Infinite marquee with mouse spotlight effect
- **Features**:
  - Two rotating arms (12deg and -12deg rotation)
  - Mouse-following spotlight reveal effect
  - Dual layer: Gray outline + Colored reveal
  - Background grid pattern
  
- **Content**: "Shark Automation" and "Engineering" text with icons
- **Animation**: Smooth infinite loop with physics-based movement

### 6. **WhySharkRetail** (`components/WhySharkRetail.tsx`)
- **Type**: 3D box animation with info cards
- **Features**:
  - Interactive 3D box that opens on click/tap
  - 4 info cards that appear when box opens
  - Animated flaps and system activation text
  - Background grid pattern
  
- **Animation**: 3D rotation, scale, and card reveal

### 7. **CallToAction** (`components/CallToAction.tsx`)
- **Type**: Glass morphism card with tilt effect
- **Features**:
  - 3D tilt on mouse move
  - Animated fluid grid background (canvas-based)
  - Gradient text animation
  - Large CTA button with hover effects
  
- **Content**:
  - Label: "Algorithmic Precision"
  - Heading: "Construct Your Wealth Architecture"
  - Description text
  - Button: "Initialize Protocol"
  
- **Responsive**:
  - Mobile: Reduced padding, smaller text sizes
  - Card padding: `p-6 sm:p-10 md:p-16`
  - Heading: `text-2xl sm:text-3xl md:text-5xl`

### 8. **ContactSection** (`components/ContactSection.tsx`)
- **Type**: Contact form with 3D background animation
- **Features**:
  - HyperCore 3D particle animation (canvas-based)
  - Contact form with validation
  - Info cards with hover effects
  - Global operations display
  - Stats cards
  
- **Form Fields**:
  - Name, Email, Phone, Company, URL, Message
  - Service checkboxes
  - Budget selector
  - Job inquiry toggle
  
- **Background**: Rotating 3D particle system with neural network connections

### 9. **Footer** (`components/Footer.tsx`)
- **Background**: White (`bg-white`)
- **Layout**: Bento grid style
- **Sections**:
  - Brand block with logo and socials
  - Menu links
  - Legal links
  - Global presence (locations)
  - Contact buttons (Email, Call)
  
- **Features**:
  - Spotlight hover effects on cards
  - Grid pattern overlay
  - Gradient top border
  - Tech-style links with animated icons
  
- **Colors**:
  - Background: White
  - Text: `#052126` (dark green)
  - Accents: `#35c4dd` (blue)
  - Links: Dark with blue hover

---

## 🎯 Component Details

### Button Animations
All buttons (except CTA section) use the same ripple animation:
```tsx
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f2f4f4] rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
```

### Text Colors
- Default: White (`text-[#f2f4f4]`)
- Hover: Black/Dark (`hover:text-[#052126]`)
- Exception: CTA section button keeps white text

### Smooth Scrolling
- Global smooth scroll behavior
- GPU acceleration enabled
- Overscroll prevention
- Scroll padding for header offset

---

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `≥ 1024px`

### Mobile Optimizations
- Reduced padding and margins
- Smaller font sizes
- Stacked layouts
- Hidden decorative elements
- Optimized image sizes
- Touch-friendly interactions

---

## 🛠️ Technical Stack

- **Framework**: Next.js 15.5.6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Physics**: Matter.js (for FallingLogosSection)
- **Language**: TypeScript
- **Font**: ITCAvantGardeStd-Bk

---

## 📦 Key Dependencies

```json
{
  "next": "^15.5.6",
  "react": "latest",
  "framer-motion": "latest",
  "matter-js": "latest",
  "lucide-react": "latest",
  "tailwindcss": "latest"
}
```

---

## 🚀 Getting Started

1. **Install Dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run Development Server**:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open Browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
new-shark-retail/
├── app/
│   ├── page.tsx          # Homepage (main entry)
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero banner section
│   ├── FallingLogosSection.tsx  # Physics logos
│   ├── InvestmentLifecycle.tsx  # Services carousel
│   ├── MarqueeSection.tsx        # Marquee animation
│   ├── WhySharkRetail.tsx        # 3D box section
│   ├── CallToAction.tsx          # CTA section
│   ├── ContactSection.tsx        # Contact form
│   └── Footer.tsx                # Footer
├── public/
│   ├── images/          # Image assets
│   └── fonts/           # Font files
├── tailwind.config.ts   # Tailwind configuration
└── README.md            # This file
```

---

## 🎨 Animation Patterns

### 1. Ripple Effect (Buttons)
- Expanding circle from center
- Duration: 500ms
- Ease: ease-out
- Opacity: 10%

### 2. Slide Down (Header)
- Initial: `y: -200, opacity: 0`
- Animate: `y: 0, opacity: 1`
- Duration: 1.2s
- Delay: 0.3s

### 3. Scale Animation (Hero Robot)
- Initial: `scale: 4, opacity: 0`
- Step 2: `scale: 1, opacity: 1, y: -30`
- Step 3: `scale: 1.5, opacity: 1, y: 180`
- Duration: 1.5s

### 4. 3D Tilt (Cards)
- RotateX: `-12deg` to `12deg`
- RotateY: `-12deg` to `12deg`
- Spring physics: `stiffness: 150, damping: 15`

### 5. Marquee Loop
- Infinite horizontal scroll
- 4 copies of content
- Smooth loop reset at 25% threshold

---

## 🎯 Performance Optimizations

- GPU acceleration for animations
- `will-change` properties for smooth animations
- `backface-visibility: hidden` for better rendering
- Lazy loading for images
- Optimized physics calculations
- Debounced resize handlers

---

## 📝 Notes for Future Development

1. **Color Consistency**: Always use theme colors:
   - `#052126` for dark/green
   - `#35c4dd` for blue/accent
   - `#f2f4f4` for white/light

2. **Button Pattern**: Use ripple animation for all buttons (except CTA):
   ```tsx
   <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f2f4f4] rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
   ```

3. **Responsive**: Always test on mobile, tablet, and desktop
4. **Animations**: Use Framer Motion for smooth animations
5. **SSR Safety**: Always check `typeof window !== 'undefined'` before accessing window

---

## 🔧 Custom Tailwind Classes

- `animate-gradient-x`: Animated gradient background
- `custom-white`: `#f2f4f4`
- `custom-blue`: `#35c4dd`
- `custom-green`: `#052126`
- `expo`: Custom easing function

---

## 📞 Support

For questions or issues, contact the development team.

---

**Last Updated**: 2025
**Version**: 2.4.0
**Status**: Production Ready ✅
