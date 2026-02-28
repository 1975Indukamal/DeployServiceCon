

import { practiceChallenges, javascriptChallenges, reactChallenges } from "@/data/practiceData";
import { techStacks } from "@/data";
import PracticeClient from "@/components/interview-hub/PracticeClient";

export async function generateStaticParams() {
  return techStacks.map((stack) => ({
    stack,
  }));
}

export async function generateMetadata({ params }: { params: { stack: string } }) {
  const stack = params.stack;
  return {
    title: `${stack.toUpperCase()} Practice Challenges | ServiceConnekt`,
    description: `Sharpen your ${stack} skills with interactive coding challenges.`,
    alternates: {
      canonical: `https://www.serviceconnekt.com/interview-hub/dashboard/${stack}/practice`,
    }
  };
}

export default function PracticePage({ params }: { params: { stack: string } }) {
  const currentStack = (params.stack || "javascript").toLowerCase();

  const currentChallenges =
    currentStack === "javascript" || currentStack === "js"
      ? javascriptChallenges
      : currentStack === "react"
        ? reactChallenges || []
        : practiceChallenges;

  return <PracticeClient stack={currentStack} currentChallenges={currentChallenges} />;
}