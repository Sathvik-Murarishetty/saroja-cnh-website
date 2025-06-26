"use client";

import { Employees } from "./employee";
import IndiaMap from "./ui/indiamap";
import { NavbarButton } from "./ui/resizable-navbar";

export default function AboutUs() {


    return (
        <section className="mx-auto max-w-7xl px-6 py-16 flex flex-col-reverse lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">

            <div className="w-full lg:w-1/2 flex justify-center">
                <IndiaMap />
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
                    About Us
                </h2>
                <p className="text-lg text-[var(--foreground)] leading-relaxed">
                    At Saroja Catering & Hospitality, we combine operational excellence with traditional
                    values. Spanning across multiple Indian states, our kitchens prepare over
                    <strong> 60,000 meals daily</strong>, backed by a strong workforce and
                    culinary heritage.
                </p>
                <h2 className="text-2xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-2xl md:text-2xl">
                    What our Employees Say About Us
                </h2>
                <Employees />
                <div className="flex justify-center">
                    <NavbarButton variant="primary">Know More About Us</NavbarButton>
                </div>
            </div>
        </section>

    );
}