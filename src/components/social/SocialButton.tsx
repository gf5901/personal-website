import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ButtonText } from '../typography';

export interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary';
  size?: 'md' | 'lg';
  className?: string;
  withGlow?: boolean;
  external?: boolean;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  icon: Icon,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  withGlow = false,
  external = true,
}) => {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isOutlinePrimary = variant === 'outline-primary';
  const isOutlineSecondary = variant === 'outline-secondary';

  const getVariantClasses = () => {
    if (isPrimary) {
      return 'bg-primary text-primary-foreground hover:bg-primary-hover glow-primary';
    }
    if (isSecondary) {
      return 'bg-secondary text-foreground hover:bg-secondary-hover glow-secondary';
    }
    if (isOutlinePrimary) {
      return 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10';
    }
    if (isOutlineSecondary) {
      return 'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10';
    }
    return '';
  };

  const getPaddingClasses = () => {
    return size === 'lg' ? 'px-10 py-5' : 'px-8 py-4';
  };

  const getGlowEffect = () => {
    if (!withGlow) return {};
    if (isPrimary) {
      return { boxShadow: '0 0 30px hsl(var(--accent-primary) / 0.4)' };
    }
    if (isSecondary) {
      return { boxShadow: '0 0 30px hsl(var(--accent-secondary) / 0.4)' };
    }
    return {};
  };

  const baseClasses = `${getPaddingClasses()} ${getVariantClasses()} rounded-sm transition-all duration-fast ease-out flex items-center gap-2 ${className}`;

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.05, ...getGlowEffect() }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
    >
      <Icon className="w-5 h-5" />
      <ButtonText size={size}>{children}</ButtonText>
    </motion.a>
  );
};

