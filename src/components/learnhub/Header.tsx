import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/learnhub/ui/navigation-menu";
import { cn } from "@/lib/utils";

const coreStacks = ["react", "nodejs", "typescript", "javascript", "python", "dsa"];
const individualStacks = ["aws", "docker", "authentication"];

// Helper to render beautiful cards inside desktop dropdown
const DropdownCard = ({ stack, type, currentStack, pathname }: { stack: string, type: "interview" | "practice", currentStack: string, pathname: string }) => {
  const isActive = currentStack === stack && pathname.includes(`/${type}`);
  return (
    <NavigationMenuLink asChild>
      <Link
        href={`/dashboard/${stack}/${type}`}
        className={cn(
          "group flex select-none items-center justify-between rounded-xl px-4 py-3 no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:shadow-md focus:bg-primary/10",
          isActive ? "bg-primary/10 ring-1 ring-primary/20 shadow-sm" : "bg-muted/30"
        )}
      >
        <div className="text-sm font-semibold capitalize tracking-tight text-foreground transition-colors group-hover:text-primary">
          {stack}
        </div>
        {isActive && <CheckCircle2 className="h-4 w-4 text-primary" />}
      </Link>
    </NavigationMenuLink>
  );
};

const Header = () => {
  const pathname = usePathname() || "";
  const [mobileOpen, setMobileOpen] = useState(false);

  // Mobile accordion states
  const [mobileInterviewOpen, setMobileInterviewOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);

  const pathParts = pathname.split("/");
  const currentStack = pathParts[2] || "";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Interview Hub
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 py-2 font-medium">Interview</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[240px] p-3">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">
                      Select Technology
                    </div>
                    <ul className="grid grid-cols-1 gap-2">
                      {coreStacks.map((stack) => (
                        <li key={`interview-${stack}`}>
                          <DropdownCard stack={stack} type="interview" currentStack={currentStack} pathname={pathname} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 py-2 font-medium">Practice</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[240px] p-3">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">
                      Select Technology
                    </div>
                    <ul className="grid grid-cols-1 gap-2">
                      {coreStacks.map((stack) => (
                        <li key={`practice-${stack}`}>
                          <DropdownCard stack={stack} type="practice" currentStack={currentStack} pathname={pathname} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Separator */}
              <div className="mx-2 h-4 w-px bg-border hidden lg:block" />

              {individualStacks.map((stack) => (
                <NavigationMenuItem key={`nav-${stack}`}>
                  <Link href={`/dashboard/${stack}/interview`} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "h-10 px-4 py-2 font-medium capitalize transition-all",
                        currentStack === stack ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {stack}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">Toggle mobile menu</span>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "lg:hidden absolute top-[100%] left-0 w-full overflow-hidden transition-all duration-300 ease-in-out border-b border-border bg-background shadow-lg",
          mobileOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <nav className="flex flex-col gap-4 p-4 sm:p-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
          {/* Mobile Interview Dropdown */}
          <div className="flex flex-col gap-2">
            <button
              className="flex items-center justify-between px-4 py-3 text-base font-semibold bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors"
              onClick={() => setMobileInterviewOpen(!mobileInterviewOpen)}
            >
              Interview Preparation
              <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform duration-300", mobileInterviewOpen && "rotate-180")} />
            </button>
            <div
              className={cn(
                "grid grid-cols-1 gap-2 overflow-hidden transition-all duration-300 ease-in-out",
                mobileInterviewOpen ? "max-h-[500px] opacity-100 pt-2" : "max-h-0 opacity-0"
              )}
            >
              {coreStacks.map((stack) => (
                <Link
                  key={`mobile-interview-${stack}`}
                  href={`/dashboard/${stack}/interview`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex flex-col justify-center px-4 py-3 rounded-xl text-sm font-medium capitalize transition-all border",
                    currentStack === stack && pathname.includes("/interview")
                      ? "border-primary/50 bg-primary/10 text-primary shadow-sm"
                      : "border-transparent bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  {stack}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Practice Dropdown */}
          <div className="flex flex-col gap-2">
            <button
              className="flex items-center justify-between px-4 py-3 text-base font-semibold bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors"
              onClick={() => setMobilePracticeOpen(!mobilePracticeOpen)}
            >
              Practice Challenges
              <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform duration-300", mobilePracticeOpen && "rotate-180")} />
            </button>
            <div
              className={cn(
                "grid grid-cols-1 gap-2 overflow-hidden transition-all duration-300 ease-in-out",
                mobilePracticeOpen ? "max-h-[500px] opacity-100 pt-2" : "max-h-0 opacity-0"
              )}
            >
              {coreStacks.map((stack) => (
                <Link
                  key={`mobile-practice-${stack}`}
                  href={`/dashboard/${stack}/practice`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex flex-col justify-center px-4 py-3 rounded-xl text-sm font-medium capitalize transition-all border",
                    currentStack === stack && pathname.includes("/practice")
                      ? "border-primary/50 bg-primary/10 text-primary shadow-sm"
                      : "border-transparent bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  {stack}
                </Link>
              ))}
            </div>
          </div>

          <div className="h-px bg-border/50 my-2 mx-2" />

          {/* Individual Stacks */}
          <div className="grid grid-cols-1 gap-2">
            <h4 className="px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Specialized Topics
            </h4>
            {individualStacks.map((stack) => (
              <Link
                key={`mobile-ind-${stack}`}
                href={`/dashboard/${stack}/interview`}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl font-medium capitalize transition-all border",
                  currentStack === stack
                    ? "border-primary/50 bg-primary/10 text-primary shadow-sm"
                    : "border-transparent bg-muted/30 text-foreground hover:bg-muted/50"
                )}
              >
                {stack}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted-foreground opacity-50"><path d="m9 18 6-6-6-6" /></svg>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
