'use client';

import ProfileSection from './ProfileSection';
import ContactSection from './ContactSection';
import { ContactInfoProps } from '@/components/ContactInfo';

interface ContactDrawerProps {
  isOpen: boolean;
  onCloseAction: () => void;
  isEmployed: boolean;
  contactInfoList: ContactInfoProps[];
}

export default function ContactDrawer({ 
  isOpen, 
  onCloseAction, 
  isEmployed, 
  contactInfoList 
}: ContactDrawerProps) {
  return (
    <div 
      className={`md:hidden fixed inset-0 z-[60] transition-all duration-300 ease-out ${
        isOpen 
          ? 'bg-black/50 backdrop-blur-sm pointer-events-auto' 
          : 'bg-black/0 backdrop-blur-0 pointer-events-none'
      }`}
      onClick={onCloseAction}
    >
      <div 
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-md border-r border-white/10 transform transition-all duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
          <div className="text-white font-semibold text-lg">Profile</div>
          <button
            onClick={onCloseAction}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Profile section */}
          <ProfileSection 
            isEmployed={isEmployed}
            size="small"
            className="items-center"
          />
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {/* Contact section */}
          <ContactSection
            contactInfoList={contactInfoList}
            layout="vertical"
            showHeader={true}
          />
        </div>
      </div>
    </div>
  );
}
