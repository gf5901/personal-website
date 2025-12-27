import React from "react";

export interface TimelineLineProps {
  className?: string;
}

export const TimelineLine: React.FC<TimelineLineProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-border/40 ${className}`}
      style={{ transform: "translateX(-50%)" }}
    />
  );
};

