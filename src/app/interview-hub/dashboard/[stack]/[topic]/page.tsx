import { techStacks, topics, explanation } from "@/data";
import NotFound from "@/app/not-found";
import TopicClient from "@/components/interview-hub/TopicClient";

function formatTopicLabel(topic: string) {
    return topic
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

export async function generateStaticParams() {
    const params: { stack: string; topic: string }[] = [];
    techStacks.forEach((stack) => {
        const stackTopics = topics[stack] || [];
        stackTopics.forEach((topic) => {
            params.push({ stack, topic });
        });
    });
    return params;
}

export async function generateMetadata({ params }: { params: { stack: string; topic: string } }) {
    const { stack, topic } = params;
    const topicLabel = formatTopicLabel(topic);

    return {
        title: `${topicLabel} in ${stack.toUpperCase()} | ServiceConnekt Hub`,
        description: `Learn everything about ${topicLabel} in ${stack} with clear explanations and examples.`,
        alternates: {
            canonical: `https://www.serviceconnekt.com/interview-hub/dashboard/${stack}/${topic}`,
        }
    };
}

export default function TopicPage({ params }: { params: { stack: string; topic: string } }) {
    const { stack, topic: topicParam } = params;

    if (!stack || !topicParam) return <NotFound />;

    // Convert hyphenated URL to camelCase key (e.g. "state-management" -> "statemanagement")
    const topicKey = topicParam.split("-").join("");
    const topicData = explanation[stack]?.[topicKey];

    if (!topicData) return <NotFound />;

    const topicKeys = Object.keys(explanation[stack] || {});
    const topicIndex = topicKeys.indexOf(topicKey);
    const allTopics = topics[stack] || [];

    const prevTopic = topicIndex > 0 ? allTopics[topicIndex - 1] : null;
    const nextTopic = topicIndex < allTopics.length - 1 ? allTopics[topicIndex + 1] : null;

    return (
        <TopicClient
            stack={stack}
            topicParam={topicParam}
            topicData={topicData}
            prevTopic={prevTopic}
            nextTopic={nextTopic}
        />
    );
}
