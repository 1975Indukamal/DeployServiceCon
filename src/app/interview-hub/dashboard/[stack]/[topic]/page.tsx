'use client';

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { explanation, topics } from "@/data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NotFound from "@/app/not-found";

function formatTopicLabel(topic: string) {
    return topic
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

export default function TopicPage() {
    const params = useParams();
    const stack = params?.stack as string;
    const topicParam = params?.topic as string;

    if (!stack || !topicParam) return <NotFound />;

    // Convert hyphenated URL to camelCase key (e.g. "state-management" -> "statemanagement")
    const topicKey = topicParam.split("-").join("");
    const topicData = explanation[stack]?.[topicKey];

    if (!topicData) return <NotFound />;

    const topicKeys = Object.keys(explanation[stack] || {});
    const topicIndex = topicKeys.indexOf(topicKey);
    const allTopics = topics[stack] || [];

    const prevTopic = topicIndex > 0 ? allTopics[topicIndex - 1] : null;
    const nextTopic = topicIndex < topicKeys.length - 1 ? allTopics[topicIndex + 1] : null;

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
