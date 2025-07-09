'use client';

import { useCallback } from 'react';

type NavItem = 'about-me' | 'projects' | 'background';

interface MobileBottomNavigationProps {
  activeNav: NavItem | null;
  onNavChangeAction: (nav: NavItem) => void;
}

interface NavItemConfig {
  id: NavItem;
  label: string;
  icon: React.ReactNode;
}

export default function MobileBottomNavigation({ 
  activeNav, 
  onNavChangeAction 
}: MobileBottomNavigationProps) {
  const navItems: NavItemConfig[] = [
    {
      id: 'about-me',
      label: 'About',
      icon: (
        <svg fill="currentColor" height={22} viewBox="0 -960 960 960">
          <path d="M243.92-277.31q54-36.84 112.62-54.77Q415.15-350 480-350t123.46 17.92q58.62 17.93 112.62 54.77 37.3-41 56.61-92.92Q792-422.15 792-480q0-129.67-91.23-220.84-91.23-91.16-221-91.16Q350-792 259-700.84 168-609.67 168-480q0 57.85 19.31 109.77 19.31 51.92 56.61 92.92ZM480.01-418q-55.78 0-94.89-39.1Q346-496.21 346-551.99t39.1-94.89Q424.21-686 479.99-686t94.89 39.1Q614-607.79 614-552.01t-39.1 94.89Q535.79-418 480.01-418Zm.27 302q-75.43 0-141.78-28.27t-116.15-78.08q-49.81-49.8-78.08-116.11-28.27-66.3-28.27-142 0-75.69 28.27-141.54t78.08-115.65q49.8-49.81 116.11-78.08 66.3-28.27 142-28.27 75.69 0 141.54 28.27t115.65 78.08q49.81 49.8 78.08 115.87Q844-555.7 844-480.28q0 75.43-28.27 141.78t-78.08 116.15q-49.8 49.81-115.87 78.08Q555.7-116 480.28-116Zm-.28-52q53.15 0 104.42-18.42 51.27-18.43 93.27-52.73-43-28.16-93.11-43.5Q534.46-298 480-298t-105.27 14.65q-50.81 14.66-92.42 44.2 42 34.3 93.27 52.73Q426.85-168 480-168Zm0-302q33.85 0 57.92-24.08Q562-518.15 562-552t-24.08-57.92Q513.85-634 480-634t-57.92 24.08Q398-585.85 398-552t24.08 57.92Q446.15-470 480-470Zm0-82Zm0 314Z"/>
        </svg>
      )
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: (
        <svg fill="currentColor" height={22} viewBox="0 -960 960 960">
          <path d="M170-180q-29.15 0-49.58-20.42Q100-220.85 100-250v-457.69q0-29.15 21.58-50.73T172.31-780H362q14.46 0 27.81 5.62 13.34 5.61 23.19 15.46L471.92-700h354.62q12.77 0 21.38 8.62 8.62 8.61 8.62 21.38t-8.62 21.38q-8.61 8.62-21.38 8.62H447.38l-80-80H172.31q-5.39 0-8.85 3.46t-3.46 8.85V-240q0-5.39 2.12-4.04 2.11 1.35 5.57 3.27l77.85-259.92q7.23-23.31 26.61-37.46 19.39-14.16 43.08-14.16h514.46q36.77 0 58.35 29.23 21.57 29.23 11.34 63.77l-68.92 229.62q-6.85 22.53-25.65 36.11Q786-180 763.08-180H170Zm60.54-60h531q4.23 0 7.5-2.31 3.27-2.31 4.42-6.54l68.16-227.69q1.92-6.15-1.93-10.96-3.84-4.81-10-4.81H315.23q-4.23 0-7.5 2.31-3.27 2.31-4.42 6.54L230.54-240ZM160-500.08V-720-500.08ZM230.54-240l72.77-243.46q1.15-4.23 1.92-6.54l.77-2.31-1.35 4.81q-1.34 4.81-3.27 10.96l-68.15 227.69q-1.15 4.23-1.92 6.54l-.77 2.31Z"/>
        </svg>
      )
    },
    {
      id: 'background',
      label: 'Background',
      icon: (
        <svg fill="currentColor" height={22} viewBox="0 -960 960 960">
          <path d="M172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z"/>
        </svg>
      )
    }
  ];

  const handleNavChange = useCallback((navItem: NavItem) => {
    onNavChangeAction(navItem);
  }, [onNavChangeAction]);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 w-full z-40 px-[10%] pb-[5%]">
      <div className="relative bg-black/50 backdrop-blur-md border border-white/10 rounded-[20px] shadow-2xl shadow-black/50">
        {/* Navigation Items */}
        <div className="flex justify-around py-1 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavChange(item.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 ease-out transform min-w-[64px] ${
                activeNav === item.id 
                  ? 'text-orange-300 scale-110 -translate-y-1' 
                  : 'text-white/60 hover:text-white/80 hover:bg-white/5 hover:scale-105 scale-100'
              }`}
            >
              <div className={`px-3 rounded-xl transition-all duration-300 ${
                activeNav === item.id 
                  ? 'bg-gradient-to-br from-orange-300/20 to-orange-400/20 shadow-lg shadow-orange-300/20' 
                  : 'hover:bg-white/5'
              }`}>
                <div className={`transition-all duration-300 ${
                  activeNav === item.id ? 'drop-shadow-lg' : ''
                }`}>
                  {item.icon}
                </div>
              </div>
              {activeNav === item.id && (
                <span className="text-xs mt-2 animate-fadeIn font-medium tracking-wide">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
