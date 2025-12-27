import React from 'react';

export interface CompanyLogoProps {
  logo?: string;
  company: string;
  accentColor: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-12 h-12 sm:w-16 sm:h-16 text-xs sm:text-sm',
  md: 'w-16 h-16 sm:w-20 sm:h-20 text-sm sm:text-base',
  lg: 'w-20 h-20 sm:w-24 sm:h-24 text-base sm:text-lg',
};

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  logo,
  company,
  accentColor,
  size = 'md',
  className = '',
}) => {
  const sizeClass = sizeClasses[size];

  if (logo) {
    return (
      <div className={`relative ${className}`}>
        <img
          src={logo}
          alt={`${company} logo`}
          className={`${sizeClass} object-contain rounded-sm bg-surface p-2 border border-border shadow-sm`}
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = `${sizeClass} rounded-sm bg-primary/20 border border-border flex items-center justify-center text-primary font-bold`;
            placeholder.textContent = company.substring(0, 2).toUpperCase();
            img.parentElement?.appendChild(placeholder);
          }}
        />
      </div>
    );
  }

  return (
    <div 
      className={`${sizeClass} rounded-sm border-2 flex items-center justify-center text-primary font-bold ${className}`}
      style={{ 
        backgroundColor: `${accentColor}15`,
        borderColor: `${accentColor}40`
      }}
    >
      {company.substring(0, 2).toUpperCase()}
    </div>
  );
};

