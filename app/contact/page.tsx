"use client";

import React, { useState } from "react";
import { Header } from '@/components/header'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
    const [form, setForm] = useState({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
        });
    
        const [status, setStatus] = useState("");
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm({ ...form, [e.target.id]: e.target.value });
        };
    
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setStatus("Sending...");
    
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fromPage: "Contact Form",
                    subject: `New Query - ${form.firstname} ${form.lastname}`,
                    name: `${form.firstname} ${form.lastname}`,
                    email: form.email,
                    phone: form.phone,
                    message: form.message,
                }),
            });
    
            if (res.ok) {
                setStatus("Message sent successfully!");
                setForm({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                setStatus("Failed to send. Please try again.");
            }
        };

    return (
        <div>
            <Header />
            <section id="about-content" className="mx-auto max-w-7xl px-6 pt-25">
                <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl text-center mb-10">
                    Contact Us
                </h2>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-10 flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">

                <div className="w-full lg:w-1/2 space-y-6">
                    <p className="text-lg text-[var(--foreground)] leading-relaxed">
                        Whether you&apos;re looking for catering services or have a question about our offerings, we’re here to help. Reach out and we’ll get back to you shortly.
                    </p>

                    <div className="text-[var(--foreground)] space-y-2 text-lg">
                        <p><strong>📍 Address:</strong> Saroja Caterers And Hostels, #1-10-243, Ashoka Nagar, Hyderabad - 5000020</p>
                        <p><strong>📞 Phone:</strong> +91-9000747279</p>
                        <p><strong>📧 Email:</strong> contact@sarojacaterers.in</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" placeholder="Saroja" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" placeholder="Caterers" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="123-456-7890" type="number" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" placeholder="email@email.com" type="email" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-6">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Tell us about your catering needs, event details, or questions..."
                                rows={4}
                                required
                            />
                        </LabelInputContainer>

                        <button
                            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                            type="submit"
                        >
                            Contact Us &rarr;
                            <BottomGradient />
                        </button>

                        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

                    </form>
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