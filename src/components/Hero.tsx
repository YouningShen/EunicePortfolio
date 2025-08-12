"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-56 h-56 mx-auto mb-12"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center text-6xl font-bold text-primary-foreground">
              YN
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-foreground"
          >
            Eunice Shen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            I create beautiful, functional, and user-centered digital experiences.
            Passionate about turning ideas into reality through code and design.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download="Eunice_Shen_Resume.pdf"
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors duration-300 font-medium inline-flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-accent transition-colors duration-300 font-medium"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
