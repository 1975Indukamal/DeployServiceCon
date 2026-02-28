'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { techStacks } from "@/data";
import { ArrowRight, Code2, Layers, Zap } from "lucide-react";

const stackIcons: Record<string, string> = {
    react: "⚛️",
    nodejs: "🟢",
    python: "🐍",
    javascript: "✨",
    typescript: "🔷",
};

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 hero-gradient-bg opacity-5" />
                <div className="relative mx-auto max-w-5xl px-4 py-24 md:py-36 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                            Welcome to{" "}
                            <span className="text-primary">Q&A Hub</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                            Explore tech stacks, master core topics, and ace your next interview — all in one place.
                        </p>
                        <Link
                            href="/interview-hub/dashboard"
                            className="inline-flex items-center gap-2 text-body bg-primary px-6 py-3 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-shadow"
                        >
                            Start Exploring
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="mx-auto max-w-5xl px-4 py-16">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Code2, title: "Deep Explanations", desc: "Thorough topic breakdowns with real code examples." },
                        { icon: Layers, title: "Multiple Stacks", desc: "React, Node.js, Python, JavaScript, TypeScript and more." },
                        { icon: Zap, title: "Interview Prep", desc: "Curated Q&A by difficulty level to sharpen your skills." },
                    ].map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                            className="rounded-xl border border-border bg-card p-6 card-glow"
                        >
                            <f.icon className="h-8 w-8 text-primary mb-3" />
                            <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                            <p className="text-sm text-muted-foreground">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stack Grid */}
            <section className="mx-auto max-w-5xl px-4 pb-20">
                <h2 className="text-2xl font-bold text-center mb-8">Choose a Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {techStacks.map((stack, i) => (
                        <motion.div
                            key={stack}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                        >
                            <Link
                                href={`/interview-hub/dashboard/${stack}/interview`}
                                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:card-glow transition-all group"
                            >
                                <span className="text-3xl">{stackIcons[stack] || "📦"}</span>
                                <span className="font-medium capitalize text-sm group-hover:text-primary transition-colors">
                                    {stack}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
