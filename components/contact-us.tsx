"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export function ContactUs() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
            <section className="mx-auto max-w-7xl px-6 py-20 flex flex-col-reverse lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">
            
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
                                Contact Us
                            </h2>
                            <p className="text-lg text-[var(--foreground)] leading-relaxed">
                                Whether you&apos;re looking for catering services or have a question about our offerings, we’re here to help. Reach out and we’ll get back to you shortly.
                            </p>

                            <div className="text-[var(--foreground)] space-y-2 text-lg">
                                <p><strong>📍 Address:</strong> Saroja Caterers, Hyderabad, India</p>
                                <p><strong>📞 Phone:</strong> +91-9876543210</p>
                                <p><strong>📧 Email:</strong> hello@sarojacaterers.in</p>
                            </div>
                        </div>
            
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <form className="my-8" onSubmit={handleSubmit}>
                                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                    <LabelInputContainer>
                                        <Label htmlFor="firstname">First name</Label>
                                        <Input id="firstname" placeholder="Tyler" type="text" />
                                    </LabelInputContainer>
                                    <LabelInputContainer>
                                        <Label htmlFor="lastname">Last name</Label>
                                        <Input id="lastname" placeholder="Durden" type="text" />
                                    </LabelInputContainer>
                                </div>
                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                                </LabelInputContainer>

                                <button
                                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                                    type="submit"
                                >
                                    Contact Us &rarr;
                                    <BottomGradient />
                                </button>

                                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

                            </form>
                        </div>
            
                    </section>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};