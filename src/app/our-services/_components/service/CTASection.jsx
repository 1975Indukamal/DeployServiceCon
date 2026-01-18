"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-dark via-dark-primary to-dark p-12 md:p-16 text-center">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Start Your Project Today</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-body mb-6">
              Ready to Transform Your{" "}
              <span className="text-primary">Digital Presence</span>?
            </h2>

            <p className="text-lg text-body/70 mb-10 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can help you achieve your business goals. 
              Get a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
         {/* <Link
        href="/contact-us"
        className="bg-primary text-body px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2 group"
      >
        Get Free Quote
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Link> */}

      <Link
        href="/contact-us"
       className="bg-primary text-body px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5 cursor-pointer inline-flex items-center"
      >
        Schedule a Call
      </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
