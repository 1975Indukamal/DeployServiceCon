export interface Challenge {
    topic: string;
    title: string;
    description: string;
    functionName: string;
    starterCode: string;
    tests: {
        input: any[];
        expected: any;
    }[];
    hint?: string;
    difficulty: "Easy" | "Medium" | "Hard";
    answer?: string;
}
