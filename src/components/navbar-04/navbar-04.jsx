'use client'
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { usePathname } from "next/navigation";

const Navbar04Page = () => {
  const pathname = usePathname();

  const containerClass = pathname === "/planos"
    ? "py-5 bg-[#e0e7ff]"
    : "py-5";

  return (
    <div className={containerClass}>
      <nav
        className="top-6 inset-x-4 h-16 bg-white border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full"
      >
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex rounded-full">
              Sign In
            </Button>
            <Button className="rounded-full">Get Started</Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar04Page;
