
export const generatemetaData = (meta = {}, openGraph = {}, twitter = {}) => {
  return {
    keywords: meta.keywords?.split?.(","),
    ...meta,
    openGraph: {
      locale: "en",
      type: "website",
      title: "ServiceConnect – Official Website",
      description: "Welcome to ServiceConnect – your trusted partner for cutting-edge web, app, and custom software solutions.",
      url: "https://www.serviceconnekt.com/",
      site_name: "ServiceConnect Technology",
      images: ["https://www.serviceconnekt.com/assets/images/log1.png"],
      ...openGraph
    },
    alternates: {
      canonical: meta.canonical,
    },
    twitter: {
      card: "summary",
      site: "@InfoServiceConnect",
      image: "https://www.serviceconnekt.com/assets/images/log1.png",
      creator: "@InfoServiceConnect",
      ...twitter
    }
  };
}


// const Metadata = {
//   Home: {
//     title: "HexaBells | A New-Age Web and App Development Company",
//     description:
//       "Get end-to-end website, mobile apps, and custom software development solutions tailored to help modern businesses to explore unprecedented online opportunities.",
//     keywords:
//       "Website Development, Android/iOS App Development,Custom Software Development",
//     canonical: "https://www.serviceconnekt.com/",
//     robots: "index, follow",
//   },
//   About: {
//     title: "About HexaBells | Mobile and Web Development Solutions",
//     description:
//       "A new-age tech and innovation company, Hexabells specializes in website, app, custom software development with a focus on enhancing online user experiences",
//     canonical: "https://www.serviceconnekt.com/about-us",
//     robots: "index, follow",
//   },
//   Blogs: {
//     title: "Hexabells Blog: About Tech Trends, Digital & Industries News",
//     description:
//       "Explore the latest tech trends, digital solutions & expert advise. Stay updated with innovative strategies, tips, and industry news for your digital journey",

//     canonical: "https://www.serviceconnekt.com/blog",
//     robots: "index, follow",
//   },
//   Expertise: {
//     title:
//       "Hexabells Experties: AI, Machine Learning, and Predictive Analytics",
//     description:
//       "We augment human intelligence and creativity with the latest web technologies powered by AI, Machine Learning, and Predictive Analytics to create business-focused solutions.",
//     canonical: "https://www.serviceconnekt.com/our-expertise",
//     robots: "index, follow",
//   },
//   ContactUs: {
//     title: "Contact Us | Hexabells Technologies For Information & Support",
//     description:
//       "One of the best website, mobile and software development company, Reach out to us for any inquiries, assistance, or collaborations.",
//     canonical: "https://www.serviceconnekt.com/contact-us",
//     robots: "index, follow",
//   },

//   Services: {
//     title: "Hexabells: Web, App, & Custom Software Development Services",
//     description:
//       "Hexabells brings vast experience in website, app, and custom software development for businesses of all sizes, to achieve their digital transformation goals.",
//     keywords:
//       "Website Development, Android/iOS App Development,Custom Software Development",
//     canonical: "https://www.serviceconnekt.com/our-services",
//     robots: "index, follow",
//   },
//   Apply: {
//     title: "",
//     description: "",
//     canonical: "https://www.serviceconnekt.com/apply",
//     robots: "index, follow",
//   },
//   Work: {
//     title: "Hexabells Work: User-Centric Design and Devlopment",
//     description:
//       " Witness the magic unfold. Dive into HexaBells' work & discover a universe of websites & apps that captivate & convert. Prepare to be wowed!    ",
//     canonical: "https://www.serviceconnekt.com/our-work",
//     robots: "index, follow",
//   },
//   Career: {
//     title: "Hexabells Careers: Jobs Openings and Update",
//     description: "Hexabells! Stay informed with our latest job openings update. Find the perfect role for your skills and aspirations. ",
//     canonical: "https://www.serviceconnekt.com/career",
//     robots: "index, follow",
//   },
//   privacyPolicy: {
//     title: "Hexabells Privacy Policy: Your Information, Our Commitment",
//     description: "Hexabells ensures the security of your information by exploring our comprehensive Privacy Policy.",
//     canonical: "https://www.serviceconnekt.com/privacy-policy",
//     robots: "index, follow",
//   },
//   termsAndConditions: {
//     title: " Hexabells Terms and Conditions: Guidelines for User Agreement",
//     description: "Terms and Conditions for a comprehensive understanding of our user agreement. Navigate responsibly with clear guidelines",
//     canonical: "https://www.serviceconnekt.com/terms-and-conditions",
//     robots: "index, follow",
//   },
//   webDevelopement: {
//     title: "Expert App and Web Development Services | Customized Solutions",
//     description: "Looking for reliable and innovative app and web development services? Look no further! Our expert team delivers customized solutions to bring your ideas to life. Contact us now and take your business to the next level.",
//     canonical: "https://www.serviceconnekt.com/web-and-app-development",
//     robots: "noindex, follow",
//   },
// };

// const Metadata = {
//   Home: {
//     title: "ServiceConnect | Web, App & Custom Software Development Experts",
//     description:
//       "ServiceConnect provides cutting-edge website, mobile app, and custom software development solutions tailored for modern businesses to grow online.",
//     keywords:
//       "Website Development, Android App Development, iOS App Development, Custom Software, Digital Solutions",
//     canonical: "https://www.serviceconnekt.com/",
//     robots: "index, follow",
//   },
//   About: {
//     title: "About ServiceConnect | Empowering Digital Transformation",
//     description:
//       "ServiceConnect is a tech-forward company offering advanced website, mobile app, and software solutions focused on performance, innovation, and user experience.",
//     canonical: "https://www.serviceconnekt.com/about-us",
//     robots: "index, follow",
//   },
//   Blogs: {
//     title: "ServiceConnect Blog | Tech Insights & Digital Transformation Tips",
//     description:
//       "Stay ahead with ServiceConnect's blog. Discover tech trends, expert tips, industry news, and strategies to accelerate your digital journey.",
//     canonical: "https://www.serviceconnekt.com/blog",
//     robots: "index, follow",
//   },
//   Expertise: {
//     title:
//       "Our Expertise | AI, Machine Learning & Predictive Analytics Solutions",
//     description:
//       "Explore how ServiceConnect leverages AI, ML, and predictive analytics to build intelligent, business-focused solutions for a competitive edge.",
//     canonical: "https://www.serviceconnekt.com/our-expertise",
//     robots: "index, follow",
//   },
//   ContactUs: {
//     title: "Contact Us | Connect with ServiceConnect for Support & Queries",
//     description:
//       "Need expert development solutions? Get in touch with ServiceConnect for web, app, or custom software development needs and support.",
//     canonical: "https://www.serviceconnekt.com/contact-us",
//     robots: "index, follow",
//   },
//   Services: {
//     title: "Our Services | Web, App & Custom Software by ServiceConnect",
//     description:
//       "ServiceConnect offers expert website development, mobile app development, and tailored software solutions to meet your unique business goals.",
//     keywords:
//       "Website Development, App Development, Custom Software Solutions, Business Automation",
//     canonical: "https://www.serviceconnekt.com/our-services",
//     robots: "index, follow",
//   },
//   Apply: {
//     title: "Apply Now | Join the ServiceConnect Team",
//     description:
//       "Looking to grow your career with ServiceConnect? Apply for open positions and join a team of innovators building future-ready tech.",
//     canonical: "https://www.serviceconnekt.com/apply",
//     robots: "index, follow",
//   },
//   Work: {
//     title: "Our Work | ServiceConnect Project Portfolio & Case Studies",
//     description:
//       "Discover ServiceConnect's success stories. Browse our portfolio of innovative, user-centric websites, mobile apps, and software solutions.",
//     canonical: "https://www.serviceconnekt.com/our-work",
//     robots: "index, follow",
//   },
//   Career: {
//     title: "Careers at ServiceConnect | Explore Job Opportunities",
//     description:
//       "Explore exciting career opportunities at ServiceConnect. We're hiring tech enthusiasts to build future-ready solutions. Apply now!",
//     canonical: "https://www.serviceconnekt.com/career",
//     robots: "index, follow",
//   },
//   privacyPolicy: {
//     title: "Privacy Policy | ServiceConnect - Your Data, Our Responsibility",
//     description:
//       "At ServiceConnect, we respect your privacy. Learn how we collect, use, and protect your data in our detailed Privacy Policy.",
//     canonical: "https://www.serviceconnekt.com/privacy-policy",
//     robots: "index, follow",
//   },
//   termsAndConditions: {
//     title: "Terms & Conditions | ServiceConnect User Agreement",
//     description:
//       "Read ServiceConnect's Terms and Conditions to understand your rights and responsibilities when using our platform and services.",
//     canonical: "https://www.serviceconnekt.com/terms-and-conditions",
//     robots: "index, follow",
//   },
//   webDevelopement: {
//     title:
//       "Web & App Development Services | Customized Digital Solutions by ServiceConnect",
//     description:
//       "Need scalable and secure web or mobile apps? ServiceConnect delivers expert development services tailored to meet your business needs.",
//     canonical: "https://www.serviceconnekt.com/web-and-app-development",
//     robots: "noindex, follow",
//   },
// };

// export default function GetMetaData(page) {
//   return Metadata[page];
// }


const Metadata = {
  Home: {
    title: "ServiceConnekt | Web, Mobile & Custom Software Development Company",
    description: "ServiceConnekt builds high-performance websites, mobile apps, SaaS platforms and custom software for global businesses.",
    keywords: "ServiceConnekt, Software Development, Web Development, Mobile App Development, SaaS Development, Custom Software",
    canonical: "https://www.serviceconnekt.com/",
    robots: "index, follow",
  },
  About: {
    title: "About ServiceConnekt | Global Software Engineering Partner",
    description: "ServiceConnekt is a leading software development company delivering scalable web, mobile, and SaaS solutions for global digital transformation.",
    canonical: "https://www.serviceconnekt.com/about-us",
    robots: "index, follow",
    keywords: "About ServiceConnekt, Software Company India, IT Engineering Partner, ServiceConnekt Team",
  },
  Blogs: {
    title: "Tech Insights & Digital Growth Blog | ServiceConnekt",
    description: "Explore ServiceConnekt's blog for insights on software development, SaaS trends, mobile app innovation, and digital transformation.",
    canonical: "https://www.serviceconnekt.com/blog",
    robots: "index, follow",
    keywords: "Tech Blog, Software Development Blog, SaaS Blog, Digital Transformation Blog, IT Insights",
  },
  Services: {
    title: "Web & Mobile App Development Services | ServiceConnekt",
    description: "End-to-end web development, mobile apps, SaaS platforms, and custom software solutions tailored for your business needs.",
    canonical: "https://www.serviceconnekt.com/our-services",
    robots: "index, follow",
    keywords: "Custom Software Development, Web Development, Mobile App, SaaS Development, Cloud Solutions, ServiceConnekt Services",
  },
  Work: {
    title: "Portfolio & Case Studies | ServiceConnekt Client Success Stories",
    description: "Explore ServiceConnekt's portfolio of scalable, user-centric web applications, mobile apps, and custom software solutions built for global clients.",
    canonical: "https://www.serviceconnekt.com/our-work",
    robots: "index, follow",
    keywords: "ServiceConnekt Portfolio, Software Development Case Studies, Web App Projects",
  },
  ContactUs: {
    title: "Contact ServiceConnekt | Start Your Digital Project Today",
    description: "Ready to build? Contact ServiceConnekt for expert web, mobile app, SaaS, and custom software development services. Let's build something great.",
    canonical: "https://www.serviceconnekt.com/contact-us",
    robots: "index, follow",
    keywords: "Contact ServiceConnekt, Hire Developers, Software Consultation",
  },
  Career: {
    title: "Careers at ServiceConnekt | Join Our Innovation Team",
    description: "Join ServiceConnekt and build the future of technology. Explore job openings for developers, designers, and tech leaders.",
    canonical: "https://www.serviceconnekt.com/career",
    robots: "index, follow",
    keywords: "Careers at ServiceConnekt, Software Jobs, Tech Careers, Work at ServiceConnekt",
  },
  PrivacyPolicy: {
    title: "Privacy Policy | ServiceConnekt Data Protection",
    description: "Read ServiceConnekt's privacy policy to understand how we collect, use, and safeguard your data responsibly.",
    canonical: "https://www.serviceconnekt.com/privacy-policy",
    robots: "index, follow",
  },
  TermsAndConditions: {
    title: "Terms and Conditions | ServiceConnekt User Agreement",
    description: "Review ServiceConnekt's terms and conditions outlining our service agreement and user responsibilities.",
    canonical: "https://www.serviceconnekt.com/terms-and-conditions",
    robots: "index, follow",
  },
  ThankYou: {
    title: "Thank You | ServiceConnekt",
    description: "Thank you for reaching out to ServiceConnekt. Our team will get back to you shortly.",
    canonical: "https://www.serviceconnekt.com/thank-you",
    robots: "noindex, follow",
  },
  Sitemap: {
    title: "Sitemap | ServiceConnekt",
    description: "Navigate through ServiceConnekt's website structure and find our services, blog posts, and career opportunities.",
    canonical: "https://www.serviceconnekt.com/sitemap",
    robots: "index, follow",
  },
  InterviewHub: {
    title: "Interview Q&A Hub | ServiceConnekt Tech Preparation",
    description: "Prepare for your next tech interview with ServiceConnekt's curated Q&A hub covering React, Node.js, Python, Javascript, and more.",
    canonical: "https://www.serviceconnekt.com/interview-hub",
    robots: "index, follow",
    keywords: "Tech Interview Prep, React Interview Questions, Javascript Q&A, Coding Practice",
  },
};

export default function GetMetaData(page) {
  return Metadata[page] || Metadata.Home;
}




