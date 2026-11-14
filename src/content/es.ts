import type { Content } from './types';
import { birthsImages, links } from './shared';

export const es: Content = {
  person: {
    name: 'Mario Hernández',
    fullName: 'Mario Andrés Hernández Moreno',
    title: 'Ingeniero Biomédico | Especialista en IA',
    location: 'Ipiales / Pasto, Nariño, Colombia',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Avanzado (B2/C1)' },
    ],
    education: [
      {
        degree: 'Especialización en Inteligencia Artificial',
        institution: 'Universidad Autónoma de Manizales',
        period: '2024 – 2025',
        honor: '',
      },
      {
        degree: 'Ingeniería Biomédica',
        institution: 'Universidad Autónoma de Manizales',
        period: '2019 – 2023',
        honor: 'Mención de Honor | Matrícula de Honor (décimo semestre)',
      },
    ],
  },

  home: {
    headline: ['Transformando', 'Datos en Vida'],
    summary: [
      'Soy **Ingeniero Biomédico y Especialista en Inteligencia Artificial**. Trabajo en dos frentes que se refuerzan entre sí: la **gestión de tecnología médica** en clínicas y hospitales, y el **análisis de datos y desarrollo de soluciones con IA**.',
      'Elige abajo el perfil que estás buscando.',
    ],
    seoTitle: 'Mario Hernández | Ingeniero Biomédico y Especialista en IA',
    seoDescription:
      'Portafolio de Mario Andrés Hernández Moreno: Ingeniero Biomédico (gestión de tecnología hospitalaria) y Especialista en IA (análisis de datos, machine learning y desarrollo).',
  },

  tracks: {
    bio: {
      label: 'Ingeniería Biomédica',
      short: 'Biomédico',
      role: 'Ingeniero Biomédico · Gestión de Tecnología Médica',
      headline: ['Tecnología médica', 'segura y disponible'],
      summary: [
        'Ingeniero Biomédico con experiencia en **gestión de tecnología hospitalaria**, mantenimiento preventivo y correctivo, tecnovigilancia y habilitación de servicios de salud.',
        'Hoy coordino la gestión técnica de más de **3.000 equipos médicos** en la IPS Municipal de Ipiales, y uso **datos e IA** para que el mantenimiento sea más trazable y eficiente.',
      ],
      cvHeadline:
        'Ingeniero Biomédico | Coordinación de Tecnología Médica | Ingeniería Clínica | Especialista en Inteligencia Artificial',
      cvProfile:
        'Ingeniero Biomédico especializado en gestión de tecnología hospitalaria, coordinación de equipos médicos y procesos de habilitación en instituciones de salud. Coordino la gestión técnica de más de 3.000 equipos médicos en múltiples sedes. Experiencia en mantenimiento preventivo y correctivo, tecnovigilancia, calibración, evaluación tecnológica y cumplimiento normativo. Especialista en Inteligencia Artificial, aplico análisis de datos y automatización para mejorar la trazabilidad y la eficiencia del mantenimiento. Me caracterizo por la comunicación asertiva, el liderazgo colaborativo y la orientación a resultados.',
      cardText:
        'Gestión de tecnología hospitalaria, mantenimiento de equipos médicos, tecnovigilancia y habilitación de servicios de salud.',
      cardPoints: [
        'Más de 3.000 equipos médicos coordinados',
        '95% de disponibilidad operativa de equipos',
        'Tecnovigilancia, calibración y habilitación',
      ],
      stats: [
        { value: '3.000+', label: 'Equipos médicos gestionados' },
        { value: '95%', label: 'Disponibilidad de equipos' },
        { value: '2+', label: 'Años en entornos clínicos' },
        { value: '4', label: 'Organizaciones de salud' },
      ],
      specialties: [
        {
          title: 'Gestión Tecnológica',
          description:
            'Coordinación de inventarios, cronogramas y proveedores para mantener operativos los equipos críticos.',
          icon: 'briefcase',
        },
        {
          title: 'Mantenimiento y Calibración',
          description:
            'Mantenimiento **preventivo y correctivo** y calibración de equipos biomédicos conforme a normativa.',
          icon: 'wrench',
        },
        {
          title: 'Seguridad y Normativa',
          description:
            '**Tecnovigilancia**, habilitación de servicios de salud, documentación técnica y auditorías.',
          icon: 'shield',
        },
      ],
      skillsIntro: 'Ingeniería clínica respaldada por datos, automatización y trabajo con equipos asistenciales.',
      seoTitle: 'Mario Hernández | Ingeniero Biomédico · Gestión de Tecnología Médica',
      seoDescription:
        'Ingeniero Biomédico en Nariño, Colombia: coordinación de más de 3.000 equipos médicos, mantenimiento, tecnovigilancia, calibración y habilitación de servicios de salud.',
    },
    data: {
      label: 'Datos, IA y Desarrollo',
      short: 'Datos e IA',
      role: 'Analista de Datos · IA · Desarrollador',
      headline: ['Datos e IA', 'que resuelven problemas reales'],
      summary: [
        'Analista de datos y desarrollador con formación en **Ingeniería Biomédica** y **Especialización en Inteligencia Artificial**.',
        'Construyo dashboards, modelos predictivos y aplicaciones con IA usando **Python, SQL, Power BI y TypeScript**, desde el dato crudo hasta el producto desplegado.',
      ],
      cvHeadline:
        'Analista de Datos | Inteligencia Artificial | Business Intelligence | Desarrollo de Aplicaciones con IA',
      cvProfile:
        'Analista de Datos con formación en Ingeniería Biomédica y Especialización en Inteligencia Artificial, con experiencia en procesamiento, análisis y visualización de datos. Desarrollo soluciones con Python, SQL y R, dashboards en Power BI y Looker Studio, modelos de machine learning y aplicaciones web con IA (TypeScript, React, Cloudflare Workers). He automatizado procesos documentales y de reporte en el sector salud, y comunico hallazgos técnicos a públicos no técnicos. Pensamiento analítico, orientación a resultados y aprendizaje continuo.',
      cardText:
        'Análisis de datos, business intelligence, machine learning y desarrollo de aplicaciones con inteligencia artificial.',
      cardPoints: [
        'Python, SQL, Power BI y Looker Studio',
        'Modelos de ML con datos clínicos (85%+ de accuracy)',
        'Apps con IA en producción: TypeScript y React',
      ],
      stats: [
        { value: '40%', label: 'Menos tiempo documental con automatización' },
        { value: '85%+', label: 'Accuracy en modelos clínicos' },
      ],
      specialties: [
        {
          title: 'Análisis de Datos y BI',
          description: 'De los datos crudos al dashboard: **Python, SQL, Power BI y Looker Studio**.',
          icon: 'database',
        },
        {
          title: 'Inteligencia Artificial',
          description:
            'Modelado predictivo y machine learning, con énfasis en **datos clínicos**, y uso de LLM en productos.',
          icon: 'brain',
        },
        {
          title: 'Desarrollo de Aplicaciones',
          description: 'Aplicaciones web con **TypeScript, React y servicios en la nube**, probadas y desplegadas.',
          icon: 'code',
        },
      ],
      skillsIntro: 'Del análisis exploratorio al producto desplegado, con criterio de ingeniero.',
      seoTitle: 'Mario Hernández | Analista de Datos, IA y Desarrollo',
      seoDescription:
        'Analista de datos y desarrollador con Especialización en IA: Python, SQL, Power BI, machine learning y aplicaciones web con IA. Proyectos y demos en vivo.',
    },
  },

  experience: [
    {
      id: 'ips',
      role: 'Ingeniero de Servicio y Coordinación de Gestión Biomédica',
      company: 'IPS Municipal de Ipiales',
      period: 'Feb 2026 – Actualidad',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'corporate',
      tracks: ['bio', 'data'],
      summary:
        'Coordino la gestión técnica de más de **3.000 equipos médicos** en múltiples sedes, liderando el mantenimiento preventivo y correctivo.',
      bullets: {
        bio: [
          'Realizo seguimiento a los cronogramas de mantenimiento, asegurando el cumplimiento oportuno de las actividades programadas y optimizando los tiempos de respuesta ante equipos críticos.',
          'Desarrollo y administro la documentación técnica, facilitando la trazabilidad, las auditorías internas y el cumplimiento normativo.',
          'Dirijo capacitaciones a personal clínico y administrativo sobre gestión de tecnología biomédica y uso seguro de equipos.',
          'Apoyo al área de tecnovigilancia en la identificación, análisis y reporte de eventos adversos asociados a dispositivos médicos.',
          'Coordino servicios técnicos especializados con proveedores externos.',
          'Colaboro con los departamentos hospitalarios para asegurar la operatividad de los equipos críticos.',
        ],
        data: [
          'Seguimiento a los cronogramas de mantenimiento de más de 3.000 equipos médicos en múltiples sedes, asegurando el cumplimiento de las actividades programadas.',
          'Desarrollo y administro la documentación técnica, facilitando la trazabilidad, las auditorías internas y el cumplimiento normativo.',
          'Apoyo al área de tecnovigilancia en la identificación, análisis y reporte de eventos adversos asociados a dispositivos médicos.',
        ],
      },
      tech: ['Gestión de Inventarios', 'Mantenimiento Biomédico', 'Tecnovigilancia', 'Normativa de Salud', 'Liderazgo Técnico'],
      impact: ['Disponibilidad operativa continua de más de 3.000 equipos médicos.'],
    },
    {
      id: 'bimtho',
      role: 'Ingeniero de Servicio y Coordinación de Gestión Biomédica',
      company: 'Bimtho Ingeniería S.A.S',
      period: 'Mar 2025 – Ene 2026',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'corporate',
      imageUrlId: 'exp-bimtho',
      tracks: ['bio', 'data'],
      summary:
        'Gestión integral de tecnología biomédica para clínicas e IPS del sector odontológico, combinando mantenimiento, normativa y automatización con datos.',
      bullets: {
        bio: [
          'Gestión de inventarios de equipos y suministros en clínicas e IPS del sector odontológico, asegurando disponibilidad y trazabilidad.',
          'Ejecución de mantenimientos preventivos y correctivos, logrando un **95% de disponibilidad operativa**.',
          'Calibración de equipos biomédicos conforme a estándares de calidad y normativas técnicas.',
          'Apoyo a la implementación del estándar de dotación y a procesos de **habilitación de servicios de salud**.',
          'Gestión documental de procesos técnicos y de mantenimiento, facilitando auditorías y controles.',
          'Dashboards en **Power BI** y automatización documental con **Python y AppSheet**, reduciendo los tiempos de procesamiento en un **40%**.',
        ],
        data: [
          'Desarrollo de dashboards en **Power BI** para el monitoreo de indicadores de mantenimiento, alcanzando un **95% de disponibilidad** de equipos.',
          'Automatización de la gestión documental con **Python y AppSheet**, reduciendo los tiempos de procesamiento en un **40%**.',
          'Diseño de sistemas de gestión de inventarios con bases de datos **SQL** y herramientas de visualización para la trazabilidad de equipos y suministros.',
          'Análisis estadístico de datos de mantenimiento preventivo y correctivo para identificar patrones de fallas y optimizar los programas de mantenimiento.',
          'Extracción, transformación y carga (**ETL**) de datos técnicos y generación de reportes automatizados para auditorías.',
          'Implementación de aplicaciones de inteligencia artificial orientadas a optimizar la gestión del mantenimiento biomédico.',
        ],
      },
      tech: ['Mantenimiento Preventivo/Correctivo', 'Calibración', 'Habilitación', 'Power BI', 'Python', 'SQL', 'AppSheet', 'Equipos Odontológicos'],
      impact: [
        '95% de disponibilidad operativa de equipos en clínicas e IPS.',
        '40% menos tiempo de procesamiento documental gracias a la automatización.',
      ],
    },
    {
      id: 'techmedic',
      role: 'Ingeniero de Apoyo y Practicante de Ingeniería Biomédica',
      company: 'TechMedic S.A.S',
      period: 'Ago 2023 – Dic 2023',
      location: 'Pasto, Nariño, Colombia',
      icon: 'corporate',
      imageUrlId: 'exp-hospital',
      tracks: ['bio', 'data'],
      summary:
        'Como practicante ejecuté mantenimiento en la Fundación Hospital San Pedro; como ingeniero de apoyo gestioné proveedores, auditorías y la digitalización de información técnica.',
      bullets: {
        bio: [
          'Mantenimiento preventivo y correctivo de equipos biomédicos en la Fundación Hospital San Pedro.',
          'Seguimiento a proveedores y preparación de la documentación requerida para auditorías normativas.',
          'Capacitación al personal de salud en el uso seguro y el mantenimiento adecuado de equipos biomédicos.',
          'Elaboración de listas de chequeo y digitalización de guías rápidas mediante **códigos QR**.',
          'Supervisión de inventarios y desarrollo de aplicaciones en **AppSheet** para su gestión.',
        ],
        data: [
          'Desarrollo de dashboards en **Looker Studio** y análisis con **Python** para el control de inventarios.',
          'Desarrollo de aplicaciones en **AppSheet** para la gestión de inventarios y digitalización de guías rápidas con códigos QR.',
          'Análisis de datos de proveedores y generación de reportes para auditorías con Excel avanzado y herramientas de BI.',
          'Digitalización y estructuración de información técnica, mejorando su trazabilidad y accesibilidad.',
        ],
      },
      tech: ['Looker Studio', 'Power BI', 'Python', 'AppSheet', 'Google Workspace'],
      impact: [
        'Mejor trazabilidad de la información, menor tiempo de acceso a la documentación y reportes de inventario automatizados.',
      ],
    },
    {
      id: 'uam',
      role: 'Joven Investigador y Monitor Académico',
      company: 'Universidad Autónoma de Manizales',
      period: '2021 – 2024',
      location: 'Manizales, Caldas, Colombia',
      icon: 'research',
      imageUrlId: 'exp-research',
      tracks: ['bio', 'data'],
      summary:
        'En el Semillero de Nanociencia y Nanotecnología desarrollé algoritmos de simulación de nanopartículas; como monitor impartí tutorías de circuitos y programación.',
      bullets: {
        bio: [
          'Desarrollo de un algoritmo de **simulación de nanopartículas de magnetita** por dinámica molecular con **Python y C++**.',
          'Presentación de resultados en el XIV Encuentro Departamental de Semilleros de Investigación RREDSI, con el reconocimiento a **Mejor Ponencia**.',
          'Tutorías en diseño y simulación de circuitos biomédicos (**Multisim**) y en programación con **Arduino y Python**.',
          'Supervisión de laboratorios y apoyo a proyectos de investigación biomédica.',
        ],
        data: [
          'Desarrollo de algoritmos de simulación por dinámica molecular con **Python y C++**, procesando grandes volúmenes de datos científicos.',
          'Análisis estadístico del comportamiento de nanopartículas a diferentes escalas y generación de visualizaciones científicas con Python (NumPy, Pandas, Matplotlib).',
          'Presentación de resultados en el XIV Encuentro Departamental de Semilleros de Investigación RREDSI, con el reconocimiento a **Mejor Ponencia**.',
          'Tutorías de programación (**Python, Arduino**) enfocadas en datos de sensores y procesamiento de señales.',
        ],
      },
      tech: ['Python (NumPy, SciPy)', 'C++', 'MATLAB', 'Arduino', 'LAMMPS', 'VMD', 'Multisim'],
      impact: ['Reconocimiento a Mejor Ponencia en el XIV Encuentro Departamental de Semilleros RREDSI.'],
    },
    {
      id: 'delfin',
      role: 'Becario de Investigación de Verano · Programa DELFIN',
      company: 'Universidad de Guadalajara',
      period: 'Jun 2023 – Ago 2023',
      location: 'Guadalajara, Jalisco, México',
      icon: 'research',
      imageUrlId: 'exp-delfin',
      tracks: ['bio', 'data'],
      summary:
        'Estancia internacional de investigación en biomateriales sostenibles: síntesis y caracterización de nanomateriales a partir de residuos de agave.',
      bullets: {
        bio: [
          'Desarrollo de **nanomateriales eco-amigables** a partir de bagazo de agave, con síntesis de nanopartículas de celulosa (**SEM, TEM, XRD**).',
          'Modelado estadístico (**DOE, ANOVA**) y **Python** para optimizar los procesos experimentales.',
          'Proyecto: "Reaprovechamiento del residuo bagazo de agave en bio-productos funcionales en aplicaciones biomédicas".',
        ],
        data: [
          'Modelado estadístico (**DOE, ANOVA**) y análisis con **Python** (NumPy, Pandas, SciPy) para optimizar procesos experimentales.',
          'Análisis de datos de caracterización de nanopartículas de celulosa (SEM, TEM, XRD, FTIR).',
        ],
      },
      tech: ['SEM', 'TEM', 'XRD', 'FTIR', 'DOE', 'ANOVA', 'Python (NumPy, Pandas, SciPy)'],
      impact: ['Síntesis y caracterización de nanopartículas de celulosa a partir de residuos de agave.'],
    },
    {
      id: 'pabon',
      role: 'Practicante de Ingeniería Biomédica',
      company: 'Clínica Cardioneurovascular Pabón S.A.S',
      period: 'Ene 2023 – Jun 2023',
      location: 'Pasto, Nariño, Colombia',
      icon: 'corporate',
      imageUrlId: 'exp-pabon',
      tracks: ['bio'],
      summary:
        'Mantenimiento de equipos médicos de alta complejidad, tecnovigilancia y gestión tecnológica, con digitalización de inventarios.',
      bullets: {
        bio: [
          'Mantenimientos preventivos y correctivos en equipos de alta tecnología, como **sistemas de hemodinamia y ventiladores mecánicos**.',
          'Actualización de las hojas de vida de los equipos conforme a la **normativa INVIMA** y elaboración de guías rápidas de operación segura.',
          'Capacitaciones en tecnovigilancia y participación en rondas de seguridad en áreas críticas.',
          '**Digitalización de inventarios** de equipos biomédicos, mejorando su trazabilidad.',
        ],
      },
      tech: ['Hemodinamia', 'Ventilación Mecánica', 'Tecnovigilancia', 'Normativa INVIMA', 'Gestión de Inventarios'],
      impact: ['Cero eventos adversos relacionados con equipos y 100% de equipos con hojas de vida actualizadas.'],
    },
    // TODO(Mario): confirmar el nombre completo del instituto y ajustar estas funciones.
    {
      id: 'cres',
      role: 'Docente de Inglés',
      company: 'CRES · Instituto Técnico',
      period: 'Ago 2026 – Actualidad',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'academic',
      tracks: ['bio', 'data'],
      secondary: true,
      summary: 'Docente de inglés en programas de formación técnica.',
      bullets: {
        bio: [
          'Planeación y desarrollo de clases de inglés para estudiantes de programas técnicos.',
          'Evaluación y seguimiento del progreso de los estudiantes.',
        ],
      },
      tech: ['Inglés B2/C1', 'Docencia', 'Diseño de Material Didáctico'],
    },
    {
      id: 'smart',
      role: 'Tutor de Inglés',
      company: 'Smart English Academy',
      period: 'Mar 2024 – Jul 2026',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'academic',
      imageUrlId: 'exp-smart',
      tracks: ['bio', 'data'],
      secondary: true,
      summary:
        'Diseñé un currículo de inglés personalizado, integrando herramientas de IA para las actividades y el seguimiento del progreso de los estudiantes.',
      bullets: {
        bio: [
          'Desarrollo de materiales didácticos personalizados y evaluación de estudiantes.',
          'Uso de herramientas de IA (ChatGPT, Gemini) para diseñar actividades y automatizar la retroalimentación.',
          'Estrategias de **gamificación** para fomentar la participación y el aprendizaje autónomo.',
        ],
        data: [
          'Análisis de datos de desempeño estudiantil para identificar áreas de mejora y personalizar la enseñanza.',
          'Uso de herramientas de IA (ChatGPT, Gemini) para diseñar actividades y automatizar la retroalimentación.',
        ],
      },
      tech: ['IA (ChatGPT, Gemini)', 'Google Workspace', 'Canva', 'Gamificación'],
    },
  ],

  projects: [
    {
      id: 'finanzasbot',
      title: 'FinanzasBot · Asistente de finanzas personales con IA',
      description:
        'Aplicación web (PWA) que registra gastos, ingresos y transferencias conversando en lenguaje natural con **Aura**, su asistente de IA. Entiende texto, notas de voz y fotos de recibos, y calcula presupuestos, metas de ahorro y simulaciones de decisiones.',
      imageUrlId: 'proj-finanzasbot',
      tags: ['TypeScript', 'React', 'Cloudflare Workers', 'D1 (SQL)', 'LLM', 'Whisper', 'Vitest'],
      category: 'datos',
      tracks: ['data'],
      featured: true,
      caseStudy: {
        problem: 'Llevar las finanzas a mano es tedioso y se abandona rápido.',
        solution:
          'Un chat con IA extrae las transacciones de texto, voz o imágenes; todos los cálculos los hace el servidor con fórmulas deterministas.',
        result: 'PWA instalable con notificaciones, pruebas automatizadas y despliegue serverless.',
      },
      githubUrl: links.finanzasRepo,
    },
    {
      id: 'clinical-data',
      title: 'Gestión de Datos Clínicos con IA',
      description:
        'Análisis exploratorio y modelado predictivo en salud sobre datasets médicos (Heart Disease, Thyroid, Diabetes), con modelos de ML supervisado que alcanzan **85%+ de accuracy**.',
      imageUrlId: 'proj-clinical',
      tags: ['Machine Learning', 'Salud', 'Python', 'Jupyter'],
      category: 'salud',
      tracks: ['bio', 'data'],
      featured: true,
      caseStudy: {
        problem: 'Convertir registros clínicos en información útil para apoyar decisiones.',
        solution: 'Limpieza, análisis exploratorio y modelos de clasificación supervisada en Python.',
        result: 'Modelos con más de 85% de accuracy y reportes de EDA publicados.',
      },
      embedUrl: links.clinicalEmbed,
      githubUrl: links.clinicalRepo,
    },
    {
      id: 'bila',
      title: 'Tendencias de Inversión BILA',
      description:
        'Solución para el Banco de Inversión Latinoamericano (BILA) que facilita identificar el perfil de riesgo y tomar decisiones informadas mediante un dashboard interactivo de análisis financiero.',
      imageUrlId: 'proj-bila',
      tags: ['Python', 'Streamlit', 'Data Analytics', 'Finanzas'],
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
      id: 'alianzanet',
      title: 'Sistema de Clientes AlianzaNet Pro',
      description:
        'Sistema de gestión de clientes con base de datos SQL en **Supabase**, desarrollado con asistencia de IA (Antigravity) y desplegado en Vercel.',
      imageUrlId: 'proj-alianzanet',
      tags: ['TypeScript', 'Supabase', 'SQL', 'Full Stack'],
      category: 'datos',
      tracks: ['data'],
      featured: true,
      githubUrl: links.alianzaRepo,
      embedUrl: links.alianzaEmbed,
    },
    {
      id: 'births',
      title: 'Nacimientos en Caldas (2010-2024)',
      description:
        'Dashboard de **Power BI** que analiza los nacimientos por residencia en el departamento de Caldas, con visualizaciones interactivas de tendencias y distribución geográfica.',
      imageUrlId: '8',
      images: birthsImages,
      tags: ['Power BI', 'Business Intelligence', 'Salud Pública'],
      category: 'salud',
      tracks: ['bio', 'data'],
      featured: true,
      downloadUrl: links.birthsDownload,
    },
    {
      id: 'eda-outbreak',
      title: 'Predicción de Brotes de Enfermedad (EDA)',
      description:
        'Sistema de predicción basado en machine learning para anticipar casos de Enfermedad Diarreica Aguda en Ipiales, Nariño, a partir de datos clínicos y ambientales.',
      imageUrlId: '1',
      tags: ['Machine Learning', 'Salud Pública', 'Python'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'heart',
      title: 'Modelos de Predicción Cardíaca',
      description:
        'Entrenamiento de modelos de clasificación para detectar riesgo de falla cardíaca (dataset "Heart Failure Prediction") y optimización de métricas como accuracy y AUC.',
      imageUrlId: '3',
      tags: ['Clasificación', 'Deep Learning', 'TensorFlow'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'clustering',
      title: 'Clustering de Pacientes',
      description:
        'Algoritmos de agrupamiento no supervisado para encontrar patrones ocultos en registros biomédicos del dataset "Thyroid Disease".',
      imageUrlId: '2',
      tags: ['Clustering', 'Análisis de Datos', 'Scikit-learn'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'nano',
      title: 'Simulación de Nanopartículas',
      description:
        'Algoritmo de simulación de nanopartículas de magnetita por dinámica molecular con Python y C++, para analizar su comportamiento a diferentes escalas.',
      imageUrlId: '5',
      tags: ['Simulación', 'Nanotecnología', 'Python', 'C++'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'spotify',
      title: 'Análisis de Canciones en Spotify (2023)',
      description:
        'Análisis de tendencias y patrones en las canciones más populares hasta 2023: procesamiento de datos con **Python y R** y dashboard interactivo en **Looker Studio**.',
      imageUrlId: '4',
      tags: ['Python', 'R', 'Looker Studio', 'Análisis de Datos'],
      category: 'datos',
      tracks: ['data'],
      embedUrl: links.spotifyEmbed,
      githubUrl: links.spotifyRepo,
    },
    {
      id: 'geometry',
      title: 'Aprender es un Juego: Geometría',
      description:
        'Plataforma educativa interactiva que usa gamificación para enseñar conceptos geométricos. Desarrollada con **Firebase Studio** y desplegada en **Vercel**.',
      imageUrlId: '7',
      tags: ['React', 'Firebase', 'Vercel', 'Educación'],
      category: 'datos',
      tracks: ['data'],
      embedUrl: links.geometryEmbed,
    },
  ],

  skills: [
    {
      id: 'clinica',
      title: 'Ingeniería Biomédica y Clínica',
      tracks: ['bio'],
      items: [
        'Gestión de Tecnología Hospitalaria',
        'Mantenimiento Preventivo y Correctivo',
        'Calibración y Metrología',
        'Tecnovigilancia',
        'Habilitación de Servicios de Salud',
        'Evaluación Tecnológica',
        'Gestión de Inventarios',
        'Gestión Documental y Auditorías',
        'Regulaciones y Normativas (INVIMA)',
        'Biomateriales y Nanotecnología',
      ],
    },
    {
      id: 'herramientas',
      title: 'Datos y Herramientas',
      tracks: ['bio'],
      items: [
        'Power BI',
        'Excel Avanzado',
        'Python',
        'SQL',
        'AppSheet',
        'Looker Studio',
        'Google Workspace',
        'MATLAB',
        'Arduino',
        'IA aplicada (ChatGPT, Gemini, Claude)',
      ],
    },
    {
      id: 'lenguajes',
      title: 'Lenguajes y BI',
      tracks: ['data'],
      items: [
        'Python',
        'SQL',
        'R',
        'TypeScript / JavaScript',
        'C++',
        'MATLAB',
        'Power BI',
        'Looker Studio',
        'Tableau',
        'Excel Avanzado',
        'Streamlit',
      ],
    },
    {
      id: 'ia',
      title: 'IA y Machine Learning',
      tracks: ['data'],
      items: [
        'Modelado Predictivo',
        'Machine Learning',
        'Deep Learning',
        'Análisis Estadístico',
        'Scikit-learn',
        'TensorFlow',
        'Pandas y NumPy',
        'OpenCV',
        'LLM en producto (texto, voz y visión)',
        'ChatGPT, Gemini, Claude',
      ],
    },
    {
      id: 'desarrollo',
      title: 'Desarrollo y Cloud',
      tracks: ['data'],
      items: [
        'React y Next.js',
        'Cloudflare Workers',
        'Supabase',
        'Firebase',
        'Vercel',
        'Git y GitHub',
        'Pruebas con Vitest',
        'AppSheet y Apps Script',
        'ETL y Automatización',
        'Google Colab',
      ],
    },
    {
      id: 'blandas',
      title: 'Habilidades Blandas',
      tracks: ['bio', 'data'],
      items: [
        'Pensamiento Analítico y Estratégico',
        'Resolución de Problemas',
        'Liderazgo Colaborativo',
        'Comunicación Asertiva',
        'Trabajo en Equipo',
        'Adaptabilidad',
        'Toma de Decisiones',
        'Storytelling con Datos',
      ],
    },
  ],

  certifications: [
    { title: 'Diplomado en Habilitación de Servicios de Salud', issuer: 'Politécnico de Colombia', date: 'Oct 2025', tracks: ['bio'] },
    { title: 'Seminario de Metrología Biomédica', issuer: 'MEBI Metrología S.A.', date: 'Sep 2025', tracks: ['bio'] },
    { title: 'Programa Nacional de Tecnovigilancia', issuer: 'INVIMA', date: 'May 2025', tracks: ['bio'] },
    { title: 'Curso de Primeros Auxilios Psicológicos', issuer: '', date: '2025', tracks: ['bio'] },
    { title: 'Gestión de Datos Clínicos con Inteligencia Artificial', issuer: 'Universidad Autónoma de Manizales', date: 'Jul 2024', tracks: ['bio', 'data'] },
    { title: 'Verano de Investigación · Programa DELFIN', issuer: 'Universidad de Guadalajara, México', date: '2023', tracks: ['bio', 'data'] },
    { title: 'Fundamentos en Analítica de Datos', issuer: 'Correlation One', date: 'Dic 2022', tracks: ['data'] },
    { title: 'Machine Learning with MATLAB', issuer: 'MathWorks', date: '', tracks: ['data'] },
    { title: 'MATLAB Fundamentals', issuer: 'MathWorks', date: '', tracks: ['bio', 'data'] },
    { title: 'Competencias Digitales', issuer: 'Google Activate', date: 'Nov 2022', tracks: ['data'] },
    { title: 'V Simposio Biomédica', issuer: 'SENA, Manizales', date: 'Ago 2022', tracks: ['bio'] },
    { title: 'Curso de Inglés', issuer: 'Universidad de Nariño', date: '2016 – 2018', tracks: ['bio', 'data'] },
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
      title: 'Estancia de Investigación Internacional · Programa DELFIN',
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
      description: 'Reconocimiento por rendimiento académico sobresaliente en el décimo semestre.',
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
