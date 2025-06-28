'use client'

export default function Card({
  children,
  className = ""
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={`bg-white/5 rounded-[20px] min-w-fit min-h-fit shadow-md p-6 ${className}`}>
      {children}
    </div>
  )
}