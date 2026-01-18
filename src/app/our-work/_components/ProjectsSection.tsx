"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Abakwa Educational and Health Drive (AEHD-USA)",
    category: "Nonprofit / Education & Health Aid",
    image: "./assets/images/our-work/new/w1.png",
    description: "A California-based nonprofit focused on improving education and health for impoverished communities in Cameroon.",
  },
  {
    title: "Centauri-Research",
    category: "Technology / IT Services",
    image: "./assets/images/our-work/new/w2.png",
    description: "A technology company focused on IT solutions, cybersecurity, data analysis, and digital innovation services.",
  },
  {
    title: "Chakraview",
    category: "School Transportation / App Service",
    image: "./assets/images/our-work/new/w3.png",
    description: "A real-time school bus tracking and transportation management platform that improves safety and communication for parents, schools, and bus operators.",
  },
  {
    title: "Paper Play",
    category: "Creative Services / Design & Branding",
    image: "./assets/images/our-work/new/w4.png",
    description: "A creative design and branding service provider offering report editing, logo design, social media creatives, brochures, and other visual content.",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="section-padding py-20 lg:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Work</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-body">
              Featured <span className="gradient-text text-primary">Projects</span>
            </h2>
          </div>
          <p className="text-body max-w-md mt-6 md:mt-0">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl glass-card hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-body/80">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-dark text-primary rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className=" text-sm">{project.description}</p>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
