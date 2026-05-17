"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  year: string;
  location: string;
  description: string;
  tags: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Intern",
    company: "WKF Hardware Sdn Bhd",
    year: "January 2025 - May 2025",
    location: "Besut, Terengganu",
    description: "Assisted in digitalization work and functioned as an editor for company materials. Routinely utilized tools like Canva, Microsoft Word, PowerPoint, and Excel to deliver quality digital content and reports.",
    tags: ["Canva", "Word", "PowerPoint", "Excel", "Digitalization"],
  },
];

export default function Experience(): React.ReactElement {
  const reduceMotion = useReducedMotion();
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 selection:bg-primary/30 selection:text-primary">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground mb-4">Experience</h1>
          <p className="text-xl text-muted-foreground font-medium">My professional background and work history.</p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={reduceMotion ? undefined : { delay: idx * 0.15 }}
              className="bg-card p-8 md:p-10 rounded-[2.5rem] shadow-lg shadow-card/50 flex flex-col md:flex-row gap-8"
            >
              <div className="shrink-0 hidden md:block">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-md shadow-primary/20 transform rotate-3">
                  <Briefcase className="w-8 h-8 text-primary-foreground transform -rotate-3" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{item.role}</h3>
                    <h4 className="text-xl font-medium text-primary">{item.company}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3 md:flex-col md:items-end md:gap-2">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="bg-background text-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
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
