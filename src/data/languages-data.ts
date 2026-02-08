import { LanguageProgress, LanguageIcon, LanguageDetail } from "@/types";

export const mostUsedLanguages: LanguageProgress[] = [
  {
    name: "C++ (Object-Oriented Programming and Software Design Patterns)",
    percentage: 95,
  },
  {
    name: "Java (Data Structures, Algorithms, and Concurrent Programming)",
    percentage: 90,
  },
  {
    name: "JavaScript (Advanced Client-Side Scripting and Frameworks)",
    percentage: 100,
  },
  {
    name: "PHP (RESTful APIs and Server-Side Scripting)",
    percentage: 98,
  },
  {
    name: "HTML & CSS (Responsive Web Design and Front-End Development)",
    percentage: 97,
  },
  {
    name: "Python (Scientific Computing and Data Analysis)",
    percentage: 100,
  },
  {
    name: "TypeScript (Strongly Typed JavaScript for Scalable Applications)",
    percentage: 90,
  },
  {
    name: "C# (Windows Forms Applications and .NET Framework)",
    percentage: 71,
  },
];

export const additionalLanguages: LanguageProgress[] = [
  {
    name: "Node.js & Web Sockets (Real-Time Multi-User Server Applications)",
    percentage: 95,
  },
  {
    name: "Ionic, Angular, React Native (Cross-Platform Mobile Applications)",
    percentage: 75,
  },
  {
    name: "AWS, Docker, Github Actions (Cloud Infrastructure and DevOps)",
    percentage: 100,
  },
  {
    name: "NPM (Node Package Management and Dependency Handling)",
    percentage: 100,
  },
  {
    name: "MySQL (Relational Database Management and Data Dumps)",
    percentage: 100,
  },
  {
    name: "JSON, jQuery, Ajax (Asynchronous HTTP Requests and Data Handling)",
    percentage: 100,
  },
  {
    name: "Next.js (Frontend Development and Server-Side Rendering)",
    percentage: 100,
  },
  {
    name: "NASM (Netwide Assembler for x86-64 Architecture)",
    percentage: 70,
  },
];

export const languageIcons: LanguageIcon[] = [
  { id: "languages_content1", imagesrc: "/images/languages/CPP.jpg", altText: "C++", style: 2 },
  { id: "languages_content2", imagesrc: "/images/languages/Java.jpg", altText: "Java", style: 1 },
  { id: "languages_content3", imagesrc: "/images/languages/Python.jpg", altText: "Python", style: 3 },
  { id: "languages_content4", imagesrc: "/images/languages/Javascript.png", altText: "JavaScript", style: 8 },
  { id: "languages_content5", imagesrc: "/images/languages/Typescript.png", altText: "TypeScript", style: 4 },
  { id: "languages_content6", imagesrc: "/images/languages/HTML_CSS.jpg", altText: "HTML & CSS", style: 7 },
  { id: "languages_content7", imagesrc: "/images/languages/PHP.jpg", altText: "PHP", style: 5 },
  { id: "languages_content8", imagesrc: "/images/languages/CSharp.jpg", altText: "C#", style: 6 },
];

export const languageDetails: LanguageDetail[] = [
  { id: 1, imagesrc: "/images/languages/CPP.jpg", name: "C++", description: "Programming Language", repositories: "8+" },
  { id: 2, imagesrc: "/images/languages/Java.jpg", name: "Java", description: "Programming Language", repositories: "11+" },
  { id: 3, imagesrc: "/images/languages/Python.jpg", name: "Python", description: "Programming Language", repositories: "4+" },
  { id: 4, imagesrc: "/images/languages/Javascript.png", name: "Javascript", description: "Programming Language", repositories: "5+" },
  { id: 5, imagesrc: "/images/languages/Typescript.png", name: "Typescript", description: "Strongly Typed Programming Language", repositories: "4+" },
  { id: 6, imagesrc: "/images/languages/HTML_CSS.jpg", name: "HTML & CSS", description: "Standard Markup Language and a Style sheet language", repositories: "9+" },
  { id: 7, imagesrc: "/images/languages/PHP.jpg", name: "PHP", description: "Scripting Language", repositories: "3+" },
  { id: 8, imagesrc: "/images/languages/CSharp.jpg", name: "C Sharp", description: "Programming Language", repositories: "1+" },
];
