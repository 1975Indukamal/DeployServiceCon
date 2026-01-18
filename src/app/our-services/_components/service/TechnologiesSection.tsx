"use client";

interface TechnologiesSectionProps {
  content: string[];
}

const TechnologiesSection = ({ content }: TechnologiesSectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-muted/50 border-y border-border">
      <div className="container">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Technologies
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-body">
            Powered by Modern Tech
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {content.map((tech, index) => (
            <div
              key={index}
              className="group px-6 py-4 rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-soft hover:-translate-y-1"
            >
              <span className="font-semibold text-body group-hover:text-primary transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
