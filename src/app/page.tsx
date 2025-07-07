'use client';

import { useState, useEffect } from 'react';
import Card from "@/components/Card";
import NavButton from "@/components/NavButton";
import AboutMe from "./ui/screens/AboutMe";
import Projects from "./ui/screens/Projects";
import Experiences from "./ui/screens/Experiences";

type NavItem = 'About me' | 'Projects' | 'Experiences';

export default function MainContent() {
  const [activeNav, setActiveNav] = useState<NavItem | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load saved navigation state from session storage
  useEffect(() => {
    const session = sessionStorage.getItem('activeNav')
    const savedNav = session as NavItem;
    if (session == '') {
      setActiveNav('About me'); // Default to 'About me' if no nav is saved
      return;
    }

    if (savedNav && ['About me', 'Projects', 'Experiences'].includes(savedNav)) {
      setActiveNav(savedNav);
    }
  }, []);

  // Save navigation state to session storage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('activeNav', activeNav || '');
  }, [activeNav]);

  const handleNavChange = (newNav: NavItem) => {
    if (newNav === activeNav) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveNav(newNav);
      setIsTransitioning(false);
    }, 150);
  };

  const renderActiveView = () => {
    switch (activeNav) {
      case 'About me':
        return <AboutMe />;
      case 'Projects':
        return <Projects />;
      case 'Experiences':
        return <Experiences />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="py-4 px-7 max-w-fit rounded-">
        <div className="flex flex-row gap-5">
          <NavButton 
            isActive={activeNav === 'About me'}
            onClick={() => handleNavChange('About me')}
          >
            About me
          </NavButton>
          <NavButton 
            isActive={activeNav === 'Projects'}
            onClick={() => handleNavChange('Projects')}
          >
            Projects
          </NavButton>
          <NavButton 
            isActive={activeNav === 'Experiences'}
            onClick={() => handleNavChange('Experiences')}
          >
            Experiences
          </NavButton>
        </div>
      </Card>
      
      <div className={`transition-all duration-300 ease-in-out ${
        isTransitioning 
          ? 'opacity-0 transform translate-y-2' 
          : 'opacity-100 transform translate-y-0'
      }`}>
        {renderActiveView()}
      </div>
    </div>
  );
}
