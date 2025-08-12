"use client";

import { motion } from "framer-motion";
import { Code, Palette, Coffee, Users, Download } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "I believe in creating beautiful interfaces that users love to interact with."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Problem Solver",
      description: "I enjoy tackling complex challenges and finding innovative solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Player",
      description: "Collaboration and communication are key to building great products."
    }
  ];

  return (
    <section id="about" className="py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="text-6xl font-bold text-primary">
                ES
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10 order-1 lg:order-2"
          >
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Hi, I'm Eunice Shen
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 3+ years of experience in web development, I specialize in creating
              modern, responsive, and user-friendly applications. My journey in tech started
              with a curiosity about how things work, which led me to pursue programming.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              I love working with cutting-edge technologies and always strive to write clean,
              efficient code. When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Python
              </span>
            </div>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="/resume.pdf"
                download="Eunice_Shen_Resume.pdf"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
