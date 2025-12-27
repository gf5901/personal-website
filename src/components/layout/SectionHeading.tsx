import React from 'react';
import { motion } from 'framer-motion';
import { Heading } from '../typography';

export interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`text-center mb-16 ${className}`}
    >
      <Heading variant="section">
        {children}
      </Heading>
    </motion.div>
  );
};

