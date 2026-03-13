'use client';

import Image from 'next/image';
import EmploymentStatus from './EmploymentStatus';

interface ProfileSectionProps {
  isEmployed: boolean;
  size?: 'small' | 'medium' | 'large';
  showTitle?: boolean;
  className?: string;
}

export default function ProfileSection({ 
  isEmployed, 
  size = 'medium', 
  showTitle = true,
  className = '' 
}: ProfileSectionProps) {
  const sizeConfig = {
    small: {
      imageSize: 100,
      titleClass: 'text-2xl',
      subtitleClass: 'text-sm',
      gap: 'gap-4'
    },
    medium: {
      imageSize: 120,
      titleClass: 'text-2xl md:text-3xl',
      subtitleClass: 'text-sm md:text-base',
      gap: 'gap-4 md:gap-6'
    },
    large: {
      imageSize: 135,
      titleClass: 'text-4xl',
      subtitleClass: 'text-base',
      gap: 'gap-10'
    }
  };

  const config = sizeConfig[size];

  return (
    <div className={`flex flex-col items-center ${config.gap} flex-shrink-0 ${className}`}>
      <div className="relative">
        <Image
          src="/profile-picture.jpg"
          alt="Profile picture"
          height={config.imageSize}
          width={config.imageSize}
          className="rounded-full aspect-square object-cover"
        />
        <EmploymentStatus 
          isEmployed={isEmployed}
          className={size === 'large' ? '-bottom-3' : '-bottom-2'}
        />
      </div>
      {showTitle && (
        <div className="flex flex-col justify-center items-center gap-2">
          <div className={`text-white font-bold text-center ${config.titleClass}`}>
            Rhen Arañes
          </div>
          <div className="text-center">
            <span className={`text-white/80 font-medium ${config.subtitleClass}`}>
              Software Developer{' | '}
            </span>
            <span className={`text-orange-300 font-medium ${config.subtitleClass}`}>
              Android
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
