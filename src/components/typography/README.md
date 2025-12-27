# Typography Components

Reusable typography components following the Riot Games-inspired design system.

## Components

### Heading

A flexible heading component with semantic HTML and consistent styling.

```tsx
import { Heading } from '@/components/typography';

// Hero heading with gradient
<Heading variant="hero" gradient>
  Hi, I'm John Doe
</Heading>

// Section heading (default)
<Heading variant="section">
  Experience
</Heading>

// Card title
<Heading variant="card">
  Project Title
</Heading>

// Custom element and styling
<Heading as="h1" variant="display" className="text-center">
  Custom Heading
</Heading>
```

**Props:**
- `as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'` - Semantic HTML element (defaults based on variant)
- `variant?: 'hero' | 'display' | 'section' | 'card' | 'subheading'` - Visual style variant
- `gradient?: boolean` - Apply gradient text effect
- `case?: 'normal' | 'uppercase' | 'lowercase' | 'capitalize'` - Text casing (default: uppercase for hero/display, normal for others)
- `className?: string` - Additional CSS classes
- All standard HTML heading attributes

**Casing:**
- Hero and Display headings default to **uppercase** (Riot Games style) with wide tracking
- Section, Card, and Subheading default to **normal** casing
- Override with the `case` prop as needed

**Variants:**
- `hero`: Large display text for hero sections (4.5rem / 72px)
- `display`: Page titles (3rem / 48px)
- `section`: Section headers (3rem / 48px)
- `card`: Card titles (1.5rem / 24px)
- `subheading`: Subsection titles (0.875rem / 14px)

### Text

A flexible text component for body content and other text elements.

```tsx
import { Text } from '@/components/typography';

// Body text with relaxed line height
<Text variant="body" relaxed>
  Your paragraph content here
</Text>

// Lead text (introduction)
<Text variant="lead" relaxed>
  Introduction text that's larger and more prominent
</Text>

// Small text
<Text variant="small">
  Caption or metadata
</Text>

// Muted text
<Text variant="muted">
  Secondary information
</Text>

// Custom element
<Text as="span" variant="body">
  Inline text
</Text>
```

**Props:**
- `as?: 'p' | 'span' | 'div' | 'label' | 'a'` - HTML element to render (default: 'p')
- `variant?: 'body' | 'lead' | 'small' | 'caption' | 'muted' | 'subtle' | 'button' | 'label' | 'link' | 'badge' | 'nav'` - Visual style variant
- `relaxed?: boolean` - Apply relaxed line height
- `case?: 'normal' | 'uppercase' | 'lowercase' | 'capitalize'` - Text casing (default: uppercase for button/label, normal for others)
- `className?: string` - Additional CSS classes
- All standard HTML text element attributes

**Casing:**
- Button and Label variants default to **uppercase** (Riot Games style) with wide tracking
- All other variants default to **normal** casing
- Override with the `case` prop as needed

**Variants:**
- `body`: Default body text (1rem / 16px)
- `lead`: Introduction text (1.125-1.5rem / 18-24px)
- `small`: Small text (0.875rem / 14px)
- `caption`: Caption text (0.75rem / 12px)
- `muted`: Muted color (inherits size)
- `subtle`: Subtle color (inherits size)
- `button`: Button text (1rem / 16px, uppercase by default)
- `label`: Label text (0.75rem / 12px, uppercase by default)
- `link`: Link text (1rem / 16px)
- `badge`: Badge text (0.75rem / 12px)
- `nav`: Navigation text (0.875rem / 14px)

## Usage Examples

### Hero Section
```tsx
<Heading variant="hero" gradient>
  <span className="text-gradient-primary">Hi, I'm</span>
  <br />
  <span className="text-foreground">John Doe</span>
</Heading>
<Text variant="lead" relaxed>
  Full Stack Developer
</Text>
```

### Section Header
```tsx
<Heading variant="section">
  Experience
</Heading>
<Text variant="body" relaxed>
  A comprehensive overview of my professional journey
</Text>
```

### Card Content
```tsx
<Heading variant="card">
  Project Title
</Heading>
<Text variant="body" relaxed>
  Project description goes here
</Text>
<Heading variant="subheading">
  Technologies:
</Heading>
```

### ButtonText Component

A specialized component for button text following Riot Games typography standards.

```tsx
import { ButtonText } from '@/components/typography';

// Small button
<button>
  <ButtonText size="sm">Small Button</ButtonText>
</button>

// Medium button (default)
<button>
  <ButtonText size="md">Medium Button</ButtonText>
</button>

// Large button
<button>
  <ButtonText size="lg">Large Button</ButtonText>
</button>
```

**Props:**
- `as?: 'span' | 'div'` - HTML element to render (default: 'span')
- `size?: 'sm' | 'md' | 'lg'` - Size variant (default: 'md')
- `case?: 'normal' | 'uppercase' | 'lowercase' | 'capitalize'` - Text casing (default: 'uppercase' - Riot Games style)
- `className?: string` - Additional CSS classes
- All standard HTML element attributes

**Casing:**
- Defaults to **uppercase** with wide tracking (Riot Games style)
- Use `case="normal"` for sentence case buttons
- Uppercase automatically applies wide letter spacing for readability

**Sizes:**
- `sm`: 0.875rem (14px) - Small buttons, compact UI
- `md`: 1rem (16px) - Standard buttons (default)
- `lg`: 1.125rem (18px) - Large buttons, prominent CTAs

### Label Component

A component for form labels and UI labels with Riot Games uppercase styling.

```tsx
import { Label } from '@/components/typography';

// Form label (uppercase by default)
<Label htmlFor="email" size="sm">
  Email Address
</Label>

// Regular label (no uppercase)
<Label uppercase={false} size="md">
  Regular Label
</Label>

// Large label
<Label size="lg">
  Section Label
</Label>
```

**Props:**
- `size?: 'sm' | 'md' | 'lg'` - Size variant (default: 'sm')
- `uppercase?: boolean` - Apply uppercase styling (default: true)
- `className?: string` - Additional CSS classes
- All standard HTML label attributes

**Sizes:**
- `sm`: 0.75rem (12px) - Form labels, metadata
- `md`: 0.875rem (14px) - Standard labels
- `lg`: 1rem (16px) - Large labels, section headers

**Riot Games Style:**
- Uppercase text with wide letter spacing (tracking-wider)
- Semibold weight for clarity
- Muted color for hierarchy

## Text Casing

All typography components support casing options following Riot Games conventions:

**Default Casing (Riot Games Style):**
- Hero/Display headings: **Uppercase** with wide tracking
- Buttons: **Uppercase** with wide tracking
- Labels: **Uppercase** with wide tracking
- Body text: **Normal** (sentence case)
- Links: **Normal** (sentence case)

**Examples:**

```tsx
// Hero heading (uppercase by default)
<Heading variant="hero">Hi, I'm John</Heading>
// Renders as: "HI, I'M JOHN"

// Hero heading with normal casing
<Heading variant="hero" case="normal">Hi, I'm John</Heading>
// Renders as: "Hi, I'm John"

// Button text (uppercase by default)
<ButtonText>Click Me</ButtonText>
// Renders as: "CLICK ME"

// Button text with normal casing
<ButtonText case="normal">Click Me</ButtonText>
// Renders as: "Click Me"

// Body text (normal by default)
<Text variant="body">This is normal text</Text>
// Renders as: "This is normal text"

// Body text with uppercase
<Text variant="body" case="uppercase">This is normal text</Text>
// Renders as: "THIS IS NORMAL TEXT"
```

**Why Uppercase?**
- Creates visual impact and emphasis
- Improves readability at small sizes
- Maintains brand consistency (Riot Games style)
- Wide letter spacing prevents cramped appearance

## Additional Text Variants

The `Text` component includes additional variants for UI elements:

```tsx
// Button text
<Text variant="button">Click Me</Text>

// Link text
<Text as="a" variant="link" href="#">
  Learn More
</Text>

// Navigation text
<Text variant="nav">Home</Text>

// Badge text
<Text variant="badge">New</Text>

// Label text
<Text variant="label">Form Label</Text>
```

## Benefits

- **Consistency**: All typography follows the design system
- **Maintainability**: Update styles in one place
- **Accessibility**: Proper semantic HTML elements
- **Flexibility**: Easy to override with className prop
- **Type Safety**: Full TypeScript support
- **Riot Games Authentic**: Follows official Riot Games typography patterns

