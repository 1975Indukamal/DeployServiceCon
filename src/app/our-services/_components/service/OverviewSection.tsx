"use client";

import { Target, Zap, Shield } from "lucide-react";

interface OverviewSectionProps {
  content: string;
}

const OverviewSection = ({ content }: OverviewSectionProps) => {
  const highlights = [
    { icon: Target, label: "Goal-Oriented", desc: "Aligned with your business objectives" },
    { icon: Zap, label: "High Performance", desc: "Optimized for speed and efficiency" },
    { icon: Shield, label: "Secure & Reliable", desc: "Enterprise-grade security standards" },
  ];

  return (
    <section className="">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-body/80 mb-6">
              What We <span className="text-gradient text-primary">Deliver</span>
            </h2>
            <p className="text-lg text-body/80 leading-relaxed mb-8">
              {content}
            </p>
            
            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-body/10 border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-soft"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{item.label}</h4>
                    <p className="text-sm text-body/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-2xl bg-body/10 shadow-elevated flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Target className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-xl font-semibold text-primary">Results-Driven</p>
                    <p className="text-body/80 mt-2">Solutions that work</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-16 h-16 rounded-xl bg-primary/20 blur-xl" />
              <div className="absolute bottom-6 right-6 w-24 h-24 rounded-full bg-primary/15 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
