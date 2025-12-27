import React from 'react';
import { cn } from '../../lib/utils';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Size variant of the label
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether to use uppercase styling (Riot Games style)
   */
  uppercase?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  children: React.ReactNode;
}

const sizeStyles = {
  sm: 'text-xs font-semibold font-body',
  md: 'text-sm font-semibold font-body',
  lg: 'text-base font-semibold font-body',
};

/**
 * Label - Typography component for form labels and UI labels
 * Follows Riot Games design: Work Sans, semibold, uppercase with wide tracking
 */
export const Label: React.FC<LabelProps> = ({
  size = 'sm',
  uppercase = true,
  className,
  children,
  ...props
}) => {
  const baseStyles = sizeStyles[size];
  const uppercaseStyles = uppercase ? 'uppercase tracking-wider' : '';

  return (
    <label
      className={cn(
        baseStyles,
        uppercaseStyles,
        'text-foreground-muted',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

