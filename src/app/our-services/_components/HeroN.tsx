
import { ArrowRight, Code, Smartphone, Sparkles } from "lucide-react";
import { services } from "@/utils/service";
import Link from "next/link";


const HeroN = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark text-body py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">ServiceConnect</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Business with{" "}
              <span className="text-primary">Digital Excellence</span>
            </h1>

            <p className="text-lg md:text-xl text-body/70 mb-10 max-w-2xl mx-auto">
              We craft exceptional digital experiences that drive growth, engagement, and success for businesses worldwide.
            </p>

            <Link 
              href="/our-services/web-development" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2 group"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
   <section className="relative py-24 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
  {/* Soft background blur shapes */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl" />
  <div className="absolute top-40 -right-20 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl" />

  <div className="container relative">
    {/* Heading */}
    <div className="text-center mb-20">
      <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4 bg-primary/10 px-4 py-1 rounded-full">
        Our Services
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
        What We <span className="text-primary">Offer</span>
      </h2>
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        Powerful, modern solutions crafted to grow your business faster and smarter.
      </p>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2  gap-10">
      {services.map((service, index) => {
        const Icon = index === 0 ? Code : Smartphone;
        return (
          <Link
            key={service.id}
            href={`/our-services/${service.slug}`}
            className="group relative rounded-3xl border border-border bg-white/70 backdrop-blur-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Gradient hover glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-rose-200/20 pointer-events-none" />

            <div className="relative flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:scale-110">
                <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title.split("|")[0].trim()}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
</section>

    </main>
  );
};

export default HeroN;
