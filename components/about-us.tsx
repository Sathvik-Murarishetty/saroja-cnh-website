"use client";

import CountUp from "./counter";
import { Employees } from "./employee";
import IndiaMap from "./ui/indiamap";
import Link from "next/link";

export default function AboutUs() {


    return (
        <div>
            <section id="about" className="mx-auto max-w-7xl px-6 py-20 flex flex-col-reverse lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">

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
                        <Link href="/about">
                        <button
                            className="group/btn relative block h-10 w-auto px-5 rounded-md bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                            type="submit"
                        >
                            Know More About Us &rarr;
                            <BottomGradient />
                        </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="metrics" className="font-semibold leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl mx-auto max-w-7xl px-6 py-10 flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                    <CountUp
                        from={0}
                        to={800}
                        separator=","
                        direction="up"
                        duration={1}
                        suffix="+"
                        className="count-up-text text-[var(--accent-orange)]"
                    />
                    <p className="text-lg text-[var(--foreground)] leading-relaxed">Trained Professionals</p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                    <CountUp
                        from={0}
                        to={14}
                        separator=","
                        direction="up"
                        duration={1}
                        suffix="+"
                        className="count-up-text text-[var(--accent-orange)]"
                    />
                    <p className="text-lg text-[var(--foreground)] leading-relaxed">Years of Excellence</p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                    <CountUp
                        from={0}
                        to={50}
                        separator=","
                        direction="up"
                        duration={1}
                        suffix="+"
                        className="count-up-text text-[var(--accent-orange)]"
                    />
                    <p className="text-lg text-[var(--foreground)] leading-relaxed">Clients Served</p>
                </div><div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                    <CountUp
                        from={1999000}
                        to={2000000}
                        separator=","
                        direction="up"
                        duration={1}
                        suffix="+"
                        className="count-up-text text-[var(--accent-orange)]"
                    />
                    <p className="text-lg text-[var(--foreground)] leading-relaxed">Meals Served Every Month</p>
                </div>
            </section>
        </div>
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