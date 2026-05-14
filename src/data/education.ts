const SI = "https://cdn.simpleicons.org";

export interface EducationItem {
  degree: string;
  field: string;
  university: string;
  period: string;
  cgpa?: string;
  courses?: string[];
  achievements?: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  icon?: string;
  credentialUrl?: string;
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering Specialization in AI & ML",
    university: "VIT Bhopal University", 
    period: "2023 – 2027",
    cgpa: "8.86 / 10",                 
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management",
      "Computer Networks",
      "Machine Learning",
      "Artificial Intelligence",
      "Software Engineering",
      "Object-Oriented Programming",
    ],
    achievements: [
      "Finalist at Anvil Hackathon hosted by Scaler School of Technology, recognized for developing an impactful and innovative tech solution",
      "Built CivicSpot — a civic reporting platform deployed to production",
      "Earned Google Cloud merchandise for successful completion of hands-on labs in Google Arcade Program",
      "Solved 250+ DSA problems across various platforms, strengthening core problem-solving skills",
      "Collaborated with ML team to build Swasthya Mitra health-tech UI",
      "Active participant in college hackathons and open-source contributions",
      
    ],
  },
  {
    degree: "Higher Secondary Education",
    field: "Science Stream",
    university: "SNBPs International School", 
    period: "2022-2023",
    cgpa: "84.5%",                 
  },
];

export const certifications: CertificationItem[] = [
  // Uncomment and fill in your actual certifications:
  {
    name: "Applied Machine Learning in Python",
    issuer: "University of Michigan",
    year: "2025",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfm6hUiOV705m5leQRiKP9m23pV3dVPAAyiA&s",
  },
  {
    name: "Cloud Computing",
    issuer: "NPTEL (IIT Kharagpur)",
    year: "2025",
    icon: "https://edutinker.com/wp-content/uploads/2023/04/NPTEL-A-complete-Guide.png",
  },
  {
    name: "Data Structures and Algorithms in Java",
    issuer: "Apna College",
    year: "2023",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT73XgLxTTKH_QCnRuhHfPIpbaNJtRW0_Tug&s",
  },
];