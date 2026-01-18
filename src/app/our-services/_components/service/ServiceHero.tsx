"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface ServiceHeroProps {
  title: string;
  shortDescription: string;
  description: string;
}

const ServiceHero = ({ title, shortDescription, description }: ServiceHeroProps) => {
  // Extract main title without the "| ServiceConnect" part
  const mainTitle = title.split("|")[0].trim();

  return (
    <section className="relative overflow-hidden text-body">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Services</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {mainTitle}
          </h1>

          {/* Short Description */}
          <p className="text-lg md:text-xl text-body/80 mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {shortDescription}
          </p>

          {/* Full Description */}
          <p className="text-base text-body/60 mb-10 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/contact-us"
              className="bg-primary text-body px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2 group"
>
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href={"/our-work"} className="btn-outline  px-6 py-3 rounded-xl border border-body text-body hover:border-primary hover:text-primary">
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default ServiceHero;
