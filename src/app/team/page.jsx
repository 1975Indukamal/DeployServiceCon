"use client";
import { motion } from "framer-motion";
import TeamMemberCard from "./_components/TeamMemberCard";
import Link from "next/link";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Lead UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    bio: "Passionate about creating intuitive digital experiences. 8+ years crafting interfaces that users love.",
    projects: [
      {
        title: "FinTech Dashboard",
        description: "Complete redesign of a financial analytics platform with real-time data visualization.",
        tags: ["Figma", "React", "D3.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      },
      {
        title: "E-Commerce Mobile App",
        description: "Intuitive shopping experience with AR product preview features.",
        tags: ["Mobile", "AR", "Swift"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    name: "Sarah Mitchell",
    role: "Senior Product Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    bio: "Design systems enthusiast. Believes in the power of consistent, scalable design solutions.",
    projects: [
      {
        title: "Healthcare Portal",
        description: "Patient-centric healthcare platform with telemedicine integration.",
        tags: ["Healthcare", "UX Research", "Accessibility"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      },
      {
        title: "SaaS Design System",
        description: "Comprehensive component library serving 50+ product teams.",
        tags: ["Design System", "Storybook", "Tokens"],
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    name: "Marcus Johnson",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    bio: "Award-winning creative with a passion for bold, innovative brand experiences.",
    projects: [
      {
        title: "Brand Identity Refresh",
        description: "Complete visual identity overhaul for a Fortune 500 tech company.",
        tags: ["Branding", "Motion", "Guidelines"],
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      },
      {
        title: "Interactive Annual Report",
        description: "Digital-first annual report with immersive storytelling elements.",
        tags: ["Web", "Animation", "Data Viz"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    name: "Emily Rodriguez",
    role: "Motion Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    bio: "Bringing interfaces to life through thoughtful micro-interactions and delightful animations.",
    projects: [
      {
        title: "Onboarding Experience",
        description: "Animated onboarding flow that reduced drop-off by 40%.",
        tags: ["Lottie", "After Effects", "Principle"],
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
      },
      {
        title: "Product Launch Video",
        description: "Cinematic product reveal for a consumer electronics brand.",
        tags: ["3D", "Cinema 4D", "Video"],
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
      },
    ],
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-background container">
     

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/20 to-transparent" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-body">
              Meet Our{" "}
              <span className="text-primary font-[Quicksand]">Design Team</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-body">
              A passionate collective of designers, creators, and problem-solvers 
              dedicated to crafting exceptional digital experiences that drive real 
              business results.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground text-body">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>4+ Expert Designers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground text-body">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground text-body">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>100% Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "98%", label: "Client Retention" },
              { value: "15+", label: "Design Awards" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground text-body">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-body">
              Our <span className="text-primary">Creative Minds</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-body">
              Each team member brings unique expertise and perspective to create 
              cohesive, impactful design solutions.
            </p>
          </motion.div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                {...member}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple to-purple-light">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-body mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-body/80 max-w-xl mx-auto mb-8">
              Let's bring your vision to life with our expert design team.
            </p>
        <Link href={"/contact-us"}>
            <button className="px-8 py-4 bg-primary text-body/80 font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/30">
                 Start Your Project
            </button>
            </Link>
          </motion.div>
        </div>
      </section>

    
    </div>
  );
};

export default Page;
