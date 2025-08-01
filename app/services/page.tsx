"use client";

import { Header } from '@/components/header'
import { EventCatering } from './event-catering';
import Link from "next/link";

export default function AboutPage() {
    return (
        <div>
            <Header />
            <section id="about-content" className="mx-auto max-w-7xl px-6 pt-25">
                <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl text-center mb-10">
                    Our Services
                </h2>
            </section>

            <section id="event-catering" className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <EventCatering />
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-5xl">
                        Event Catering
                    </h2>
                    <div>
                        <p className="text-base md:text-lg font-medium mb-4">
                            Perfect for Weddings, Functions, College Events, Ceremonies, and more. Our team handles everything from planning menus to live counters and hygienic service. Whether it’s a 50-person gathering or a 5,000-guest event, we provide end-to-end catering with personalized attention.
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li className="text-sm md:text-base">Multiple cuisines</li>
                            <li className="text-sm md:text-base">Customizable menus</li>
                            <li className="text-sm md:text-base">Trained staff & on-site setup</li>
                        </ul>
                    </div>
                    <br />
                    <div className="flex justify-center">
                        <Link href="/contact">
                            <button
                                className="group/btn relative block h-10 w-auto px-5 rounded-md bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                                type="submit"
                            >
                                📞 Book Event Catering &rarr;
                                <BottomGradient />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="corporate-cafeterias" className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">

                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-5xl">
                        Corporate Cafeterias
                    </h2>
                    <div>
                        <p className="text-base md:text-lg font-medium mb-4">
                            Daily Meal Solutions for Tech Parks, MNCs, Startups, and Office Spaces. We provide end-to-end cafeteria services including breakfast, lunch, snacks, and dinner for corporate employees. With rotating menus, quality control, and timely delivery, your team will always eat fresh and healthy.
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li className="text-sm md:text-base">On-site or central kitchen options</li>
                            <li className="text-sm md:text-base">Monthly contract-based service</li>
                            <li className="text-sm md:text-base">FSSAI & hygiene certified</li>
                        </ul>
                    </div>
                    <br />
                    <div className="flex justify-center">
                        <Link href="/contact">
                            <button
                                className="group/btn relative block h-10 w-auto px-5 rounded-md bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                                type="submit"
                            >
                                📞 Request Cafeteria Service &rarr;
                                <BottomGradient />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <EventCatering />
                </div>

            </section>

            <section id="government-catering-contracts" className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <EventCatering />
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-5xl">
                        Government Catering Contracts
                    </h2>
                    <div>
                        <p className="text-base md:text-lg font-medium mb-4">
                            We specialize in bulk catering for government hostels, training centers, hospitals, and institutions. Our team is equipped to manage thousands of meals per day with nutritional balance and full documentation support for audits and inspections.
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li className="text-sm md:text-base">Daily meals for police academies, social welfare hostels</li>
                            <li className="text-sm md:text-base">Medical diet plans for hospitals</li>
                            <li className="text-sm md:text-base">Experience in handling 5,000+ meals/day</li>
                            <li className="text-sm md:text-base">ESI/PF-compliant staff, ISO & FSSAI certified</li>
                        </ul>
                    </div>
                    <br />
                    <div className="flex justify-center">
                        <Link href="/contact">
                            <button
                                className="group/btn relative block h-10 w-auto px-5 rounded-md bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                                type="submit"
                            >
                                📞 Contact Us &rarr;
                                <BottomGradient />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="government-event-catering" className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">

                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-5xl">
                        Government Event Catering
                    </h2>
                    <div>
                        <p className="text-base md:text-lg font-medium mb-4">
                            We provide food services for official state and central government events, including summits, award functions, public campaigns, and inauguration ceremonies.
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li className="text-sm md:text-base">VIP setup & staff</li>
                            <li className="text-sm md:text-base">Live kitchen & tandoor counters</li>
                            <li className="text-sm md:text-base">Quick and compliant food transport</li>
                        </ul>
                    </div>
                    <br />
                    <div className="flex justify-center">
                        <Link href="/contact">
                            <button
                                className="group/btn relative block h-10 w-auto px-5 rounded-md bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                                type="submit"
                            >
                                📞 Book Event Catering &rarr;
                                <BottomGradient />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <EventCatering />
                </div>
            </section>

            <section id="hospitality-hostel-services" className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <EventCatering />
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-5xl">
                        Hospitality & Hostel Services
                    </h2>
                    <div>
                        <p className="text-base md:text-lg font-medium mb-4">
                            Beyond food, we also provide hostel operations, room maintenance, utility management, and cleaning staff for large residential institutions, colleges, and training centers.
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li className="text-sm md:text-base">Full-service facility management</li>
                            <li className="text-sm md:text-base">24/7 support & supervision</li>
                            <li className="text-sm md:text-base">Cleaners, wardens, supervisors available on contract</li>
                        </ul>
                    </div>
                    <br />
                    <div className="flex justify-center">
                        <Link href="/contact">
                            <button
                                className="group/btn relative block h-10 w-auto px-5 rounded-md bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                                type="submit"
                            >
                                📞 Contact Us &rarr;
                                <BottomGradient />
                            </button>
                        </Link>
                    </div>
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