"use client";

import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
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
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">
          
          {/* Left Content */}
          <motion.div 
            initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wide">
                Computer Science Student @ UTeM
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground">
                Hi, I&apos;m <span className="text-primary">Farah Azman</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
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
                    className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
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
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-muted shadow-2xl shadow-primary/20">
              <Image 
                src="/profile.png" 
                alt="Farah Azman" 
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full mix-blend-multiply blur-2xl opacity-70 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full mix-blend-multiply blur-2xl opacity-50 animate-pulse delay-700"></div>
          </motion.div>
        </div>

        {/* About & Skills Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-card p-10 rounded-[2.5rem] shadow-lg shadow-card/50"
          >
            <h2 className="text-3xl font-bold text-foreground">About Me</h2>
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
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground pl-2">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card text-card-foreground px-5 py-3 rounded-2xl font-medium shadow-md shadow-card/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="mt-20 py-10 text-center text-muted-foreground font-medium">
        <p>© {new Date().getFullYear()} Farah Azman. Crafted with passion.</p>
      </footer>
    </div>
  );
}
