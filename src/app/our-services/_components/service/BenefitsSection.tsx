"use client";
import { TrendingUp, Star } from "lucide-react";

interface BenefitsSectionProps {
  content: string[];
}

const BenefitsSection = ({ content }: BenefitsSectionProps) => {
  return (
    <section className="section-padding ">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1 ">
            <div className="relative bg-body/10 p-8 rounded-3xl max-w-md mx-auto lg:mx-0 shadow-elevated">
              {/* Main card */}
              <div className="card-base shadow-elevated">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-body" />
                  </div>
                  <div>
                    <p className="text-sm text-body">Average Improvement</p>
                    <p className="text-2xl font-bold text-primary">+150%</p>
                  </div>
                </div>
                
                {/* Stats bars */}
                <div className="space-y-4 xxxxx">
                  {["Performance", "Engagement", "Conversions"].map((stat, i) => (
                    <div key={stat}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-body">{stat}</span>
                        <span className="font-semibold text-primary">{75 + i * 10}%</span>
                      </div>
                      <div className="h-2 bg-body rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${75 + i * 10}%` }}
                        />
                      </div> 
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-primary text-body font-semibold text-sm shadow-soft flex items-center gap-2">
                <Star className="w-4 h-4" />
                Proven Results
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-body mb-6">
              Why Choose <span className="text-gradient">Our Service</span>
            </h2>
            <p className="text-lg text-body mb-8">
              Experience tangible improvements across all key metrics with our proven approach.
            </p>

            {/* Benefits list */}
            <ul className="space-y-4">
              {content.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-accent/50 border border-transparent transition-all duration-300 hover:border-primary/20 hover:shadow-soft"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-primary font-medium pt-1">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
