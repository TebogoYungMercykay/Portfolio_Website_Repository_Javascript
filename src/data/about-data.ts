import { AboutData } from "@/types";

export const aboutData: AboutData = {
  name: "Selepe Sello",
  imagesrc: "/images/tebogoyungmercykay.png",
  description:
    "Computer Science graduate and active open-source contributor specializing in building secure, scalable, high-performance solutions. My expertise spans Software Engineering, DevOps, AWS Cloud Development, Web Development, Database Management, and Software Testing, with a strong focus on end-product delivery and collaborative development.<br><br>Driven by a passion for Cybersecurity and Data Science, I thrive in dynamic environments that foster innovation and continuous learning. I am committed to delivering cutting-edge solutions that solve real-world challenges, meet evolving industry demands, and create meaningful impact through technology.",
  education: [
    {
      year: "Feb 2022 - Jun 2025",
      institution: "BSc Computer Sciences",
      details:
        "Graduated with distinction in Software Engineering, demonstrating advanced proficiency in software design, agile methodologies, and CI/CD practices. Developed and deployed 15+ projects on GitHub with comprehensive documentation and live demos. Participated in hackathons including the Nemisa 2023 Data Science Datathon, authored Capture The Flag cybersecurity challenges, and mentored peers through the STARS Mentorship Programme.",
      group: "degree",
    },
    {
      year: "Oct 2023 - Nov 2023",
      institution: "Web Development Bootcamp",
      details:
        "Completed an intensive bootcamp focused on modern web technologies and industry-standard development practices. Strengthened skills in building robust, scalable web applications with emphasis on responsive design, performance optimization, and unit testing. Advanced capabilities in coding techniques, debugging strategies, and modern JavaScript frameworks.",
      group: "certification",
    },
    {
      year: "Aug 2022 - Oct 2022",
      institution: "ALX-T (AWS) Cloud Development",
      details:
        "Completed the Cloud Development Nanodegree three weeks ahead of schedule while managing university coursework, ranking among the top four participants. Built production-ready applications featuring microservices architecture, serverless framework, and RESTful APIs with AWS S3 and PostgreSQL. Deployed containerized applications using Docker and Kubernetes, leveraging AWS Lambda, API Gateway, EC2, and CloudFormation.",
      group: "certification",
    },
  ],
  experience: [
    {
      year: "Oct 2025 - Jan 2026",
      position: "Software Developer, Map2Tech",
      details:
        "Designed and prototyped a new user interface from scratch using HTML, TailwindCSS, and JavaScript, then rebuilt the application with Django and HTMX for dynamic interactions. Integrated OpenAI and Google AI models for text, image, and video generation with real-time streaming via Server-Sent Events. Configured Django Vite to bundle JavaScript and manage TailwindCSS, replacing CDN usage for improved performance.",
      group: "dev",
    },
    {
      year: "Jan 2024 - Jun 2025",
      position: "Software Developer, Virtu-Tech",
      details:
        "Developed secure, scalable applications using modern languages and frameworks within Agile teams. Implemented CI/CD pipelines, automated testing, and code quality practices. Designed responsive, accessible user interfaces and managed cloud infrastructure through DevOps practices, automated deployments, and monitoring solutions.",
      group: "dev",
    },
    {
      year: "Feb 2023 - Feb 2024",
      position: "Computer Laboratory Technician, UP",
      details:
        "Maintained computer lab infrastructure supporting students and faculty, ensuring high availability through proactive monitoring and rapid issue resolution. Performed hardware maintenance, software installations, and troubleshooting to minimize downtime and optimize productivity. Conducted live casting setups for lectures and events while maintaining detailed documentation and implementing efficient workflow processes.",
      group: "technician",
    },
  ],
};
