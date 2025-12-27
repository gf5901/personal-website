import React from "react";
import { motion } from "framer-motion";

export interface TimelineDotProps {
  accentColor: string;
  index: number;
  className?: string;
}

export const TimelineDot: React.FC<TimelineDotProps> = ({
  accentColor,
  index,
  className = "",
}) => {
  return (
    <div className="hidden lg:flex absolute left-0 top-0 w-16 items-start justify-center pt-6">
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.05 + 0.3,
            type: "spring",
            stiffness: 200,
          }}
          className={`w-4 h-4 rounded-full border-2 border-background flex-shrink-0 relative z-20 ${className}`}
          style={{
            backgroundColor: accentColor,
            boxShadow: `0 0 0 4px ${accentColor}33, 0 0 12px ${accentColor}`,
          }}
        />
      </div>
    </div>
  );
};

