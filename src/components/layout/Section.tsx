import React from 'react';

export interface SectionProps {
  children: React.ReactNode;
  background?: 'background' | 'surface';
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  background = 'background',
  className = '',
  id,
}) => {
  const bgClass = background === 'surface' ? 'bg-surface' : 'bg-background';
  
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

