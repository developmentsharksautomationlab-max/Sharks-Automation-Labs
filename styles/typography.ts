/**
 * Standardized Typography System
 * Use these classes consistently across all pages and components
 */

export const typography = {
  // Main Page Titles (Hero, Page Headers)
  h1: {
    base: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    large: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
    xlarge: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
    font: "font-bold",
    tracking: "tracking-tighter",
    leading: "leading-tight md:leading-[0.9]",
  },

  // Section Headings
  h2: {
    base: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    large: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    font: "font-bold",
    tracking: "tracking-tight",
    leading: "leading-tight",
  },

  // Subsection Headings
  h3: {
    base: "text-xl sm:text-2xl md:text-3xl",
    font: "font-bold",
    tracking: "tracking-normal",
    leading: "leading-tight",
  },

  // Card/Item Titles
  h4: {
    base: "text-lg sm:text-xl md:text-2xl",
    font: "font-bold",
    tracking: "tracking-normal",
    leading: "leading-tight",
  },

  // Body Text (Descriptions, Paragraphs)
  body: {
    base: "text-sm sm:text-base md:text-lg",
    large: "text-base sm:text-lg md:text-xl",
    font: "font-normal",
    leading: "leading-relaxed",
  },

  // Small Text (Labels, Captions)
  small: {
    base: "text-xs sm:text-sm",
    font: "font-normal",
    leading: "leading-normal",
  },

  // Button Text
  button: {
    base: "text-xs sm:text-sm md:text-base",
    large: "text-sm sm:text-base md:text-lg",
    font: "font-bold",
    tracking: "tracking-wider",
  },

  // Bullet Points / List Items
  list: {
    base: "text-sm sm:text-base",
    font: "font-normal",
    leading: "leading-relaxed",
  },
};

// Helper function to combine typography classes
export const getTypographyClass = (
  type: keyof typeof typography,
  variant: 'base' | 'large' | 'xlarge' = 'base',
  additionalClasses: string = ''
) => {
  const typo = typography[type];
  const sizeClass = variant === 'xlarge' && 'xlarge' in typo 
    ? typo.xlarge 
    : variant === 'large' && 'large' in typo 
    ? typo.large 
    : typo.base;
  
  return `${sizeClass} ${typo.font} ${typo.tracking || ''} ${typo.leading || ''} ${additionalClasses}`.trim();
};

