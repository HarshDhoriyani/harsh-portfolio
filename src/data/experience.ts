export interface ExperienceItem {
  type: "education" | "project" | "work";
  title: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    type: "education",
    title: "B.Tech — Computer Science & Engineering in AI & ML",
    org: "VIT Bhopal University",   // ← update this
    period: "2023 – Present",
    description:
      "Core focus on algorithms, data structures, software engineering, and machine learning. Actively participating in hackathons and open-source projects.",
    tags: ["DSA", "Software Engineering", "ML", "OS", "DBMS"],
  },
  {
    type: "project",
    title: "CivicSpot — Community Reporting Platform",
    org: "Personal Project",
    period: "2025",
    description:
      "Full-stack civic issue reporting tool with real-time updates, interactive Mapbox geolocation, and a Node.js backend. Deployed to production on Vercel.",
    tags: ["Next.js", "Mapbox", "Node.js", "MongoDB"],
  },
  {
    type: "project",
    title: "Swasthya Mitra — Health-Tech Platform",
    org: "Team Collaboration",
    period: "2026",
    description:
      "Frontend Developer: Designed the full responsive UI in React.js, integrated REST APIs via Axios, handled form validation, and collaborated with an ML team to surface health predictions.",
    tags: ["React.js", "Tailwind CSS", "REST API", "Axios"],
  },
];