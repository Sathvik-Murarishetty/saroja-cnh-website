"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-pictures";

export function Clients() {
    return (
        <div className="rounded-md flex flex-col antialiased bg-[var(--background)] items-center justify-center relative overflow-hidden">
            <h1
                className="text-2xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-serif)" }}
            >
                Our Clients
            </h1>
            <InfiniteMovingCards
                items={clients}
                direction="left"
                speed="normal"
            />
        </div>
    );
}

const clients = [
    { src: "./logo.svg" },
    { src: "./logo.svg" },
    { src: "./logo.svg" },
    { src: "./logo.svg" },
];