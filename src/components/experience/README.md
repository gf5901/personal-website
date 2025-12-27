# Experience Components

Reusable components for displaying professional experience information.

## Components

### `ExperienceCard`

The main card component for displaying experience items. Supports both expandable and always-visible modes.

**Props:**
- `experience: ExperienceItem` - The experience data object
- `index: number` - Index for styling variations
- `accentColor: string` - HSL color string for accent styling
- `badgeVariant: 'primary' | 'secondary' | 'tertiary'` - Badge color variant
- `isExpanded?: boolean` - Whether the card is expanded (for expandable mode)
- `onToggleExpand?: () => void` - Callback when expand/collapse is toggled
- `showExpandable?: boolean` - Whether to show expandable details section
- `className?: string` - Additional CSS classes

**Usage:**
```tsx
<ExperienceCard
  experience={experienceItem}
  index={0}
  accentColor="hsl(var(--accent-primary))"
  badgeVariant="primary"
  showExpandable={true}
  isExpanded={isExpanded}
  onToggleExpand={() => toggleExpand()}
/>
```

### `CompanyLogo`

Displays a company logo with fallback placeholder.

**Props:**
- `logo?: string` - URL to the logo image
- `company: string` - Company name (for placeholder)
- `accentColor: string` - HSL color string for styling
- `size?: 'sm' | 'md' | 'lg'` - Logo size (default: 'md')
- `className?: string` - Additional CSS classes

**Usage:**
```tsx
<CompanyLogo
  logo="/images/companies/example.jpeg"
  company="Example Corp"
  accentColor="hsl(var(--accent-primary))"
  size="md"
/>
```

### `ExperienceMetadata`

Displays location, date range, and duration with icons.

**Props:**
- `location: string` - Job location
- `startDate: string` - Start date
- `endDate: string` - End date
- `duration?: string` - Duration (optional)
- `accentColor: string` - HSL color string for duration badge
- `className?: string` - Additional CSS classes

**Usage:**
```tsx
<ExperienceMetadata
  location="San Francisco, CA"
  startDate="Jan 2020"
  endDate="Present"
  duration="2 yrs"
  accentColor="hsl(var(--accent-primary))"
/>
```

### `AchievementList`

Displays a list of achievements with bullet points.

**Props:**
- `achievements: string[]` - Array of achievement strings
- `accentColor: string` - HSL color string for bullet points
- `className?: string` - Additional CSS classes
- `showHeader?: boolean` - Whether to show the "Key Achievements" header (default: true)

**Usage:**
```tsx
<AchievementList
  achievements={['Achievement 1', 'Achievement 2']}
  accentColor="hsl(var(--accent-primary))"
  showHeader={true}
/>
```

### `SkillsSection`

Displays skills as badges with optional max visible limit.

**Props:**
- `skills: string[]` - Array of skill strings
- `badgeVariant: 'primary' | 'secondary' | 'tertiary'` - Badge color variant
- `accentColor: string` - HSL color string for header accent
- `maxVisible?: number` - Maximum number of skills to show (shows "+X more" if exceeded)
- `className?: string` - Additional CSS classes
- `showHeader?: boolean` - Whether to show the "Technologies & Skills" header (default: true)

**Usage:**
```tsx
<SkillsSection
  skills={['React', 'TypeScript', 'Node.js']}
  badgeVariant="primary"
  accentColor="hsl(var(--accent-primary))"
  maxVisible={5}
  showHeader={true}
/>
```

## Type Definitions

### `ExperienceItem`

```typescript
interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  duration?: string;
  description: string;
  achievements?: string[];
  skills?: string[];
  logo?: string;
}
```

## Design Patterns

### Accent Color Rotation

Components use a rotating accent color system:
- Index 0: Primary accent (red)
- Index 1: Secondary accent (gold)
- Index 2: Tertiary accent (cyan)
- Repeats for subsequent items

### Expandable vs Always-Visible

- **Expandable mode** (`showExpandable={true}`): Details are hidden by default, shown when expanded
- **Always-visible mode** (`showExpandable={false}`): All details are always shown (used for preview sections)

## Examples

### Full Experience Page (Expandable)

```tsx
<ExperienceCard
  experience={exp}
  index={index}
  accentColor={accentColors[index % accentColors.length]}
  badgeVariant={badgeVariants[index % badgeVariants.length]}
  isExpanded={isExpanded}
  onToggleExpand={() => toggleCard(index)}
  showExpandable={true}
/>
```

### Home Page Preview (Always-Visible)

```tsx
<ExperienceCard
  experience={exp}
  index={index}
  accentColor={accentColors[index % accentColors.length]}
  badgeVariant={badgeVariants[index % badgeVariants.length]}
  showExpandable={false}
/>
```

