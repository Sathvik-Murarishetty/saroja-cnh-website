"use client";

import IndiaMap from "./ui/indiamap";

export default function AboutUs() {


    return (
        <section className="mx-auto max-w-7xl px-6 py-16 flex flex-col-reverse lg:flex-row gap-8 items-start">
            {/* Left: India Map */}
            <div className="w-full lg:w-1/2 origin-left">
                <IndiaMap />
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
                    About Us
                </h2>
                <p className="text-lg text-[var(--foreground)] leading-relaxed">
                    At Saroja Catering, we combine operational excellence with traditional
                    values. Spanning across multiple Indian states, our kitchens prepare over
                    <strong> 60,000 meals daily</strong>, backed by a strong workforce and
                    culinary heritage. This interactive map highlights our expanding footprint
                    and commitment to nourishment and dignity.
                </p>
            </div>
        </section>
    );
}