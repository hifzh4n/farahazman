"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Pondok Spa Booking System",
    description: "A fully functional web system designed for a spa to manage customer bookings efficiently and beautifully.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects(): React.ReactElement {
  return (
    <div className="min-h-screen bg-background pt-12 md:pt-16 pb-20 selection:bg-primary/30 selection:text-primary">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 rounded-[2rem] bg-card/70 p-8 shadow-sm ring-1 ring-primary/10 md:p-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">Projects</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium">Some of the selected works I&apos;ve built and designed.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-card rounded-[2rem] overflow-hidden shadow-lg shadow-foreground/5 ring-1 ring-primary/10 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
