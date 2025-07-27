"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";

export default function HeroText({ className }: { className?: string }) {
    const words = [
        "Welcome",         // English
        "స్వాగతం",         // Telugu
        "स्वागत",           // Hindi
        "ಸ್ವಾಗತ",           // Kannada
    ];

    return (
        <div>
            <section
                className={cn(
                    "mx-auto flex max-w-7xl flex-col-reverse items-center justify-between px-6 py-16 lg:flex-row lg:py-32",
                    className
                )}
            >
                {/* Text Section */}
                <div className="w-full text-center lg:w-1/2 lg:text-left">
                    <h1
                        className="text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Dignified Dining.
                        <br />
                        Delivered Daily.
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-[var(--foreground)]">
                        With over <strong>60,000 meals</strong> served daily, we combine
                        large-scale operations with the refinement of fine hospitality.
                        From government hostels and corporate kitchens to high-profile events,
                        we deliver more than just food; we deliver trust, taste, and tradition.
                    </p>
                </div>

                {/* Image Section */}
                <div className="mb-12 w-full lg:mb-0 lg:w-1/2 flex flex-col items-center justify-center">
                    <Image
                        src="/welcome.png"
                        alt="Saroja Catering"
                        width={400}
                        height={400}
                        className="h-auto rounded-full object-cover"
                        priority
                    />

                    {/* FlipWords below image */}
                    <div className="mt-4">
                        <FlipWords words={words} />
                    </div>
                </div>
            </section>
        </div>
    );
}