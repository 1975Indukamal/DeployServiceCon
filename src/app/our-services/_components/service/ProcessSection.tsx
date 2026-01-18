"use client";

import { Circle, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  content: string[];
}

const ProcessSection = ({ content }: ProcessSectionProps) => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-body mb-6">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-body">
            A streamlined process designed to deliver exceptional results on time and within budget.
          </p>
        </div>

        {/* Desktop Process */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="grid grid-cols-5 gap-4">
            {content.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-card border-2 border-primary flex items-center justify-center shadow-soft mb-6">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                
                {/* Arrow between steps */}
                {index < content.length - 1 && (
                  <div className="absolute top-6 -right-2 z-20">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                )}
                
                {/* Step content */}
                <div className="text-center">
                  <p className="font-semibold text-body text-sm leading-tight">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Process */}
        <div className="md:hidden space-y-4">
          {content.map((step, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">{index + 1}</span>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-body">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
