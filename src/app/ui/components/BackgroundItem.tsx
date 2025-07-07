'use client'

import { cn } from "@/lib/utils"

interface BackgroundItemProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string | string[];
  skills?: string[];
  className?: string;
  isLast?: boolean;
}

export default function BackgroundItem({
  title,
  company,
  duration,
  location,
  description,
  skills,
  className = "",
  isLast = false
}: BackgroundItemProps) {
  const isDescriptionArray = Array.isArray(description);

  return (
    <li 
      className={cn(
        "timeline-item relative mb-5",
        // Timeline line for non-last items
        !isLast && "timeline-item-with-line",
        // Timeline dot for all items
        "timeline-item-dot",
        className
      )}
    >
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white timeline-item-title">{title}</h3>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm">
          <span className="text-orange-300/80 font-medium">{company}</span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="text-white/60 italic">{location}</span>
        </div>
        
        <p className="text-orange-300/70 text-sm font-medium">{duration}</p>
        
        <div className="text-white/70 text-sm leading-relaxed">
          {isDescriptionArray ? (
            <ul className="space-y-1 list-disc list-inside">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
        
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
