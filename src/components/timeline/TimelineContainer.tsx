import React from "react";
import { TimelineLine } from "./TimelineLine";

export interface TimelineContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const TimelineContainer: React.FC<TimelineContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <TimelineLine />
      <div className="space-y-0">{children}</div>
    </div>
  );
};

