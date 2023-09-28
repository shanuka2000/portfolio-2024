import corpcommentImg from "@/public/corpcomment.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectData = [
  {
    title: "CryptoFutureVision",
    description:
      "A real-time web-based application for predicting Bitcoin (BTC) price using historical price data and twitter data collected over a seven-day period. This application offers the ability to view BTC price prediction for the next minute based on machine learning algorithms and past price trends.",
    tags: ["Python", "Flask", "React", "Javascript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Compello",
    description:
      "An invoice distribution system designed to offer multi-channel distribution of invoices and other documents.",
    tags: ["Java", "Spring Boot", "Terraform", "Docker", "Azure"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Heal Port",
    description:
      "A mobile application that utilizes both symptoms input and X-ray images to predict the likelihood of pneumonia in patients. This user friendly and efficient app assists in early diagnosis and supports healthcare professionals in making informed design decisions.",
    tags: [
      "React Native",
      "Node js",
      "Express js",
      "Python",
      "Flask",
      "MongoDB",
    ],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Azure",
  "Docker",
  "Terraform",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Java",
  "Spring boot",
  "Python",
  "Flask",
] as const;
