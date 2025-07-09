'use client'

import Image from 'next/image';

export interface ContactInfoProps {
  iconSrc: string;
  iconAlt: string;
  text: string;
  href?: string;
}

export default function ContactInfo({ 
  iconSrc, 
  iconAlt, 
  text,
  href
}: ContactInfoProps) {
  return (
    <a 
      className="flex items-center gap-3 md:gap-4 cursor-pointer group transition-all duration-300 w-full min-w-0 py-2 sm:py-1 touch-manipulation"
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className="bg-black/25 rounded-xl border border-white/0 flex
       items-center justify-center p-3 md:p-3 backdrop-blur-sm shadow-md hover:bg-black/40 hover:border-white/20 active:bg-black/50 transition-all duration-300 flex-shrink-0 min-w-[44px] min-h-[44px]">
        <Image 
          alt={iconAlt} 
          src={iconSrc} 
          width={20} 
          height={20}
          className="object-contain w-5 h-5 md:w-5 md:h-5"
        />
      </div>
      <div className="text-white/85 text-sm md:text-sm font-medium hover:text-white active:text-white transition-colors duration-300 flex-1 min-w-0 truncate leading-relaxed">
        {text}
      </div>
    </a>
  );
}