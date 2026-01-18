import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "25+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3+", label: "Years Experience" },
  { value: "7+", label: "Team Members" },
];

const testimonials = [
  {
    quote: "They transformed our vision into a stunning digital reality. The attention to detail and creative approach exceeded all expectations.",
    author: "Jennifer Williams",
    position: "CEO, TechVentures",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Working with this team was an absolute pleasure. They delivered on time, within budget, and the results speak for themselves.",
    author: "Michael Thompson",
    position: "Founder, StartupX",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Their expertise in UX design helped us increase our conversion rate by 40%. Highly recommend for any digital project.",
    author: "Amanda Foster",
    position: "Marketing Director, GlobalBrand",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

const clientLogos = [
  "Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix"
];

export const ClientsSection = () => {
  return (
    <section className="section-padding bg-card mb-20">
      <div className="container mx-auto">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-secondary/50"
            >
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2 text-primary">
                {stat.value}
              </div>
              <p className="text-body text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted By */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-body text-sm uppercase tracking-wider">Trusted by industry leaders</span>
          <div className="flex flex-wrap justify-center items-center gap-12 mt-8">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-bold text-body/50 hover:text-body transition-colors cursor-pointer"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Testimonials */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-body">
            What Our <span className="gradient-text text-primary">Clients Say</span>
          </h2>
        </motion.div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-8 rounded-2xl hover-lift"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-body/90 text-lg mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.author}</h4>
                  <p className="text-body text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
