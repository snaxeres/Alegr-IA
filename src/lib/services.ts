
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

export const projectPlaceholders: Record<string, any[]> = {
  "landing-page": [
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
    {
      id: 'project-2',
      title: 'Landing Page Moderna para Gimnasio',
      description: 'Sitio web responsive, moderno y optimizado para SEO, ideal para gimnasios y centros de fitness. Incluye Home, Servicios y Contacto, usando HTML5, SCSS, y Bootstrap 5.',
      imageUrl: 'https://picsum.photos/seed/101/600/400',
      imageHint: 'gym website',
      liveUrl: "https://snaxeres.github.io/landingGymHtml/index.html",
      features: [
        'Diseño 100% responsive y mobile-first',
        'Navegación sticky y header fijo',
        'Secciones: Hero, Servicios, Galería y Contacto',
        'Optimización SEO implementada',
        'Formulario de contacto accesible y validado',
      ]
    },
    {
      id: `project-3`,
      title: `Template 3`,
      description: `Brief description for template 3.`,
      imageUrl: `https://picsum.photos/seed/102/600/400`,
      imageHint: "project example",
      features: [
        `Feature A for template 3`,
        `Feature B for template 3`,
        `Feature C for template 3`,
      ]
    }
  ],
  "react-frontend": [
    {
      id: 'project-4',
      title: 'Ecommerce Gaming',
      description: 'E-commerce temático gaming responsive, con catálogo de productos, filtros, búsqueda, carrito persistente y checkout simulado.',
      imageUrl: 'https://picsum.photos/seed/103/600/400',
      imageHint: 'ecommerce gaming',
      liveUrl: 'https://ecommercejsprueba.netlify.app/index.html',
      features: [
        'Catálogo con filtros, búsqueda y paginación',
        'Carrito de compras persistente (LocalStorage)',
        'Checkout simulado con validación',
        'Feedback visual con toasts y loaders',
      ]
    },
    {
      id: 'project-5',
      title: 'Template 2',
      description: 'Brief description for template 2.',
      imageUrl: 'https://picsum.photos/seed/104/600/400',
      imageHint: 'dashboard project',
      features: [
        'Feature A for template 2',
        'Feature B for template 2',
        'Feature C for template 2',
      ]
    },
    {
      id: 'project-6',
      title: 'Template 3',
      description: 'Brief description for template 3.',
      imageUrl: 'https://picsum.photos/seed/105/600/400',
      imageHint: 'app interface',
      features: [
        'Feature A for template 3',
        'Feature B for template 3',
        'Feature C for template 3',
      ]
    }
  ],
  "full-stack": [
    {
      id: 'project-7',
      title: 'Template 1',
      description: 'Brief description for template 1.',
      imageUrl: 'https://picsum.photos/seed/106/600/400',
      imageHint: 'saas application',
      features: [
        'Feature A for template 1',
        'Feature B for template 1',
        'Feature C for template 1',
      ]
    },
    {
      id: 'project-8',
      title: 'Template 2',
      description: 'Brief description for template 2.',
      imageUrl: 'https://picsum.photos/seed/107/600/400',
      imageHint: 'database system',
      features: [
        'Feature A for template 2',
        'Feature B for template 2',
        'Feature C for template 2',
      ]
    },
    {
      id: 'project-9',
      title: 'Template 3',
      description: 'Brief description for template 3.',
      imageUrl: 'https://picsum.photos/seed/108/600/400',
      imageHint: 'api development',
      features: [
        'Feature A for template 3',
        'Feature B for template 3',
        'Feature C for template 3',
      ]
    }
  ]
};
