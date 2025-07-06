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
        <div className={cn("flex flex-col items-center text-center gap-6 w-40", className)}>
            <Card className="rounded-xl overflow-hidden bg-black/15 border border-white/5 relative p-10 w-full flex items-center justify-center">
                <Image
                    src={src}
                    alt={title}
                    width={width}
                    height={height}
                    className="w-18 h-18 object-contain"
                />
            </Card>

            <span className="text-md text-white/80 font-semibold text-center mb-2 w-[90%]">{title}</span>
        </div>
    );
}