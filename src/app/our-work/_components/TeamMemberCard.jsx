import { motion } from "framer-motion";



const TeamMemberCard = ({ name, role, avatar, bio, projects, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      {/* Member Info Card */}
      <div className="card-glass p-6 mb-6 hover-lift">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0">
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-1 text-body">{name}</h3>
            <p className="text-primary font-medium text-sm mb-2">{role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed text-body">{bio}</p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, pIndex) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (index * 0.1) + (pIndex * 0.05) }}
            className="group/project gradient-purple rounded-2xl overflow-hidden hover-lift cursor-pointer"
          >
            <div className="aspect-video bg-purple-light/20 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover/project:opacity-100 group-hover/project:scale-105 transition-all duration-500"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-2 text-primary">{project.title}</h4>
              <p className="text-sm text-foreground/70 mb-3 line-clamp-2 text-body">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-primary/20 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
