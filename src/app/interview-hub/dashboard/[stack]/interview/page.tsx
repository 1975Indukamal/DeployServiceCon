import { interviewQA, hinglishMap } from "@/interviewPrep";
import { techStacks } from "@/data";
import NotFound from "@/app/not-found";
import InterviewClient from "@/components/interview-hub/InterviewClient";

export async function generateStaticParams() {
    return techStacks.map((stack) => ({
        stack,
    }));
}

export async function generateMetadata({ params }: { params: { stack: string } }) {
    const stack = params.stack;
    if (!interviewQA[stack]) return {};

    return {
        title: `${stack.toUpperCase()} Interview Questions | ServiceConnekt`,
        description: `Master your ${stack} interview with our curated list of questions and answers.`,
        alternates: {
            canonical: `https://www.serviceconnekt.com/interview-hub/dashboard/${stack}/interview`,
        }
    };
}

export default function InterviewPage({ params }: { params: { stack: string } }) {
    const stack = params.stack;
    const stackData = interviewQA[stack];

    if (!stackData) return <NotFound />;

    return <InterviewClient stack={stack} stackData={stackData} hinglishMap={hinglishMap} />;
}
