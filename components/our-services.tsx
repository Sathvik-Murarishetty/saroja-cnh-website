"use client";
import { TabsServices } from "./services";

export function OurServices() {
    return (
        <div className="rounded-md flex flex-col antialiased bg-[var(--background)] items-center justify-center relative overflow-hidden py-16">
            <h1
                className="text-5xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-serif)" }}
            >
                Our Services
            </h1>
            <TabsServices />
        </div>
    );
}