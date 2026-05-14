const SI = "https://cdn.simpleicons.org";

export interface TechItem {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  tag: string;
  description: string;
  longDesc: string;
  tech: TechItem[];
  github: string;
  demo: string | null;
}

export const projects: Project[] = [
  {
    title: "CivicSpot",
    tag: "Full Stack",
    description: "Community reporting tool for civic issues with real-time updates and geolocation.",
    longDesc:
      "Built end-to-end with Next.js, Mapbox, and Node.js. Features real-time issue tracking, user geolocation, interactive map pins, and an admin dashboard for local authorities.",
    tech: [
      { name: "Next.js",  icon: `${SI}/nextdotjs/A0AAB0`  },
      { name: "Mapbox",   icon: `${SI}/mapbox/1264A3`     },
      { name: "Node.js",  icon: `${SI}/nodedotjs/339933`  },
      { name: "MongoDB",  icon: `${SI}/mongodb/47A248`    },
    ],
    demo: "https://civicspot.vercel.app/",
    github: "https://github.com/HarshDhoriyani/CivicSpot",
  },
  {
    title: "Swasthya Mitra",
    tag: "Frontend",
    description: "Health-tech platform UI — responsive React frontend integrated with an ML backend.",
    longDesc:
      "Designed the full responsive UI in React.js, handled API integration with Axios, implemented form validation, and collaborated closely with the ML team to surface health predictions in the interface.",
    tech: [
      { name: "React.js",  icon: `${SI}/react/61DBFB`        },
      { name: "Tailwind",  icon: `${SI}/tailwindcss/06B6D4`  },
      { name: "REST API",  icon: `${SI}/swagger/85EA2D`      },
      { name: "Axios",     icon: `${SI}/axios/5A29E4`        },
    ],
    github: "https://github.com/HarshDhoriyani/Swasthya-mitra",
    demo: null,
  },
];