"use client";

import { Header } from '@/components/header'
import { Employees } from '@/components/employee';
import IndiaMap from '@/components/ui/indiamap';
import Image from "next/image";
import CountUp from '@/components/counter';
import { ServicesGrid } from '@/components/services-grid';

export default function AboutPage() {
    return (
        <div>
            <Header />
            <section id="about-content" className="mx-auto max-w-7xl px-6 pt-20">
                <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl text-center mb-10">
                    About Us
                </h2>

                <div className="flex flex-col-reverse lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <IndiaMap />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                        <p className="text-lg leading-relaxed">
                            With over <span className="font-semibold">14 years of excellence</span>,{" "}
                            <span className="font-bold">Saroja Caterers and Hospitality</span> has
                            redefined catering and hospitality with innovation, quality, and trust.
                            Founded by <span className="font-semibold">Satyanarayana Regati</span>{" "}
                            in 2011, we proudly serve{" "}
                            <span className="font-semibold">20,00,000+ meals every month</span>{" "}
                            across corporate, institutional, industrial, and healthcare sectors.
                        </p>
                        <h3 className="text-2xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-2xl md:text-2xl">
                            What our Employees Say About Us
                        </h3>
                        <Employees />
                        <div className="flex justify-center">
                        </div>
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

            <section id="story" className="mx-auto max-w-7xl px-6 py-10 flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">
                <div className="w-full space-y-6">
                    <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
                        Our Story
                    </h2>
                    <p className="text-lg text-[var(--foreground)] leading-relaxed">
                        What started as a vision to revolutionize the catering experience has grown into one of the most trusted names in the industry. Our expertise lies in delivering customized catering solutions with precision, hygiene, and a passion for culinary excellence.
                        <br />
                        <br />
                        Our <span className="font-semibold">Vision</span> is to be the most trusted and preferred catering and hospitality partner, consistently exceeding client expectations through innovation, quality, and operational excellence.
                        <br />
                        <br />
                        Our <span className="font-semibold">Mission</span> is to deliver world-class catering and hospitality solutions by valuing our clients and their customers, fostering long-term partnerships, and ensuring sustainable growth through ethical and quality-driven practices.
                    </p>
                    <div className="flex justify-center">
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="relative w-full h-108">
                        <Image
                            src="/story.png"
                            alt="Hospitality & Hostel Services"
                            fill
                            className="object-contain rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            <section id="values" className="rounded-md flex flex-col antialiased bg-[var(--background)] items-center justify-center relative overflow-hidden py-10">
                        <h1
                            className="text-5xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Our Values
                        </h1>
                        <ServicesGrid />
            </section>

            <section id="choose-us" className="mx-auto max-w-7xl px-6 py-10 flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="relative w-full h-108">
                        <Image
                            src="/choose-us.png"
                            alt="Hospitality & Hostel Services"
                            fill
                            className="object-contain rounded-2xl"
                        />
                    </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
                        Why Choose Us?
                    </h2>
                    <p className="max-w-2xl mb-6 text-[var(--foreground)]">
                        At Saroja Caterers And Hospitality, we are more than just caterers. We are
                        partners in your success. Our commitment to quality, innovation, and
                        customer satisfaction sets us apart.
                    </p>
                    <ul className="space-y-2 mx-10 max-w-md text-left text-[var(--foreground)]">
                        <li>• 14+ Years of Combined Excellence</li>
                        <li>• 20,00,000+ Meals Served Monthly</li>
                        <li>• ISO 22000, HACCP & GMP Certified</li>
                        <li>• Industry-Specific Expertise</li>
                        <li>• 2,000+ Dedicated Employees</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}