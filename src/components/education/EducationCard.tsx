import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Heading, Text } from '../typography';

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
  logo?: string;
}

export interface EducationCardProps {
  education: Education;
  index: number;
  className?: string;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  education,
  index,
  className = '',
}) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`p-8 bg-elevated border border-border rounded-md ${className}`}
    >
      <div className="flex items-start gap-4">
        {education.logo ? (
          <div className="flex-shrink-0">
            <img
              src={education.logo}
              alt={`${education.institution} logo`}
              className="w-16 h-16 object-contain rounded-sm bg-elevated p-2 border border-border"
              onError={(e) => {
                // Show placeholder if image fails to load
                const img = e.currentTarget;
                img.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.className =
                  'w-16 h-16 rounded-sm bg-secondary/20 border border-border flex items-center justify-center text-secondary font-bold text-xs';
                placeholder.textContent = education.institution.substring(0, 2).toUpperCase();
                img.parentElement?.appendChild(placeholder);
              }}
            />
          </div>
        ) : (
          <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-secondary/20 border border-border flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-secondary" />
          </div>
        )}
        <div className="flex-1">
          <Heading variant="card" className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            {education.degree}
          </Heading>
          <Text as="p" variant="body" className="text-lg text-primary font-semibold mb-1">
            {education.institution}
          </Text>
          <Text variant="small" className="mb-4">
            {education.location} • {education.year}
          </Text>
        </div>
      </div>
      {education.description && (
        <Text variant="muted" relaxed>
          {education.description}
        </Text>
      )}
    </motion.div>
  );
};

