'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { techStacks } from "@/data";

const stackIcons: Record<string, string> = {
    react: "⚛️",
    nodejs: "🟢",
    python: "🐍",
    javascript: "✨",
    typescript: "🔷",
};

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-12  flex flex-col justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-3xl font-bold mb-2">Welcome to Q&A Hub!</h1>
                    <p className="text-muted-foreground">
                        Select a tech stack to start exploring topics and interview questions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {techStacks.map((stack, i) => (
                        <motion.div
                            key={stack}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06, duration: 0.4 }}
                        >
                            <Link
                                href={`/interview-hub/dashboard/${stack}/interview`}
                                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:card-glow transition-all group"
                            >
                                <span className="text-4xl">{stackIcons[stack] || "📦"}</span>
                                <div>
                                    <h2 className="font-semibold text-lg capitalize group-hover:text-primary transition-colors">
                                        {stack}
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Explore topics & interview prep
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
}
