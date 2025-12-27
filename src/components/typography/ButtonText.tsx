import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonTextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The HTML element to render
   */
  as?: 'span' | 'div';
  /**
   * Size variant of the button text
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Text casing style (Riot Games style: uppercase for buttons)
   */
  case?: 'normal' | 'uppercase' | 'lowercase' | 'capitalize';
  /**
   * Additional CSS classes
   */
  className?: string;
  children: React.ReactNode;
}

const sizeStyles = {
  sm: 'text-sm font-semibold font-body',
  md: 'text-base font-semibold font-body',
  lg: 'text-lg font-semibold font-body',
};

const caseStyles = {
  normal: 'tracking-normal',
  uppercase: 'uppercase tracking-wider',
  lowercase: 'lowercase tracking-normal',
  capitalize: 'capitalize tracking-normal',
};

/**
 * ButtonText - Typography component specifically for button text
 * Follows Riot Games design: Work Sans, semibold weight
 * Default: uppercase with wide tracking (Riot Games style)
 */
export const ButtonText: React.FC<ButtonTextProps> = ({
  as = 'span',
  size = 'md',
  case: caseStyle = 'uppercase',
  className,
  children,
  ...props
}) => {
  const Component = as;
  const baseStyles = sizeStyles[size];
  const caseClass = caseStyles[caseStyle];

  return (
    <Component
      className={cn(baseStyles, caseClass, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

