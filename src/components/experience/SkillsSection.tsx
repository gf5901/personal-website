import React from 'react';
import { Heading } from '../typography';
import { Badge } from '../ui';

export interface SkillsSectionProps {
  skills: string[];
  badgeVariant: 'primary' | 'secondary' | 'tertiary';
  accentColor: string;
  maxVisible?: number;
  className?: string;
  showHeader?: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  badgeVariant,
  accentColor,
  maxVisible,
  className = '',
  showHeader = true,
}) => {
  if (!skills || skills.length === 0) {
    return null;
  }

  const visibleSkills = maxVisible ? skills.slice(0, maxVisible) : skills;
  const remainingCount = maxVisible && skills.length > maxVisible ? skills.length - maxVisible : 0;

  return (
    <div className={className}>
      {showHeader && (
        <Heading variant="subheading" className="mb-3 flex items-center gap-2">
          <span 
            className="w-1 h-4 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          Technologies & Skills
        </Heading>
      )}
      <div className="flex flex-wrap gap-2">
        {visibleSkills.map((skill, skillIndex) => (
          <Badge
            key={skillIndex}
            variant={badgeVariant}
            interactive
          >
            {skill}
          </Badge>
        ))}
        {remainingCount > 0 && (
          <Badge variant="muted">
            +{remainingCount} more
          </Badge>
        )}
      </div>
    </div>
  );
};

