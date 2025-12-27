import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual variant of the badge
   * - primary: Red accent (Valorant-inspired)
   * - secondary: Gold accent (League-inspired)
   * - tertiary: Cyan accent (Tech-inspired)
   * - outline: Transparent with colored border
   * - muted: Subtle, low-contrast style
   * - custom: Use customAccentColor prop for custom colors
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'muted' | 'custom';
  /**
   * Size of the badge
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the badge should have hover effects
   */
  interactive?: boolean;
  /**
   * Custom accent color (HSL format: "0 85% 60%")
   * Only used when variant is "custom"
   */
  customAccentColor?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  primary: {
    base: 'bg-primary/20 border border-primary/40 text-foreground',
    hover: 'hover:bg-primary/30 hover:border-primary/60 hover:shadow-[0_0_12px_hsl(var(--accent-primary)/0.3)]',
  },
  secondary: {
    base: 'bg-secondary/20 border border-secondary/40 text-foreground',
    hover: 'hover:bg-secondary/30 hover:border-secondary/60 hover:shadow-[0_0_12px_hsl(var(--accent-secondary)/0.3)]',
  },
  tertiary: {
    base: 'bg-tertiary/20 border border-tertiary/40 text-foreground',
    hover: 'hover:bg-tertiary/30 hover:border-tertiary/60 hover:shadow-[0_0_12px_hsl(var(--accent-tertiary)/0.3)]',
  },
  outline: {
    base: 'bg-transparent border border-border text-foreground-muted',
    hover: 'hover:bg-elevated hover:border-primary/50 hover:text-foreground',
  },
  muted: {
    base: 'bg-elevated border border-border text-foreground-muted',
    hover: 'hover:bg-elevated/80 hover:border-border-strong',
  },
  custom: {
    base: 'border',
    hover: 'hover:shadow-[0_0_12px_var(--hover-glow)]',
  },
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  interactive = false,
  customAccentColor,
  className,
  children,
  ...props
}) => {
  const isCustom = variant === 'custom';
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  // For custom variant, set inline styles for the color
  const customStyle = isCustom && customAccentColor
    ? {
        backgroundColor: `hsl(${customAccentColor} / 0.1)`,
        borderColor: `hsl(${customAccentColor} / 0.25)`,
        color: 'hsl(var(--foreground))',
        ...(interactive && {
          '--hover-bg': `hsl(${customAccentColor} / 0.15)`,
          '--hover-border': `hsl(${customAccentColor} / 0.4)`,
          '--hover-glow': `hsl(${customAccentColor} / 0.3)`,
        }),
      } as React.CSSProperties
    : undefined;

  const baseClasses = cn(
    'inline-flex items-center justify-center',
    'rounded-full',
    'font-medium',
    'transition-all duration-fast ease-out',
    'whitespace-nowrap',
    sizeStyle,
    !isCustom && variantStyle.base,
    interactive && !isCustom && variantStyle.hover,
    interactive && isCustom && variantStyle.hover,
    className
  );

  // If interactive, wrap in motion.span for animations
  if (interactive) {
    const hoverStyle = isCustom && customAccentColor
      ? {
          backgroundColor: `hsl(${customAccentColor} / 0.15)`,
          borderColor: `hsl(${customAccentColor} / 0.4)`,
          boxShadow: `0 0 12px hsl(${customAccentColor} / 0.3)`,
        }
      : undefined;

    return (
      <motion.span
        className={baseClasses}
        style={customStyle}
        whileHover={{ 
          scale: 1.05,
          ...hoverStyle,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
        {...props}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span
      className={baseClasses}
      style={customStyle}
      {...props}
    >
      {children}
    </span>
  );
};

