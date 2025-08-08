
export const generatemetaData = (meta = {}, openGraph = {}, twitter = {}) => {
  return {
    keywords: meta.keywords?.split?.(","),
    ...meta,
    openGraph: {
      locale: "en",
      type: "website",
      url: "https://www.serviceconnekt.com/",
      site_name: "ServiceConnekt Technology Pvt. Ltd.",
      images: ["/assets/images/log1.png"],
      ...openGraph
    },
    alternates: {
      canonical: meta.canonical,
    },
    twitter: {
      card: "summary",
      site: "@InfoServiceconnekt",
      image: "/assets/images/log1.png",
      creator: "@InfoServiceconnekt",
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

const Metadata = {
  Home: {
    title: "ServiceConnekt | Web, App & Custom Software Development Experts",
    description:
      "ServiceConnekt provides cutting-edge website, mobile app, and custom software development solutions tailored for modern businesses to grow online.",
    keywords:
      "Website Development, Android App Development, iOS App Development, Custom Software, Digital Solutions",
    canonical: "https://www.serviceconnekt.com/",
    robots: "index, follow",
  },
  About: {
    title: "About ServiceConnekt | Empowering Digital Transformation",
    description:
      "ServiceConnekt is a tech-forward company offering advanced website, mobile app, and software solutions focused on performance, innovation, and user experience.",
    canonical: "https://www.serviceconnekt.com/about-us",
    robots: "index, follow",
  },
  Blogs: {
    title: "ServiceConnekt Blog | Tech Insights & Digital Transformation Tips",
    description:
      "Stay ahead with ServiceConnekt's blog. Discover tech trends, expert tips, industry news, and strategies to accelerate your digital journey.",
    canonical: "https://www.serviceconnekt.com/blog",
    robots: "index, follow",
  },
  Expertise: {
    title:
      "Our Expertise | AI, Machine Learning & Predictive Analytics Solutions",
    description:
      "Explore how ServiceConnekt leverages AI, ML, and predictive analytics to build intelligent, business-focused solutions for a competitive edge.",
    canonical: "https://www.serviceconnekt.com/our-expertise",
    robots: "index, follow",
  },
  ContactUs: {
    title: "Contact Us | Connect with ServiceConnekt for Support & Queries",
    description:
      "Need expert development solutions? Get in touch with ServiceConnekt for web, app, or custom software development needs and support.",
    canonical: "https://www.serviceconnekt.com/contact-us",
    robots: "index, follow",
  },
  Services: {
    title: "Our Services | Web, App & Custom Software by ServiceConnekt",
    description:
      "ServiceConnekt offers expert website development, mobile app development, and tailored software solutions to meet your unique business goals.",
    keywords:
      "Website Development, App Development, Custom Software Solutions, Business Automation",
    canonical: "https://www.serviceconnekt.com/our-services",
    robots: "index, follow",
  },
  Apply: {
    title: "Apply Now | Join the ServiceConnekt Team",
    description:
      "Looking to grow your career with ServiceConnekt? Apply for open positions and join a team of innovators building future-ready tech.",
    canonical: "https://www.serviceconnekt.com/apply",
    robots: "index, follow",
  },
  Work: {
    title: "Our Work | ServiceConnekt Project Portfolio & Case Studies",
    description:
      "Discover ServiceConnekt's success stories. Browse our portfolio of innovative, user-centric websites, mobile apps, and software solutions.",
    canonical: "https://www.serviceconnekt.com/our-work",
    robots: "index, follow",
  },
  Career: {
    title: "Careers at ServiceConnekt | Explore Job Opportunities",
    description:
      "Explore exciting career opportunities at ServiceConnekt. We're hiring tech enthusiasts to build future-ready solutions. Apply now!",
    canonical: "https://www.serviceconnekt.com/career",
    robots: "index, follow",
  },
  privacyPolicy: {
    title: "Privacy Policy | ServiceConnekt - Your Data, Our Responsibility",
    description:
      "At ServiceConnekt, we respect your privacy. Learn how we collect, use, and protect your data in our detailed Privacy Policy.",
    canonical: "https://www.serviceconnekt.com/privacy-policy",
    robots: "index, follow",
  },
  termsAndConditions: {
    title: "Terms & Conditions | ServiceConnekt User Agreement",
    description:
      "Read ServiceConnekt's Terms and Conditions to understand your rights and responsibilities when using our platform and services.",
    canonical: "https://www.serviceconnekt.com/terms-and-conditions",
    robots: "index, follow",
  },
  webDevelopement: {
    title:
      "Web & App Development Services | Customized Digital Solutions by ServiceConnekt",
    description:
      "Need scalable and secure web or mobile apps? ServiceConnekt delivers expert development services tailored to meet your business needs.",
    canonical: "https://www.serviceconnekt.com/web-and-app-development",
    robots: "noindex, follow",
  },
};

export default function GetMetaData(page) {
  return Metadata[page];
}
