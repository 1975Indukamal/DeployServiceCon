import React from "react";
import { services } from "@/utils/service";
import Head from "next/head";
import ServiceHero from "../_components/service/ServiceHero";
import OverviewSection from "../_components/service/OverviewSection";
import FeaturesSection from "../_components/service/FeaturesSection";
import BenefitsSection from "../_components/service/BenefitsSection";
import TechnologiesSection from "../_components/service/TechnologiesSection";
import FAQSection from "../_components/service/FAQSection";
import CTASection from "../_components/service/CTASection";
import ProcessSection from "../_components/service/ProcessSection";



export default function page({ params }) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Service Not Found
          </h1>
          <p className="text-muted-foreground">
            The requested service page does not exist.
          </p>
        </div>
      </div>
    );
  }

  const getSection = (title) => service.sections.find((s) => s.title === title);

  const overview = getSection("Overview");
  const features = getSection("Features");
  const benefits = getSection("Benefits");
  const technologies = getSection("Technologies");
  const process = getSection(
    "Development Process"
  ) || getSection("Consulting Process") || getSection("Marketing Process") || getSection("Outsourcing Process") || getSection("Cloud Process") || getSection("Design Process") || getSection("Implementation Process") || getSection("Team Setup Process");
  const faq = getSection("FAQs");

  // JSON-LD Structured Data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq?.content?.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })) || [],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      name: "ServiceConnect Technologies Pvt. Ltd",
      url: "https://www.serviceconnekt.com/",
    },
  };

  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.shortDescription} />
        <meta name="keywords" content={service.keywords?.join(", ") || ""} />
        <link
          rel="canonical"
          href={`https://www.serviceconnekt.com/services/${service.slug}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      <main className="flex flex-col gap-20 pb-20 bg-custombgc">
        <ServiceHero
          title={service.title}
          shortDescription={service.shortDescription}
          description={service.description}
        />

        {overview && <OverviewSection content={overview.content} />}
        {features && <FeaturesSection content={features.content} />}
        {benefits && <BenefitsSection content={benefits.content} />}
        {technologies && <TechnologiesSection content={technologies.content} />}
        {process && <ProcessSection content={process.content} />}
        {faq && <FAQSection content={faq.content} />}

        <CTASection />
      </main>
    </>
  );
}
