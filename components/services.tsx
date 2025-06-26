"use client";

import { Tabs } from "./ui/tabs";

export function TabsServices() {
    const tabs = [
        {
            title: "Event Catering",
            value: "event-catering",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Event Catering</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Government Hostels",
            value: "government-hostels",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Government Hostels</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Corporate Kitchens",
            value: "corporate-kitchens",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Corporate Kitchens</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Institutional Canteens",
            value: "institutional-canteens",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Institutional Canteens</p>
                    <DummyContent />
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
            <Tabs tabs={tabs} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <img
            src="/catering.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
