import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Heading, Text } from '../typography';
import { CompanyLogo } from './CompanyLogo';
import { ExperienceMetadata } from './ExperienceMetadata';
import { AchievementList } from './AchievementList';
import { SkillsSection } from './SkillsSection';

import { ExperienceID } from '../../data/profile';

export interface ExperienceItem {
  id: ExperienceID;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  duration?: string;
  description: string;
  achievements?: string[];
  skills?: string[];
  logo?: string;
}

export interface ExperienceCardProps {
  experience: ExperienceItem;
  index?: number; // Optional, kept for backward compatibility but not used internally
  accentColor: string;
  badgeVariant: 'primary' | 'secondary' | 'tertiary';
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  showExpandable?: boolean;
  className?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  accentColor,
  badgeVariant,
  isExpanded = false,
  onToggleExpand,
  showExpandable = false,
  className = '',
}) => {
  const hasDetails = (experience.achievements && experience.achievements.length > 0) || 
                    (experience.skills && experience.skills.length > 0);
  const shouldShowExpandable = showExpandable && hasDetails;
  
  // Generate a stable ID for this card instance to scope styles
  const cardId = React.useMemo(() => {
    const baseId = `${experience.company}-${experience.title}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `experience-card-${baseId}`;
  }, [experience.company, experience.title]);

  return (
    <>
      {/* Scoped styles for this card's hover effects */}
      <style>{`
        .${cardId}.group:hover {
          border-color: ${accentColor}66 !important;
          box-shadow: 0 4px 6px -1px ${accentColor}1A, 0 2px 4px -1px ${accentColor}1A !important;
        }
        .${cardId}[data-expanded="true"] {
          border-color: ${accentColor}99 !important;
          box-shadow: 0 10px 15px -3px ${accentColor}1A, 0 4px 6px -2px ${accentColor}1A !important;
        }
      `}</style>
      <motion.div
        id={`experience-${experience.id}`}
        data-expanded={isExpanded}
        whileHover={{ 
          y: -4,
          transition: { duration: 0.2 }
        }}
        className={`
          ${cardId} group relative overflow-hidden
          bg-elevated border border-border rounded-md
          transition-all duration-normal
          ${shouldShowExpandable ? 'cursor-pointer' : ''}
          ${className}
        `}
        onClick={shouldShowExpandable ? onToggleExpand : undefined}
      >
        {/* Accent gradient overlay on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-normal pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${accentColor}08 0%, transparent 50%)`
          }}
        />

      {/* Content */}
      <div className="relative p-6 sm:p-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
          <div className="flex items-start gap-4 flex-1">
            {/* Company Logo */}
            <CompanyLogo
              logo={experience.logo}
              company={experience.company}
              accentColor={accentColor}
              size="md"
              className="flex-shrink-0"
            />

            {/* Title and Company Info */}
            <div className="flex-1 min-w-0">
              <Heading 
                variant="card" 
                className="mb-2"
              >
                {experience.title}
              </Heading>
              <Text 
                as="p" 
                variant="body" 
                className="text-lg sm:text-xl font-semibold mb-2"
                style={{ color: accentColor }}
              >
                {experience.company}
              </Text>
              
              {/* Metadata Row */}
              <ExperienceMetadata
                location={experience.location}
                startDate={experience.startDate}
                endDate={experience.endDate}
                duration={experience.duration}
                accentColor={accentColor}
              />
            </div>
          </div>
        </div>
        
        {/* Description */}
        <Text variant="muted" relaxed className="mb-6 text-base leading-relaxed">
          {experience.description}
        </Text>
        
        {/* Expandable Details */}
        {shouldShowExpandable ? (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-6 border-t border-border space-y-6">
                  <AchievementList
                    achievements={experience.achievements || []}
                    accentColor={accentColor}
                  />
                  
                  <SkillsSection
                    skills={experience.skills || []}
                    badgeVariant={badgeVariant}
                    accentColor={accentColor}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <>
            {/* Always visible achievements (for preview mode) */}
            {experience.achievements && experience.achievements.length > 0 && (
              <AchievementList
                achievements={experience.achievements}
                accentColor={accentColor}
                className="mb-6"
              />
            )}
            
            {/* Always visible skills (for preview mode) */}
            {experience.skills && experience.skills.length > 0 && (
              <SkillsSection
                skills={experience.skills}
                badgeVariant={badgeVariant}
                accentColor={accentColor}
                maxVisible={5}
              />
            )}
          </>
        )}

        {/* Expand/Collapse Indicator */}
        {shouldShowExpandable && (
          <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
            <motion.button
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onToggleExpand?.();
              }}
            >
              <Text as="span" variant="link" className="text-sm">
                {isExpanded ? 'Show Less' : 'View Details'}
              </Text>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
            
            {/* Quick stats */}
            <div className="flex items-center gap-4 text-xs text-foreground-subtle">
              {experience.achievements && experience.achievements.length > 0 && (
                <span>{experience.achievements.length} achievement{experience.achievements.length !== 1 ? 's' : ''}</span>
              )}
              {experience.skills && experience.skills.length > 0 && (
                <span>{experience.skills.length} skill{experience.skills.length !== 1 ? 's' : ''}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
    </>
  );
};

