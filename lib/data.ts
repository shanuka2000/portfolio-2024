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
      "This web app predicts BTC prices using historical data and Twitter trends from a week, offering minute-by-minute forecasts via machine learning and past trends.",
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
      "This mobile app uses symptoms and X-ray images to predict pneumonia, aiding in early diagnosis and supporting healthcare decisions.",
    tags: ["React Native", "Node js", "Python", "Flask", "MongoDB"],
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
