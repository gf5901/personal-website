import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';

export interface ExperienceMetadataProps {
  location: string;
  startDate: string;
  endDate: string;
  duration?: string;
  accentColor: string;
  className?: string;
}

export const ExperienceMetadata: React.FC<ExperienceMetadataProps> = ({
  location,
  startDate,
  endDate,
  duration,
  accentColor,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-3 text-sm ${className}`}>
      <div className="flex items-center gap-1.5 text-foreground-muted">
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
      </div>
      <span className="text-foreground-subtle">•</span>
      <div className="flex items-center gap-1.5 text-foreground-muted">
        <Calendar className="w-4 h-4" />
        <span>{startDate} - {endDate}</span>
      </div>
      {duration && (
        <>
          <span className="text-foreground-subtle">•</span>
          <div 
            className="px-2 py-0.5 rounded-sm text-xs font-medium flex items-center gap-1"
            style={{
              backgroundColor: `${accentColor}15`,
              color: accentColor
            }}
          >
            <Clock className="w-3 h-3" />
            {duration}
          </div>
        </>
      )}
    </div>
  );
};

