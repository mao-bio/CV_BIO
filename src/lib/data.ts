export const cvData = {
    name: "Mario Andrés Hernández Moreno",
    title: "Ingeniero Biomédico | Especialista en IA",
    summary: "Científico de Datos experto en transformar datos complejos en conocimiento accionable, con experiencia en modelos predictivos, machine learning y visualización de datos para el sector salud.",
    contact: {
      email: "marioandretybio@gmail.com",
      phone: "+573188189647",
      linkedin: "https://www.linkedin.com/in/marioandreshernandez/",
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
        'Implementación de sistemas SQL y dashboards en Power BI con un 95% de disponibilidad para análisis de datos de mantenimiento.',
        'Desarrollo de un modelo de IA para la predicción de fallos en equipos, optimizando la asignación de recursos de mantenimiento.',
        'Automatización de procesos de reporte técnico con Python y AppSheet, reduciendo los tiempos de generación en un 40%.',
        'Análisis estadístico de datos técnicos para fundamentar decisiones estratégicas en la adquisición y retiro de tecnología.'
      ]
    },
    {
      puesto: 'Tutor de Inglés',
      empresa: 'Smart English Academy',
      periodo: 'Mar 2024 - Nov 2025',
      ubicacion: 'Ipiales, Nariño',
      logros: [
        'Análisis del desempeño estudiantil aplicando técnicas estadísticas para identificar patrones de aprendizaje.',
        'Desarrollo de herramientas de evaluación automatizada basadas en IA para medir el progreso en la pronunciación y gramática.',
        'Creación de reportes analíticos para la dirección sobre la efectividad de las metodologías de enseñanza.'
      ]
    },
    {
      puesto: 'Joven Investigador - Nanociencia y Nanotecnología',
      empresa: 'Universidad Autónoma de Manizales',
      periodo: '2021 - 2024',
      ubicacion: 'Manizales, Caldas',
      logros: [
        'Desarrollo de algoritmos de simulación molecular utilizando Python y C++ para modelar interacciones de nanopartículas.',
        'Análisis estadístico de resultados experimentales de nanopartículas, generando visualizaciones científicas para publicaciones.',
        'Coautor de un artículo de investigación y ponente en el XIV encuentro de la Red Regional de Semilleros de Investigación (RREDSI).'
      ]
    }
];

export const skillsData = {
    programacion: {
      title: "Lenguajes de Programación",
      items: ['Python', 'R', 'SQL', 'C++', 'Matlab'],
      style: "bg-blue-600/10 border-blue-400/50 hover:bg-blue-600/30",
    },
    visualizacion: {
      title: "Visualización y BI",
      items: ['Power BI', 'Looker Studio', 'Tableau', 'Excel Avanzado'],
      style: "bg-cyan-600/10 border-cyan-400/50 hover:bg-cyan-600/30",
    },
    ia: {
      title: "Machine Learning e IA",
      items: ['Machine Learning', 'Deep Learning', 'Análisis Predictivo', 'ChatGPT/Claude/Gemini'],
      style: "bg-purple-600/10 border-purple-400/50 hover:bg-purple-600/30",
    },
    desarrollo: {
      title: "Desarrollo y Automatización",
      items: ['AppSheet', 'Arduino', 'ETL', 'APIs', 'Firebase'],
      style: "bg-green-600/10 border-green-400/50 hover:bg-green-600/30",
    }
};

export const certificationsData = [
    'Gestión de Datos Clínicos con IA - UAM (2024)',
    'Diplomado en Habilitación de Servicios de Salud (2025)',
    'Fundamentos en Analítica de Datos - Correlation One (2022)',
    'Programa Nacional de Tecnovigilancia - INVIMA (2025)',
    'Matlab - Machine Learning - MathWorks',
    'Programa DELFIN - Universidad de Guadalajara (2023)'
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
  