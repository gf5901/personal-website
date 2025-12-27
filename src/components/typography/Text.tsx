import React from 'react';
import { cn } from '../../lib/utils';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The HTML element to render
   */
  as?: 'p' | 'span' | 'div' | 'label' | 'a';
  /**
   * Visual variant of the text
   */
  variant?: 'body' | 'lead' | 'small' | 'caption' | 'muted' | 'subtle' | 'button' | 'label' | 'link' | 'badge' | 'nav';
  /**
   * Whether to use relaxed line height
   */
  relaxed?: boolean;
  /**
   * Text casing style
   */
  case?: 'normal' | 'uppercase' | 'lowercase' | 'capitalize';
  /**
   * Additional CSS classes
   */
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  body: 'text-base text-foreground',
  lead: 'text-lg sm:text-xl md:text-2xl text-foreground-muted',
  small: 'text-sm text-foreground-muted',
  caption: 'text-xs text-foreground-subtle',
  muted: 'text-foreground-muted',
  subtle: 'text-foreground-subtle',
  // Riot Games-inspired UI typography
  button: 'text-base font-semibold font-body tracking-normal',
  label: 'text-xs font-semibold font-body uppercase tracking-wider text-foreground-muted',
  link: 'text-base font-semibold font-body text-primary hover:text-primary-hover transition-colors duration-fast',
  badge: 'text-xs font-medium font-body',
  nav: 'text-sm font-medium font-body text-foreground hover:text-primary transition-colors duration-fast',
};

const caseStyles = {
  normal: '',
  uppercase: 'uppercase tracking-wider',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
};

export const Text: React.FC<TextProps> = ({
  as = 'p',
  variant = 'body',
  relaxed = false,
  case: caseStyle,
  className,
  children,
  ...props
}) => {
  const Component = as;
  const baseStyles = variantStyles[variant];
  
  // Default casing based on variant (Riot Games style)
  const defaultCase = variant === 'label' || variant === 'button' ? 'uppercase' : 'normal';
  const finalCase = caseStyle || defaultCase;
  const caseClass = caseStyles[finalCase];

  return (
    <Component
      className={cn(
        baseStyles,
        relaxed && 'leading-relaxed',
        caseClass,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

