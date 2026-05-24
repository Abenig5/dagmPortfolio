import type { ContactLink, Education, Experience, Project, SkillGroup } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Ethiopian Holidays Booking Flow",
    category: "Travel Commerce",
    description:
      "Delivered the customer website end to end with dynamic holiday packages, flight bundling, hotel API integration, local Flygate payments, and international Worldpay checkout.",
    stack: ["Sitefinity CMS", ".NET Core", "External APIs", "Payments"],
    href: "https://www.ethiopianholidays.com/",
    highlights: ["Flight plus hotel offers", "Search to confirmation flow", "Online checkout"],
    visual: "travel",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/7/75/Ethiopian_Airlines_Logo.svg",
    imageAlt: "Ethiopian Airlines logo",
    imageFit: "contain"
  },
  {
    title: "Encompass Inn Website",
    category: "Hospitality Web",
    description:
      "Built the frontend for a responsive hospitality website in collaboration with a design team, focused on a modern interface and smooth browsing performance.",
    stack: ["Next.js", "React", "Responsive UI"],
    href: "https://encompassinn.com/",
    highlights: ["Hospitality website", "Design collaboration", "Performance focused"],
    visual: "hospitality",
    imageSrc: "https://images.pexels.com/photos/32978227/pexels-photo-32978227.jpeg?cs=srgb&fm=jpg",
    imageAlt: "Modern hotel lobby interior with lounge seating",
    imageFit: "cover"
  },
  {
    title: "Cilondis Payment Platform",
    category: "Payments",
    description:
      "Developed payment system frontend components with role-based management, transaction views, and business branch management features.",
    stack: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "Django"],
    href: "https://cilondis.com/",
    highlights: ["Payment options", "Role-based management", "ERP and e-commerce integration"],
    visual: "payments",
    imageSrc: "https://images.pexels.com/photos/32396570/pexels-photo-32396570.jpeg?cs=srgb&fm=jpg",
    imageAlt: "Fintech trading and payment dashboard visuals on screens",
    imageFit: "cover"
  },
  {
    title: "Autonomous Car Project",
    category: "Computer Vision",
    description:
      "Built an autonomous car project with a team of three, including object detection, navigation, obstacle avoidance, sensor integration, and car control.",
    stack: ["OpenCV", "ROS", "TensorFlow Lite", "Google Colab"],
    href: "https://www.crunchbase.com/organization/4k-labs",
    highlights: ["Object detection", "Obstacle avoidance", "Hardware integration"],
    visual: "autonomous",
    imageSrc: "https://cdn.pixabay.com/photo/2019/08/10/16/40/robot-car-4397278_1280.jpg",
    imageAlt: "Blue robotic toy car representing autonomous vehicle experimentation",
    imageFit: "cover"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description: "Responsive interfaces with modern React patterns, state management, and clean user experience details.",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Redux Toolkit"],
    tone: "primary"
  },
  {
    title: "Backend & CMS",
    description: "Scalable backend work across APIs, clean architecture, CMS widgets, and enterprise integrations.",
    skills: ["ASP.NET Core", "Django", "RESTful APIs", "Sitefinity CMS", "Clean Architecture"],
    tone: "secondary"
  },
  {
    title: "Cloud, Data & AI",
    description: "Deployment, dashboard, database, automation, and AI-focused engineering across production workflows.",
    skills: ["Azure App Service", "Azure DevOps", "SQL Server", "Python", "OpenCV", "TensorFlow Lite"],
    tone: "tertiary"
  }
];

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Ethiopian Airlines",
    period: "May 2024 - 2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "Delivered airline-facing web systems, CMS functionality, booking experiences, dashboards, and internal management tools across production workflows.",
    highlights: [
      "Engineered a Sitefinity CMS widget for in-flight meal pre-ordering.",
      "Delivered ETHolidays customer website features including dynamic holiday packages, flight bundling, hotel API integration, Flygate, and Worldpay checkout.",
      "Built survey forms, centralized database views, and BI dashboards for data-informed decisions.",
      "Used Azure App Service and CI/CD pipelines for automated deployments and monitoring."
    ]
  },
  {
    role: "Fullstack Developer (Freelance)",
    company: "Encompass Inn",
    period: "2025",
    location: "Remote / Addis Ababa",
    description:
      "Built a responsive hospitality website frontend in collaboration with a design team.",
    highlights: [
      "Developed the frontend using Next.js.",
      "Translated design direction into a modern and user-friendly interface.",
      "Optimized the browsing experience for responsive usage."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Cilondis",
    period: "Sep 2023 - May 2024",
    location: "Addis Ababa, Ethiopia",
    description:
      "Developed payment platform interfaces integrated with Django backend infrastructure.",
    highlights: [
      "Implemented payment options for e-commerce and ERP integrations.",
      "Used React, Next.js, Tailwind CSS, and Redux Toolkit for responsive UI delivery.",
      "Engineered role-based management, transaction views, and business branch management features."
    ]
  },
  {
    role: "Junior Software Developer",
    company: "4K Labs",
    period: "Oct 2020 - Jun 2023",
    location: "Addis Ababa, Ethiopia",
    description:
      "Worked on autonomous vehicle software and hardware integration with a small engineering team.",
    highlights: [
      "Built an autonomous car project using OpenCV and ROS with a team of three.",
      "Trained an object detection model with TensorFlow Lite and Google Colab.",
      "Gained experience in car control, sensor integration, hardware, electronics, and teamwork."
    ]
  }
];

export const education: Education[] = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Addis Ababa University",
    period: "Sep 2019 - Jul 2023",
    location: "Addis Ababa, Ethiopia",
    details: ["CGPA: 3.81 / 4.00"]
  },
  {
    title: "Coding Academy",
    institution: "African To Silicon Valley (A2SV)",
    period: "Dec 2022 - Oct 2023",
    location: "Addis Ababa, Ethiopia",
    details: [
      "Graduated with a strong foundation in data structures and algorithms.",
      "Solved 600+ coding problems on LeetCode and Codeforces.",
      "Designed RESTful APIs using .NET and clean architecture principles."
    ]
  }
];

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:dagmawimuluwork@gmail.com" },
  { label: "Phone", href: "tel:+251941270650" },
  { label: "LinkedIn", href: "https://linkedin.com/in/dagmawi-muluwork-b00a7b359" },
  { label: "Github", href: "https://github.com/Dagm-M" },
  { label: "Telegram", href: "https://t.me/D_0_g_M" },
  { label: "LeetCode", href: "https://leetcode.com/Dagm-22/" }
];

export const certificates = [
  "Certificate of participation by NASA International Space Apps Challenge of 2021.",
  "Python programming training certificate of training assistant."
];
