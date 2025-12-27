# Riot Games-Inspired Design Guidelines

> *"Players deserve the best. We're committed to creating experiences that are not just games, but worlds worth exploring."*

This design system is inspired by Riot Games' approach to web design, as seen in Valorant, League of Legends, and other Riot properties. It emphasizes immersive experiences, bold visuals, and player-centric design.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components & Patterns](#components--patterns)
6. [Borders & Border Radius](#borders--border-radius)
7. [Backgrounds & Surfaces](#backgrounds--surfaces)
8. [Glass Effects (Glassmorphism)](#glass-effects-glassmorphism)
9. [Animation & Motion](#animation--motion)
10. [Imagery & Media](#imagery--media)
11. [Accessibility](#accessibility)
12. [Implementation Guidelines](#implementation-guidelines)

---

## Design Philosophy

### Core Principles

**1. Immersive First**
- Create experiences that pull users into the world
- Use full-screen hero sections with cinematic imagery
- Prioritize visual storytelling over information density

**2. Bold & Confident**
- Make strong visual statements
- Use large-scale typography and dramatic spacing
- Don't be afraid of empty space

**3. Dark & Vibrant**
- Dark backgrounds reduce eye strain and create focus
- Vibrant accent colors create energy and excitement
- High contrast ensures readability and impact

**4. Modular & Flexible**
- Design systems that scale across different content types
- Grid-based layouts that adapt to various screen sizes
- Reusable components that maintain consistency

**5. Player-Centric**
- Every design decision serves the user experience
- Navigation should be intuitive and accessible
- Content should be discoverable and engaging

---

## Color System

### Base Palette

#### Dark Theme (Primary)
```css
/* Backgrounds */
--background: 220 20% 8%;        /* Deep charcoal, almost black */
--surface: 220 18% 12%;          /* Slightly lighter surface */
--elevated: 220 16% 16%;         /* Cards and elevated elements */

/* Text */
--foreground: 0 0% 98%;          /* Near white for primary text */
--foreground-muted: 220 10% 65%; /* Secondary text */
--foreground-subtle: 220 8% 45%; /* Tertiary text */

/* Borders & Dividers */
--border: 220 15% 25%;           /* Subtle borders */
--border-strong: 220 20% 35%;    /* Stronger borders */
```

#### Accent Colors

**Primary Accent (Valorant Red)**
```css
--accent-primary: 0 85% 60%;     /* Vibrant red */
--accent-primary-hover: 0 85% 55%;
--accent-primary-active: 0 85% 50%;
```

**Secondary Accent (League Gold)**
```css
--accent-secondary: 45 100% 50%; /* Rich gold */
--accent-secondary-hover: 45 100% 45%;
```

**Tertiary Accent (Tech Cyan)**
```css
--accent-tertiary: 180 100% 50%; /* Electric cyan */
--accent-tertiary-hover: 180 100% 45%;
```

**Status Colors**
```css
--success: 142 76% 36%;          /* Green for success states */
--warning: 38 92% 50%;           /* Amber for warnings */
--error: 0 84% 60%;              /* Red for errors */
--info: 199 89% 48%;             /* Blue for information */
```

### Usage Guidelines

- **Background**: Use dark backgrounds (220 20% 8%) as the foundation
- **Accents**: Use sparingly for CTAs, highlights, and important information
- **Contrast**: Maintain WCAG AA contrast ratios (4.5:1 for text)
- **Gradients**: Use subtle gradients for depth, especially on cards and surfaces

---

## Typography

### Font Families

**Primary: Work Sans** (Riot Games Official)
- Riot Games' primary typeface for body copy and small headings
- Modern, clean, highly readable
- Excellent for UI elements and body text
- Supports multiple weights (300-900)
- Available on Google Fonts
- Usage: Body text, paragraphs, UI elements, navigation, buttons

**Display: Bebas Neue / Oswald** (Riot-Inspired Headlines)
- Bold, condensed, impactful typefaces inspired by Riot's FK Screamer
- Use for hero headlines and major headings
- Creates a high-tech, tactical, gaming feel
- Bebas Neue: Ultra-bold, condensed, perfect for large display text
- Oswald: Slightly more versatile, works well for section headers
- Available on Google Fonts
- Usage: Hero headlines, section titles, large display text, call-to-action text

**Monospace: JetBrains Mono / Fira Code**
- Code snippets and technical content
- Maintains readability at small sizes
- Usage: Code blocks, technical documentation, inline code

### Type Scale

```css
/* Display */
--text-display-2xl: 4.5rem;     /* 72px - Hero headlines */
--text-display-xl: 3.75rem;     /* 60px - Section headers */
--text-display-lg: 3rem;        /* 48px - Large headers */

/* Headings */
--text-h1: 2.25rem;             /* 36px - Page titles */
--text-h2: 1.875rem;            /* 30px - Section titles */
--text-h3: 1.5rem;              /* 24px - Subsection titles */
--text-h4: 1.25rem;             /* 20px - Card titles */

/* Body */
--text-body-lg: 1.125rem;       /* 18px - Large body */
--text-body: 1rem;              /* 16px - Default body */
--text-body-sm: 0.875rem;       /* 14px - Small body */
--text-body-xs: 0.75rem;        /* 12px - Captions */
```

### Typography Guidelines

- **Hierarchy**: Use size, weight, and color to establish clear hierarchy
- **Line Height**: 1.5 for body text (Work Sans), 1.1-1.2 for display headings (Bebas Neue/Oswald)
- **Letter Spacing**: 
  - Work Sans: Normal spacing for body text, slightly increased (0.05em) for uppercase labels
  - Bebas Neue/Oswald: Tighter spacing for impact, can use negative letter-spacing (-0.02em to -0.05em) for large display text
- **Line Length**: 65-75 characters for optimal readability in body text
- **Weight**: 
  - Work Sans: 400 (regular) for body, 500-600 for emphasis, 700 for strong emphasis
  - Bebas Neue: Single weight (400), use size variation for hierarchy
  - Oswald: 400-700, use 600-700 for major headings
- **Font Pairing**: Work Sans pairs beautifully with Bebas Neue for a modern, gaming-inspired aesthetic
- **Riot Games Style**: Follow Riot's approach of bold, confident typography with clear hierarchy and generous spacing

### Text Casing Conventions

Riot Games uses specific casing patterns to create visual hierarchy and brand consistency:

**Uppercase (ALL CAPS)**
- **Hero/Display Headings**: Large display text uses uppercase with wide tracking (30pt tracking in Riot's guidelines)
- **Buttons**: Button text is typically uppercase for emphasis and clarity
- **Labels**: Form labels and UI labels use uppercase with wide letter spacing
- **Navigation**: Main navigation items often use uppercase
- **Usage**: Creates impact, emphasizes important UI elements, maintains brand consistency

**Sentence Case (Normal)**
- **Body Text**: All paragraph and body text uses normal sentence case
- **Card Titles**: Content titles use sentence case for readability
- **Descriptions**: All descriptive text uses sentence case
- **Usage**: Best for readability and extended reading

**Title Case**
- **Section Headings**: Some section headings may use title case
- **Card Titles**: Alternative to sentence case for card titles
- **Usage**: More formal, traditional heading style

**Casing Guidelines by Component:**

| Component | Default Casing | Riot Games Style |
|-----------|---------------|------------------|
| Hero Heading | Uppercase | ✅ Uppercase with wide tracking |
| Display Heading | Uppercase | ✅ Uppercase with wide tracking |
| Section Heading | Normal | Normal or Title Case |
| Card Title | Normal | Normal or Title Case |
| Body Text | Normal | ✅ Normal (sentence case) |
| Button Text | Uppercase | ✅ Uppercase with wide tracking |
| Label Text | Uppercase | ✅ Uppercase with wide tracking |
| Link Text | Normal | Normal |
| Badge Text | Normal | Normal |
| Navigation | Normal | Normal or Uppercase |

**Letter Spacing with Casing:**
- **Uppercase**: Always use wider letter spacing (`tracking-wider` or `letter-spacing: 0.05em`) for readability
- **Normal/Lowercase**: Use normal letter spacing
- **Capitalize**: Use normal letter spacing

### UI Typography (Buttons, Labels, Links)

**Button Typography**
- Font: Work Sans, Semibold (600)
- Sizes: Small (0.875rem/14px), Medium (1rem/16px), Large (1.125rem/18px)
- Casing: Uppercase (default, Riot Games style)
- Letter Spacing: Wide tracking (0.05em) when uppercase
- Usage: All button text, CTAs, action labels

**Label Typography**
- Font: Work Sans, Semibold (600)
- Style: Uppercase with wide tracking (0.05em)
- Sizes: Small (0.75rem/12px), Medium (0.875rem/14px), Large (1rem/16px)
- Usage: Form labels, section labels, metadata

**Link Typography**
- Font: Work Sans, Semibold (600)
- Size: 1rem (16px)
- Color: Primary accent color with hover state
- Usage: Navigation links, inline links, action links

**Badge Typography**
- Font: Work Sans, Medium (500)
- Size: 0.75rem (12px)
- Usage: Tags, skill badges, status indicators

**Navigation Typography**
- Font: Work Sans, Medium (500)
- Size: 0.875rem (14px)
- Usage: Main navigation, breadcrumbs, menu items

### Typography Components

Reusable typography components are available to ensure consistency across the application:

**Heading Component**
```tsx
import { Heading } from '@/components/typography';

// Hero heading (large display text, uppercase by default)
<Heading variant="hero" gradient>
  Hi, I'm John Doe
</Heading>

// Hero heading with normal casing
<Heading variant="hero" case="normal">
  Hi, I'm John Doe
</Heading>

// Section heading (default)
<Heading variant="section">
  Experience
</Heading>

// Section heading with uppercase (Riot Games style)
<Heading variant="section" case="uppercase">
  EXPERIENCE
</Heading>

// Card title
<Heading variant="card">
  Project Title
</Heading>

// Subheading
<Heading variant="subheading">
  Skills:
</Heading>
```

**Text Component**
```tsx
import { Text } from '@/components/typography';

// Body text
<Text variant="body" relaxed>
  Your paragraph content here
</Text>

// Lead text (larger, for introductions)
<Text variant="lead" relaxed>
  Introduction text
</Text>

// Small text
<Text variant="small">
  Caption or metadata
</Text>

// Muted text
<Text variant="muted">
  Secondary information
</Text>

// Button text (uppercase by default, Riot Games style)
<Text variant="button">
  Click Me
</Text>

// Button text with normal casing
<Text variant="button" case="normal">
  Click Me
</Text>

// Link text
<Text as="a" variant="link" href="#">
  Learn More
</Text>

// Navigation text
<Text variant="nav">
  Home
</Text>

// Badge text
<Text variant="badge">
  New
</Text>
```

**ButtonText Component**
```tsx
import { ButtonText } from '@/components/typography';

// Small button
<ButtonText size="sm">Small Button</ButtonText>

// Medium button (default, uppercase with wide tracking)
<ButtonText size="md">Medium Button</ButtonText>

// Button with normal casing
<ButtonText size="md" case="normal">Medium Button</ButtonText>

// Large button
<ButtonText size="lg">Large Button</ButtonText>
```

**Label Component**
```tsx
import { Label } from '@/components/typography';

// Form label (uppercase by default)
<Label htmlFor="email">Email Address</Label>

// Regular label (no uppercase)
<Label uppercase={false}>Regular Label</Label>

// Large label
<Label size="lg">Large Label</Label>
```

**Component Variants**

| Component | Variant | Use Case | Font | Size |
|-----------|---------|----------|------|------|
| Heading | `hero` | Hero headlines | Bebas Neue | 4.5rem (72px) |
| Heading | `display` | Page titles | Bebas Neue | 3rem (48px) |
| Heading | `section` | Section headers | Bebas Neue | 3rem (48px) |
| Heading | `card` | Card titles | Work Sans | 1.5rem (24px) |
| Heading | `subheading` | Subsection titles | Work Sans | 0.875rem (14px) |
| Text | `body` | Default body text | Work Sans | 1rem (16px) |
| Text | `lead` | Introduction text | Work Sans | 1.125-1.5rem (18-24px) |
| Text | `small` | Small text | Work Sans | 0.875rem (14px) |
| Text | `muted` | Secondary text | Work Sans | Inherits size |
| Text | `subtle` | Tertiary text | Work Sans | Inherits size |
| Text | `button` | Button text | Work Sans Semibold | 1rem (16px) |
| Text | `label` | Form labels | Work Sans Semibold | 0.75rem (12px) |
| Text | `link` | Links | Work Sans Semibold | 1rem (16px) |
| Text | `badge` | Badge text | Work Sans Medium | 0.75rem (12px) |
| Text | `nav` | Navigation | Work Sans Medium | 0.875rem (14px) |
| ButtonText | `sm` | Small buttons | Work Sans Semibold | 0.875rem (14px) |
| ButtonText | `md` | Medium buttons | Work Sans Semibold | 1rem (16px) |
| ButtonText | `lg` | Large buttons | Work Sans Semibold | 1.125rem (18px) |
| Label | `sm` | Small labels | Work Sans Semibold | 0.75rem (12px) |
| Label | `md` | Medium labels | Work Sans Semibold | 0.875rem (14px) |
| Label | `lg` | Large labels | Work Sans Semibold | 1rem (16px) |

**Benefits of Using Typography Components**
- **Consistency**: Ensures all typography follows the design system
- **Maintainability**: Update styles in one place
- **Accessibility**: Proper semantic HTML elements
- **Flexibility**: Easy to override with className prop
- **Type Safety**: TypeScript support for variants

---

## Spacing & Layout

### Spacing Scale

```css
--space-xs: 0.25rem;    /* 4px */
--space-sm: 0.5rem;     /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
--space-4xl: 6rem;      /* 96px */
--space-5xl: 8rem;      /* 128px */
```

### Grid System

**Desktop (1920px+)**
- 12-column grid
- 80px gutters
- Max content width: 1400px

**Tablet (768px - 1919px)**
- 8-column grid
- 40px gutters
- Max content width: 1200px

**Mobile (< 768px)**
- 4-column grid
- 24px gutters
- Full width with 16px padding

### Layout Patterns

**Hero Section**
- Full viewport height (100vh)
- Centered content with large typography
- Background imagery with dark overlay (rgba(0,0,0,0.6))

**Content Sections**
- Max width: 1400px (desktop)
- Vertical rhythm: 4rem between sections
- Consistent padding: 2rem horizontal

**Card Grids**
- 3-column on desktop
- 2-column on tablet
- 1-column on mobile
- Gap: 1.5rem between cards

---

## Components & Patterns

### Buttons

**Primary Button**
- Background: Accent primary color
- Text: White, Work Sans Semibold, 1rem (16px)
- Padding: 1rem 2rem
- Border radius: 4px (slightly angular)
- Hover: Scale 1.05, slight brightness increase
- Active: Scale 0.98
- Typography: Use `ButtonText` component or `Text variant="button"`

**Secondary Button**
- Background: Transparent
- Border: 2px solid accent color
- Text: Accent color, Work Sans Semibold, 1rem (16px)
- Hover: Background fill with accent color
- Typography: Use `ButtonText` component or `Text variant="button"`

**Ghost Button**
- Background: Transparent
- Text: Foreground color
- Hover: Subtle background (rgba(255,255,255,0.1))

### Cards

**Standard Card**
- Background: Elevated surface color
- Border: 1px solid border color
- Border radius: 8px
- Padding: 1.5rem
- Shadow: Subtle (0 4px 6px rgba(0,0,0,0.3))
- Hover: Lift effect (translateY(-4px), increased shadow)

**Feature Card**
- Larger padding: 2rem
- Image header (optional)
- Clear hierarchy: Title → Description → CTA

### Navigation

**Top Navigation**
- Fixed or sticky positioning
- Dark background with slight transparency
- Logo on left, menu items on right
- Active state: Underline or accent color
- Mobile: Hamburger menu with slide-out drawer

**Breadcrumbs**
- Subtle, muted text
- Separator: "/" or ">"
- Current page: Accent color

### Forms

**Input Fields**
- Dark background matching surface color
- Border: 1px solid border color
- Focus: 2px solid accent color
- Placeholder: Muted foreground color
- Error state: Red border and text

**Labels**
- Above input fields
- Small, uppercase with letter spacing
- Color: Muted foreground

---

## Borders & Border Radius

### Border Guidelines

**Border Colors**
```css
/* Subtle borders for cards, inputs, dividers */
--border: 220 15% 25%;           /* hsl(220, 15%, 25%) */

/* Stronger borders for emphasis, active states */
--border-strong: 220 20% 35%;    /* hsl(220, 20%, 35%) */

/* Accent borders for CTAs, highlights */
--border-accent: 0 85% 60%;      /* Primary accent color */
```

**Border Widths**
- **Thin**: `1px` - Default for cards, inputs, dividers
- **Medium**: `2px` - Secondary buttons, focus states, emphasis
- **Thick**: `3px` - Strong emphasis, active states (use sparingly)

**Border Styles**
- **Solid**: Default for most elements
- **Dashed**: Use for temporary or draft states
- **None**: For seamless visual connections

**Usage Guidelines**

| Element | Width | Color | Style | Use Case |
|---------|-------|-------|-------|----------|
| Cards | 1px | `--border` | Solid | Standard card containers |
| Input Fields | 1px | `--border` | Solid | Default input state |
| Input Focus | 2px | `--border-accent` | Solid | Active input focus |
| Secondary Buttons | 2px | `--border-accent` | Solid | Outlined button style |
| Dividers | 1px | `--border` | Solid | Section separators |
| Active States | 2px | `--border-strong` | Solid | Selected/active items |
| Error States | 2px | `--error` | Solid | Form validation errors |

### Border Radius Guidelines

**Radius Scale**
```css
/* Angular (minimal rounding) */
--radius-sm: 4px;      /* Buttons, small elements */
--radius-md: 8px;      /* Cards, inputs, standard elements */
--radius-lg: 12px;     /* Large cards, modals */
--radius-xl: 16px;     /* Hero sections, large containers */
--radius-full: 9999px; /* Pills, badges, fully rounded */
```

**Usage Guidelines**

| Element | Radius | Rationale |
|---------|--------|-----------|
| Buttons | `4px` (sm) | Slightly angular, modern gaming aesthetic |
| Cards | `8px` (md) | Standard, comfortable rounding |
| Input Fields | `8px` (md) | Matches cards, consistent feel |
| Badges/Pills | `9999px` (full) | Fully rounded for tags and labels |
| Modals | `12px` (lg) | Larger radius for elevated elements |
| Hero Sections | `16px` (xl) | Subtle rounding on large containers |
| Navigation | `0px` or `4px` | Can be angular or slightly rounded |

**Design Philosophy**
- **Slightly Angular**: Riot Games aesthetic favors minimal rounding (4-8px) over heavily rounded corners
- **Consistency**: Use the same radius for related elements (e.g., all cards use 8px)
- **Hierarchy**: Larger elements can use slightly larger radius for visual weight
- **Context**: Match radius to the element's purpose (angular = tactical, rounded = friendly)

---

## Backgrounds & Surfaces

### Background Color System

**Base Backgrounds**
```css
/* Primary background (page, main container) */
--background: 220 20% 8%;        /* hsl(220, 20%, 8%) - Deep charcoal */

/* Surface (sections, panels) */
--surface: 220 18% 12%;          /* hsl(220, 18%, 12%) - Slightly lighter */

/* Elevated (cards, modals, dropdowns) */
--elevated: 220 16% 16%;         /* hsl(220, 16%, 16%) - Cards and elevated */
```

**Background Usage**

| Element | Background | Use Case |
|---------|------------|----------|
| Page/Container | `--background` | Main page background |
| Sections | `--surface` | Content sections, panels |
| Cards | `--elevated` | Card containers, elevated content |
| Modals | `--elevated` | Dialog boxes, overlays |
| Navigation | `--surface` with opacity | Fixed/sticky navigation |
| Input Fields | `--surface` | Form inputs, text areas |

**Background Patterns**

**Gradients**
- Use subtle gradients for depth and visual interest
- Direction: Top to bottom (lighter to darker) or radial
- Opacity: Keep gradients subtle (10-20% variation)
- Example: `linear-gradient(180deg, hsl(220, 18%, 12%) 0%, hsl(220, 20%, 8%) 100%)`

**Overlays**
- Hero sections: `rgba(0, 0, 0, 0.6)` dark overlay on images
- Modals: `rgba(0, 0, 0, 0.8)` backdrop overlay
- Hover states: `rgba(255, 255, 255, 0.1)` subtle light overlay

**Shadows for Depth**
- Cards: `0 4px 6px rgba(0, 0, 0, 0.3)`
- Elevated: `0 8px 16px rgba(0, 0, 0, 0.4)`
- Floating: `0 12px 24px rgba(0, 0, 0, 0.5)`

---

## Glass Effects (Glassmorphism)

### Overview

Glassmorphism creates a frosted glass effect that adds depth and modern visual appeal while maintaining readability. This effect works particularly well in gaming-inspired designs for overlays, navigation, cards, and modals.

### Core Properties

**Essential CSS Properties**
```css
/* Base glass effect */
.glass {
  background: rgba(255, 255, 255, 0.05);        /* Semi-transparent white */
  backdrop-filter: blur(10px);                  /* Blur effect */
  -webkit-backdrop-filter: blur(10px);         /* Safari support */
  border: 1px solid rgba(255, 255, 255, 0.1);  /* Subtle border */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);   /* Depth shadow */
}
```

### Glass Variants

**Light Glass (Subtle)**
```css
--glass-light-bg: rgba(255, 255, 255, 0.05);
--glass-light-border: rgba(255, 255, 255, 0.1);
--glass-light-blur: 10px;
```
- **Use**: Navigation bars, subtle overlays, card backgrounds
- **Opacity**: 5-10% white
- **Blur**: 8-12px
- **Best for**: Elements that need to blend with dark backgrounds

**Medium Glass (Standard)**
```css
--glass-medium-bg: rgba(255, 255, 255, 0.1);
--glass-medium-border: rgba(255, 255, 255, 0.15);
--glass-medium-blur: 16px;
```
- **Use**: Modals, dropdowns, elevated cards
- **Opacity**: 10-15% white
- **Blur**: 12-20px
- **Best for**: Elements that need more presence while maintaining transparency

**Strong Glass (Prominent)**
```css
--glass-strong-bg: rgba(255, 255, 255, 0.15);
--glass-strong-border: rgba(255, 255, 255, 0.2);
--glass-strong-blur: 24px;
```
- **Use**: Hero overlays, important modals, feature cards
- **Opacity**: 15-20% white
- **Blur**: 20-30px
- **Best for**: Elements that need strong visual presence

**Colored Glass (Accent)**
```css
/* Red accent glass */
--glass-accent-red-bg: rgba(255, 70, 85, 0.15);
--glass-accent-red-border: rgba(255, 70, 85, 0.3);

/* Gold accent glass */
--glass-accent-gold-bg: rgba(255, 215, 0, 0.15);
--glass-accent-gold-border: rgba(255, 215, 0, 0.3);
```
- **Use**: CTAs, highlighted sections, special features
- **Opacity**: 15-20% accent color
- **Blur**: 16-24px
- **Best for**: Drawing attention to important elements

### Border Radius for Glass

Glass elements typically use moderate to large border radius:
- **Navigation**: `8px` or `12px`
- **Cards**: `12px` or `16px`
- **Modals**: `16px` or `20px`
- **Hero Overlays**: `0px` (full width) or `16px` (contained)

### Usage Guidelines

**Navigation Bars**
```css
.glass-nav {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0 0 12px 12px; /* Rounded bottom corners */
}
```
- Fixed or sticky positioning
- Light glass variant
- Subtle bottom border for separation

**Cards with Glass Effect**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
```
- Medium glass variant
- Larger border radius (12-16px)
- Enhanced shadow for depth

**Modals & Overlays**
```css
.glass-modal {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
}
```
- Medium to strong glass variant
- Larger blur for more separation
- Strong shadow for elevation

**Hero Section Overlays**
```css
.glass-hero {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  /* Optional: gradient overlay */
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
}
```
- Darker base with blur
- Can combine with gradient overlays
- Lighter blur to maintain image visibility

### Performance Considerations

**Backdrop Filter Support**
- Always include `-webkit-backdrop-filter` for Safari
- Provide fallback solid backgrounds for unsupported browsers
- Test performance on lower-end devices (blur can be expensive)

**Fallback Pattern**
```css
.glass {
  /* Fallback for browsers without backdrop-filter */
  background: hsl(220, 18%, 12%);
  
  /* Glass effect for supported browsers */
  @supports (backdrop-filter: blur(10px)) {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
  }
}
```

**Optimization Tips**
- Use `will-change: transform` sparingly and only when animating
- Limit blur radius (10-20px is usually sufficient)
- Avoid nested glass elements (performance impact)
- Consider using `transform: translateZ(0)` for GPU acceleration

### Accessibility

**Contrast & Readability**
- Ensure text on glass backgrounds maintains 4.5:1 contrast ratio
- Use stronger glass variants or darker overlays if needed
- Test with various background images/content behind glass

**Motion Sensitivity**
- Respect `prefers-reduced-motion` for any animations
- Consider reducing blur intensity for users with motion sensitivity

### Design Tokens

```css
/* Glass Effect Tokens */
--glass-light-bg: rgba(255, 255, 255, 0.05);
--glass-light-border: rgba(255, 255, 255, 0.1);
--glass-light-blur: 10px;

--glass-medium-bg: rgba(255, 255, 255, 0.1);
--glass-medium-border: rgba(255, 255, 255, 0.15);
--glass-medium-blur: 16px;

--glass-strong-bg: rgba(255, 255, 255, 0.15);
--glass-strong-border: rgba(255, 255, 255, 0.2);
--glass-strong-blur: 24px;

--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
--glass-shadow-strong: 0 12px 48px rgba(0, 0, 0, 0.5);
```

### When to Use Glass Effects

**✅ Good Use Cases**
- Navigation bars (fixed/sticky)
- Modal dialogs and overlays
- Card components with background imagery
- Dropdown menus
- Hero section text overlays
- Floating action buttons
- Tooltips and popovers

**❌ Avoid Using Glass**
- Large content areas (readability issues)
- Forms with many inputs (distraction)
- Critical information displays (contrast concerns)
- Elements that need solid backgrounds for accessibility
- Performance-critical areas on low-end devices

---

## Animation & Motion

### Principles

1. **Purposeful**: Every animation should serve a purpose
2. **Smooth**: Use easing functions for natural motion
3. **Fast**: Keep animations snappy (200-400ms)
4. **Consistent**: Use the same timing and easing across similar elements

### Timing Functions

```css
/* Standard easing */
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);

/* Deceleration (entering) */
--ease-in: cubic-bezier(0.4, 0.0, 1, 1);

/* Acceleration (exiting) */
--ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);

/* Sharp (for emphasis) */
--ease-sharp: cubic-bezier(0.4, 0.0, 0.6, 1);
```

### Common Animations

**Fade In**
- Duration: 300ms
- Easing: ease-out
- Use: Page loads, content reveals

**Slide Up**
- Duration: 400ms
- Easing: ease-out
- Use: Cards, modals, dropdowns

**Scale**
- Duration: 200ms
- Easing: ease-out
- Use: Button interactions, hover states

**Stagger**
- Delay between items: 100ms
- Use: List animations, grid reveals

### Micro-interactions

- **Hover**: Subtle scale (1.02-1.05) and brightness increase
- **Click**: Quick scale down (0.98) then back
- **Loading**: Smooth spinner or skeleton screens
- **Transitions**: Always animate opacity, transform, and filter

---

## Imagery & Media

### Image Guidelines

**Hero Images**
- High resolution (1920px+ width)
- Dark, moody aesthetic
- Overlay: Dark gradient (rgba(0,0,0,0.6))
- Format: WebP with JPG fallback

**Card Images**
- Aspect ratio: 16:9 or 4:3
- Lazy loading for performance
- Alt text required for accessibility

**Icons**
- Consistent style (outline or filled)
- Size: 16px, 24px, 32px, 48px
- Color: Inherit from text or use accent colors

### Video

- Autoplay: Muted, looped for background videos
- Controls: Custom styled to match design system
- Thumbnails: High quality, representative of content

---

## Accessibility

### Color Contrast

- **Text on dark**: Minimum 4.5:1 contrast ratio
- **Large text**: Minimum 3:1 contrast ratio
- **Interactive elements**: Clear focus states

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Focus indicators: 2px solid accent color outline
- Tab order: Logical and intuitive

### Screen Readers

- Semantic HTML elements
- ARIA labels where necessary
- Alt text for all images
- Descriptive link text

### Motion

- Respect `prefers-reduced-motion` media query
- Provide option to disable animations
- Essential animations only for reduced motion users

---

## Implementation Guidelines

### CSS Variables

Use CSS custom properties for theming:

```css
:root {
  /* Colors */
  --color-background: hsl(220, 20%, 8%);
  --color-foreground: hsl(0, 0%, 98%);
  --color-accent-primary: hsl(0, 85%, 60%);
  
  /* Spacing */
  --space-md: 1rem;
  --space-lg: 1.5rem;
  
  /* Typography */
  --font-display: 'Bebas Neue', 'Oswald', sans-serif;
  --font-body: 'Work Sans', sans-serif;
  
  /* Animation */
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
}
```

### Component Structure

```tsx
// Example component structure
interface ComponentProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Component: React.FC<ComponentProps> = ({
  variant = 'primary',
  size = 'md',
  className,
}) => {
  return (
    <div
      className={cn(
        'base-styles',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {/* Component content */}
    </div>
  );
};
```

### Best Practices

1. **Mobile First**: Design for mobile, enhance for desktop
2. **Performance**: Optimize images, lazy load content
3. **Progressive Enhancement**: Core functionality works without JS
4. **Consistency**: Use design tokens throughout
5. **Documentation**: Document component usage and variants

---

## Design Tokens Reference

### Quick Reference

```css
/* Colors */
--bg-primary: hsl(220, 20%, 8%);
--bg-surface: hsl(220, 18%, 12%);
--bg-elevated: hsl(220, 16%, 16%);
--text-primary: hsl(0, 0%, 98%);
--text-muted: hsl(220, 10%, 65%);
--accent-red: hsl(0, 85%, 60%);
--accent-gold: hsl(45, 100%, 50%);
--accent-cyan: hsl(180, 100%, 50%);

/* Borders */
--border: hsl(220, 15%, 25%);
--border-strong: hsl(220, 20%, 35%);
--border-accent: hsl(0, 85%, 60%);

/* Border Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;

/* Spacing */
--space-xs: 0.25rem;
--space-sm: 0.5rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;
--space-2xl: 3rem;
--space-3xl: 4rem;

/* Typography */
--text-display: 4.5rem;
--text-h1: 2.25rem;
--text-h2: 1.875rem;
--text-body: 1rem;
--text-small: 0.875rem;

/* Glass Effects */
--glass-light-bg: rgba(255, 255, 255, 0.05);
--glass-light-border: rgba(255, 255, 255, 0.1);
--glass-light-blur: 10px;
--glass-medium-bg: rgba(255, 255, 255, 0.1);
--glass-medium-border: rgba(255, 255, 255, 0.15);
--glass-medium-blur: 16px;
--glass-strong-bg: rgba(255, 255, 255, 0.15);
--glass-strong-border: rgba(255, 255, 255, 0.2);
--glass-strong-blur: 24px;
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
--glass-shadow-strong: 0 12px 48px rgba(0, 0, 0, 0.5);

/* Animation */
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
```

---

## Resources

### Inspiration

- [Valorant Website](https://playvalorant.com)
- [League of Legends Website](https://www.leagueoflegends.com)
- [Riot Games Design System](https://www.riotgames.com)

### Tools

- **Color Contrast Checker**: [WebAIM](https://webaim.org/resources/contrastchecker/)
- **Typography Scale**: [Type Scale](https://typescale.com)
- **Animation Easing**: [Easings.net](https://easings.net)

---

*Last Updated: 2024*

**Remember**: These guidelines are a starting point. Adapt and evolve them based on your specific needs while maintaining the core principles of bold, immersive, player-centric design.

