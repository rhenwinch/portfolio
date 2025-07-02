'use client'

import { cn } from "@/lib/utils"

export default function Header({
    title,
    className = "",
    hasDivider = true
}: Readonly<{
    title: string;
    className?: string;
    hasDivider?: boolean;
}>) {
    return (
      <h1 className={cn("text-2xl font-bold mb-4", className)}>
        {title}
        {hasDivider ? <span className={`block w-16 h-2 rounded-full bg-orange-300 mt-2 ${className}`}></span> : null}
      </h1>
    );
}