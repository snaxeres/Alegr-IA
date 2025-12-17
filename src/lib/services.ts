
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

export const projectPlaceholders = [
  {
    id: 'project-1',
    title: 'Farmacia Salud Total - Landing Page',
    description: 'Landing page moderna y responsive para una farmacia, desarrollada con HTML5, SCSS, Bootstrap 5 y JavaScript. Incluye páginas de inicio, servicios y contacto, con animaciones y optimización SEO.',
    imageUrl: `https://picsum.photos/seed/100/600/400`,
    imageHint: "pharmacy website",
    liveUrl: "https://snaxeres.github.io/landingPharmhtml/index.html",
    features: [
      'Diseño 100% responsive (Mobile-First)',
      '3 Páginas (Inicio, Servicios, Contacto)',
      'Animaciones y transiciones suaves',
      'Optimización SEO básica',
      'Formulario de contacto funcional',
    ]
  },
  ...Array.from({ length: 4 }, (_, i) => ({
    id: `project-${i + 2}`,
    title: `Template ${i + 2}`,
    description: `Brief description for template ${i + 2}.`,
    imageUrl: `https://picsum.photos/seed/${101 + i}/600/400`,
    imageHint: "project example",
    features: [
      `Feature A for template ${i + 2}`,
      `Feature B for template ${i + 2}`,
      `Feature C for template ${i + 2}`,
    ]
  }))
];
