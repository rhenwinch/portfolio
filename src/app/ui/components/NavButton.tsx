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
      className={`rounded-[9px] min-w-fit min-h-fit py-2 px-3 md:px-5 transition-all duration-300 ease-out text-sm md:text-[16px] hover:bg-white/10 hover:scale-105 active:scale-95 transform ${className} ${
        isActive 
          ? 'bg-gradient-to-r from-orange-300/20 to-orange-400/20 text-orange-300 shadow-lg font-semibold border border-orange-300/30 animate-pulse' 
          : 'text-white/70 hover:text-white/90'
      }`}
      onClick={onClick}
    >
      <span className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'scale-100'}`}>
        {children}
      </span>
    </button>
  )
}