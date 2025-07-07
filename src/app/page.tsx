'use client';

import { useState, useEffect, useCallback } from 'react';
import Card from "@/components/Card";
import NavButton from "@/components/NavButton";
import AboutMe from "./ui/screens/AboutMe";
import Projects from "./ui/screens/Projects";
import Background from "./ui/screens/Background";
import Image from 'next/image';
import ContactInfo, { ContactInfoProps } from '@/components/ContactInfo';

type NavItem = 'about-me' | 'projects' | 'background';

const contactInfoList: ContactInfoProps[] = [
  {
    iconAlt: "Email",
    iconSrc: "/contact/contact-email.svg",
    text: "rhenaranes@gmail.com",
    href: "mailto:rhenaranes@gmail.com"
  },
  {
    iconAlt: "LinkedIn",
    iconSrc: "/contact/contact-linkedin.svg",
    text: "rc-aranes",
    href: "https://www.linkedin.com/in/rc-aranes/"
  },
  {
    iconAlt: "Phone",
    iconSrc: "/contact/contact-phone.svg",
    text: "+639765223284",
    href: "tel:+639765223284"
  },
  {
    iconAlt: "GitHub",
    iconSrc: "/contact/contact-github.svg",
    text: "rhenwinch",
    href: "https://github.com/rhenwinch"
  },
  {
    iconAlt: "Location",
    iconSrc: "/contact/contact-location.svg",
    text: "QC, Philippines",
    href: "https://maps.google.com/?q=Quezon+City,+Philippines"
  },
  {
    iconAlt: "Location",
    iconSrc: "/contact/contact-resume.svg",
    text: "My Resume",
    href: "#"
  }
];


export default function MainContent() {
  const [activeNav, setActiveNav] = useState<NavItem | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const isEmployed = false;

  // Function to get current section from URL hash
  const getCurrentSection = (): NavItem => {
    if (typeof window === 'undefined') return 'about-me';
    
    const hash = window.location.hash.slice(1); // Remove the #
    if (hash === 'projects' || hash === 'background' || hash === 'about-me') {
      return hash as NavItem;
    }
    return 'about-me'; // Default section
  };

  const handleNavChange = useCallback((newNav: NavItem) => {
    if (newNav === activeNav) return;

    setIsTransitioning(true);
    
    // Update URL hash
    window.history.pushState(null, '', `#${newNav}`);
    
    setTimeout(() => {
      setActiveNav(newNav);
      setIsTransitioning(false);
    }, 150);
  }, [activeNav]);

  // Load navigation state from URL hash
  useEffect(() => {
    const currentSection = getCurrentSection();
    setActiveNav(currentSection);

    // Listen for hash changes (browser back/forward)
    const handleHashChange = () => {
      const newSection = getCurrentSection();
      handleNavChange(newSection);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleNavChange]);

  const renderActiveView = () => {
    switch (activeNav) {
      case 'about-me':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'background':
        return <Background />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="flex flex-col justify-center w-full max-w-[65%] mx-auto gap-10 mt-[5vh]">
      <div className="flex flex-col md:flex-row h-[32vh] items-center gap-8">
        <Card className="h-[100%]">
          <div className="w-65 h-[100%] flex flex-col justify-center items-center gap-10 m-auto">
            <div className="relative">
              <Image
                src="/profile-picture.jpg"
                alt="Profile picture"
                height={135}
                width={135}
                className="rounded-full aspect-square object-cover"
              />
              <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 ${
                isEmployed ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-rose-500'
              } text-white text-xs font-semibold px-3 py-1 rounded-lg border border-white/20 shadow-lg backdrop-blur-sm whitespace-nowrap transition-all duration-300 hover:scale-105`}>
                <span className="tracking-wide">
                  {isEmployed ? 'EMPLOYED 🚀✨' : 'UNEMPLOYED 😭💸'}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2.5">
              <div className="text-white md:text-4xl font-bold">Rhen Arañes</div>
              <div><span className="text-white/80 text-base font-medium">Software Developer | </span><span className="text-orange-300 text-base font-medium">Android</span></div>
            </div>
          </div>
        </Card>
        <Card className="h-[100%] flex-1">
          <div className="grid grid-cols-2 p-5 gap-10 h-[100%] items-center justify-around">
            {
              contactInfoList.map((contact, index) => (
                <ContactInfo
                  key={index}
                  iconAlt={contact.iconAlt}
                  iconSrc={contact.iconSrc}
                  text={contact.text}
                  href={contact.href}
                />
              ))
            }
          </div>
        </Card>
      </div>

      <div className="h-px bg-white/40"></div>

      <div className="flex flex-col gap-6">
        <Card className="py-4 px-7 max-w-fit rounded-">
          <div className="flex flex-row gap-5">
            <NavButton
              isActive={activeNav === 'about-me'}
              onClick={() => handleNavChange('about-me')}
            >
              About me
            </NavButton>
            <NavButton
              isActive={activeNav === 'projects'}
              onClick={() => handleNavChange('projects')}
            >
              Projects
            </NavButton>
            <NavButton
              isActive={activeNav === 'background'}
              onClick={() => handleNavChange('background')}
            >
              Background
            </NavButton>
          </div>
        </Card>

        <div className={`transition-all duration-300 ease-in-out ${isTransitioning
          ? 'opacity-0 transform translate-y-2'
          : 'opacity-100 transform translate-y-0'
          }`}>
          {renderActiveView()}
        </div>
      </div>
    </div>
  );
}
