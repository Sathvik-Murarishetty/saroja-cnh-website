"use client";

import { Tabs } from "./ui/tabs";
import Image from "next/image";
import Link from "next/link";


export function TabsServices() {
    const tabs = [
        {
            title: "Event Catering",
            value: "event-catering",
            content: (
                <div className="flex flex-col md:flex-row w-full h-full rounded-2xl overflow-hidden text-[var(--foreground)] bg-white border-2 border-[var(--accent-orange)]">
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                        <Image
                            src="/catering.webp"
                            alt="Event Catering"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between space-y-4">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold mb-2">Event Catering</h2><br />
                            <p className="text-base md:text-lg font-medium mb-4">
                                Perfect for Weddings, Functions, College Events, Ceremonies, and more. Our team handles everything from planning menus to live counters and hygienic service. Whether it’s a 50-person gathering or a 5,000-guest event, we provide end-to-end catering with personalized attention.
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm md:text-base">Multiple cuisines</li>
                                <li className="text-sm md:text-base">Customizable menus</li>
                                <li className="text-sm md:text-base">Trained staff & on-site setup</li>
                            </ul>
                        </div>
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
                </div>
            ),
        },
        {
            title: "Corporate Cafeterias",
            value: "corporate-cafeterias",
            content: (
                <div className="flex flex-col md:flex-row w-full h-full rounded-2xl overflow-hidden text-[var(--foreground)] bg-white border-2 border-[var(--accent-orange)]">
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                        <Image
                            src="/catering.webp"
                            alt="Corporate Cafeterias"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between space-y-4">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold mb-2">Corporate Cafeterias</h2><br />
                            <p className="text-base md:text-lg font-medium mb-4">
                                Daily Meal Solutions for Tech Parks, MNCs, Startups, and Office Spaces. We provide end-to-end cafeteria services including breakfast, lunch, snacks, and dinner for corporate employees. With rotating menus, quality control, and timely delivery, your team will always eat fresh and healthy.
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm md:text-base">On-site or central kitchen options</li>
                                <li className="text-sm md:text-base">Monthly contract-based service</li>
                                <li className="text-sm md:text-base">FSSAI & hygiene certified</li>
                            </ul>
                        </div>
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
                </div>
            ),
        },
        {
            title: "Government Catering Contracts",
            value: "government-catering-contracts",
            content: (
                <div className="flex flex-col md:flex-row w-full h-full rounded-2xl overflow-hidden text-[var(--foreground)] bg-white border-2 border-[var(--accent-orange)]">
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                        <Image
                            src="/catering.webp"
                            alt="Government Catering Contracts"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between space-y-4">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold mb-2">Government Catering Contracts</h2><br />
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
                    </div>
                </div>
            ),
        },
        {
            title: "Government Event Catering",
            value: "government-event-catering",
            content: (
                <div className="flex flex-col md:flex-row w-full h-full rounded-2xl overflow-hidden text-[var(--foreground)] bg-white border-2 border-[var(--accent-orange)]">
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                        <Image
                            src="/catering.webp"
                            alt="Government Event Catering"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between space-y-4">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold mb-2">Government Event Catering</h2><br />
                            <p className="text-base md:text-lg font-medium mb-4">
                                We provide food services for official state and central government events, including summits, award functions, public campaigns, and inauguration ceremonies.
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm md:text-base">VIP setup & staff</li>
                                <li className="text-sm md:text-base">Live kitchen & tandoor counters</li>
                                <li className="text-sm md:text-base">Quick and compliant food transport</li>
                            </ul>
                        </div>
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
                </div>
            ),
        },
        {
            title: "Hospitality & Hostel Services",
            value: "hospitality-hostel-services",
            content: (
                <div className="flex flex-col md:flex-row w-full h-full rounded-2xl overflow-hidden text-[var(--foreground)] bg-white border-2 border-[var(--accent-orange)]">
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                        <Image
                            src="/catering.webp"
                            alt="Hospitality & Hostel Services"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between space-y-4">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold mb-2">Hospitality & Hostel Services</h2><br />
                            <p className="text-base md:text-lg font-medium mb-4">
                                Beyond food, we also provide hostel operations, room maintenance, utility management, and cleaning staff for large residential institutions, colleges, and training centers.
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm md:text-base">Full-service facility management</li>
                                <li className="text-sm md:text-base">24/7 support & supervision</li>
                                <li className="text-sm md:text-base">Cleaners, wardens, supervisors available on contract</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="h-[40rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
            <Tabs tabs={tabs} />
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