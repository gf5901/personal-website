import React from "react";
import { motion } from "framer-motion";
import { TimelineDot } from "./TimelineDot";

export interface TimelineItemProps {
  children: React.ReactNode;
  accentColor: string;
  index: number;
  variants?: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: {
        duration: number;
        ease: number[];
      };
    };
  };
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  accentColor,
  index,
  variants,
  className = "",
}) => {
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants || defaultVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={`relative ${className}`}
    >
      <TimelineDot accentColor={accentColor} index={index} />
      <div className="lg:pl-24 relative">{children}</div>
    </motion.div>
  );
};

