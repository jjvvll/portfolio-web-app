import React from "react";
import type { TimelineItem as TimelineItemType } from "../types";

interface TimelineItemProps extends TimelineItemType {}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  period,
  description,
  alignment,
  dotOpacity,
}) => {
  const dotClasses = {
    full: "bg-[var(--primary)]",
    medium: "bg-[var(--primary)]/40",
    low: "bg-[var(--primary)]/20",
  };

  const isLeft = alignment === "left";

  return (
    <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between w-full">
      {/* Left side */}
      <div
        className={`order-2 md:order-1 md:w-5/12 w-full ${isLeft ? "text-center md:text-right" : "text-center md:text-left"}`}
      >
        {isLeft ? (
          <>
            <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
            <p className="text-[var(--primary)] font-medium mt-1 text-sm sm:text-base">
              {company} • {period}
            </p>
          </>
        ) : (
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed text-center md:text-left mt-4 md:mt-0">
            {description}
          </p>
        )}
      </div>

      {/* Center dot */}
      <div
        className={`z-10 order-1 md:order-2 ${dotClasses[dotOpacity]} w-4 h-4 rounded-full border-4 border-[var(--background-light)] dark:border-[var(--background-dark)] my-4 md:my-0 shrink-0`}
      />

      {/* Right side */}
      <div
        className={`order-3 md:w-5/12 w-full ${!isLeft ? "text-center md:text-left" : "text-center md:text-left"}`}
      >
        {isLeft ? (
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed text-center md:text-left mt-4 md:mt-0">
            {description}
          </p>
        ) : (
          <>
            <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
            <p className="text-[var(--primary)] font-medium mt-1 text-sm sm:text-base">
              {company} • {period}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
