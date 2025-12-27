import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        border: 'hsl(var(--border))',
        'border-strong': 'hsl(var(--border-strong))',
        'border-accent': 'hsl(var(--border-accent))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        surface: 'hsl(var(--surface))',
        elevated: 'hsl(var(--elevated))',
        foreground: 'hsl(var(--foreground))',
        'foreground-muted': 'hsl(var(--foreground-muted))',
        'foreground-subtle': 'hsl(var(--foreground-subtle))',
        
        // Primary accent (Valorant Red)
        primary: {
          DEFAULT: 'hsl(var(--accent-primary))',
          hover: 'hsl(var(--accent-primary-hover))',
          active: 'hsl(var(--accent-primary-active))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        
        // Secondary accent (League Gold)
        secondary: {
          DEFAULT: 'hsl(var(--accent-secondary))',
          hover: 'hsl(var(--accent-secondary-hover))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        
        // Tertiary accent (Tech Cyan)
        tertiary: {
          DEFAULT: 'hsl(var(--accent-tertiary))',
          hover: 'hsl(var(--accent-tertiary-hover))',
        },
        
        // Status colors
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
        info: 'hsl(var(--info))',
        
        // Legacy shadcn/ui compatibility
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
        // Legacy compatibility
        DEFAULT: 'var(--radius)',
      },
      fontFamily: {
        display: ['Mark W05 Medium', 'Bebas Neue', 'Oswald', 'system-ui', 'sans-serif'],
        body: ['Mark W05 Medium', 'Work Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
        '5xl': 'var(--space-5xl)',
      },
      transitionTimingFunction: {
        'standard': 'var(--ease-standard)',
        'in': 'var(--ease-in)',
        'out': 'var(--ease-out)',
        'sharp': 'var(--ease-sharp)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px hsl(var(--accent-primary) / 0.3)',
        'glow-secondary': '0 0 20px hsl(var(--accent-secondary) / 0.3)',
        'glow-tertiary': '0 0 20px hsl(var(--accent-tertiary) / 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;

