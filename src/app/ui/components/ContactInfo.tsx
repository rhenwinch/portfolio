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
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="flex items-center gap-3 cursor-pointer group transition-all duration-300 ease-out hover:scale-105 hover:translate-x-2 w-fit"
      onClick={handleClick}
    >
      <div className="bg-black/20 rounded-[15px] shadow-lg items-center flex justify-center relative overflow-hidden transition-all duration-300 ease-out group-hover:bg-black/30 group-hover:shadow-xl group-hover:shadow-white/10">
        <Image 
          alt={iconAlt} 
          src={iconSrc} 
          width={18} 
          height={18}
          className='m-4 relative z-10 transition-all duration-300 ease-out group-hover:scale-110 group-hover:brightness-125'
        />
      </div>
      <div className="justify-start text-white text-sm font-normal transition-all duration-300 ease-out group-hover:text-white/90 group-hover:translate-x-1">
        {text}
      </div>
    </div>
  );
}