import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';
import { Text } from '../typography';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/work', label: 'Work', accentColor: 'hsl(var(--accent-primary))' },
    { path: '/about', label: 'About', accentColor: 'hsl(var(--accent-tertiary))' },
  ];

  const isActive = (path: string) => {
    if (path === '/work') {
      return location.pathname === '/work';
    }
    if (path === '/about') {
      return location.pathname === '/about';
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-background/80 backdrop-blur-md rounded-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home Link */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/images/logo.svg" 
              alt="GF Logo" 
              className="h-10 w-10 hover:opacity-80 transition-opacity"
            />
            <Text 
              variant="body" 
              className="font-semibold uppercase text-white hover:text-primary transition-colors"
              style={{ letterSpacing: '1px' }}
            >
              {profileData.name}
            </Text>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative"
                >
                  <Text
                    variant="body"
                    className="font-medium transition-colors uppercase text-white"
                    style={{ 
                      letterSpacing: '1px',
                      color: active ? item.accentColor : 'white',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = item.accentColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = active ? item.accentColor : 'white';
                    }}
                  >
                    {item.label}
                  </Text>
                  {active && (
                    <motion.div
                      layoutId={`activeIndicator-${item.path}`}
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: item.accentColor }}
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

