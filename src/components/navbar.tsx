"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type NavLink = { name: string; href: string };

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
];

export function Navbar(): React.ReactElement {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.div 
          initial={reduceMotion ? undefined : { opacity: 0, x: -20 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
        >
          <Link href="/" className="text-xl font-bold tracking-tight text-primary hover:text-primary/80 transition-colors">
            FA.
          </Link>
        </motion.div>
        
        <motion.div 
          initial={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-6 items-center bg-card/50 px-6 py-2 rounded-full shadow-sm"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all px-3 py-1.5 rounded-full relative",
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.div 
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </motion.div>
        
        <motion.div 
          initial={reduceMotion ? undefined : { opacity: 0, x: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <a href="mailto:farahazman995@gmail.com" className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
