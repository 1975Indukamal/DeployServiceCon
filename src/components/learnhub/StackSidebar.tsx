import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { topics } from "@/data";
import { useState } from "react";
import { BookOpen, MessageSquare, Code, ChevronDown } from "lucide-react";

function formatTopicLabel(topic: string) {
  return topic
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const StackSidebar = () => {
  const params = useParams();
  const stack = params?.stack as string;
  const pathname = usePathname() || "";
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!stack || !topics[stack]) return null;

  const stackTopics = topics[stack];
  const isInterview = pathname.endsWith("/interview");
  const isPractice = pathname.endsWith("/practice");

  const currentValue = isInterview
    ? "interview"
    : isPractice
      ? "practice"
      : pathname.split("/").pop();

  return (
    <>
      {/* ================= MOBILE NAVIGATION (CUSTOM DROPDOWN) ================= */}
      <div className="lg:hidden sticky top-14 z-30 w-full border-b border-white/5 bg-dark backdrop-blur-md px-4 py-3">
        <div className="relative">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm font-semibold transition-all hover:bg-white/10"
          >
            <div className="flex items-center gap-2">
              {isInterview ? <MessageSquare className="h-4 w-4 text-primary" /> : <BookOpen className="h-4 w-4 text-primary" />}
              <span className="capitalize">
                {isInterview ? "Interview Q&A" : formatTopicLabel(currentValue || "")}
              </span>
            </div>
            <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${mobileOpen ? "rotate-180" : ""}`} />
          </button>

          {mobileOpen && (
            <div className="absolute top-full left-0 w-full mt-2 rounded-2xl border border-white/10 bg-dark shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="p-2 max-h-[60vh] overflow-y-auto no-scrollbar">
                <Link
                  href={`/interview-hub/dashboard/${stack}/interview`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isInterview
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                >
                  <MessageSquare className="h-4 w-4" />
                  Interview Q&A
                </Link>

                <div className="my-2 h-px bg-white/5 mx-2" />

                {stackTopics.map((topic) => {
                  const isActive = pathname === `/interview-hub/dashboard/${stack}/${topic}`;
                  return (
                    <Link
                      key={topic}
                      href={`/interview-hub/dashboard/${stack}/${topic}`}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                    >
                      <BookOpen className="h-4 w-4" />
                      {formatTopicLabel(topic)}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden lg:block w-64 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-gray-800 bg-card p-4">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {stack} Topics
        </h3>

        <nav className="flex flex-col gap-0.5">
          <Link
            href={`/interview-hub/dashboard/${stack}/interview`}
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${isInterview
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
          >
            <MessageSquare className="h-4 w-4" />
            Interview Q&A
          </Link>

          <div className="my-2 h-px bg-border" />

          {stackTopics.map((topic) => {
            const isActive =
              pathname === `/interview-hub/dashboard/${stack}/${topic}`;

            return (
              <Link
                key={topic}
                href={`/interview-hub/dashboard/${stack}/${topic}`}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                {formatTopicLabel(topic)}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default StackSidebar;
