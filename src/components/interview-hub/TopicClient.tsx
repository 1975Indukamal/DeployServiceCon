'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TopicClientProps {
    stack: string;
    topicParam: string;
    topicData: any;
    prevTopic: string | null;
    nextTopic: string | null;
}

export default function TopicClient({
    stack,
    topicParam,
    topicData,
    prevTopic,
    nextTopic,
}: TopicClientProps) {
    const formatTopicLabel = (topic: string) => {
        return topic
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl mx-auto px-4 py-8 lg:py-12"
        >
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {formatTopicLabel(topicParam)}{" "}
                <span className="text-muted-foreground font-normal text-lg">in {stack}</span>
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-6">
                {topicData.explanation}
            </p>

            {topicData.example && (
                <div className="mb-6">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Example
                    </h2>
                    <pre className="code-block rounded-lg p-4 overflow-x-auto text-sm leading-relaxed border border-border">
                        <code>{topicData.example}</code>
                    </pre>
                    {topicData.exampleExplanation && (
                        <p className="mt-3 text-sm text-muted-foreground italic">
                            {topicData.exampleExplanation}
                        </p>
                    )}
                </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
                {prevTopic ? (
                    <Link
                        href={`/interview-hub/dashboard/${stack}/${prevTopic}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Previous
                    </Link>
                ) : (
                    <span />
                )}
                {nextTopic ? (
                    <Link
                        href={`/interview-hub/dashboard/${stack}/${nextTopic}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                        Next
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                ) : (
                    <span />
                )}
            </div>
        </motion.div>
    );
}
