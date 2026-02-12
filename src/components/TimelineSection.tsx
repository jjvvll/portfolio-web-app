import React from "react";
import { TimelineItem } from "./TimelineItem";
import { timelineData } from "../data/timeline";

export const TimelineSection: React.FC = () => {
  return (
    <section
      className="py-32 px-6 bg-slate-100/50 dark:bg-slate-900/20"
      id="experience"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[var(--primary)] text-xs font-black uppercase tracking-[0.3em]">
            Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            PROFESSIONAL JOURNEY
          </h2>
        </div>
        <div className="relative timeline-line">
          {timelineData.map((item) => (
            <TimelineItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
