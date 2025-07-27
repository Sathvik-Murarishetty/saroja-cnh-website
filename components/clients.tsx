"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-pictures";

export function Clients() {
    return (
        <div className="rounded-md flex flex-col antialiased bg-[var(--background)] items-center justify-center relative overflow-hidden">
            <h1
                className="text-5xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
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
    { src: "./client_1.png" },
    { src: "./client_2.png" },
    { src: "./client_3.png" },
    { src: "./client_4.png" },
    { src: "./client_5.png" },
    { src: "./client_6.png" },
    { src: "./client_7.png" },
    { src: "./client_8.png" },
    { src: "./client_9.png" },
    { src: "./client_10.png" },
    { src: "./client_11.png" },
    { src: "./client_12.png" },
];