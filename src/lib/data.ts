



export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrlId: string;
  tags: string[];
  embedUrl?: string;
};


export const cvData = {
    name: "Mario Hernández",
    title: "Ingeniero Biomédico | Especialista en IA",
    summary: [
        "Transformo **datos en decisiones** que salvan tiempo, recursos y vidas.",
        "Como **Ingeniero Biomédico y Especialista en Inteligencia Artificial**, conecto la ingeniería clínica, la gestión tecnológica y la IA para optimizar la salud mediante **análisis de datos y soluciones inteligentes** de alto impacto.",
        "Con un enfoque en **liderazgo colaborativo** y una fuerte orientación a resultados, me apasiona la innovación que mejora la **seguridad y eficiencia** en los entornos de salud."
    ],
    contact: {
      email: "marioandretybio@gmail.com",
      phone: "+573188189647",
      linkedin: "https://www.linkedin.com/in/mario-hern%C3%A1ndez-/",
      github: "https://github.com/mao-bio",
    },
    location: "Pasto, Nariño / Ipiales, Nariño, Colombia",
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

export type Experience = {
  puesto: string;
  empresa: string;
  periodo: string;
  ubicacion: string;
  icon: string;
  imageUrlId?: string;
  logros: string[];
};
  
export const experienceData: Experience[] = [
  {
    puesto: 'Ingeniero de Servicio y Coordinación de Gestión Biomédica',
    empresa: 'Bimtho Ingeniería S.A.S',
    periodo: 'Marzo 2025 – Noviembre/Diciembre 2025',
    ubicacion: 'Ipiales, Nariño, Colombia',
    icon: 'corporate',
    imageUrlId: 'exp-bimtho',
    logros: [
      '## RESPONSABILIDADES Y LOGROS',
      'Lideré la gestión técnica de equipos biomédicos en el sector odontológico, implementando soluciones de IA y análisis de datos para optimizar procesos.',
      '#### Gestión y Mantenimiento:',
      '- Alcancé un **95% de disponibilidad operativa** y **100% de trazabilidad** en inventarios.',
      '- Ejecuté más de 70 mantenimientos y realicé calibraciones bajo estándares nacionales e internacionales.',
      '#### Análisis de Datos y BI:',
      '- Diseñé sistemas de gestión en **SQL** y desarrollé dashboards en **Power BI** para monitoreo de KPIs.',
      '- Realicé análisis estadístico para optimizar programas de mantenimiento (MTBF, MTTR).',
      '#### IA y Automatización:',
      '- Implementé modelos de **IA para mantenimiento predictivo** y automaticé procesos con **Python y AppSheet**, reduciendo tiempos en un **40%**.',
      '#### Cumplimiento Normativo:',
      '- Apoyé la implementación de la **Resolución 3100** y contribuí en procesos de habilitación de servicios de salud.',
      '## TECNOLOGÍAS CLAVE',
      'Python, SQL, Power BI, AppSheet, Excel Avanzado, Looker Studio, Machine Learning.',
      '## IMPACTO',
      '✅ Optimización de costos, cero incidentes críticos y mejora en tiempos de respuesta.',
    ]
  },
  {
    puesto: 'Tutor de Inglés',
    empresa: 'Smart English Academy',
    periodo: 'Marzo 2024 – Noviembre 2025',
    ubicacion: 'Ipiales, Nariño, Colombia',
    icon: 'academic',
    logros: [
      '## RESPONSABILIDADES Y LOGROS',
      'Diseñé un currículo de inglés personalizado, integrando metodologías modernas y herramientas de IA para optimizar el aprendizaje y el seguimiento del progreso estudiantil.',
      '#### Diseño Pedagógico y Tecnológico:',
      '- Desarrollé materiales didácticos adaptativos y apliqué estrategias innovadoras como **gamificación** y **"flipped classroom"**.',
      '- Utilicé herramientas de IA (ChatGPT, Gemini) para diseñar actividades y automatizar la retroalimentación.',
      '#### Análisis de Datos y Personalización:',
      '- Realicé análisis de datos de desempeño para identificar áreas de mejora y personalizar las estrategias de enseñanza.',
      '## TECNOLOGÍAS CLAVE',
      'IA (ChatGPT, Gemini), Google Workspace, Canva, y plataformas de gamificación.',
      '## IMPACTO',
      '✅ Mejora medible en competencias lingüísticas y alta tasa de retención estudiantil.',
    ]
  },
  {
    puesto: 'Ingeniero de Apoyo y Practicante de Ing. Biomédica',
    empresa: 'TechMedic S.A.S',
    periodo: 'Agosto 2023 – Diciembre 2023',
    ubicacion: 'Pasto, Nariño, Colombia',
    icon: 'corporate',
    logros: [
      '## RESPONSABILIDADES Y LOGROS',
      'Durante mi doble rol, gestioné proveedores, preparé auditorías y lideré la digitalización de información técnica. Como practicante, ejecuté mantenimiento en la Fundación Hospital San Pedro y desarrollé apps para la gestión de inventarios.',
      '#### Gestión y Análisis (Ingeniero de Apoyo):',
      '- Gestioné proveedores, preparé documentación para auditorías y capacité al personal de salud.',
      '- Desarrollé dashboards en **Looker Studio** y realicé análisis con **Python** para el control de inventarios.',
      '#### Mantenimiento y Digitalización (Practicante):',
      '- Ejecuté mantenimiento preventivo y correctivo en equipos de alta complejidad.',
      '- Apoyé la digitalización de guías rápidas con **códigos QR** y desarrollé apps en **AppSheet** para la gestión de inventarios.',
      '## TECNOLOGÍAS CLAVE',
      'Looker Studio, Power BI, Python, AppSheet, Google Workspace.',
      '## IMPACTO',
      '✅ Mejora en la trazabilidad de la información, reducción del tiempo de acceso a documentación y automatización de reportes de inventario.',
    ]
  },
  {
    puesto: 'Joven Investigador y Monitor Académico',
    empresa: 'Universidad Autónoma de Manizales',
    periodo: '2021 – 2024',
    ubicacion: 'Manizales, Caldas, Colombia',
    icon: 'research',
    logros: [
      '## RESPONSABILIDADES Y LOGROS',
      'Como investigador, desarrollé un algoritmo de simulación de nanopartículas y procesé grandes volúmenes de datos. Como monitor, impartí tutorías en diseño de circuitos y programación.',
      '#### Investigación (Nanociencia y Nanotecnología):',
      '- Desarrollé un algoritmo de **Simulación de Nanopartículas de Magnetita** por Dinámica Molecular usando **Python y C++**.',
      '- Realicé análisis estadístico avanzado de terabytes de datos de simulación.',
      '- Presenté resultados en el XIV encuentro departamental de semilleros de investigación RREDSI.',
      '#### Monitor Académico (Diseño Biomédico y Circuitos):',
      '- Impartí tutorías en diseño de circuitos (**Multisim**) y programación con **Arduino y Python**.',
      '- Instruí en análisis de circuitos y procesamiento de señales biomédicas.',
      '## TECNOLOGÍAS CLAVE',
      'Python (NumPy, SciPy), C++, MATLAB, Arduino, LAMMPS, VMD, Multisim.',
      '## IMPACTO',
      '✅ **Como Investigador:** Desarrollo de un algoritmo de simulación y procesamiento de terabytes de datos.',
      '✅ **Como Monitor:** Formación exitosa de decenas de estudiantes y alta tasa de aprobación.',
    ]
  },
  {
    puesto: 'Becario de Investigación de Verano - Programa DELFIN',
    empresa: 'Universidad de Guadalajara',
    periodo: 'Junio 2023 – Agosto 2023',
    ubicacion: 'Guadalajara, Jalisco, México',
    icon: 'research',
    logros: [
        '## DESCRIPCIÓN DEL PROGRAMA',
        'Participé en el prestigioso Programa DELFIN, donde desarrollé investigación en biomateriales sostenibles, enfocándome en la síntesis y caracterización de nanomateriales a partir de residuos de agave.',
        '#### Investigación y Desarrollo:',
        '- Participé en el desarrollo de **nanomateriales eco-amigables** a partir de bagazo de agave, especializándome en la síntesis de nanopartículas de celulosa (**SEM, TEM, XRD**).',
        '#### Análisis de Datos y Nanotecnología:',
        '- Apliqué modelado estadístico (**DOE, ANOVA**) y **Python** para la optimización de procesos experimentales.',
        '- Contribuí al avance de la nanotecnología verde con procesos de menor huella ambiental.',
        '## TECNOLOGÍAS CLAVE',
        'Técnicas Experimentales (SEM, TEM, XRD, FTIR), Python (NumPy, Pandas, SciPy).',
        '## IMPACTO',
        '✅ Síntesis y caracterización exitosa de nanopartículas de celulosa, y contribución a la investigación en biomateriales sostenibles.',
    ]
  },
  {
    puesto: 'Practicante de Ingeniería Biomédica',
    empresa: 'Clínica Cardioneurovascular Pabón S.A.S',
    periodo: 'Enero 2023 – Junio 2023',
    ubicacion: 'Pasto, Nariño, Colombia',
    icon: 'corporate',
    logros: [
        '## DESCRIPCIÓN GENERAL',
        'Realicé mantenimiento de equipos médicos de alta complejidad, tecnovigilancia y gestión tecnológica, siendo pionero en la digitalización de procesos para optimizar inventarios.',
        '#### Mantenimiento y Gestión:',
        '- Ejecuté mantenimientos en equipos de alta tecnología como **sistemas de hemodinamia y ventiladores mecánicos**.',
        '- Actualicé sistemáticamente las hojas de vida de los equipos conforme a la **normativa INVIMA**.',
        '#### Tecnovigilancia y Digitalización:',
        '- Impartí capacitaciones en tecnovigilancia y participé en rondas de seguridad en áreas críticas.',
        '- Fui pionero en la **digitalización de inventarios médicos**, mejorando la trazabilidad.',
        '## IMPACTO',
        '✅ Cero eventos adversos relacionados con equipos y 100% de equipos con hojas de vida actualizadas.',
    ]
  },
];

export const skillsData = {
    programacion: {
      title: "Lenguajes, BI y Cloud",
      icon: "programacion",
      items: ['Python', 'R', 'SQL', 'C++', 'MATLAB', 'Arduino', 'Power BI', 'Looker Studio', 'Excel Avanzado', 'Tableau', 'Firebase', 'Google Workspace', 'Google Colab'],
    },
    ia: {
      title: "Inteligencia Artificial y Machine Learning",
      icon: "ia",
      items: ['Modelado Predictivo', 'Machine Learning', 'Deep Learning', 'Análisis Estadístico', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'Pandas', 'NumPy', 'ChatGPT', 'Gemini', 'Claude'],
    },
    profesionales: {
      title: "Ingeniería Biomédica y Clínica",
      icon: "profesionales",
      items: ['Gestión Tecnológica', 'Mantenimiento Equipos Médicos', 'Calibración', 'Tecnovigilancia', 'Evaluación Tecnológica', 'Análisis de Datos Clínicos', 'Biomateriales', 'Nanotecnología', 'Regulaciones y Normativas', 'ETL'],
    },
    blandas: {
        title: "Habilidades Blandas",
        icon: "blandas",
        items: ['Pensamiento Analítico y Estratégico', 'Resolución de Problemas', 'Liderazgo Colaborativo', 'Comunicación Asertiva', 'Trabajo en Equipo', 'Adaptabilidad', 'Innovación y Creatividad', 'Toma de decisiones', 'Storytelling con Datos'],
    }
};

export const certificationsData = [
    'Diplomado en Habilitación de Servicios de Salud (2025)',
    'Programa Nacional de Tecnovigilancia - INVIMA (2025)',
    'Seminario de Metrología Biomédica (2025)',
    'Curso de Primeros Auxilios Psicológicos (2025)',
    'Gestión de Datos Clínicos con IA - UAM (2024)',
    'Participación en verano de investigación - Programa DELFIN (2023)',
    'Fundamentos en Analítica de Datos - Correlation One (2022)',
    'Machine Learning with MATLAB - MathWorks',
    'MATLAB Fundamentals - MathWorks',
    'Competencias Digitales - Google Activate (2022)',
    'V Simposio Biomédica SENA (2022)',
    'Curso de Inglés - Universidad de Nariño (2016-2018)'
];
  
export const projectsData: Project[] = [
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
    title: "Análisis de Canciones en Spotify hasta el 2023",
    description: "Dashboard interactivo que explora las tendencias y patrones en los datos de las canciones más populares de Spotify hasta el año 2023.",
    imageUrlId: "4",
    tags: ["Looker Studio", "Business Intelligence", "Spotify"],
    embedUrl: "https://lookerstudio.google.com/embed/reporting/46e53d0a-6842-47fb-a93c-6a2422cc5579/page/mHL5D"
  },
  {
    id: "proj5",
    title: "Simulación de Nanopartículas",
    description: "Algoritmo de Simulación de Nanopartículas de Magnetita por Dinámica Molecular utilizando Python y C++ para analizar su comportamiento a diferentes escalas.",
    imageUrlId: "5",
    tags: ["Simulación", "Nanotecnología", "Python", "C++"],
  },
  {
    id: "proj6",
    title: "Automatización de Reportes",
    description: "Desarrollo de scripts en Python para automatizar la generación de reportes de mantenimiento, reduciendo el tiempo de procesamiento en un 40%.",
    imageUrlId: "6",
    tags: ["Automatización", "Python", "ETL"],
  },
];
