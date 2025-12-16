
export const services = [
  {
    id: "landing-page",
    title: "Landing Page",
    description: "A professional and responsive landing page to launch your product or service.",
    price: "US$ 80-100",
    features: [
      "Responsive Design",
      "Contact Form",
      "SEO Friendly",
      "Fast Loading Speed"
    ],
    imageId: "service-basic"
  },
  {
    id: "react-frontend",
    title: "React Frontend",
    description: "A modern and interactive frontend application built with React.",
    price: "US$ 250-600",
    features: [
      "Component-based architecture",
      "State Management",
      "API Integration",
      "Custom Animations"
    ],
    imageId: "service-ecommerce"
  },
  {
    id: "full-stack",
    title: "Full Stack Solution",
    description: "A complete web application from database to UI, tailored to your business needs.",
    price: "US$ 700-2500+",
    features: [
      "Frontend and Backend Development",
      "Database Design & Management",
      "User Authentication",
      "Deployment & Maintenance"
    ],
    imageId: "service-custom"
  }
];

export const projectPlaceholders = Array.from({ length: 5 }, (_, i) => ({
  id: `project-${i + 1}`,
  title: `Project ${i + 1}`,
  description: `Brief description of project ${i + 1}.`,
  imageUrl: `https://picsum.photos/seed/${100 + i}/600/400`,
  imageHint: "project example"
}));
