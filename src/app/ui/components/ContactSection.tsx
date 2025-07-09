'use client';

import ContactInfo, { ContactInfoProps } from '@/components/ContactInfo';

interface ContactSectionProps {
  contactInfoList: ContactInfoProps[];
  layout?: 'vertical' | 'grid' | 'responsive';
  showHeader?: boolean;
  className?: string;
}

export default function ContactSection({ 
  contactInfoList, 
  layout = 'vertical',
  showHeader = true,
  className = ''
}: ContactSectionProps) {
  const getLayoutClasses = () => {
    switch (layout) {
      case 'grid':
        return 'grid grid-cols-2 gap-5 h-[100%] items-center w-full min-w-0';
      case 'responsive':
        return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 w-full';
      case 'vertical':
      default:
        return 'space-y-3';
    }
  };

  return (
    <div className={className}>
      {showHeader && (
        <div className="text-white/60 text-xs font-medium uppercase tracking-wider mb-4 text-center md:text-left">
          Contact Information
        </div>
      )}
      <div className={getLayoutClasses()}>
        {contactInfoList.map((contact, index) => (
          <ContactInfo
            key={index}
            iconAlt={contact.iconAlt}
            iconSrc={contact.iconSrc}
            text={contact.text}
            href={contact.href}
          />
        ))}
      </div>
    </div>
  );
}
