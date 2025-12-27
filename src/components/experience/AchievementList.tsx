import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Text } from '../typography';

export interface AchievementListProps {
  achievements: string[];
  accentColor: string;
  className?: string;
  showHeader?: boolean;
}

export const AchievementList: React.FC<AchievementListProps> = ({
  achievements,
  accentColor,
  className = '',
  showHeader = true,
}) => {
  if (!achievements || achievements.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {showHeader && (
        <Heading variant="subheading" className="mb-3 flex items-center gap-2">
          <span 
            className="w-1 h-4 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          Key Achievements
        </Heading>
      )}
      <ul className="space-y-2 sm:space-y-3">
        {achievements.map((achievement, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3"
          >
            <div 
              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
              style={{ backgroundColor: accentColor }}
            />
            <Text as="span" variant="muted" className="leading-relaxed">
              {achievement}
            </Text>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

