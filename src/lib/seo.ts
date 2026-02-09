/**
 * lib/seo.ts — Single source of truth for all SEO constants.
 *
 * Keyword strategy (three tiers per page):
 *   Tier 1 — Broad: "software engineer", "developer portfolio"
 *   Tier 2 — Tech + geo: "Next.js developer", "AWS cloud developer South Africa"
 *   Tier 3 — Long-tail: "hire software developer South Africa"
 */

export const SITE_URL = "https://tebogoyungmercykay.co.za";

export const BRAND = {
  name: "Selepe Sello",
  shortName: "TebogoYungMercykay",
  title: "Selepe Sello — Software Engineer & Developer",
  tagline: "Building Secure, Scalable Solutions with Modern Technologies",
  description:
    "Software Engineer and Computer Science graduate specializing in full-stack development, DevOps, AWS Cloud, and cybersecurity. Explore projects, skills, and experience building high-performance applications that solve real-world challenges.",
  logoUrl: `${SITE_URL}/images/teyumek-g.png`,
  faviconUrl: "/images/teyumek-g.png",
  profileImageUrl: `${SITE_URL}/images/tebogoyungmercykay.png`,
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/sello-selepe-tebogoyungmercykay",
  github: "https://github.com/TebogoYungMercykay",
  twitter: "@tebogoyungmercy",
  twitterUrl: "https://twitter.com/tebogoyungmercy",
  instagram: "https://www.instagram.com/tebogoyungmercykay",
  whatsapp: "https://wa.me/27664110178",
} as const;

export const OG_IMAGE = `${SITE_URL}/images/readme.png`;

export const CONTACT = {
  email: "sbkskhalo.kq@gmail.com",
  phone: "+27664110178",
  phoneDisplay: "+27 66 411 0178",
  location: {
    streetAddress: "Hillcrest",
    locality: "Pretoria",
    region: "Gauteng",
    country: "ZA",
    countryName: "South Africa",
    postalCode: "0011",
    latitude: -25.7479,
    longitude: 28.2293,
  },
} as const;

const KEYWORDS_BROAD = [
  "software engineer",
  "software developer",
  "full stack developer",
  "web developer",
  "backend developer",
  "frontend developer",
  "developer portfolio",
  "software engineer portfolio",
  "computer science graduate",
  "open source contributor",
  "DevOps engineer",
];

const KEYWORDS_TECH = [
  "Next.js developer",
  "TypeScript developer",
  "React developer",
  "Node.js developer",
  "Python developer",
  "Java developer",
  "C++ developer",
  "PHP developer",
  "AWS cloud developer",
  "FastAPI developer",
  "Docker Kubernetes developer",
  "serverless architecture",
  "CI/CD pipelines",
  "REST API development",
  "Tailwind CSS developer",
];

const KEYWORDS_GEO = [
  "software developer South Africa",
  "software engineer South Africa",
  "software engineer Pretoria",
  "full stack developer South Africa",
  "web developer Pretoria",
  "hire developer South Africa",
  "DevOps engineer South Africa",
  "AWS developer South Africa",
  "computer science graduate South Africa",
  "software developer Gauteng",
];

export interface PageSEO {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalPath?: string;
  keywords?: string[];
}

/**
 * Title: primary keyword in first 3 words, ≤60 chars (template appends " | Selepe Sello").
 * Description: 150–160 chars, ≥1 Tier 1 keyword, action-oriented ending.
 */
export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    title: "Software Engineer & Full Stack Developer",
    description:
      "Selepe Sello — Software Engineer specializing in full-stack development, DevOps, and AWS Cloud. Explore 12+ projects built with Next.js, Python, Java, C++, and more.",
    ogTitle: "Selepe Sello — Software Engineer & Developer",
    ogDescription:
      "Full-stack Software Engineer building secure, scalable solutions. Explore projects, skills, and professional experience across modern web and cloud technologies.",
    keywords: [
      "Selepe Sello",
      "Selepe Sello developer",
      "Selepe Sello software engineer",
      "TebogoYungMercykay",
      "TebogoYungMercykay portfolio",
      "hire full stack developer South Africa",
      "software developer portfolio website",
      "Next.js TypeScript portfolio",
      "cloud developer AWS South Africa",
      "cybersecurity developer South Africa",
      "microservices developer",
      "serverless developer AWS",
      "scalable web applications developer",
    ],
    canonicalPath: "/",
  },
  about: {
    title: "About — Education & Professional Experience",
    description:
      "BSc Computer Science graduate with distinction. Professional experience at Map2Tech, Virtu-Tech, and University of Pretoria in software engineering, DevOps, and cloud.",
    ogTitle: "About Selepe Sello — Education, Experience & Background",
    ogDescription:
      "Computer Science graduate with professional experience in software development, DevOps, and cloud architecture across South Africa.",
    keywords: [
      "software engineer education BSc",
      "BSc Computer Science South Africa",
      "University of Pretoria developer",
      "ALX cloud development graduate",
      "Map2Tech software developer",
      "Virtu-Tech software developer",
      "Django HTMX developer",
      "OpenAI integration developer",
      "agile software developer experience",
      "STARS mentorship programme",
      "Nemisa datathon",
      "cybersecurity capture the flag",
    ],
    canonicalPath: "/#about",
  },
  portfolio: {
    title: "Portfolio — Projects & Technical Skills",
    description:
      "12+ projects: Next.js web apps, AWS serverless architecture, Python compilers, Java testing frameworks, C++ networking, and real-time multiplayer systems with source code.",
    ogTitle: "Projects & Technical Skills — Selepe Sello",
    ogDescription:
      "From compiler construction to cloud-native microservices. 12+ production projects with source code, live demos, and detailed technical breakdowns.",
    keywords: [
      "software developer projects GitHub",
      "Next.js web development projects",
      "AWS serverless project portfolio",
      "Python compiler project RecSPL",
      "FastAPI backend project",
      "Java concurrent testing framework",
      "C++ network protocol implementation",
      "real-time multiplayer Node.js Socket.io",
      "civic engagement platform Next.js",
      "SmartKing Agri website developer",
      "Maximum Notion website developer",
      "Docker Kubernetes deployment project",
      "full stack project examples South Africa",
      "open source developer projects",
    ],
    canonicalPath: "/#Portfolio",
  },
  contact: {
    title: "Contact — Hire or Collaborate",
    description:
      "Reach out for hiring, collaboration, or project inquiries. Based in Pretoria, South Africa. Available for full-time roles, freelance projects, and consulting.",
    ogTitle: "Contact Selepe Sello — Software Engineer for Hire",
    ogDescription:
      "Available for software development roles, freelance projects, and collaboration. Based in Pretoria, South Africa. Let's build something together.",
    keywords: [
      "contact software developer South Africa",
      "hire developer Pretoria Gauteng",
      "software engineer for hire South Africa",
      "freelance developer inquiry South Africa",
      "collaboration software projects",
      "consulting developer South Africa",
      "software developer available for work",
    ],
    canonicalPath: "/#contact",
  },
};

/** Merges site-wide keyword pools with page-specific keywords, deduplicated. */
export function buildKeywords(page: PageSEO): string[] {
  const set = new Set<string>([
    ...KEYWORDS_BROAD,
    ...KEYWORDS_TECH,
    ...KEYWORDS_GEO,
    ...(page.keywords ?? []),
  ]);
  return Array.from(set);
}

export const STRUCTURED_DATA = {
  person: {
    jobTitle: "Software Engineer",
    alumniOf: [
      {
        name: "University of Pretoria",
        degree: "BSc Computer Sciences",
        startDate: "2022-02",
        endDate: "2025-06",
        honors: "Graduated with distinction",
      },
      {
        name: "ALX-T Cloud Development Nanodegree",
        degree: "AWS Cloud Development",
        startDate: "2022-08",
        endDate: "2022-10",
      },
    ],
    worksFor: [
      {
        name: "Map2Tech",
        role: "Software Developer",
        startDate: "2025-10",
        endDate: "2026-01",
        description:
          "Designed and prototyped UI with HTML, TailwindCSS, and JavaScript. Rebuilt with Django and HTMX. Integrated OpenAI and Google AI models with real-time streaming via Server-Sent Events.",
      },
      {
        name: "Virtu-Tech",
        role: "Software Developer",
        startDate: "2024-01",
        endDate: "2025-06",
        description:
          "Developed secure, scalable applications using modern frameworks within Agile teams. Implemented CI/CD pipelines, automated testing, and cloud infrastructure management.",
      },
      {
        name: "University of Pretoria",
        role: "Computer Laboratory Technician",
        startDate: "2023-02",
        endDate: "2024-02",
        description:
          "Maintained computer lab infrastructure supporting students and faculty. Performed hardware maintenance, software installations, and live casting setups.",
      },
    ],
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "DevOps",
      "AWS Cloud Development",
      "Cybersecurity",
      "Data Science",
      "Web Development",
      "Database Management",
      "CI/CD Pipelines",
      "Microservices Architecture",
      "Serverless Computing",
      "Docker",
      "Kubernetes",
      "Compiler Construction",
      "Computer Networking",
      "Concurrent Programming",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "PHP",
      "C#",
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Django",
      "Angular",
      "Ionic",
      "React Native",
      "Socket.io",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS DynamoDB",
      "AWS S3",
      "AWS EC2",
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "Docker",
      "Kubernetes",
      "NGINX",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "GitHub Actions",
      "Tailwind CSS",
      "NASM Assembly",
      "jQuery",
      "Framer Motion",
    ],
  },

  projects: [
    {
      name: "SmartKing Agri",
      description:
        "Custom marketing website for a South African AgriTech startup showcasing IoT-based farm monitoring, built with Next.js, TypeScript, and Tailwind CSS with Framer Motion animations.",
      url: "https://www.smartkingagri.com",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      type: "WebApplication",
    },
    {
      name: "The Republic",
      description:
        "Civic engagement platform enabling citizens to report and track government service delivery issues with real-time data visualizations, sentiment analysis, and interactive dashboards.",
      url: "https://github.com/COS301-SE-2024/The-Republic",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Flask",
        "Supabase",
        "Docker",
        "NGINX",
      ],
      type: "WebApplication",
    },
    {
      name: "RecSPL Compiler",
      description:
        "Complete compiler for the Recursive Student Programming Language with lexical analysis, parsing, semantic analysis, type checking, and NASM Assembly code generation.",
      url: "https://github.com/TebogoYungMercykay/RecSPL-Compiler-Construction-In-Python",
      technologies: ["Python", "NASM Assembly", "PyTest"],
      type: "SoftwareApplication",
    },
    {
      name: "FastAPI Backend & ML Service",
      description:
        "Production-ready RESTful API with JWT authentication, database migrations, Swagger documentation, and containerized deployment with CI/CD pipelines.",
      url: "https://github.com/TebogoYungMercykay/FastAPI-Backend-ML-Service",
      technologies: [
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "Docker",
        "GitHub Actions",
        "Alembic",
      ],
      type: "WebAPI",
    },
    {
      name: "AWS Serverless Task Manager",
      description:
        "Full-stack serverless task management application with AWS Lambda, DynamoDB, S3 image attachments, and Auth0 authentication using event-driven architecture.",
      url: "https://github.com/TebogoYungMercykay/AWS-Serverless-Task-Manager-App",
      technologies: [
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "S3",
        "Auth0",
        "Serverless Framework",
      ],
      type: "WebApplication",
    },
    {
      name: "Udagram Cloud Microservices",
      description:
        "Cloud-native image sharing platform using microservices architecture with user authentication, image processing pipelines, auto-scaling, and container orchestration.",
      url: "https://github.com/TebogoYungMercykay/Udagram-Image-Social-Microservices",
      technologies: [
        "Angular",
        "Ionic",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "NGINX",
      ],
      type: "WebApplication",
    },
    {
      name: "Image Filter Microservice",
      description:
        "Scalable cloud-based image processing API deployed on AWS Elastic Beanstalk with automated scaling and high availability configuration.",
      url: "https://github.com/TebogoYungMercykay/Udagram_Image_Filtering_Microservice",
      technologies: ["Node.js", "Express.js", "AWS Elastic Beanstalk"],
      type: "WebAPI",
    },
    {
      name: "Concurrent Testing Framework",
      description:
        "Custom multi-threaded Java testing framework enabling parallel test execution with configurable modes, demonstrating significant performance improvements via thread pool management.",
      url: "https://github.com/TebogoYungMercykay/Concurrent-Testing-Framework",
      technologies: [
        "Java",
        "Gradle",
        "ThreadPool Executor",
        "Apache Commons Math",
        "Google Guava",
      ],
      type: "SoftwareApplication",
    },
    {
      name: "Relational Database with Self-Organizing Treaps",
      description:
        "Custom database indexing system using self-organizing Treaps combining randomized BST properties with adaptive reorganization for optimized query performance.",
      url: "https://github.com/TebogoYungMercykay/Relational-Database_Using_Self-organizing_Treaps",
      technologies: ["Java"],
      type: "SoftwareApplication",
    },
    {
      name: "Computer Networking Protocol Suite",
      description:
        "Comprehensive suite of network protocol implementations from scratch including HTTP/1.1, CGI, FTP, SMTP, POP3, LDAP, and Telnet servers with RFC compliance.",
      url: "https://github.com/TebogoYungMercykay/Computer-Networking-In-CPP",
      technologies: ["C++", "Socket Programming"],
      type: "SoftwareApplication",
    },
    {
      name: "Maximum Notion",
      description:
        "Complete website transformation for South Africa's leading security services provider, migrated from WordPress to Next.js with enhanced performance and SEO.",
      url: "https://www.maximumnotion.co.za",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      type: "WebApplication",
    },
    {
      name: "The Brand Race",
      description:
        "Real-time multiplayer game where players compete to identify car brand logos with WebSocket communication, live scoreboards, and persistent leaderboards.",
      url: "https://github.com/TebogoYungMercykay/Brand_Race-Local_NodeJS_Socket_Server",
      technologies: [
        "Node.js",
        "Socket.io",
        "Express.js",
        "PHP",
        "MySQL",
      ],
      type: "WebApplication",
    },
  ],

  faqs: [
    {
      question: "What technologies does Selepe Sello specialize in?",
      answer:
        "Selepe Sello specializes in full-stack development with Next.js, React, TypeScript, Python (FastAPI, Django), Java, C++, and PHP. He also has expertise in AWS Cloud services (Lambda, DynamoDB, S3, EC2), DevOps tools (Docker, Kubernetes, GitHub Actions), and database systems (PostgreSQL, MySQL, MongoDB).",
    },
    {
      question: "Is Selepe Sello available for hire or freelance work?",
      answer:
        "Yes, Selepe Sello is available for software development roles, freelance projects, and consulting engagements. Based in Pretoria, South Africa, he can work remotely or on-site. Contact him via email or the contact form on this website.",
    },
    {
      question:
        "What is Selepe Sello's educational background?",
      answer:
        "Selepe Sello graduated with distinction in BSc Computer Sciences from the University of Pretoria. He also completed the ALX-T AWS Cloud Development Nanodegree three weeks ahead of schedule, ranking among the top four participants. He participated in hackathons, authored Capture The Flag cybersecurity challenges, and mentored peers through the STARS Mentorship Programme.",
    },
    {
      question:
        "What kind of projects has Selepe Sello built?",
      answer:
        "Selepe Sello has built 12+ projects including: production websites (SmartKing Agri, Maximum Notion), civic engagement platforms (The Republic), AWS serverless applications, Python compilers, Java testing frameworks, C++ network protocol implementations, and real-time multiplayer games. All projects are available on GitHub with documentation.",
    },
    {
      question: "Where is Selepe Sello based?",
      answer:
        "Selepe Sello is based in Pretoria, Gauteng, South Africa. He is available for both remote and on-site work across South Africa and internationally.",
    },
  ],
} as const;
