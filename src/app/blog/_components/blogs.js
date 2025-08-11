// blogData.js (or you can define it in the same file)
export const blogs = [
    {
      id: 1,
      slug: "custom-website-experiences",
      title: "Custom Website Experiences: Crafting Your Digital Identity",
      description: "Discover how we craft visually stunning, responsive websites that engage users and drive conversions.",
      date: "August 3, 2025",
      cat:"UI/UX",
      author: "ServiceConnect Team",
      image: "/assets/images/blogs_updated/FoundServices_img.png", 
    },
    {
      id: 2,
      slug: "mobile-app-solutions",
      title: "Mobile App Solutions: User-First, Performance-Focused",
      description: "Learn how ServiceConnect builds intuitive, feature-rich mobile apps tailored for your business goals.",
      date: "August 5, 2025",
      cat:"Technology",
      author: "ServiceConnect Team",
      image: "/assets/images/blogs_updated/Banking_img.png",
    },
    {
      id: 3,
      slug: "tailored-software-development",
      title: "Tailored Software Development: Scalable & Secure",
      description: "From tools to platforms, ServiceConnect crafts software tailored to your business goals and workflows.",
      date: "August 7, 2025",
      author: "ServiceConnect Team",
      cat:"Android Applications",
      image: "/assets/images/blogs_updated/Manufacturing_img.png",
    },
    {
      d: 4,
      slug: "rapid-mvp-launch",
      title: "Rapid MVP Launch: Validate Product Ideas Fast",
      description: "Learn how ServiceConnect helps startups launch MVPs quickly to test, validate, and iterate with real users.",
      date: "August 10, 2025",
      author: "ServiceConnect Team",
      cat:"Technology",
      image: "/assets/images/blogs_updated/Transport_img.png",
    },
    {
      id: 5,
      slug: "legacy-system-revamp",
      title: "Legacy System Revamp: Modernize Without Breaking Things",
      description: "ServiceConnect helps modernize outdated platforms with sleek UI, improved performance, and scalable architecture.",
      date: "August 12, 2025",
      author: "ServiceConnect Team",
      cat:"Engineering",
      image: "/assets/images/blogs_updated/Banking_img.png",
    },
    {
      id: 6,
      slug: "website-refresh-rebranding",
      title: "Website Refresh & Rebranding: Refreshingly Effective",
      description: "Give your brand a powerful digital reboot with modern design, better UX, and mobile optimization through ServiceConnect.",
      date: "August 14, 2025",
      author: "ServiceConnect Team",
      cat:"Front end Technologies",
      image: "/assets/images/blogs_updated/Manufacturing_img.png",
    }
  ];
  



export const blogContent = [
    {
      id: 1,
      slug: "custom-website-experiences",
      title: "Custom Website Experiences: Crafting Your Digital Identity",
      description: "Discover how we craft visually stunning, responsive websites that engage users and drive conversions.",
      date: "August 3, 2025",
      cat:"UI/UX",
      author: "ServiceConnect Team",
      image: "/assets/images/blogs_updated/FoundServices_img.png",
      categories: ["Website Design", "UX/UI", "Branding"],
      content: [
        { type: "paragraph", text: "Your website is the digital front door to your brand. At ServiceConnect, we go beyond just creating pretty pages—we build intuitive, high-performing websites that tell your story and make visitors stick around." },
        { type: "heading", level: 2, text: "Why Custom Web Design Matters" },
        { type: "list", items: ["A unique, memorable brand presence", "Better user experience across devices", "Scalable architecture that grows with you", "Full control over performance and SEO"] },
        { type: "heading", level: 2, text: "Our Approach" },
        { type: "paragraph", text: "We begin with understanding your business goals, your users, and the challenges you're solving. Then we design and develop a responsive, optimized website tailored to your specific needs." },
        { type: "heading", level: 3, text: "We focus on:" },
        { type: "list", items: ["Clean, modern UI/UX", "Fast load times", "Accessibility & SEO best practices", "CMS integration (if needed)"] },
        { type: "heading", level: 2, text: "Real Results" },
        { type: "paragraph", text: "Our clients have seen increased engagement, longer session durations, and higher conversion rates after switching to our custom website solutions." },
        { type: "heading", level: 2, text: "Let’s Build Something Beautiful" },
        { type: "paragraph", text: "Whether you're launching a new venture or reimagining an existing brand, ServiceConnect helps you create a digital presence that drives results." },
        { type: "paragraph", text: "Ready to transform your website? Let’s get started today." }
      ]
    },
    {
      id: 2,
      slug: "mobile-app-solutions",
      title: "Mobile App Solutions: User-First, Performance-Focused",
      description: "Learn how ServiceConnect builds intuitive, feature-rich mobile apps tailored for your business goals.",
      date: "August 5, 2025",
      cat:"Technology",
      author: "ServiceConnect Team",
      image: "/assets/images/blogs_updated/Banking_img.png",
      categories: ["Mobile App", "Technology", "UX"],
      content: [
        { type: "paragraph", text: "Mobile is where your users are. ServiceConnect develops high-performing mobile apps for iOS and Android focusing on usability, speed, and reliability." },
        { type: "heading", level: 2, text: "Why Mobile-first Design?" },
        { type: "list", items: ["High conversion potential", "Push notifications for engagement", "Seamless user experience", "Offline capabilities"] },
        { type: "paragraph", text: "Our mobile apps are designed with users in mind: intuitive navigation, fast loading screens, and elegant visual design." },
        { type: "heading", level: 2, text: "What We Deliver" },
        { type: "list", items: ["Native and cross‑platform options", "Secure user authentication", "Scalable architecture", "App store optimization"] },
        { type: "heading", level: 2, text: "Case Study: Client Success" },
        { type: "paragraph", text: "One of our e-commerce clients saw a 40% boost in repeat orders after launching their native iOS app with push messaging." },
        { type: "heading", level: 2, text: "Let's Build Together" },
        { type: "paragraph", text: "Whether it’s consumer apps, internal tools, or marketplaces, ServiceConnect builds apps that perform." }
      ]
    },
    {
      id: 3,
      slug: "tailored-software-development",
      title: "Tailored Software Development: Scalable & Secure",
      description: "From tools to platforms, ServiceConnect crafts software tailored to your business goals and workflows.",
      date: "August 7, 2025",
      author: "ServiceConnect Team",
      cat:"Android Applications",
      image: "/assets/images/blogs_updated/Manufacturing_img.png",
      categories: ["Software", "Custom Solutions", "Business"],
      content: [
        { type: "paragraph", text: "Every business is unique. That’s why ServiceConnect builds custom software solutions—scalable, secure, and aligned with your operational needs." },
        { type: "heading", level: 2, text: "Advantages of Custom Software" },
        { type: "list", items: ["Automated workflows", "Data-driven dashboards", "Improved efficiency", "Competitive advantage"] },
        { type: "paragraph", text: "Off-the-shelf tools often limit flexibility. With custom software, you control features, integrations, and how your data flows." },
        { type: "heading", level: 2, text: "Our Development Process" },
        { type: "list", items: ["Requirement analysis", "Agile sprints", "Quality assurance", "Deployment & support"] },
        { type: "heading", level: 2, text: "Security & Compliance" },
        { type: "paragraph", text: "We follow best practices: secure database handling, encrypted communication, and role-based access controls." },
        { type: "heading", level: 2, text: "Join the Evolution" },
        { type: "paragraph", text: "Looking to digitize your internal tools, customer portals, or system automation? Let’s design a solution that works." }
      ]
    },
    {
      id: 4,
      slug: "rapid-mvp-launch",
      title: "Rapid MVP Launch: Validate Product Ideas Fast",
      description: "Learn how ServiceConnect helps startups launch MVPs quickly to test, validate, and iterate with real users.",
      date: "August 10, 2025",
      author: "ServiceConnect Team",
      cat:"Technology",
      image: "/assets/images/blogs_updated/Transport_img.png",
      categories: ["Startup", "MVP", "Lean"],
      content: [
        { type: "paragraph", text: "Launching an MVP validates your idea without wasting time or budget. At ServiceConnect, we build lean MVPs fast so you can gather feedback early." },
        { type: "heading", level: 2, text: "Why Go MVP?" },
        { type: "list", items: ["Test ideas quickly", "Engage early users", "Attract investors", "Avoid overbuilding"] },
        { type: "paragraph", text: "We deliver functional prototypes with core features, polished UI, and real-user testing capabilities." },
        { type: "heading", level: 2, text: "Our Workflow" },
        { type: "list", items: ["Discovery workshop", "Wireframes & UI mockups", "Agile development", "Usability testing"] },
        { type: "heading", level: 2, text: "Startup Success Story" },
        { type: "paragraph", text: "A fintech startup reduced development costs by 60% and secured early funding using our streamlined MVP process." },
        { type: "heading", level: 2, text: "Start Lean, Grow Fast" },
        { type: "paragraph", text: "Have a big idea? Let’s validate it fast with a smart MVP built just for you." }
      ]
    },
    {
      id: 5,
      slug: "legacy-system-revamp",
      title: "Legacy System Revamp: Modernize Without Breaking Things",
      description: "ServiceConnect helps modernize outdated platforms with sleek UI, improved performance, and scalable architecture.",
      date: "August 12, 2025",
      author: "ServiceConnect Team",
      cat:"Engineering",
      image: "/assets/images/blogs_updated/Banking_img.png",
      categories: ["Modernization", "Legacy Systems", "UX"],
      content: [
        { type: "paragraph", text: "Old systems can hurt your productivity. ServiceConnect modernizes legacy platforms—preserving what works and delivering a modern user experience." },
        { type: "heading", level: 2, text: "Why Revamp?" },
        { type: "list", items: ["Better UX & performance", "Improved maintainability", "Reduced technical debt", "Scalable future-proof architecture"] },
        { type: "paragraph", text: "We audit your existing system, plan incremental upgrades, and rebuild modules with modern frameworks." },
        { type: "heading", level: 2, text: "Modernization Approach" },
        { type: "list", items: ["Code audit & documentation", "UI redesign", "Backend migration", "QA & stress testing"] },
        { type: "heading", level: 2, text: "Real-World Impact" },
        { type: "paragraph", text: "A manufacturing client saw a 50% boost in operational speed and 30% fewer support tickets after our revamp." },
        { type: "heading", level: 2, text: "Revamp with Confidence" },
        { type: "paragraph", text: "Ready to upgrade your legacy system? We’ll help you modernize with minimal disruption and maximum ROI." }
      ]
    },
    {
      id: 6,
      slug: "website-refresh-rebranding",
      title: "Website Refresh & Rebranding: Refreshingly Effective",
      description: "Give your brand a powerful digital reboot with modern design, better UX, and mobile optimization through ServiceConnect.",
      date: "August 14, 2025",
      author: "ServiceConnect Team",
      cat:"Front end Technologies",
      image: "/assets/images/blogs_updated/Manufacturing_img.png",
      categories: ["Rebranding", "Design", "Website Refresh"],
      content: [
        { type: "paragraph", text: "Your site deserves a glow-up. ServiceConnect offers full website refresh and rebranding services to help your brand shine online." },
        { type: "heading", level: 2, text: "Why Rebrand?" },
        { type: "list", items: ["Modern visuals & layouts", "Consistent branding", "Improved mobile UX", "SEO & accessibility improvements"] },
        { type: "paragraph", text: "We combine visual design, UX improvements, and backend enhancements for a comprehensive refresh." },
        { type: "heading", level: 2, text: "Our Refresh Process" },
        { type: "list", items: ["Brand audit", "UI/UX redesign", "Responsive coding", "Performance boost & testing"] },
        { type: "heading", level: 2, text: "Client Results" },
        { type: "paragraph", text: "A rebranding client saw a 45% increase in time-on-site and a 20% increase in conversions post-launch." },
        { type: "heading", level: 2, text: "Ready to Rebrand?" },
        { type: "paragraph", text: "Let’s give your website a fresh, modern identity that truly reflects your brand’s potential." }
      ]
    }
  ];
  