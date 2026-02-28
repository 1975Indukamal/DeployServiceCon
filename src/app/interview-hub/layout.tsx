import DashboardHeader from "@/components/learnhub/DashboardHeader";

export default function InterviewHubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="hub-theme bg-background min-h-screen flex flex-col">
            <div className="sticky top-0 z-40">
                <DashboardHeader />
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}
