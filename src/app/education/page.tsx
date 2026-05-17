"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

type EducationItem = {
  degree: string;
  school: string;
  year: string;
  location: string;
  description: string;
};

const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science (Database Management) with Honours",
    school: "Universiti Teknikal Malaysia Melaka (UTeM)",
    year: "2025 - Present",
    location: "Melaka, Malaysia",
    description: "Currently pursuing a bachelor's degree with a focus on database management and computer science fundamentals."
  },
  {
    degree: "Diploma in Information Technology (Digital Technology)",
    school: "Politeknik Besut Terengganu",
    year: "2022 - 2025",
    location: "Besut, Terengganu",
    description: "Graduated with Dean's List honors. Developed a strong foundation in programming logic, database management, and system analysis."
  },
  {
    degree: "Secondary School",
    school: "Sekolah Menengah Kebangsaan Kuala Besut",
    year: "2017 - 2022",
    location: "Besut, Terengganu",
    description: "Completed secondary education with strong participation in school activities and academics."
  },
  {
    degree: "Primary School",
    school: "Sekolah Kebangsaan Kuala Besut",
    year: "2011 - 2016",
    location: "Besut, Terengganu",
    description: "Completed primary education, building early fundamentals in learning."
  }
];

export default function Education(): React.ReactElement {
  const reduceMotion = useReducedMotion();
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 selection:bg-primary/30 selection:text-primary">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground mb-4">Education</h1>
          <p className="text-xl text-muted-foreground font-medium">My academic journey and qualifications.</p>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={reduceMotion ? undefined : { opacity: 0, x: -20 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={reduceMotion ? undefined : { delay: idx * 0.15 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline dot for md+ screens */}
              <div className="hidden md:flex absolute left-[50%] -translate-x-[50%] w-12 h-12 bg-primary rounded-full items-center justify-center shadow-lg shadow-primary/20 z-10">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              {/* Timeline line */}
              <div className="hidden md:block absolute left-[50%] top-12 bottom-[-2rem] w-0.5 bg-secondary -translate-x-[50%]"></div>

              <div className={`md:w-[calc(50%-3rem)] ${idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                <div className="bg-card p-8 rounded-[2rem] shadow-lg shadow-card/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="md:hidden w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6 shadow-md shadow-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.degree}</h3>
                  <h4 className="text-lg font-medium text-primary mb-4">{item.school}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
