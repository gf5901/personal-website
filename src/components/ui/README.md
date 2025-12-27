# UI Components

Reusable UI components following the Riot Games-inspired design system.

## Badge Component

A versatile badge component for displaying skills, technologies, tags, and other labeled content. Designed with accessibility, animations, and the Riot Games design system in mind.

### Basic Usage

```tsx
import { Badge } from '@/components/ui';

// Primary badge (red accent)
<Badge variant="primary">React.js</Badge>

// Secondary badge (gold accent)
<Badge variant="secondary">TypeScript</Badge>

// Tertiary badge (cyan accent)
<Badge variant="tertiary">Node.js</Badge>

// Outline badge (subtle border)
<Badge variant="outline">JavaScript</Badge>

// Muted badge (low contrast)
<Badge variant="muted">CSS</Badge>
```

### Interactive Badges

Badges can have hover effects and animations when `interactive` is enabled:

```tsx
<Badge variant="primary" interactive>
  Hover me!
</Badge>
```

### Sizes

```tsx
<Badge size="sm">Small</Badge>
<Badge size="md">Medium (default)</Badge>
<Badge size="lg">Large</Badge>
```

### Custom Colors

For custom accent colors (useful when you want to match a specific design context):

```tsx
<Badge 
  variant="custom" 
  customAccentColor="180 100% 50%"
  interactive
>
  Custom Color
</Badge>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'outline' \| 'muted' \| 'custom'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the badge |
| `interactive` | `boolean` | `false` | Enable hover effects and animations |
| `customAccentColor` | `string` | `undefined` | Custom HSL color (e.g., "0 85% 60%") - only used with `variant="custom"` |
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Badge content |

### Variants

**Primary (Red - Valorant-inspired)**
- Background: Primary accent with 20% opacity
- Border: Primary accent with 40% opacity
- Hover: Enhanced glow and brightness
- Best for: Primary skills, important technologies

**Secondary (Gold - League-inspired)**
- Background: Secondary accent with 20% opacity
- Border: Secondary accent with 40% opacity
- Hover: Enhanced glow and brightness
- Best for: Secondary skills, complementary technologies

**Tertiary (Cyan - Tech-inspired)**
- Background: Tertiary accent with 20% opacity
- Border: Tertiary accent with 40% opacity
- Hover: Enhanced glow and brightness
- Best for: Tertiary skills, additional technologies

**Outline**
- Background: Transparent
- Border: Subtle border color
- Hover: Elevated background with primary border
- Best for: Less prominent tags, optional skills

**Muted**
- Background: Elevated surface color
- Border: Standard border color
- Hover: Subtle background change
- Best for: Low-priority tags, metadata

**Custom**
- Uses `customAccentColor` prop for styling
- Allows matching specific design contexts
- Best for: Dynamic color schemes, themed content

### Usage Examples

#### Skills in Experience Cards

```tsx
<div className="flex flex-wrap gap-2">
  {skills.map((skill, index) => {
    const variant = index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary';
    return (
      <Badge key={index} variant={variant} interactive>
        {skill}
      </Badge>
    );
  })}
</div>
```

#### Technologies in Project Cards

```tsx
<div className="flex flex-wrap gap-2">
  {technologies.map((tech, index) => (
    <Badge key={index} variant="primary" size="sm" interactive>
      {tech}
    </Badge>
  ))}
</div>
```

#### Skills Section with Categories

```tsx
{Object.entries(skills).map(([category, skills], categoryIndex) => {
  const variant = categoryIndex % 3 === 0 ? 'primary' : categoryIndex % 3 === 1 ? 'secondary' : 'tertiary';
  return (
    <div key={category}>
      <h3>{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant={variant} interactive>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
})}
```

#### Status Indicators

```tsx
<Badge variant="outline">Available</Badge>
<Badge variant="muted">In Progress</Badge>
<Badge variant="primary">Completed</Badge>
```

### Design System Integration

The Badge component follows the Riot Games-inspired design system:

- **Colors**: Uses design tokens (`--accent-primary`, `--accent-secondary`, etc.)
- **Spacing**: Follows the spacing scale (px-3 py-1 for medium size)
- **Typography**: Uses `font-medium` with responsive text sizes
- **Animations**: Smooth transitions with `duration-fast` (200ms) and standard easing
- **Accessibility**: Semantic HTML (`<span>`) with proper contrast ratios

### Animation Details

When `interactive={true}`, badges include:
- **Hover**: Scale to 1.05x with enhanced glow effect
- **Tap**: Scale to 0.98x for tactile feedback
- **Transition**: 200ms duration with standard easing curve
- **Glow**: Color-matched shadow effect on hover

### Accessibility

- Uses semantic HTML (`<span>`)
- Maintains WCAG AA contrast ratios
- Supports keyboard navigation (when used as interactive elements)
- Respects `prefers-reduced-motion` (via framer-motion)

### Best Practices

1. **Use consistent variants** within the same context (e.g., all skills in an experience card use the same variant pattern)
2. **Enable interactivity** for clickable or important badges
3. **Choose appropriate sizes** - `sm` for dense layouts, `md` for standard use, `lg` for emphasis
4. **Maintain visual hierarchy** - use primary/secondary/tertiary variants to create visual grouping
5. **Keep text concise** - badges work best with short labels (1-3 words)

