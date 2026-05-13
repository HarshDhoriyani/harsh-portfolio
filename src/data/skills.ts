const SI = "https://cdn.simpleicons.org";

export interface Skill {
  name: string;
  color: string;
  category: string;
  desc: string;
  icon: string;
}

export const skills: Skill[] = [
  {
    name: "Python", color: "#3776AB", category: "Languages",
    icon: `${SI}/python/3776AB`,
    desc: "Scripting, automation, data processing, API development",
  },
  {
    name: "JavaScript", color: "#F7DF1E", category: "Languages",
    icon: `${SI}/javascript/F7DF1E`,
    desc: "ES6+, async patterns, DOM manipulation, functional programming",
  },
  {
    name: "Java", color: "#f89820", category: "Languages",
    icon: `${SI}/openjdk/f89820`,
    desc: "OOP, multithreading, collections, Spring ecosystem",
  },
  {
    name: "TypeScript", color: "#3178C6", category: "Languages",
    icon: `${SI}/typescript/3178C6`,
    desc: "Static typing, interfaces, generics, type safety",
  },
  {
    name: "React.js", color: "#61DBFB", category: "Frontend",
    icon: `${SI}/react/61DBFB`,
    desc: "Hooks, context API, performance optimization, component architecture",
  },
  {
    name: "Next.js", color: "#A0AAB0", category: "Frontend",
    icon: `${SI}/nextdotjs/A0AAB0`,
    desc: "App Router, SSR, ISR, API routes, middleware",
  },
  {
    name: "HTML5", color: "#E34F26", category: "Frontend",
    icon: `${SI}/html5/E34F26`,
    desc: "Semantic markup, accessibility, SEO-friendly structure",
  },
  {
    name: "CSS3", color: "#1572B6", category: "Frontend",
    icon: `${SI}/css3/1572B6`,
    desc: "Flexbox, Grid, animations, responsive design",
  },
  {
    name: "TailwindCSS", color: "#06B6D4", category: "Frontend",
    icon: `${SI}/tailwindcss/06B6D4`,
    desc: "Utility-first, custom configs, dark mode, responsive utilities",
  },
  {
    name: "Bootstrap", color: "#7952B3", category: "Frontend",
    icon: `${SI}/bootstrap/7952B3`,
    desc: "Responsive grid, components, theming, customization",
  },
  {
    name: "Spring Boot", color: "#6DB33F", category: "Backend",
    icon: `${SI}/springboot/6DB33F`,
    desc: "REST APIs, security, JPA/Hibernate, microservices",
  },
  {
    name: "Node.js", color: "#339933", category: "Backend",
    icon: `${SI}/nodedotjs/339933`,
    desc: "Event-driven architecture, clustering, streams, npm",
  },
  {
    name: "Express.js", color: "#A0AAB0", category: "Backend",
    icon: `${SI}/express/A0AAB0`,
    desc: "Middleware, routing, error handling, template engines",
  },
  {
    name: "RESTful APIs", color: "#FF6C37", category: "Backend",
    icon: `${SI}/swagger/FF6C37`,
    desc: "Design principles, versioning, authentication, documentation",
  },
  {
    name: "MySQL", color: "#4479A1", category: "Database",
    icon: `${SI}/mysql/4479A1`,
    desc: "Complex queries, indexing, stored procedures, normalization",
  },
  {
    name: "MongoDB", color: "#47A248", category: "Database",
    icon: `${SI}/mongodb/47A248`,
    desc: "Aggregation pipeline, indexing, replication, sharding",
  },
  {
    name: "Docker", color: "#2496ED", category: "DevOps",
    icon: `${SI}/docker/2496ED`,
    desc: "Containerization, Docker Compose, multi-stage builds, volumes",
  },
  {
    name: "Pandas", color: "#9b59b6", category: "Data Science",
    icon: `${SI}/pandas/9b59b6`,
    desc: "Data manipulation, cleaning, aggregation, time series",
  },
  {
    name: "NumPy", color: "#4DABCF", category: "Data Science",
    icon: `${SI}/numpy/4DABCF`,
    desc: "Array operations, linear algebra, random generation, broadcasting",
  },
  {
    name: "Scikit-learn", color: "#F7931E", category: "Data Science",
    icon: `${SI}/scikitlearn/F7931E`,
    desc: "Classification, regression, clustering, preprocessing",
  },
  {
    name: "Regression", color: "#26A69A", category: "Data Science",
    icon: `${SI}/scikitlearn/26A69A`,
    desc: "Linear, logistic, polynomial, evaluation metrics",
  },
  {
    name: "Git", color: "#F05032", category: "Tools",
    icon: `${SI}/git/F05032`,
    desc: "Branching, merging, rebasing, conflict resolution",
  },
  {
    name: "GitHub", color: "#A0AAB0", category: "Tools",
    icon: `${SI}/github/A0AAB0`,
    desc: "Actions, CI/CD, issues, PRs, project management",
  },
  {
    name: "Jupyter", color: "#F37626", category: "Tools",
    icon: `${SI}/jupyter/F37626`,
    desc: "Notebooks, data visualization, interactive computing",
  },
  {
    name: "AWS (Basic)", color: "#FF9900", category: "Cloud",
    icon: `${SI}/amazonaws/FF9900`,
    desc: "EC2, S3, IAM, Lambda fundamentals",
  },
  {
    name: "Cloudinary", color: "#3448C5", category: "Cloud",
    icon: `${SI}/cloudinary/3448C5`,
    desc: "Image optimization, video processing, CDN delivery",
  },
];

export const categories = [
  "All", "Languages", "Frontend", "Backend",
  "Database", "DevOps", "Data Science", "Tools", "Cloud",
];