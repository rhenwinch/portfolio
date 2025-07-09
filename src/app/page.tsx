'use client';

import { useState, useEffect, useCallback } from 'react';
import AboutMe from "./ui/screens/AboutMe";
import Projects from "./ui/screens/Projects";
import Background from "./ui/screens/Background";
import { ContactInfoProps } from '@/components/ContactInfo';
import MobileTopBar from './ui/components/MobileTopBar';
import ContactDrawer from './ui/components/ContactDrawer';
import MobileBottomNavigation from './ui/components/MobileBottomNavigation';
import DesktopHeader from './ui/components/DesktopHeader';
import NavigationTabs from './ui/components/NavigationTabs';

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
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);

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
    <>
      {/* Mobile TopBar */}
      <MobileTopBar onContactDrawerOpenAction={() => setIsContactDrawerOpen(true)} />

      {/* Contact Drawer Modal */}
      <ContactDrawer
        isOpen={isContactDrawerOpen}
        onCloseAction={() => setIsContactDrawerOpen(false)}
        isEmployed={isEmployed}
        contactInfoList={contactInfoList}
      />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNavigation 
        activeNav={activeNav}
        onNavChangeAction={handleNavChange}
      />

      {/* Main Content Container */}
      <div className="w-full px-0 md:px-0 md:max-w-[80%] lg:max-w-[65%] md:mx-auto pt-20 md:pt-0 pb-32 md:pb-0 md:mt-[5vh]">
        {/* Desktop Header row */}
        <DesktopHeader 
          isEmployed={isEmployed}
          contactInfoList={contactInfoList}
        />

        {/* Desktop Nav bar */}
        <NavigationTabs 
          activeNav={activeNav}
          onNavChangeAction={handleNavChange}
        />

        {/* Navigation screen */}
        <div className={`w-full px-4 md:px-0 transition-all duration-300 ease-in-out ${isTransitioning
          ? 'opacity-0 transform translate-y-2'
          : 'opacity-100 transform translate-y-0'
          }`}>
          {renderActiveView()}
        </div>
      </div>
    </>
  );
}
