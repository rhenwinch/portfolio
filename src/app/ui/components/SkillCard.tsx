'use client';

import Card from "@/components/Card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SkillCard({
    title,
    src,
    width = 80,
    height = 80,
    className = "",
}: Readonly<{
    title: string;
    src: string;
    width?: number;
    height?: number;
    className?: string;
}>) {
    return (
        <div className={cn("flex flex-col items-center text-center gap-4 md:gap-6 w-32 sm:w-36 md:w-40 transition-all duration-300 ease-in-out", className)}>
            <Card className="rounded-xl overflow-hidden bg-black/15 border border-white/5 relative p-6 sm:p-8 md:p-10 w-full aspect-square flex items-center justify-center transition-all duration-300 ease-in-out">
                <Image
                    src={src}
                    alt={title}
                    width={width}
                    height={height}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 object-contain transition-all duration-300 ease-in-out"
                />
            </Card>

            <span className="text-sm md:text-md text-white/80 font-semibold text-center mb-2 w-[90%] transition-all duration-300 ease-in-out">{title}</span>
        </div>
    );
}