"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";



const FAQSection = ({ content }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-dark text-body py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Header */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-body/70 mb-8">
              Got questions? We've got answers. If you don't find what you're looking for, feel free to reach out.
            </p>

            <div className="p-6 rounded-2xl bg-dark-primary/50 border border-body/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Still have questions?</p>
                  <p className="text-sm text-body/60">We're here to help</p>
                </div>
              </div>
              <Link href={"/contact-us"}
                           className="bg-primary w-full justify-center text-body px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2 group"
    >
                Contact Us
              </Link>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {content.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? "bg-dark-primary border-primary/40" 
                    : "bg-dark-primary/30 border-body/10 hover:border-body/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-body/70">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
