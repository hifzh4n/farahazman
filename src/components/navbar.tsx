"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavLink = { name: string; href: string };

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
];

function ThemeToggle(): React.ReactElement {
  const toggleTheme = () => {
    const root = document.documentElement;
    const followsSystemDark =
      !root.classList.contains("light") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextIsDark = !(root.classList.contains("dark") || followsSystemDark);

    root.classList.toggle("dark", nextIsDark);
    root.classList.toggle("light", !nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  return (
    <button
      type="button"
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card text-card-foreground shadow-sm ring-1 ring-primary/10 transition-colors hover:bg-primary hover:text-primary-foreground"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
    >
      <Sun className="theme-icon-sun h-5 w-5 transition-transform" />
      <Moon className="theme-icon-moon absolute h-5 w-5 transition-transform" />
    </button>
  );
}

export function Navbar(): React.ReactElement {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-background/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-4 flex flex-row justify-between items-center gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-primary hover:text-primary/80 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            FA.
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-1 rounded-full bg-card/70 p-1.5 shadow-inner shadow-foreground/5"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-semibold transition-all px-4 py-2 rounded-full relative",
                  isActive ? "text-nav-active-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.div 
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-nav-active rounded-full shadow-md shadow-primary/20 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-3"
        >
          <ThemeToggle />
          <a href="mailto:farahazman995@gmail.com" className="text-sm font-semibold bg-highlight text-highlight-foreground px-5 py-2.5 rounded-full hover:bg-highlight/90 transition-all shadow-md shadow-primary/20">
            Let&apos;s Talk
          </a>
        </motion.div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-card text-card-foreground shadow-sm ring-1 ring-primary/10 transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>

    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            id="mobile-navigation"
            className="fixed right-0 top-0 z-50 h-dvh w-[84vw] max-w-sm bg-card px-6 py-6 shadow-2xl shadow-foreground/20 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-xl font-bold tracking-tight text-primary"
                onClick={() => setIsOpen(false)}
              >
                FA.
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-2xl px-5 py-4 text-base font-semibold transition-colors",
                      isActive
                        ? "bg-nav-active text-nav-active-foreground"
                        : "bg-background text-foreground hover:bg-secondary"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <a
              href="mailto:farahazman995@gmail.com"
              className="mt-8 flex items-center justify-center rounded-full bg-highlight px-5 py-3 text-sm font-semibold text-highlight-foreground shadow-md shadow-primary/20"
            >
              Let&apos;s Talk
            </a>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
