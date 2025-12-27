import React from 'react';
import { cn } from '../../lib/utils';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * The heading level (h1-h6)
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Visual variant of the heading
   */
  variant?: 'hero' | 'display' | 'section' | 'card' | 'subheading';
  /**
   * Whether to use gradient text effect
   */
  gradient?: boolean;
  /**
   * Text casing style (Riot Games style: uppercase for display/hero)
   */
  case?: 'normal' | 'uppercase' | 'lowercase' | 'capitalize';
  /**
   * Additional CSS classes
   */
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  hero: 'text-5xl sm:text-6xl md:text-7xl lg:text-display-2xl font-display font-bold mb-6 leading-tight',
  display: 'text-4xl sm:text-5xl md:text-display-lg font-display font-bold mb-4',
  section: 'text-4xl sm:text-5xl md:text-display-lg font-display font-bold mb-4',
  card: 'text-2xl font-bold text-foreground mb-1',
  subheading: 'text-sm font-semibold text-foreground mb-2',
};

const defaultElements = {
  hero: 'h1',
  display: 'h1',
  section: 'h2',
  card: 'h3',
  subheading: 'h4',
} as const;

const caseStyles = {
  normal: '',
  uppercase: 'uppercase tracking-wider',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
};

export const Heading: React.FC<HeadingProps> = ({
  as,
  variant = 'section',
  gradient = false,
  case: caseStyle,
  className,
  children,
  ...props
}) => {
  const Component = as || (defaultElements[variant] as keyof JSX.IntrinsicElements);
  const baseStyles = variantStyles[variant];
  
  // Default casing based on variant (Riot Games style)
  const defaultCase = variant === 'hero' || variant === 'display' ? 'uppercase' : 'normal';
  const finalCase = caseStyle || defaultCase;
  const caseClass = caseStyles[finalCase];

  return (
    <Component
      className={cn(
        baseStyles,
        gradient && 'text-gradient-primary',
        caseClass,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

