import Image from 'next/image';

interface ContactInfoProps {
  iconSrc: string;
  iconAlt: string;
  text: string;
}

export default function ContactInfo({ 
  iconSrc, 
  iconAlt, 
  text
}: ContactInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-black/20 rounded-[15] shadow-lg items-center flex justify-center">
        <Image 
          alt={iconAlt} 
          src={iconSrc} 
          width={22} 
          height={22}
          className='m-5'
        />
      </div>
      <div className="justify-start text-white text-base font-normal">
        {text}
      </div>
    </div>
  );
}