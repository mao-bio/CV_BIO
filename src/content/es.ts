import type { Content } from './types';
import { birthsImages, links } from './shared';

// Fuente: perfil profesional consolidado de Mario (2026-11-14).
// Regla: no inventar ni exagerar. El cargo actual es de soporte técnico (no coordinación ni jefatura)
// y las cifras aproximadas (95 % de disponibilidad, 40 % de reducción de tiempos) no se publican.
export const es: Content = {
  person: {
    name: 'Mario Hernández',
    fullName: 'Mario Andrés Hernández Moreno',
    title: 'Ingeniero Biomédico | Especialista en IA',
    location: 'Ipiales / Pasto, Nariño, Colombia',
    availability: 'Disponible para trabajo remoto · Posible reubicación a Manizales',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Avanzado (nivel profesional)' },
    ],
    education: [
      {
        degree: 'Especialización en Inteligencia Artificial',
        institution: 'Universidad Autónoma de Manizales (UAM)',
        period: 'Abr 2024 – Jun 2025',
        honor: '',
      },
      {
        degree: 'Ingeniería Biomédica',
        institution: 'Universidad Autónoma de Manizales (UAM)',
        period: '2019 – 2023',
        honor: 'Mención de Honor | Matrícula de Honor',
        note: 'Trabajo de grado: Estudio estructural de nanopartículas de magnetita mediante simulaciones de dinámica molecular.',
      },
    ],
  },

  home: {
    headline: ['Transformando', 'Datos en Vida'],
    summary: [
      'Soy **Ingeniero Biomédico y Especialista en Inteligencia Artificial**. Trabajo en dos frentes que se refuerzan entre sí: la **gestión de tecnología biomédica** en clínicas y hospitales, y el **análisis de datos y desarrollo de soluciones con IA**.',
      'Elige abajo el perfil que estás buscando.',
    ],
    seoTitle: 'Mario Hernández | Ingeniero Biomédico y Especialista en IA',
    seoDescription:
      'Portafolio de Mario Andrés Hernández Moreno: Ingeniero Biomédico (gestión de tecnología biomédica) y Especialista en IA (análisis de datos, machine learning y desarrollo).',
  },

  tracks: {
    bio: {
      label: 'Ingeniería Biomédica',
      short: 'Biomédico',
      role: 'Ingeniero Biomédico · Gestión de Tecnología Biomédica',
      headline: ['Tecnología biomédica', 'segura y disponible'],
      summary: [
        'Ingeniero Biomédico con experiencia en **soporte técnico de equipos médicos**, mantenimiento preventivo y correctivo, tecnovigilancia, inventarios y hojas de vida, y apoyo a procesos de habilitación.',
        'Hoy doy soporte técnico a los equipos biomédicos de todas las sedes de la **IPS Municipal de Ipiales** (más de 3.000 equipos), y desarrollo **herramientas digitales** para la gestión tecnológica.',
      ],
      cvHeadline:
        'Ingeniero Biomédico | Gestión de Tecnología Biomédica · Tecnovigilancia · Mantenimiento · IA aplicada a la salud',
      cvProfile:
        'Ingeniero Biomédico con Especialización en Inteligencia Artificial y experiencia en soporte técnico de equipos médicos, mantenimiento preventivo y correctivo, tecnovigilancia, gestión de inventarios y hojas de vida, y apoyo a procesos de habilitación en instituciones de salud. Desarrollo herramientas digitales (apps de inventario, dashboards) para la gestión tecnológica.',
      cardText:
        'Soporte técnico y mantenimiento de equipos médicos, tecnovigilancia, inventarios y apoyo a la habilitación de servicios de salud.',
      cardPoints: [
        'Soporte técnico a más de 3.000 equipos biomédicos',
        'Mantenimiento, calibración y tecnovigilancia',
        'Habilitación (Res. 3100 de 2019) y dotación biomédica',
      ],
      stats: [
        { value: '3.000+', label: 'Equipos biomédicos en las sedes atendidas' },
        { value: '2+', label: 'Años en entornos clínicos' },
        { value: '4', label: 'Empresas del sector salud' },
      ],
      specialties: [
        {
          title: 'Soporte y Mantenimiento',
          description:
            'Mantenimiento **preventivo y correctivo**, calibración y metrología de equipos biomédicos y odontológicos.',
          icon: 'wrench',
        },
        {
          title: 'Seguridad y Normativa',
          description:
            '**Tecnovigilancia**, habilitación (Resolución 3100 de 2019), Resolución 001732 de 2026 y dotación biomédica.',
          icon: 'shield',
        },
        {
          title: 'Gestión con Herramientas Digitales',
          description:
            'Inventarios, hojas de vida y cronogramas apoyados en **apps y dashboards** que desarrollo yo mismo.',
          icon: 'briefcase',
        },
      ],
      skillsIntro: 'Ingeniería clínica respaldada por datos, automatización y trabajo con el personal asistencial.',
      seoTitle: 'Mario Hernández | Ingeniero Biomédico · Gestión de Tecnología Biomédica',
      seoDescription:
        'Ingeniero Biomédico en Nariño, Colombia: soporte técnico y mantenimiento de equipos médicos, tecnovigilancia, calibración, inventarios y habilitación de servicios de salud.',
    },
    data: {
      label: 'Datos, IA y Desarrollo',
      short: 'Datos e IA',
      role: 'Analista de Datos · Desarrollador de IA Aplicada',
      headline: ['Datos e IA', 'que resuelven problemas reales'],
      summary: [
        'Ingeniero con **Especialización en Inteligencia Artificial**, enfocado en análisis de datos y desarrollo de IA aplicada.',
        'Trabajo con **SQL, Power Query, Power BI y Python** para convertir información operativa en reportes e indicadores, y construyo aplicaciones con **LLMs**, modelos de machine learning y productos web desplegados.',
      ],
      cvHeadline:
        'Analista de Datos y Desarrollador de IA Aplicada | SQL · Power BI · Python · LLMs · Machine Learning · Next.js',
      cvProfile:
        'Ingeniero Biomédico con Especialización en Inteligencia Artificial (UAM), enfocado en análisis de datos y desarrollo de IA aplicada. Trabajo con Excel avanzado, Power Query, SQL y Power BI para limpiar, transformar y modelar información operativa y convertirla en reportes e indicadores; he construido procesos ETL desde hojas de cálculo y sistemas de gestión hacia bases de datos y tableros. Construyo aplicaciones con LLMs (API de Gemini, RAG con embeddings), modelos de machine learning (scikit-learn, TensorFlow) y productos web desplegados (Next.js, PostgreSQL/Supabase, Vercel, Cloudflare). Tengo apps en uso real, experiencia como desarrollador C#/.NET y conocimiento del sector salud.',
      cardText:
        'Análisis de datos y business intelligence, machine learning, aplicaciones con LLMs y productos web desplegados.',
      cardPoints: [
        'SQL, Power Query, Power BI y Python',
        'Apps con LLMs y modelos de ML (85%+ de exactitud en datos clínicos)',
        'Productos web desplegados con Next.js y Supabase',
      ],
      stats: [{ value: '85%+', label: 'Exactitud en modelos con datos clínicos' }],
      specialties: [
        {
          title: 'Análisis de Datos y BI',
          description: 'Limpieza, ETL y modelado con **SQL, Power Query y Python**; tableros en Power BI y Looker Studio.',
          icon: 'database',
        },
        {
          title: 'IA Aplicada',
          description:
            'Aplicaciones con **LLMs** (API de Gemini, RAG con embeddings) y modelos de machine learning con scikit-learn y TensorFlow.',
          icon: 'brain',
        },
        {
          title: 'Desarrollo Full Stack',
          description: 'Productos web con **Next.js, PostgreSQL/Supabase y Vercel**; experiencia en C# y ASP.NET.',
          icon: 'code',
        },
      ],
      skillsIntro: 'Del dato crudo al producto desplegado, con criterio de ingeniero.',
      seoTitle: 'Mario Hernández | Analista de Datos y Desarrollador de IA Aplicada',
      seoDescription:
        'Analista de datos y desarrollador con Especialización en IA: SQL, Power BI, Python, LLMs, machine learning y aplicaciones web con Next.js y Supabase. Proyectos y demos en vivo.',
    },
  },

  experience: [
    {
      id: 'ips',
      role: 'Ingeniero Biomédico de Soporte Técnico',
      company: 'INFRAMED del Sur S.A.S. · IPS Municipal de Ipiales E.S.E.',
      period: 'Feb 2026 – Actualidad',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'corporate',
      tracks: ['bio', 'data'],
      summary:
        'Ingeniero de la empresa contratista INFRAMED del Sur, asignado a la **IPS Municipal de Ipiales E.S.E.**: soporte técnico de los equipos biomédicos de todas las sedes.',
      bullets: {
        bio: [
          'Soporte técnico y mantenimiento preventivo y correctivo de los equipos biomédicos de todas las sedes (más de 3.000 equipos).',
          'Seguimiento a los cronogramas de mantenimiento y gestión de la documentación técnica.',
          'Tecnovigilancia y capacitaciones al personal, incluida la presentación de Tecnovigilancia para el personal de la IPS.',
          'Análisis de la **Resolución 001732 de 2026**: checklist de transición a 12 meses y análisis técnico de los cambios de dotación biomédica en cuatro servicios.',
          'Reportes formales de baja de seis equipos biomédicos, sustentados en certificados de calibración.',
          'Desarrollo de una **app móvil de verificación física del inventario biomédico** (Urgencias, Ambulancias y otras sedes) con dashboard de avance compartido.',
        ],
        data: [
          'Desarrollo de una **app móvil de verificación física del inventario biomédico** (Urgencias, Ambulancias y otras sedes) con dashboard de avance compartido.',
          'Depuración y consolidación de datos de inventario y tecnovigilancia en **Excel / Power Query** para reportes de cumplimiento normativo.',
          'Análisis de la Resolución 001732 de 2026: checklist de transición a 12 meses y análisis técnico de los cambios de dotación biomédica en cuatro servicios.',
          'Soporte técnico de los equipos biomédicos de todas las sedes (más de 3.000 equipos).',
        ],
      },
      tech: ['Mantenimiento Biomédico', 'Tecnovigilancia', 'Inventarios', 'Resolución 001732 de 2026', 'Excel / Power Query', 'App Móvil'],
    },
    {
      id: 'bimtho',
      role: 'Ingeniero de Servicio',
      company: 'Bimtho Ingeniería S.A.S.',
      period: 'Mar 2025 – Ene 2026',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'corporate',
      imageUrlId: 'exp-bimtho',
      tracks: ['bio', 'data'],
      summary:
        'Gestión técnica de equipos odontológicos en clínicas e IPS: mantenimiento, calibración, documentación y herramientas digitales para las hojas de vida.',
      bullets: {
        bio: [
          'Gestión técnica de equipos odontológicos: mantenimientos preventivos, correctivos y calibraciones.',
          'Gestión documental: hojas de vida de equipos, certificados de metrología e inventarios técnicos.',
          'Gestión de inventarios de equipos y suministros en clínicas e IPS del sector odontológico.',
          'Estándar de dotación según la **Resolución 3100 de 2019** y apoyo a procesos de habilitación de servicios de salud.',
          'Desarrollo de una **aplicación web multi-cliente** para gestionar las hojas de vida de equipos de varias instituciones.',
        ],
        data: [
          'Desarrollo de una **aplicación web multi-cliente sobre PostgreSQL (Supabase)** para gestionar hojas de vida de equipos de varias instituciones, con roles de administrador y solo lectura; migración de datos desde Google Sheets.',
          'Automatización de documentación técnica con **Python y AppSheet**.',
          'Consultas **SQL** sobre historiales de mantenimiento para identificar fallas recurrentes y tableros de indicadores en **Power BI**.',
        ],
      },
      tech: ['Equipos Odontológicos', 'Calibración', 'Resolución 3100 de 2019', 'PostgreSQL (Supabase)', 'SQL', 'Power BI', 'Python', 'AppSheet'],
    },
    {
      id: 'finansoft',
      role: 'Desarrollador Junior',
      company: 'Finansoft S.A.S.',
      period: 'May 2024 – Jul 2024',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'corporate',
      tracks: ['data'],
      summary: 'Desarrollo y soporte de software contable para pymes con **ASP.NET, C# y SQL**.',
      bullets: {
        data: [
          'Desarrollo y soporte de software contable para pymes con **ASP.NET, C# y SQL**.',
          'Interfaces de usuario, procesos de backend e integridad de datos.',
          'Soporte a usuarios finales.',
        ],
      },
      tech: ['C#', 'ASP.NET', 'SQL'],
    },
    {
      id: 'techmedic',
      role: 'Ingeniero de Apoyo en Coordinación Biomédica / Practicante',
      company: 'TechMedic S.A.S.',
      period: 'Ago 2023 – Dic 2023',
      location: 'Pasto, Nariño, Colombia',
      icon: 'corporate',
      imageUrlId: 'exp-hospital',
      tracks: ['bio', 'data'],
      summary:
        'Practicante de Ingeniería Biomédica (ago–nov) e ingeniero de apoyo (nov–dic), con mantenimiento en la Fundación Hospital San Pedro y digitalización de inventarios.',
      bullets: {
        bio: [
          'Mantenimientos preventivos y correctivos en la Fundación Hospital San Pedro (Pasto).',
          'Seguimiento a proveedores y documentación para auditorías.',
          'Capacitación al personal de salud en uso seguro y mantenimiento de equipos.',
          'Apoyo en actividades del SG-SST para clientes.',
          'Listas de chequeo y guías rápidas digitalizadas con **códigos QR**.',
        ],
        data: [
          'Automatización de la captura de datos con **Python y Google Sheets**.',
          'Dashboards de inventario en **Looker Studio y Power BI**.',
          'Apps de inventario en **AppSheet**.',
        ],
      },
      tech: ['Mantenimiento Biomédico', 'SG-SST', 'Python', 'Looker Studio', 'Power BI', 'AppSheet', 'Google Sheets'],
    },
    {
      id: 'uam',
      role: 'Joven Investigador y Monitor Académico',
      company: 'Universidad Autónoma de Manizales',
      period: '2020 – 2024',
      location: 'Manizales, Caldas, Colombia',
      icon: 'research',
      imageUrlId: 'exp-research',
      tracks: ['bio', 'data'],
      summary:
        'Semillero de Nanociencia y Nanotecnología: simulación de nanopartículas por dinámica molecular. Monitor de Circuitos (2021) y de Diseño Biomédico (2022).',
      bullets: {
        bio: [
          'Algoritmos de simulación por dinámica molecular de nanopartículas de magnetita en **Python, C++ y LAMMPS**.',
          'Análisis de impedancias de un material semimetálico con Python (Pandas, NumPy).',
          'Ponencia en el XIV Encuentro Departamental de Semilleros de Investigación (RREDSI), reconocida como **Mejor Ponencia**.',
          'Monitorías de diseño y simulación de circuitos biomédicos y mentorías de programación en Python y Arduino.',
          'Supervisión de laboratorios.',
        ],
      },
      tech: ['Python (Pandas, NumPy)', 'C++', 'LAMMPS', 'MATLAB', 'Arduino'],
      impact: ['Mejor Ponencia en el XIV Encuentro Departamental de Semilleros de Investigación (RREDSI).'],
    },
    {
      id: 'delfin',
      role: 'Becario de Investigación de Verano · Programa DELFÍN',
      company: 'Universidad de Guadalajara',
      period: 'Jun 2023 – Ago 2023',
      location: 'Guadalajara, Jalisco, México',
      icon: 'research',
      imageUrlId: 'exp-delfin',
      tracks: ['bio', 'data'],
      summary:
        'XXVIII Verano de la Investigación Científica y Tecnológica del Pacífico: nanopartículas de celulosa a partir de bagazo de agave.',
      bullets: {
        bio: [
          'Síntesis y caracterización de nanopartículas de celulosa a partir de bagazo de agave para bio-productos con aplicaciones biomédicas.',
          'Caracterización con **SEM, TEM y XRD** y modelado estadístico (**DOE, ANOVA**) con Python para optimizar los procesos experimentales.',
        ],
      },
      tech: ['SEM', 'TEM', 'XRD', 'DOE', 'ANOVA', 'Python'],
    },
    {
      id: 'pabon',
      role: 'Practicante de Ingeniería Biomédica',
      company: 'Clínica Cardioneurovascular Pabón S.A.S.',
      period: 'Ene 2023 – Jun 2023',
      location: 'Pasto, Nariño, Colombia',
      icon: 'corporate',
      imageUrlId: 'exp-pabon',
      tracks: ['bio', 'data'],
      summary:
        'Práctica en una clínica cardioneurovascular: mantenimiento de equipos de alta complejidad (hemodinamia, ventilación mecánica), tecnovigilancia e inventarios, con una app móvil y un tablero para su control.',
      bullets: {
        bio: [
          'Mantenimientos preventivos y correctivos de equipos de alta complejidad, como **sistemas de hemodinamia y ventiladores mecánicos**.',
          'Actualización de las hojas de vida de los equipos según la **normativa INVIMA** y elaboración de guías rápidas de operación segura.',
          'Capacitación al personal en tecnovigilancia y participación en rondas hospitalarias de seguridad en áreas críticas.',
          'Verificación y **digitalización del inventario** de equipos biomédicos, mejorando su trazabilidad.',
          'Desarrollo de una **app móvil de inventario en AppSheet** y de un tablero de inventario en Google Sheets y Looker Studio.',
        ],
        data: [
          'Desarrollo de una **app móvil de inventario en AppSheet** para los equipos biomédicos de la clínica.',
          'Tablero de inventario en **Google Sheets y Looker Studio**.',
          'Digitalización y verificación del inventario de equipos biomédicos, mejorando su trazabilidad.',
        ],
      },
      tech: ['Hemodinamia', 'Ventilación Mecánica', 'Tecnovigilancia', 'Normativa INVIMA', 'Inventarios', 'AppSheet', 'Looker Studio'],
    },
    {
      id: 'cres',
      role: 'Docente de Inglés',
      company: 'Corporación CRES (CorpoCres)',
      period: 'Ago 2026 – Actualidad',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'academic',
      tracks: ['bio', 'data'],
      secondary: true,
      summary: 'Docente de inglés en una institución con programas técnicos profesionales.',
      bullets: {
        bio: [
          'Planeación y desarrollo de clases de inglés para estudiantes de programas técnicos profesionales.',
          'Evaluación y seguimiento del progreso de los estudiantes.',
        ],
      },
      tech: ['Inglés', 'Docencia'],
    },
    {
      id: 'smart',
      role: 'Tutor de Inglés (medio tiempo)',
      company: 'Smart English Academy',
      period: 'Mar 2024 – Jul 2026',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'academic',
      imageUrlId: 'exp-smart',
      tracks: ['bio', 'data'],
      secondary: true,
      summary:
        'Enseñanza personalizada a estudiantes de nivel básico e intermedio, incluidos varios docentes del Colegio Champagnat de Ipiales, con apoyo de herramientas de IA.',
      bullets: {
        bio: [
          'Enseñanza personalizada a estudiantes de nivel básico e intermedio, incluidos varios docentes del Colegio Champagnat de Ipiales.',
          'Diseño de materiales didácticos (curso A1), evaluación continua y clases virtuales.',
          'Integración de herramientas de IA para actividades interactivas y seguimiento del progreso.',
        ],
      },
      tech: ['Enseñanza Personalizada', 'Clases Virtuales', 'Herramientas de IA'],
    },
  ],

  projects: [
    // --- Datos, IA y Desarrollo ---
    {
      id: 'finanzasbot',
      title: 'FinanzasBot · Asistente de finanzas personales con LLM',
      description:
        'Aplicación web (PWA) para llevar las cuentas personales hablando en lenguaje normal. Corre en **Cloudflare Workers**: un LLM (Llama en Workers AI) interpreta mensajes y fotos de recibos, Whisper transcribe las notas de voz y la app calcula presupuestos, metas de ahorro y simulaciones.',
      imageUrlId: 'proj-finanzasbot',
      tags: ['TypeScript', 'React + Vite', 'Cloudflare Workers (Hono)', 'D1 (SQLite)', 'Workers AI', 'Whisper'],
      category: 'datos',
      tracks: ['data'],
      featured: true,
      caseStudy: {
        problem: 'Llevar las finanzas a mano es tedioso y se abandona rápido.',
        solution:
          'Un chat con IA extrae las transacciones de texto, voz o imágenes; los cálculos los hace el servidor con fórmulas deterministas.',
        result: 'Aplicación instalable en el celular, con notificaciones y pruebas automatizadas.',
      },
      githubUrl: links.finanzasRepo,
    },
    {
      id: 'alianzanet',
      title: 'Sistema de Clientes AlianzaNet Pro',
      description:
        'Sistema de gestión de clientes en producción, con base de datos PostgreSQL en **Supabase**, desarrollado con asistencia de IA (Antigravity) y desplegado en Vercel.',
      imageUrlId: 'proj-alianzanet',
      tags: ['Supabase (PostgreSQL)', 'SQL', 'TypeScript', 'Vercel'],
      category: 'datos',
      tracks: ['data'],
      featured: true,
      githubUrl: links.alianzaRepo,
      embedUrl: links.alianzaEmbed,
    },
    {
      id: 'football',
      title: 'Predictor de partidos de fútbol · Mundial 2026',
      description:
        'Pipeline propio en Python con ratings **Elo**, forma reciente, historial y modelo **Poisson / Dixon-Coles**: estima marcador, 1X2, over/under y ambos anotan, y genera un dashboard. Operado a diario desde la fase de grupos hasta las semifinales.',
      cover: 'model',
      tags: ['Python', 'Poisson / Dixon-Coles', 'Elo', 'Dashboard'],
      category: 'datos',
      tracks: ['data'],
      featured: true,
    },
    {
      id: 'bila',
      title: 'Tendencias de Inversión BILA',
      description:
        'Solución para el Banco de Inversión Latinoamericano (BILA) que facilita identificar el perfil de riesgo y tomar decisiones informadas mediante un dashboard interactivo de análisis financiero.',
      imageUrlId: 'proj-bila',
      tags: ['Power BI', 'Streamlit', 'Python'],
      category: 'datos',
      tracks: ['data'],
      featured: true,
      caseStudy: {
        problem: 'Identificar el perfil de riesgo de un inversionista y orientar su decisión.',
        solution: 'Dashboard interactivo de análisis financiero desarrollado en Python y Streamlit.',
        result: 'Aplicación desplegada y disponible como demo en vivo.',
      },
      githubUrl: links.bilaRepo,
      embedUrl: links.bilaEmbed,
    },
    {
      id: 'distridentales-analysis',
      title: 'Análisis comercial · Distridentales de Nariño',
      description:
        'Extracción de ventas e inventario del sistema de gestión, limpieza en **Power Query** y análisis de productos, clientes y rotación para una distribuidora de insumos odontológicos.',
      cover: 'chart',
      tags: ['Excel', 'Power Query', 'SQL', 'Power BI'],
      category: 'datos',
      tracks: ['data'],
      featured: true,
    },
    {
      id: 'distridentales-web',
      title: 'Sitio web · Distridentales de Nariño',
      description:
        'Landing migrada de HTML a **Next.js**, con dominio en Cloudflare, medición con Google Analytics y catálogo para WhatsApp.',
      cover: 'web',
      tags: ['Next.js', 'Cloudflare', 'Google Analytics'],
      category: 'datos',
      tracks: ['data'],
    },
    {
      id: 'spotify',
      title: 'Análisis de canciones en Spotify hasta 2023',
      description:
        'Análisis de tendencias y patrones en las canciones más populares: procesamiento de datos con **Python y R** y dashboard interactivo en **Looker Studio**.',
      imageUrlId: '4',
      tags: ['Python', 'R', 'Looker Studio'],
      category: 'datos',
      tracks: ['data'],
      embedUrl: links.spotifyEmbed,
      githubUrl: links.spotifyRepo,
    },
    {
      id: 'geometry',
      title: 'Aprender es un Juego: Geometría',
      description: 'Plataforma educativa gamificada para enseñar conceptos geométricos.',
      imageUrlId: '7',
      tags: ['React', 'Firebase', 'Vercel'],
      category: 'datos',
      tracks: ['data'],
      embedUrl: links.geometryEmbed,
    },
    {
      id: 'minerals',
      title: 'Extracción de minerales en Colombia',
      description:
        'Informe interactivo con datos abiertos sobre la localización de la extracción de minerales en Colombia, desarrollado en el programa Data Science for All (Correlation One / MinTIC).',
      cover: 'chart',
      tags: ['Looker Studio', 'Datos Abiertos'],
      category: 'datos',
      tracks: ['data'],
    },

    // --- Salud y gestión biomédica ---
    {
      id: 'clinical-data',
      title: 'Gestión de Datos Clínicos con IA',
      description:
        'Análisis exploratorio y clasificación supervisada sobre los datasets Heart Disease, Thyroid y Diabetes, con **exactitud superior al 85%**.',
      imageUrlId: 'proj-clinical',
      tags: ['Python', 'Jupyter', 'scikit-learn'],
      category: 'salud',
      tracks: ['bio', 'data'],
      featured: true,
      caseStudy: {
        problem: 'Convertir registros clínicos en información útil para apoyar decisiones.',
        solution: 'Limpieza, análisis exploratorio y modelos de clasificación supervisada en Python.',
        result: 'Modelos con más de 85% de exactitud y reportes de EDA publicados.',
      },
      embedUrl: links.clinicalEmbed,
      githubUrl: links.clinicalRepo,
    },
    {
      id: 'inventory-app',
      title: 'App de verificación de inventario biomédico',
      description:
        'App móvil para la verificación física del inventario biomédico (Urgencias, Ambulancias y otras sedes) con un dashboard web de avance compartido. Desarrollada para la IPS Municipal de Ipiales.',
      cover: 'app',
      tags: ['App Móvil', 'Dashboard Web', 'Inventario Biomédico'],
      category: 'salud',
      tracks: ['bio', 'data'],
      featured: true,
    },
    {
      id: 'equipment-records',
      title: 'Gestor de hojas de vida de equipos multi-cliente',
      description:
        'Aplicación web sobre **PostgreSQL (Supabase)** para gestionar las hojas de vida de equipos de varias instituciones, con roles de administrador y solo lectura. Datos migrados desde Google Sheets. Desarrollada en Bimtho Ingeniería.',
      cover: 'app',
      tags: ['Supabase (PostgreSQL)', 'Web', 'Hojas de Vida'],
      category: 'salud',
      tracks: ['bio', 'data'],
      featured: true,
    },
    {
      id: 'births',
      title: 'Nacimientos en Caldas (2010–2024)',
      description:
        'Dashboard de **Power BI** que analiza los nacimientos por residencia en el departamento de Caldas, con visualizaciones interactivas de tendencias y distribución geográfica.',
      imageUrlId: '8',
      images: birthsImages,
      tags: ['Power BI', 'Python', 'Salud Pública'],
      category: 'salud',
      tracks: ['bio', 'data'],
      downloadUrl: links.birthsDownload,
    },
    {
      id: 'pabon-inventory',
      title: 'App móvil de inventario · Clínica Pabón',
      description:
        'App móvil en **AppSheet** para el inventario de equipos biomédicos de la Clínica Cardioneurovascular Pabón, con un tablero en Google Sheets y Looker Studio. Desarrollada durante la práctica de Ingeniería Biomédica.',
      cover: 'app',
      tags: ['AppSheet', 'Google Sheets', 'Looker Studio'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'eda-outbreak',
      title: 'Predicción de brotes de Enfermedad Diarreica Aguda',
      description:
        'Pronóstico de casos en Ipiales con machine learning a partir de datos epidemiológicos y ambientales, con reporte de análisis exploratorio publicado.',
      imageUrlId: '1',
      tags: ['Python', 'Machine Learning', 'Salud Pública'],
      category: 'salud',
      tracks: ['bio', 'data'],
      githubUrl: links.clinicalRepo,
    },
    {
      id: 'heart',
      title: 'Modelos de predicción de falla cardíaca',
      description:
        'Clasificación de riesgo sobre el dataset "Heart Failure Prediction", optimizada por accuracy y AUC.',
      imageUrlId: '3',
      tags: ['TensorFlow', 'Deep Learning', 'Clasificación'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'clustering',
      title: 'Clustering de pacientes',
      description: 'Clustering no supervisado sobre el dataset "Thyroid Disease".',
      imageUrlId: '2',
      tags: ['scikit-learn', 'Clustering'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'nano',
      title: 'Simulación de nanopartículas de magnetita',
      description:
        'Simulación por dinámica molecular con Python, C++ y LAMMPS para estudiar la estructura de nanopartículas de magnetita. Base del trabajo de grado.',
      imageUrlId: '5',
      tags: ['Python', 'C++', 'LAMMPS', 'Nanotecnología'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
  ],

  skills: [
    {
      id: 'clinica',
      title: 'Ingeniería Biomédica',
      tracks: ['bio'],
      items: [
        'Mantenimiento preventivo y correctivo',
        'Calibración y metrología (VIM, SI, PAME)',
        'Tecnovigilancia (reporte de eventos adversos)',
        'Hojas de vida e inventarios de equipos',
        'Habilitación de servicios de salud (Resolución 3100 de 2019)',
        'Resolución 001732 de 2026',
        'Dotación biomédica',
        'Gestión de proveedores y auditorías',
        'SG-SST',
        'Capacitación a personal de salud',
      ],
    },
    {
      id: 'herramientas',
      title: 'Datos y Herramientas Digitales',
      tracks: ['bio'],
      items: [
        'Excel avanzado y Power Query',
        'Power BI',
        'SQL',
        'Python',
        'AppSheet',
        'Looker Studio',
        'PostgreSQL (Supabase)',
        'Google Workspace',
        'MATLAB',
        'IA aplicada (LLMs)',
      ],
    },
    {
      id: 'lenguajes',
      title: 'Datos y BI',
      tracks: ['data'],
      items: [
        'SQL (JOIN, subconsultas, funciones de ventana)',
        'Python (Pandas, NumPy, Matplotlib, Plotly)',
        'Power BI',
        'Power Query',
        'Excel avanzado',
        'Looker Studio',
        'Tableau',
        'ETL',
        'R',
        'Datos de CRM/ERP',
      ],
    },
    {
      id: 'ia',
      title: 'IA y Machine Learning',
      tracks: ['data'],
      items: [
        'LLMs (APIs de Gemini, OpenAI, Claude)',
        'RAG, embeddings y búsqueda semántica',
        'Ingeniería de prompts',
        'Desarrollo agéntico (Claude Code, Antigravity)',
        'scikit-learn',
        'TensorFlow',
        'OpenCV',
        'Clasificación, clustering y pronóstico',
        'Modelado estadístico (Poisson / Dixon-Coles, Elo)',
        'EDA',
      ],
    },
    {
      id: 'desarrollo',
      title: 'Desarrollo y Despliegue',
      tracks: ['data'],
      items: [
        'TypeScript / JavaScript',
        'Next.js y React',
        'C# (ASP.NET)',
        'PostgreSQL (Supabase)',
        'Firebase',
        'APIs REST',
        'Streamlit',
        'Vercel y Cloudflare (Workers, D1)',
        'Git / GitHub',
        'AppSheet y Google Apps Script',
      ],
    },
    {
      id: 'blandas',
      title: 'Habilidades Blandas',
      tracks: ['bio', 'data'],
      items: [
        'Pensamiento analítico',
        'Resolución de problemas',
        'Comunicación asertiva',
        'Trabajo en equipo',
        'Capacitación y enseñanza',
        'Adaptabilidad',
        'Aprendizaje continuo',
        'Storytelling con datos',
      ],
    },
  ],

  certifications: [
    { title: 'Diplomado en Habilitación de Servicios de Salud (120 h)', issuer: 'Politécnico de Colombia', date: '2025', tracks: ['bio'] },
    { title: 'Seminario de Metrología Biomédica', issuer: 'MEBI Metrología S.A.', date: 'Sep 2025', tracks: ['bio'] },
    { title: 'Programa Nacional de Tecnovigilancia', issuer: 'INVIMA', date: '2025', tracks: ['bio'] },
    { title: 'Primeros Auxilios Psicológicos', issuer: '', date: '2025', tracks: ['bio'] },
    { title: 'Gestión de Datos Clínicos con Inteligencia Artificial', issuer: 'Universidad Autónoma de Manizales', date: 'Jul 2024', tracks: ['bio', 'data'] },
    { title: 'Verano de Investigación Científica · Programa DELFÍN', issuer: 'Universidad de Guadalajara', date: '2023', tracks: ['bio', 'data'] },
    { title: 'Fundamentos en Analítica de Datos · Data Science for All', issuer: 'Correlation One / MinTIC', date: 'Dic 2022', tracks: ['data'] },
    { title: 'Habilidades Digitales para Profesionales · Workspace', issuer: 'Google Activate', date: '2022', tracks: ['data'] },
    { title: 'Fundamentos: Datos, datos por todas partes', issuer: 'Google', date: '', tracks: ['data'] },
    { title: 'Python para la Ciencia de Datos', issuer: 'Platzi', date: '', tracks: ['data'] },
    { title: 'Curso Básico de Cálculo Diferencial para Data Science e IA', issuer: '', date: '', tracks: ['data'] },
    { title: 'Excel Avanzado para Análisis de Datos', issuer: '', date: '', tracks: ['data'] },
    { title: 'Curso de Power BI', issuer: '', date: '', tracks: ['data'] },
    { title: 'Machine Learning with MATLAB', issuer: 'MathWorks', date: '', tracks: ['data'] },
    { title: 'MATLAB Fundamentals', issuer: 'MathWorks', date: '', tracks: ['data'] },
    { title: 'V Simposio Biomédica', issuer: 'SENA', date: '2022', tracks: ['bio'] },
    { title: 'Programa de inglés (seis niveles completos)', issuer: 'Universidad de Nariño', date: '2016 – 2018', tracks: ['bio', 'data'] },
  ],

  awards: [
    {
      title: 'Mejor Ponencia',
      issuer: 'XIV Encuentro Departamental de Semilleros de Investigación RREDSI',
      description:
        'Reconocimiento a la mejor ponencia por la presentación de resultados del Semillero de Nanociencia y Nanotecnología de la Universidad Autónoma de Manizales.',
      category: 'investigacion',
      icon: 'trophy',
      imageUrlId: 'exp-research',
    },
    {
      title: 'Estancia de Investigación Internacional · Programa DELFÍN',
      issuer: 'Universidad de Guadalajara, México',
      description:
        'Seleccionado para el XXVIII Verano de la Investigación Científica y Tecnológica del Pacífico, en el proyecto "Reaprovechamiento del residuo bagazo de agave en bio-productos funcionales en aplicaciones biomédicas".',
      year: '2023',
      category: 'investigacion',
      icon: 'globe',
      imageUrlId: 'exp-delfin',
    },
    {
      title: 'Mención de Honor',
      issuer: 'Ingeniería Biomédica · Universidad Autónoma de Manizales',
      description: 'Distinción por el desempeño académico sobresaliente durante todo el programa.',
      year: '2023',
      category: 'academico',
      icon: 'medal',
    },
    {
      title: 'Matrícula de Honor',
      issuer: 'Ingeniería Biomédica · Universidad Autónoma de Manizales',
      description: 'Reconocimiento por rendimiento académico sobresaliente.',
      year: '2023',
      category: 'academico',
      icon: 'star',
    },
  ],

  quotes: [
    {
      text: 'La tecnología más avanzada es la que se vuelve invisible y se enfoca en lo que realmente importa: la vida humana.',
      author: 'Visión',
      icon: 'heart',
    },
    {
      text: 'En la intersección entre la ingeniería clínica y la IA, no solo procesamos datos, salvamos futuros.',
      author: 'Propósito profesional',
      icon: 'brain',
    },
    {
      text: 'La verdadera innovación no es crear máquinas que piensen como humanos, sino herramientas que permitan a los humanos sanar mejor.',
      author: 'Filosofía técnica',
      icon: 'sparkles',
    },
  ],
};
