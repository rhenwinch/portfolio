'use client';

import Image from 'next/image';

interface MobileTopBarProps {
  onContactDrawerOpenAction: () => void;
}

export default function MobileTopBar({ onContactDrawerOpenAction }: MobileTopBarProps) {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center px-4 py-3">
        <button
          onClick={onContactDrawerOpenAction}
          className="flex items-center gap-3 hover:bg-white/10 hover:scale-105 rounded-lg p-2 transition-all duration-200 ease-out active:scale-95"
        >
          <Image
            src="/profile-picture.jpg"
            alt="Profile picture"
            height={40}
            width={40}
            className="rounded-full aspect-square object-cover ring-2 ring-transparent hover:ring-orange-300/50 transition-all duration-200"
          />
          <div className="text-white font-semibold text-lg">My Portfolio</div>
        </button>
      </div>
    </div>
  );
}
