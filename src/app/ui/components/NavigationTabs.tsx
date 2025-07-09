'use client';

import Card from '@/components/Card';
import NavButton from '@/components/NavButton';

type NavItem = 'about-me' | 'projects' | 'background';

interface NavigationTabsProps {
  activeNav: NavItem | null;
  onNavChangeAction: (nav: NavItem) => void;
  className?: string;
}

export default function NavigationTabs({ 
  activeNav, 
  onNavChangeAction, 
  className = '' 
}: NavigationTabsProps) {
  return (
    <div className={`hidden md:block w-full mb-8 ${className}`}>
      <Card className="py-3 md:py-4 px-5 md:px-7 max-w-fit mx-auto">
        <div className="flex flex-row gap-3 md:gap-5">
          <NavButton
            isActive={activeNav === 'about-me'}
            onClick={() => onNavChangeAction('about-me')}
          >
            About me
          </NavButton>
          <NavButton
            isActive={activeNav === 'projects'}
            onClick={() => onNavChangeAction('projects')}
          >
            Projects
          </NavButton>
          <NavButton
            isActive={activeNav === 'background'}
            onClick={() => onNavChangeAction('background')}
          >
            Background
          </NavButton>
        </div>
      </Card>
    </div>
  );
}
