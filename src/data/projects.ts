export interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string,
    demo: string | null;
}

export const projects: Project[] = [
    {
        title: "CivicSpot",
        description: "Community reporting tool for civic issues. Built with modern web stack, real-time updates, and user geolocation feature.",
        tech: ["Next.js", "Mapbox", "Node.js"],
        demo: "https://civicspot.vercel.app/",
        github: "https://github.com/HarshDhoriyani/CivicSpot",
    },
    {
        title: "Swasthya Mitra",
        description: "Frontend Developer: Designed responsive UI in React.js, integrated APIs, form validation, and collaborated with ML team for health-tech platform.",
        tech: ["React.js", "Tailwind", "REST API", "Axios"],
        github: "https://github.com/HarshDhoriyani/Swasthya-mitra",
        demo: null,
    },
];