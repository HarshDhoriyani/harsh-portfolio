export interface Project {
  title: string;
  description: string;
  longDesc: string;
  tech: string[];
  github: string;
  demo: string | null;
  tag: string;
}

export const projects: Project[] = [
  {
    title: "CivicSpot",
    tag: "Full Stack",
    description: "Community reporting tool for civic issues with real-time updates and geolocation.",
    longDesc:
      "Built end-to-end with Next.js, Mapbox, and Node.js. Features real-time issue tracking, user geolocation, interactive map pins, and an admin dashboard for local authorities.",
    tech: ["Next.js", "Mapbox", "Node.js", "MongoDB"],
    demo: "https://civicspot.vercel.app/",
    github: "https://github.com/HarshDhoriyani/CivicSpot",
  },
  {
    title: "Swasthya Mitra",
    tag: "Frontend",
    description: "Health-tech platform UI — responsive React frontend integrated with an ML backend.",
    longDesc:
      "Designed the responsive UI in React.js, handled API integration with Axios, implemented form validation, and collaborated closely with the ML team to surface model predictions in the interface.",
    tech: ["React.js", "Tailwind CSS", "REST API", "Axios"],
    github: "https://github.com/HarshDhoriyani/Swasthya-mitra",
    demo: null,
  },
];