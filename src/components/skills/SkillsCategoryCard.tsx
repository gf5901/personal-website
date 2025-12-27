import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Heading } from '../typography';
import { Badge } from '../ui';

export interface SkillsCategoryCardProps {
  category: string;
  skills: string[];
  icon: LucideIcon;
  index: number;
  className?: string;
}

export const SkillsCategoryCard: React.FC<SkillsCategoryCardProps> = ({
  category,
  skills,
  icon: IconComponent,
  index,
  className = '',
}) => {
  const badgeVariant =
    index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary';

  return (
    <motion.div
      key={category}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`p-6 bg-elevated border border-border rounded-md ${className}`}
    >
      <Heading as="h3" variant="card" className="text-lg mb-4 capitalize flex items-center gap-2">
        <IconComponent className="w-5 h-5 text-primary" />
        {category}
      </Heading>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <Badge key={skillIndex} variant={badgeVariant} interactive>
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
};

