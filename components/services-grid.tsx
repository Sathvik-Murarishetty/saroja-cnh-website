import { HoverEffect } from "./ui/card-hover-effect";

export function ServicesGrid() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Honesty & Transparency",
        description:
            "We believe in open and fair business practices, fostering trust with clients and partners.",
        link: "#",
    },
    {
        title: "Commitment & Dedication",
        description:
            "We go above and beyond to ensure our services consistently deliver excellence.",
        link: "#",
    },
    {
        title: "Innovation & Improvement",
        description:
            "We continuously adapt to new trends and refine our offerings to stay ahead.",
        link: "#",
    },
    {
        title: "Responsibility & Accountability",
        description:
            "We take full responsibility for our actions and ensure reliability in every service.",
        link: "#",
    },
    {
        title: "Customer-Centric Approach",
        description:
            "Our customers are at the heart of everything we do, ensuring long-term satisfaction.",
        link: "#",
    },
    {
        title: "Sustainability & Quality Focus",
        description:
            "We prioritize sustainable practices and uncompromising quality in all our services.",
        link: "#",
    },
];
