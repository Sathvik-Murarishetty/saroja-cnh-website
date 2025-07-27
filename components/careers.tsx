"use client";

import Image from "next/image";

export default function Careers() {


    return (
        <section id="careers" className="mx-auto max-w-7xl px-6 py-20 flex flex-col-reverse lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">

            <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
                    Careers at Saroja Caterers
                </h2>
                <p className="text-lg text-[var(--foreground)] leading-relaxed">
                    We’re always on the lookout for passionate, committed individuals who want to grow in the hospitality and food services industry.
                    <br />
                    We believe in connecting early with talented people who align with our values of quality, care, and consistency.
                </p>
                <div className="flex justify-center">
                    <button
                        className="group/btn relative block h-10 w-auto px-5 rounded-md bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                        type="submit"
                    >
                        Explore Careers &rarr;
                        <BottomGradient />
                    </button>
                </div>
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

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-orange)] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};