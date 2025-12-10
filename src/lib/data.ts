export const cvData = {
    name: "Mario Andrés Hernández Moreno",
    title: "Ingeniero Biomédico | Especialista en IA",
    summary: "Ingeniero Biomédico con experiencia en gestión tecnológica hospitalaria, análisis de datos y desarrollo de soluciones de IA para el sector salud. Apasionado por la innovación para optimizar la seguridad, eficiencia y calidad en los entornos clínicos.",
    contact: {
      email: "marioandretybio@gmail.com",
      phone: "+573188189647",
      linkedin: "https://www.linkedin.com/in/mao-bio/",
      github: "https://github.com/mao-bio",
    },
    location: "Pasto, Nariño, Colombia",
    education: [
      {
        degree: "Especialización en Inteligencia Artificial",
        institution: "Universidad Autónoma de Manizales",
        period: "2024 - 2025",
        honor: ""
      },
      {
        degree: "Ingeniería Biomédica",
        institution: "Universidad Autónoma de Manizales",
        period: "2019 - 2023",
        honor: "Matrícula de Honor | Mención de Honor",
      },
    ],
};
  
export const experienceData = [
    {
      puesto: 'Ingeniero de Servicio y Coordinación de Gestión Biomédica',
      empresa: 'Bimtho Ingeniería S.A.S',
      periodo: 'Mar 2025 - Nov 2025',
      ubicacion: 'Ipiales, Nariño',
      logros: [
        'Gestión de inventarios de equipos y suministros en clínicas e IPS, con enfoque en el sector odontológico.',
        'Ejecución de mantenimientos preventivos y correctivos, logrando un 95% de disponibilidad de equipos.',
        'Implementación de aplicaciones de IA para optimizar la gestión de mantenimiento biomédico.',
        'Apoyo en procesos de habilitación de servicios de salud y cumplimiento del estándar de dotación.'
      ]
    },
    {
      puesto: 'Tutor de Inglés',
      empresa: 'Smart English Academy',
      periodo: 'Mar 2024 - Nov 2025',
      ubicacion: 'Ipiales, Nariño',
      logros: [
        'Desarrollo de materiales didácticos y evaluación personalizada de estudiantes.',
        'Integración de herramientas basadas en IA para el diseño de actividades interactivas y seguimiento del progreso.'
      ]
    },
    {
        puesto: 'Ingeniero de Apoyo en Coordinación Biomédica',
        empresa: 'TechMedic S.A.S',
        periodo: 'Nov 2023 – Dic 2023',
        ubicacion: 'Pasto, Nariño',
        logros: [
            'Gestión de seguimiento a proveedores y preparación de documentación para auditorías.',
            'Capacitación al personal de salud en el uso seguro de equipos biomédicos.'
        ]
    },
    {
        puesto: 'Practicante de Ingeniería Biomédica',
        empresa: 'TechMedic S.A.S',
        periodo: 'Ago 2023 – Nov 2023',
        ubicacion: 'Pasto, Nariño',
        logros: [
            'Ejecución de mantenimientos preventivos y correctivos en la Fundación Hospital San Pedro.',
            'Elaboración de listas de chequeo y apoyo en la digitalización de guías rápidas con códigos QR.'
        ]
    },
    {
        puesto: 'Practicante de Ingeniería Biomédica',
        empresa: 'Clínica Cardioneurovascular Pabón S.A.S',
        periodo: 'Ene 2023 – Jun 2023',
        ubicacion: 'Pasto, Nariño',
        logros: [
            'Apoyo en mantenimientos de equipos médicos y actualización de hojas de vida.',
            'Capacitación en tecnovigilancia y participación en rondas hospitalarias.'
        ]
    },
    {
      puesto: 'Joven Investigador - Nanociencia y Nanotecnología',
      empresa: 'Universidad Autónoma de Manizales',
      periodo: '2021 - 2024',
      ubicacion: 'Manizales, Caldas',
      logros: [
        'Desarrollo de algoritmo de Simulación de Nanopartículas de Magnetita por Dinámica Molecular (Python y C++).',
        'Participación como ponente en el XIV encuentro departamental de semilleros de investigación RREDSI.'
      ]
    }
];

export const skillsData = {
    programacion: {
      title: "Software y Herramientas",
      items: ['Python', 'C++', 'Matlab', 'Arduino', 'SQL', 'R', 'Power BI', 'Looker Studio', 'AppSheet', 'Firebase'],
      style: "bg-blue-600/10 border-blue-400/50 hover:bg-blue-600/30",
    },
    ia: {
      title: "Inteligencia Artificial",
      items: ['Machine Learning', 'Deep Learning', 'Análisis Predictivo', 'Modelos Supervisados y No Supervisados', 'ChatGPT/Gemini/Claude'],
      style: "bg-purple-600/10 border-purple-400/50 hover:bg-purple-600/30",
    },
    profesionales: {
      title: "Competencias Profesionales",
      items: ['Gestión Tecnológica', 'Mantenimiento Equipos Médicos', 'Calibración', 'Tecnovigilancia', 'Evaluación Tecnológica', 'Análisis de Datos Clínicos', 'Biomateriales'],
      style: "bg-cyan-600/10 border-cyan-400/50 hover:bg-cyan-600/30",
    },
    blandas: {
        title: "Habilidades Blandas",
        items: ['Liderazgo', 'Comunicación Asertiva', 'Resolución de Conflictos', 'Pensamiento Estratégico', 'Adaptabilidad'],
        style: "bg-green-600/10 border-green-400/50 hover:bg-green-600/30",
    }
};

export const certificationsData = [
    'Diplomado en Habilitación de Servicios de Salud (2025)',
    'Seminario de Metrología Biomédica (2025)',
    'Programa Nacional de Tecnovigilancia - INVIMA (2025)',
    'Gestión de Datos Clínicos con IA - UAM (2024)',
    'Participación en verano de investigación - Programa DELFIN (2023)',
    'Fundamentos en Analítica de Datos - Correlation One (2022)',
    'Certificación en Machine Learning with Matlab - MathWorks',
    'Matrícula de Honor - Ingeniería Biomédica (2024)',
    'Mención de Honor - Ingeniería Biomédica (2020-2024)'
];
  
export const projectsData = [
    {
      id: "proj1",
      title: "Predicción de Brotes de Enfermedad (EDA)",
      description: "Sistema de predicción basado en machine learning para anticipar casos de Enfermedad Diarreica Aguda en Ipiales, Nariño, utilizando datos clínicos y ambientales.",
      imageUrlId: "1",
      tags: ["Machine Learning", "Salud Pública", "Python"],
    },
    {
      id: "proj2",
      title: "Clustering de Pacientes con Señales Biomédicas",
      description: "Implementación de algoritmos de agrupamiento no supervisado para analizar patrones ocultos en registros biomédicos del dataset 'Thyroid Disease'.",
      imageUrlId: "2",
      tags: ["Clustering", "Análisis de Datos", "Scikit-learn"],
    },
    {
      id: "proj3",
      title: "Modelos de Predicción Cardiaca",
      description: "Entrenamiento de modelos de clasificación para detectar riesgo de falla cardíaca (dataset 'Heart Failure Prediction') y optimización de métricas como accuracy y AUC.",
      imageUrlId: "3",
      tags: ["Clasificación", "Deep Learning", "TensorFlow"],
    },
     {
      id: "proj4",
      title: "Análisis de Datos Empresariales",
      description: "Creación de dashboards interactivos y reportes ejecutivos con Power BI para la toma de decisiones estratégicas basadas en datos.",
      imageUrlId: "4",
      tags: ["Power BI", "Business Intelligence", "SQL"],
    },
  ];
  