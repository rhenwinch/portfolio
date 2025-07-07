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
      className="flex items-center gap-4 cursor-pointer group transition-all duration-300 w-fit"
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className="bg-black/25 rounded-xl border border-white/0 flex items-center justify-center p-3 backdrop-blur-sm shadow-md hover:bg-black/40 hover:border-white/20 transition-all duration-300">
        <Image 
          alt={iconAlt} 
          src={iconSrc} 
          width={20} 
          height={20}
          className="object-contain"
        />
      </div>
      <div className="text-white/85 text-sm font-medium hover:text-white transition-colors duration-300">
        {text}
      </div>
    </a>
  );
}