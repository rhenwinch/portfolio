'use client';

import Card from '@/components/Card';
import ProfileSection from './ProfileSection';
import ContactSection from './ContactSection';
import { ContactInfoProps } from '@/components/ContactInfo';

interface DesktopHeaderProps {
  isEmployed: boolean;
  contactInfoList: ContactInfoProps[];
  className?: string;
}

export default function DesktopHeader({ 
  isEmployed, 
  contactInfoList, 
  className = '' 
}: DesktopHeaderProps) {
  return (
    <div className={`hidden md:flex flex-col lg:flex-row h-auto lg:h-[32vh] items-center gap-8 mb-8 ${className}`}>
      {/* Combined profile and contact card for tablet */}
      <Card className="h-auto lg:h-[100%] w-full lg:w-auto lg:hidden">
        <div className="w-full h-[100%] flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 m-auto py-6 md:px-6">
          {/* Profile section */}
          <ProfileSection 
            isEmployed={isEmployed}
            size="medium"
            className="flex-shrink-0"
          />
          
          {/* Divider - vertical on md, horizontal on mobile */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:hidden"></div>
          <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          
          {/* Contact section */}
          <ContactSection
            contactInfoList={contactInfoList}
            layout="responsive"
            showHeader={true}
            className="w-full md:flex-1 max-w-md md:max-w-none"
          />
        </div>
      </Card>

      {/* Profile card for desktop */}
      <Card className="hidden lg:flex h-[100%] w-auto">
        <div className="w-65 h-[100%] flex flex-col justify-center items-center gap-10 m-auto">
          <ProfileSection 
            isEmployed={isEmployed}
            size="large"
            showTitle={true}
          />
        </div>
      </Card>

      {/* Contact information card for desktop */}
      <Card className="hidden lg:flex h-[100%] flex-1 min-w-0">
        <ContactSection
          contactInfoList={contactInfoList}
          layout="grid"
          showHeader={false}
          className="p-5"
        />
      </Card>
    </div>
  );
}
