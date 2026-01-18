"use client";

import { Check, Layers, Code, Smartphone, Globe, Lock, Gauge } from "lucide-react";

interface FeaturesSectionProps {
  content: string[];
}

const iconMap = [Layers, Code, Smartphone, Globe, Lock, Gauge];

const FeaturesSection = ({ content }: FeaturesSectionProps) => {
  return (
    <section className="section-padding  text-body py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-lg text-body/70">
            Every solution we build comes packed with essential features designed for success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {content.map((feature, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-dark-primary/50 border border-primary-foreground/10 transition-all duration-300 hover:border-primary/40 hover:bg-dark-primary"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-body">
                  {feature}
                </h3>

                {/* Check mark */}
                <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Check className="w-4 h-4 text-primary" />
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
