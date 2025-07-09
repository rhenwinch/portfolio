'use client';

interface EmploymentStatusProps {
  isEmployed: boolean;
  className?: string;
}

export default function EmploymentStatus({ isEmployed, className = '' }: EmploymentStatusProps) {
  return (
    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${
      isEmployed 
        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
        : 'bg-gradient-to-r from-red-500 to-rose-500'
    } text-white text-xs font-semibold px-3 py-1 rounded-lg border border-white/20 shadow-lg backdrop-blur-sm whitespace-nowrap transition-all duration-300 hover:scale-105 ${className}`}>
      <span className="tracking-wide">
        {isEmployed ? 'EMPLOYED 🚀✨' : 'UNEMPLOYED 😭💸'}
      </span>
    </div>
  );
}
