"use client";

import Image from "next/image";

export default function Careers() {


    return (
        <section className="mx-auto max-w-7xl px-6 py-20 flex flex-col-reverse lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">

            <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
                    Careers at Saroja Caterers
                </h2>
                <p className="text-lg text-[var(--foreground)] leading-relaxed">
                    We’re always on the lookout for passionate, committed individuals who want to grow in the hospitality and food services industry.
                    <br /><br />
                    While there are no current openings, we believe in connecting early with talented people who align with our values of quality, care, and consistency.
                </p>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full h-96">
                    <Image
                        src="/careers.png"
                        alt="Hospitality & Hostel Services"
                        fill
                        className="object-contain rounded-2xl"
                    />
                </div>
            </div>

        </section>

    );
}