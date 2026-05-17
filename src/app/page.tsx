"use client";

import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Code2, Database, GraduationCap, MapPin } from "lucide-react";
import { FaInstagram, FaThreads, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import type { ComponentType, SVGProps } from "react";

type Skill = string;
type Social = { icon: ComponentType<SVGProps<SVGSVGElement>>; href: string; label: string };

const skills: Skill[] = [
  "UI/UX Design",
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "Python",
  "C++",
  "Visual Basic",
  "Figma",
];

const socials: Social[] = [
  { icon: FaInstagram, href: "https://instagram.com/farhyrt", label: "Instagram" },
  { icon: FaThreads, href: "https://www.threads.net/@farhyrt", label: "Threads" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@12.102401", label: "TikTok" },
  { icon: FaWhatsapp, href: "https://wa.me/60139167973", label: "WhatsApp" },
];

export default function Home(): React.ReactElement {
  const reduceMotion = useReducedMotion();
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <main className="max-w-6xl mx-auto px-5 sm:px-6 pt-12 md:pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center min-h-[68vh]">
          
          {/* Left Content */}
          <motion.div 
            initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold tracking-wide text-card-foreground shadow-sm ring-1 ring-primary/10">
                <GraduationCap className="h-4 w-4" />
                Computer Science Student @ UTeM
              </span>
              <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.04] text-foreground">
                Hi, I&apos;m <span className="text-primary">Farah Azman</span>
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                I am still a student pursuing Bachelor of Computer Science majoring in Database Management with Honours.
              </p>
            </div>

            {/* CTA & Socials */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href="mailto:farahazman995@gmail.com" className="flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-foreground/10">
                Contact Me
                <ChevronRight className="w-5 h-5" />
              </a>
              
              <div className="flex gap-3">
                {socials.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-card rounded-full text-card-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm ring-1 ring-primary/10"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={reduceMotion ? undefined : { duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto w-full max-w-[28rem] rounded-[2.25rem] bg-card p-3 shadow-2xl shadow-foreground/10 ring-1 ring-primary/10 lg:mr-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-muted">
                <Image 
                  src="/profile.png" 
                  alt="Farah Azman" 
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-background/88 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Based in Besut, Terengganu</p>
                      <p className="text-xs font-medium text-muted-foreground">Building thoughtful digital systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 border-y border-primary/10 py-6 sm:grid-cols-3">
          {[
            { icon: GraduationCap, label: "Current Study", value: "Computer Science" },
            { icon: Database, label: "Major", value: "Database Management" },
            { icon: Code2, label: "Focus", value: "UI, Systems, Digitalization" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-2xl bg-card/60 p-5 ring-1 ring-primary/10">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">{item.label}</p>
                <p className="text-base font-bold text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* About & Skills Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10">
          <motion.div 
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-card p-8 lg:p-10 rounded-[2rem] shadow-lg shadow-foreground/5 ring-1 ring-primary/10"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-3xl font-bold text-foreground">About Me</h2>
              <ArrowUpRight className="h-6 w-6 text-primary" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi there! I am a dedicated student with a strong passion for technology and digitalization. Having roots in Besut, Terengganu, my journey has taught me the importance of continuous learning and adaptability. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a solid foundation in programming, databases, and design tools, my goal is to build impactful solutions. Whether it&apos;s crafting user interfaces or managing databases, I enjoy exploring how technology can solve real-world problems.
            </p>
          </motion.div>

          <motion.div 
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduceMotion ? undefined : { delay: 0.2 }}
            className="space-y-6 rounded-[2rem] bg-card/55 p-8 shadow-sm ring-1 ring-primary/10"
          >
            <h2 className="text-3xl font-bold text-foreground">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-background text-foreground px-5 py-3 rounded-2xl font-semibold shadow-sm ring-1 ring-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="mt-20 py-10 text-center text-muted-foreground font-medium">
        <p>&copy; {new Date().getFullYear()} Farah Azman. Crafted with passion.</p>
      </footer>
    </div>
  );
}
