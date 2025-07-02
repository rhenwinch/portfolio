'use client';

import Card from "@/components/Card";
import Image from "next/image";

export default function SkillCard({
    title,
    src,
    width = 100,
    height = 100,
    className = "",
}: Readonly<{
    title: string;
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}>) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <Card className={`p-6 max-w-sm ${className}`}>
                <Image
                    src={src}
                    alt={title}
                    width={width}
                    height={height}
                    className="mb-4"
                />
            </Card>

            <span className="text-lg font-semibold text-orange-300 mb-2">{title}</span>
        </div>
    );
}