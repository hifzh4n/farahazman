"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Trophy, Award } from "lucide-react";
import Image from "next/image";
import type { ComponentType, SVGProps } from "react";

type Achievement = {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  image: string;
};

const achievements: Achievement[] = [
  {
    title: "Dean's List Award",
    organization: "Politeknik Besut Terengganu",
    year: "Semester 3 to Final",
    description: "Awarded the Dean's List for maintaining a pointer of 3.5 and above consistently.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Gold Medal (SPINE)",
    organization: "Student Project Innovation & Exhibition",
    year: "Politeknik Besut Terengganu",
    description: "Won Gold Medal for developing a fully functional web system for a spa.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop",
  },
];

export default function Achievements(): React.ReactElement {
  const reduceMotion = useReducedMotion();
  return (
    <div className="min-h-screen bg-background pt-12 md:pt-16 pb-20 selection:bg-primary/30 selection:text-primary">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="mb-14 rounded-[2rem] bg-card/70 p-8 text-center shadow-sm ring-1 ring-primary/10 md:p-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">Achievements</h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">Milestones, awards, and recognition.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={reduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={reduceMotion ? undefined : { delay: idx * 0.1 }}
              className="bg-card rounded-[2rem] overflow-hidden shadow-lg shadow-foreground/5 ring-1 ring-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col items-center text-center flex-1">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 shadow-md shadow-primary/20 -mt-16 relative z-10 border-4 border-card group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <h4 className="text-sm font-semibold text-primary mb-1">{item.organization}</h4>
                <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">{item.year}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
