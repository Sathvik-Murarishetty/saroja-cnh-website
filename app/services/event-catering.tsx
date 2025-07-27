"use client";

import { Carousel } from "@/components/ui/carousel";

export function EventCatering() {
    const slideData = [
        {
            title: "Mystic Mountains",
            button: "Explore Component",
            src: "./catering.webp",
        },
        {
            title: "Mystic Mountains",
            button: "Explore Component",
            src: "./catering.webp",
        },
        {
            title: "Mystic Mountains",
            button: "Explore Component",
            src: "./catering.webp",
        },
        {
            title: "Mystic Mountains",
            button: "Explore Component",
            src: "./catering.webp",
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-15 scale-80 origin-top">
            <Carousel slides={slideData} />
        </div>
    );
}
