'use client'

export default function NavButton({
  children,
  isActive = false,
  className = "",
  onClick
}: Readonly<{
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}>) {
  return (
    <button 
      className={`rounded-[9px] min-w-fit min-h-fit py-2 px-5 transition-all duration-300 ease-out text-[16px] hover:bg-white/10 ${className} ${isActive ? 'bg-white/15 text-orange-300 shadow-md font-semibold' : 'text-white/70'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}