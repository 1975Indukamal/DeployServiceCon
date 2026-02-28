'use client';

import { useParams } from "next/navigation";
import StackSidebar from "@/components/learnhub/StackSidebar";
import { topics } from "@/data";
import NotFound from "@/app/not-found";

export default function StackLayout({ children }: { children: React.ReactNode }) {
    const params = useParams();
    const stack = params?.stack as string;

    if (!stack || !topics[stack]) return <NotFound />;

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <div className="flex flex-1 flex-col lg:flex-row">
                <StackSidebar />
                <main className="flex-1 min-w-0 p-4 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
