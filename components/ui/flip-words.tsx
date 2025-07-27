"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
    words,
    duration = 1500,
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const startAnimation = useCallback(() => {
        const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
        setCurrentWord(words[nextIndex]);
        setIsAnimating(true);
    }, [currentWord, words]);

    useEffect(() => {
        if (!isAnimating) {
            const timer = setTimeout(() => startAnimation(), duration);
            return () => clearTimeout(timer);
        }
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
            <motion.div
                key={currentWord}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn(
                    "z-10 inline-block relative text-4xl text-[var(--accent-orange)] px-2",
                    className
                )}
            >
                <motion.span
                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.4 }}
                    className="inline-block whitespace-nowrap"
                >
                    {currentWord}
                </motion.span>
            </motion.div>
        </AnimatePresence>
    );
};