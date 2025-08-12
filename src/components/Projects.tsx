"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful animations.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js, featuring dark mode, smooth animations, and optimal performance.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, file sharing, and emoji reactions.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS S3"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 6,
      title: "Finance Tracker",
      description: "Personal finance tracking application with expense categorization, budget planning, and financial insights.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-background border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/40 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary opacity-50">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Other Notable Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-accent transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
