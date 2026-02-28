'use client';

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { interviewQA, hinglishMap } from "@/interviewPrep";
import { ChevronDown, Lightbulb, Code, Globe } from "lucide-react";
import NotFound from "@/app/not-found";

const levelColors: Record<string, string> = {
    Beginner: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    Intermediate: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    Advanced: "bg-red-500/10 text-red-600 border-red-500/20",
    CodingOutput: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    SystemDesign: "bg-blue-500/10 text-blue-600 border-blue-500/20",
};

const levelLabels: Record<string, string> = {
    CodingOutput: "Coding Output",
    SystemDesign: "System Design",
};

export default function InterviewPage() {
    const params = useParams();
    const stack = params?.stack as string;
    const [openIndex, setOpenIndex] = useState<string | null>(null);
    const [showHinglish, setShowHinglish] = useState<Record<string, boolean>>({});

    if (!stack) return <NotFound />;
    const stackData = interviewQA[stack];
    if (!stackData) return <NotFound />;

    const toggle = (key: string) =>
        setOpenIndex((prev) => (prev === key ? null : key));

    const toggleHinglish = (key: string) =>
        setShowHinglish((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl mx-auto px-4 py-8 lg:py-12"
        >
            <h1 className="text-2xl md:text-3xl font-bold mb-8">
                <span className="capitalize">{stack}</span>{" "}
                <span className="text-muted-foreground font-normal">
                    Interview Questions
                </span>
            </h1>

            <div className="space-y-10">
                {Object.entries(stackData).map(([level, questions]) => (
                    <section key={level}>
                        <div className="flex items-center gap-2 mb-4">
                            <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${levelColors[level] || "bg-muted text-muted-foreground"
                                    }`}
                            >
                                {levelLabels[level] || level} Level
                            </span>
                            <span className="text-xs text-muted-foreground">
                                {questions.length} question{questions.length !== 1 ? "s" : ""}
                            </span>
                        </div>

                        <div className="space-y-3">
                            {questions.map((item, index) => {
                                const key = `${level}-${index}`;
                                const isOpen = openIndex === key;

                                return (
                                    <div
                                        key={key}
                                        className="rounded-lg border border-dark overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggle(key)}
                                            className="w-full text-left p-4 flex items-start gap-2 hover:bg-muted/40 transition-colors"
                                        >
                                            <span className="text-primary font-mono text-sm mt-0.5 shrink-0">
                                                Q{index + 1}:
                                            </span>
                                            <span className="font-medium flex-1 text-primary">{item.q}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 mt-1 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {item.oneLiner && (
                                            <div className="px-4 pb-3 -mt-1">
                                                <div className="flex items-start gap-1.5 text-xs text-muted-foreground bg-muted/50 rounded-md px-3 py-2">
                                                    <Lightbulb className="w-3.5 h-3.5 mt-0.5 shrink-0 " />
                                                    <span>{item.oneLiner}</span>
                                                </div>
                                            </div>
                                        )}

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-4 pb-4 space-y-3 border-t border-gray-700 pt-3 ">
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            <span className="font-semibold text-foreground">
                                                                Ans:{" "}
                                                            </span>
                                                            {item.a}
                                                        </p>

                                                        {item.code && (
                                                            <div className="relative">
                                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1.5">
                                                                    <Code className="w-3.5 h-3.5" />
                                                                    <span>Code Example</span>
                                                                </div>
                                                                <pre className="bg-dark rounded-md p-3 text-xs overflow-x-auto font-mono leading-relaxed">
                                                                    <code>{item.code}</code>
                                                                </pre>
                                                            </div>
                                                        )}

                                                        {(() => {
                                                            const hinglishText = item.hinglish || hinglishMap[item.q];
                                                            if (!hinglishText) return null;
                                                            return (
                                                                <div className="pt-1">
                                                                    <button
                                                                        onClick={() => toggleHinglish(key)}
                                                                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-dark hover:bg-muted/60 transition-colors"
                                                                    >
                                                                        <Globe className="w-3.5 h-3.5" />
                                                                        {showHinglish[key]
                                                                            ? "Hide Hinglish"
                                                                            : "Translate to Hinglish"}
                                                                    </button>

                                                                    {showHinglish[key] && (
                                                                        <div className="mt-2 p-3 rounded-md bg-muted/40 border border-dark">
                                                                            <p className="text-xs font-semibold text-foreground mb-1 flex items-center gap-1">
                                                                                <Globe className="w-3 h-3" /> Hinglish
                                                                            </p>
                                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                                {hinglishText}
                                                                            </p>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            );
                                                        })()}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </motion.div>
    );
}
