import type { Content } from './types';
import { birthsImages, links } from './shared';

// Source: Mario's consolidated professional profile (2026-11-14). Keep in step with es.ts.
// Rule: nothing invented or inflated. The current role is technical support (not coordination or
// management), and approximate figures (95% availability, 40% time reduction) are not published.
export const en: Content = {
  person: {
    name: 'Mario Hernández',
    fullName: 'Mario Andrés Hernández Moreno',
    title: 'Biomedical Engineer | AI Specialist',
    location: 'Ipiales / Pasto, Nariño, Colombia',
    availability: 'Available for remote work · Open to relocating to Manizales',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Advanced (professional level)' },
    ],
    education: [
      {
        degree: 'Postgraduate Specialization in Artificial Intelligence',
        institution: 'Universidad Autónoma de Manizales (UAM)',
        period: 'Apr 2024 – Jun 2025',
        honor: '',
      },
      {
        degree: 'B.Eng. in Biomedical Engineering',
        institution: 'Universidad Autónoma de Manizales (UAM)',
        period: '2019 – 2023',
        honor: 'Honorable Mention | Honors Scholarship',
        note: 'Thesis: Structural study of magnetite nanoparticles through molecular dynamics simulations.',
      },
    ],
  },

  home: {
    headline: ['Turning', 'Data into Life'],
    summary: [
      "I'm a **Biomedical Engineer and Artificial Intelligence Specialist**. I work on two fronts that reinforce each other: **biomedical technology management** in clinics and hospitals, and **data analysis and AI solution development**.",
      'Choose below the profile you are looking for.',
    ],
    seoTitle: 'Mario Hernández | Biomedical Engineer and AI Specialist',
    seoDescription:
      'Portfolio of Mario Andrés Hernández Moreno: Biomedical Engineer (biomedical technology management) and AI Specialist (data analysis, machine learning and development).',
  },

  tracks: {
    bio: {
      label: 'Biomedical Engineering',
      short: 'Biomedical',
      role: 'Biomedical Engineer · Biomedical Technology Management',
      headline: ['Biomedical technology,', 'safe and available'],
      summary: [
        'Biomedical Engineer with experience in **technical support for medical equipment**, preventive and corrective maintenance, medical device vigilance, inventories and equipment records, and support for healthcare accreditation processes.',
        'I currently provide technical support for the biomedical equipment at every site of **IPS Municipal de Ipiales** (more than 3,000 devices), and I build **digital tools** for technology management.',
      ],
      cvHeadline:
        'Biomedical Engineer | Biomedical Technology Management · Device Vigilance · Maintenance · AI applied to healthcare',
      cvProfile:
        'Biomedical Engineer with a Postgraduate Specialization in Artificial Intelligence and experience in technical support for medical equipment, preventive and corrective maintenance, medical device vigilance, inventory and equipment record management, and support for accreditation processes in healthcare institutions. I build digital tools (inventory apps, dashboards) for technology management.',
      cardText:
        'Technical support and maintenance of medical equipment, device vigilance, inventories and support for healthcare service accreditation.',
      cardPoints: [
        'Technical support for more than 3,000 biomedical devices',
        'Maintenance, calibration and device vigilance',
        'Accreditation (Res. 3100 of 2019) and biomedical equipment standards',
      ],
      stats: [
        { value: '3,000+', label: 'Biomedical devices at the sites served' },
        { value: '2+', label: 'Years in clinical settings' },
        { value: '4', label: 'Healthcare companies' },
      ],
      specialties: [
        {
          title: 'Support and Maintenance',
          description:
            '**Preventive and corrective** maintenance, calibration and metrology of biomedical and dental equipment.',
          icon: 'wrench',
        },
        {
          title: 'Safety and Compliance',
          description:
            '**Medical device vigilance**, accreditation (Resolution 3100 of 2019), Resolution 001732 of 2026 and biomedical equipment standards.',
          icon: 'shield',
        },
        {
          title: 'Management with Digital Tools',
          description: 'Inventories, equipment records and schedules backed by **apps and dashboards** I build myself.',
          icon: 'briefcase',
        },
      ],
      skillsIntro: 'Clinical engineering backed by data, automation and teamwork with care staff.',
      seoTitle: 'Mario Hernández | Biomedical Engineer · Biomedical Technology Management',
      seoDescription:
        'Biomedical Engineer in Nariño, Colombia: technical support and maintenance of medical equipment, device vigilance, calibration, inventories and healthcare service accreditation.',
    },
    data: {
      label: 'Data, AI and Development',
      short: 'Data & AI',
      role: 'Data Analyst · Applied AI Developer',
      headline: ['Data and AI', 'that solve real problems'],
      summary: [
        'Engineer with a **Postgraduate Specialization in Artificial Intelligence**, focused on data analysis and applied AI development.',
        'I work with **SQL, Power Query, Power BI and Python** to turn operational information into reports and indicators, and I build applications with **LLMs**, machine learning models and deployed web products.',
      ],
      cvHeadline:
        'Data Analyst and Applied AI Developer | SQL · Power BI · Python · LLMs · Machine Learning · Next.js',
      cvProfile:
        'Biomedical Engineer with a Postgraduate Specialization in Artificial Intelligence (UAM), focused on data analysis and applied AI development. I work with advanced Excel, Power Query, SQL and Power BI to clean, transform and model operational information and turn it into reports and indicators; I have built ETL processes from spreadsheets and management systems into databases and dashboards. I build applications with LLMs (Gemini API, RAG with embeddings), machine learning models (scikit-learn, TensorFlow) and deployed web products (Next.js, PostgreSQL/Supabase, Vercel, Cloudflare). I have apps in real use, experience as a C#/.NET developer and knowledge of the healthcare sector.',
      cardText: 'Data analysis and business intelligence, machine learning, LLM applications and deployed web products.',
      cardPoints: [
        'SQL, Power Query, Power BI and Python',
        'LLM apps and ML models (85%+ accuracy on clinical data)',
        'Web products deployed with Next.js and Supabase',
      ],
      stats: [{ value: '85%+', label: 'Accuracy in models on clinical data' }],
      specialties: [
        {
          title: 'Data Analysis and BI',
          description: 'Cleaning, ETL and modeling with **SQL, Power Query and Python**; dashboards in Power BI and Looker Studio.',
          icon: 'database',
        },
        {
          title: 'Applied AI',
          description:
            'Applications with **LLMs** (Gemini API, RAG with embeddings) and machine learning models with scikit-learn and TensorFlow.',
          icon: 'brain',
        },
        {
          title: 'Full Stack Development',
          description: 'Web products with **Next.js, PostgreSQL/Supabase and Vercel**; experience with C# and ASP.NET.',
          icon: 'code',
        },
      ],
      skillsIntro: "From raw data to a deployed product, with an engineer's judgment.",
      seoTitle: 'Mario Hernández | Data Analyst and Applied AI Developer',
      seoDescription:
        'Data analyst and developer with a Specialization in AI: SQL, Power BI, Python, LLMs, machine learning and web applications with Next.js and Supabase. Projects and live demos.',
    },
  },

  experience: [
    {
      id: 'ips',
      role: 'Biomedical Technical Support Engineer',
      company: 'INFRAMED del Sur S.A.S. · IPS Municipal de Ipiales E.S.E.',
      period: 'Feb 2026 – Present',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'corporate',
      tracks: ['bio', 'data'],
      summary:
        'Engineer at the contractor INFRAMED del Sur, assigned to **IPS Municipal de Ipiales E.S.E.**: technical support for the biomedical equipment at every site.',
      bullets: {
        bio: [
          'Technical support and preventive and corrective maintenance of the biomedical equipment at every site (more than 3,000 devices).',
          'Tracking of maintenance schedules and management of technical documentation.',
          'Medical device vigilance and staff training, including the Device Vigilance presentation for the staff of the institution.',
          'Analysis of **Resolution 001732 of 2026**: 12-month transition checklist and technical analysis of the changes in required biomedical equipment for four services.',
          'Formal decommissioning reports for six biomedical devices, based on calibration certificates.',
          'Built a **mobile app for the physical verification of the biomedical inventory** (Emergency, Ambulances and other sites) with a shared progress dashboard.',
        ],
        data: [
          'Built a **mobile app for the physical verification of the biomedical inventory** (Emergency, Ambulances and other sites) with a shared progress dashboard.',
          'Cleaned and consolidated inventory and device vigilance data in **Excel / Power Query** for regulatory compliance reports.',
          'Analysis of Resolution 001732 of 2026: 12-month transition checklist and technical analysis of the changes in required biomedical equipment for four services.',
          'Technical support for the biomedical equipment at every site (more than 3,000 devices).',
        ],
      },
      tech: ['Biomedical Maintenance', 'Device Vigilance', 'Inventories', 'Resolution 001732 of 2026', 'Excel / Power Query', 'Mobile App'],
    },
    {
      id: 'bimtho',
      role: 'Service Engineer',
      company: 'Bimtho Ingeniería S.A.S.',
      period: 'Mar 2025 – Jan 2026',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'corporate',
      imageUrlId: 'exp-bimtho',
      tracks: ['bio', 'data'],
      summary:
        'Technical management of dental equipment in clinics and healthcare providers: maintenance, calibration, documentation and digital tools for equipment records.',
      bullets: {
        bio: [
          'Technical management of dental equipment: preventive and corrective maintenance and calibrations.',
          'Documentation: equipment records, metrology certificates and technical inventories.',
          'Inventory management of equipment and supplies in dental clinics and healthcare providers.',
          'Equipment standard under **Resolution 3100 of 2019** and support for healthcare service accreditation processes.',
          'Built a **multi-client web application** to manage the equipment records of several institutions.',
        ],
        data: [
          'Built a **multi-client web application on PostgreSQL (Supabase)** to manage the equipment records of several institutions, with administrator and read-only roles; migrated the data from Google Sheets.',
          'Automated technical documentation with **Python and AppSheet**.',
          '**SQL** queries on maintenance histories to identify recurring failures, and indicator dashboards in **Power BI**.',
        ],
      },
      tech: ['Dental Equipment', 'Calibration', 'Resolution 3100 of 2019', 'PostgreSQL (Supabase)', 'SQL', 'Power BI', 'Python', 'AppSheet'],
    },
    {
      id: 'finansoft',
      role: 'Junior Developer',
      company: 'Finansoft S.A.S.',
      period: 'May 2024 – Jul 2024',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'corporate',
      tracks: ['data'],
      summary: 'Development and support of accounting software for small businesses with **ASP.NET, C# and SQL**.',
      bullets: {
        data: [
          'Development and support of accounting software for small businesses with **ASP.NET, C# and SQL**.',
          'User interfaces, backend processes and data integrity.',
          'End-user support.',
        ],
      },
      tech: ['C#', 'ASP.NET', 'SQL'],
    },
    {
      id: 'techmedic',
      role: 'Biomedical Coordination Support Engineer / Intern',
      company: 'TechMedic S.A.S.',
      period: 'Aug 2023 – Dec 2023',
      location: 'Pasto, Nariño, Colombia',
      icon: 'corporate',
      imageUrlId: 'exp-hospital',
      tracks: ['bio', 'data'],
      summary:
        'Biomedical Engineering intern (Aug–Nov) and support engineer (Nov–Dec), with maintenance at Fundación Hospital San Pedro and inventory digitization.',
      bullets: {
        bio: [
          'Preventive and corrective maintenance at Fundación Hospital San Pedro (Pasto).',
          'Vendor follow-up and documentation for audits.',
          'Trained healthcare staff on the safe use and maintenance of equipment.',
          'Supported occupational health and safety (SG-SST) activities for clients.',
          'Checklists and quick guides digitized with **QR codes**.',
        ],
        data: [
          'Automated data capture with **Python and Google Sheets**.',
          'Inventory dashboards in **Looker Studio and Power BI**.',
          'Inventory apps in **AppSheet**.',
        ],
      },
      tech: ['Biomedical Maintenance', 'SG-SST', 'Python', 'Looker Studio', 'Power BI', 'AppSheet', 'Google Sheets'],
    },
    {
      id: 'uam',
      role: 'Young Researcher and Teaching Assistant',
      company: 'Universidad Autónoma de Manizales',
      period: '2020 – 2024',
      location: 'Manizales, Caldas, Colombia',
      icon: 'research',
      imageUrlId: 'exp-research',
      tracks: ['bio', 'data'],
      summary:
        'Nanoscience and Nanotechnology research group: molecular dynamics simulation of nanoparticles. Teaching assistant for Circuits (2021) and Biomedical Design (2022).',
      bullets: {
        bio: [
          'Molecular dynamics simulation algorithms for magnetite nanoparticles in **Python, C++ and LAMMPS**.',
          'Impedance analysis of a semimetallic material with Python (Pandas, NumPy).',
          'Presentation at the XIV Departmental Meeting of Research Groups (RREDSI), awarded **Best Presentation**.',
          'Tutoring in biomedical circuit design and simulation, and programming mentoring in Python and Arduino.',
          'Laboratory supervision.',
        ],
      },
      tech: ['Python (Pandas, NumPy)', 'C++', 'LAMMPS', 'MATLAB', 'Arduino'],
      impact: ['Best Presentation at the XIV Departmental Meeting of Research Groups (RREDSI).'],
    },
    {
      id: 'delfin',
      role: 'Summer Research Fellow · DELFÍN Program',
      company: 'Universidad de Guadalajara',
      period: 'Jun 2023 – Aug 2023',
      location: 'Guadalajara, Jalisco, Mexico',
      icon: 'research',
      imageUrlId: 'exp-delfin',
      tracks: ['bio', 'data'],
      summary:
        'XXVIII Pacific Summer of Scientific and Technological Research: cellulose nanoparticles from agave bagasse.',
      bullets: {
        bio: [
          'Synthesis and characterization of cellulose nanoparticles from agave bagasse for bio-products with biomedical applications.',
          'Characterization with **SEM, TEM and XRD** and statistical modeling (**DOE, ANOVA**) with Python to optimize experimental processes.',
        ],
      },
      tech: ['SEM', 'TEM', 'XRD', 'DOE', 'ANOVA', 'Python'],
    },
    {
      id: 'pabon',
      role: 'Biomedical Engineering Intern',
      company: 'Clínica Cardioneurovascular Pabón S.A.S.',
      period: 'Jan 2023 – Jun 2023',
      location: 'Pasto, Nariño, Colombia',
      icon: 'corporate',
      imageUrlId: 'exp-pabon',
      tracks: ['bio', 'data'],
      summary:
        'Internship at a cardio-neurovascular clinic: maintenance of high-complexity equipment (hemodynamics, mechanical ventilation), device vigilance and inventories, with a mobile app and a dashboard to control them.',
      bullets: {
        bio: [
          'Preventive and corrective maintenance of high-complexity equipment, such as **hemodynamics systems and mechanical ventilators**.',
          'Updated equipment records in line with **INVIMA regulations** and wrote quick guides for safe operation.',
          'Trained staff on device vigilance and took part in hospital safety rounds in critical areas.',
          'Verified and **digitized the inventory** of biomedical equipment, improving its traceability.',
          'Built an **inventory mobile app in AppSheet** and an inventory dashboard in Google Sheets and Looker Studio.',
        ],
        data: [
          "Built an **inventory mobile app in AppSheet** for the clinic's biomedical equipment.",
          'Inventory dashboard in **Google Sheets and Looker Studio**.',
          'Digitized and verified the biomedical equipment inventory, improving its traceability.',
        ],
      },
      tech: ['Hemodynamics', 'Mechanical Ventilation', 'Device Vigilance', 'INVIMA Regulations', 'Inventories', 'AppSheet', 'Looker Studio'],
    },
    {
      id: 'cres',
      role: 'English Teacher',
      company: 'Corporación CRES (CorpoCres)',
      period: 'Aug 2026 – Present',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'academic',
      tracks: ['bio', 'data'],
      secondary: true,
      summary: 'English teacher at an institution offering professional technical programs.',
      bullets: {
        bio: [
          'Plan and teach English classes for students in professional technical programs.',
          'Assess and track student progress.',
        ],
      },
      tech: ['English', 'Teaching'],
    },
    {
      id: 'smart',
      role: 'English Tutor (part-time)',
      company: 'Smart English Academy',
      period: 'Mar 2024 – Jul 2026',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'academic',
      imageUrlId: 'exp-smart',
      tracks: ['bio', 'data'],
      secondary: true,
      summary:
        'Personalized teaching for beginner and intermediate students, including several teachers from Colegio Champagnat de Ipiales, supported by AI tools.',
      bullets: {
        bio: [
          'Personalized teaching for beginner and intermediate students, including several teachers from Colegio Champagnat de Ipiales.',
          'Designed learning materials (A1 course), continuous assessment and online classes.',
          'Integrated AI tools for interactive activities and progress tracking.',
        ],
      },
      tech: ['Personalized Teaching', 'Online Classes', 'AI Tools'],
    },
  ],

  projects: [
    // --- Data, AI and Development ---
    {
      id: 'finanzasbot',
      title: 'FinanzasBot · Personal finance assistant with an LLM',
      description:
        'Web app (PWA) to keep personal accounts by talking in everyday language. It runs on **Cloudflare Workers**: an LLM (Llama on Workers AI) interprets messages and receipt photos, Whisper transcribes voice notes, and the app computes budgets, savings goals and simulations.',
      imageUrlId: 'proj-finanzasbot',
      tags: ['TypeScript', 'React + Vite', 'Cloudflare Workers (Hono)', 'D1 (SQLite)', 'Workers AI', 'Whisper'],
      category: 'datos',
      tracks: ['data'],
      featured: true,
      caseStudy: {
        problem: 'Tracking personal finances by hand is tedious and quickly abandoned.',
        solution:
          'An AI chat extracts transactions from text, voice or images; the calculations are done by the server with deterministic formulas.',
        result: 'App installable on a phone, with notifications and automated tests.',
      },
      githubUrl: links.finanzasRepo,
    },
    {
      id: 'alianzanet',
      title: 'AlianzaNet Pro Customer System',
      description:
        'Customer management system in production, with a PostgreSQL database on **Supabase**, built with AI assistance (Antigravity) and deployed on Vercel.',
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
      title: 'Football match predictor · 2026 World Cup',
      description:
        'Own Python pipeline with **Elo** ratings, recent form, head-to-head history and a **Poisson / Dixon-Coles** model: it estimates the score, 1X2, over/under and both teams to score, and builds a dashboard. Run daily from the group stage to the semifinals.',
      cover: 'model',
      tags: ['Python', 'Poisson / Dixon-Coles', 'Elo', 'Dashboard'],
      category: 'datos',
      tracks: ['data'],
      featured: true,
    },
    {
      id: 'bila',
      title: 'BILA Investment Trends',
      description:
        'Solution for the Latin American Investment Bank (BILA) that helps identify the risk profile and make informed decisions through an interactive financial analysis dashboard.',
      imageUrlId: 'proj-bila',
      tags: ['Power BI', 'Streamlit', 'Python'],
      category: 'datos',
      tracks: ['data'],
      featured: true,
      caseStudy: {
        problem: "Identifying an investor's risk profile and guiding their decision.",
        solution: 'Interactive financial analysis dashboard built with Python and Streamlit.',
        result: 'Deployed application available as a live demo.',
      },
      githubUrl: links.bilaRepo,
      embedUrl: links.bilaEmbed,
    },
    {
      id: 'distridentales-analysis',
      title: 'Sales analysis · Distridentales de Nariño',
      description:
        'Extraction of sales and inventory from the management system, cleaning in **Power Query** and analysis of products, customers and turnover for a dental supplies distributor.',
      cover: 'chart',
      tags: ['Excel', 'Power Query', 'SQL', 'Power BI'],
      category: 'datos',
      tracks: ['data'],
      featured: true,
    },
    {
      id: 'distridentales-web',
      title: 'Website · Distridentales de Nariño',
      description:
        'Landing page migrated from HTML to **Next.js**, with its domain on Cloudflare, Google Analytics tracking and a catalog for WhatsApp.',
      cover: 'web',
      tags: ['Next.js', 'Cloudflare', 'Google Analytics'],
      category: 'datos',
      tracks: ['data'],
    },
    {
      id: 'spotify',
      title: 'Analysis of Spotify songs up to 2023',
      description:
        'Analysis of trends and patterns in the most popular songs: data processing with **Python and R** and an interactive **Looker Studio** dashboard.',
      imageUrlId: '4',
      tags: ['Python', 'R', 'Looker Studio'],
      category: 'datos',
      tracks: ['data'],
      embedUrl: links.spotifyEmbed,
      githubUrl: links.spotifyRepo,
    },
    {
      id: 'geometry',
      title: 'Learning is a Game: Geometry',
      description: 'Gamified educational platform for teaching geometry concepts.',
      imageUrlId: '7',
      tags: ['React', 'Firebase', 'Vercel'],
      category: 'datos',
      tracks: ['data'],
      embedUrl: links.geometryEmbed,
    },
    {
      id: 'minerals',
      title: 'Mineral extraction in Colombia',
      description:
        'Interactive report with open data on where minerals are extracted in Colombia, built in the Data Science for All program (Correlation One / MinTIC).',
      cover: 'chart',
      tags: ['Looker Studio', 'Open Data'],
      category: 'datos',
      tracks: ['data'],
    },

    // --- Health and biomedical management ---
    {
      id: 'clinical-data',
      title: 'Clinical Data Management with AI',
      description:
        'Exploratory analysis and supervised classification on the Heart Disease, Thyroid and Diabetes datasets, with **accuracy above 85%**.',
      imageUrlId: 'proj-clinical',
      tags: ['Python', 'Jupyter', 'scikit-learn'],
      category: 'salud',
      tracks: ['bio', 'data'],
      featured: true,
      caseStudy: {
        problem: 'Turning clinical records into useful information to support decisions.',
        solution: 'Data cleaning, exploratory analysis and supervised classification models in Python.',
        result: 'Models above 85% accuracy and published EDA reports.',
      },
      embedUrl: links.clinicalEmbed,
      githubUrl: links.clinicalRepo,
    },
    {
      id: 'inventory-app',
      title: 'Biomedical inventory verification app',
      description:
        'Mobile app for the physical verification of the biomedical inventory (Emergency, Ambulances and other sites) with a shared web progress dashboard. Built for IPS Municipal de Ipiales.',
      cover: 'app',
      tags: ['Mobile App', 'Web Dashboard', 'Biomedical Inventory'],
      category: 'salud',
      tracks: ['bio', 'data'],
      featured: true,
    },
    {
      id: 'equipment-records',
      title: 'Multi-client equipment records manager',
      description:
        'Web application on **PostgreSQL (Supabase)** to manage the equipment records of several institutions, with administrator and read-only roles. Data migrated from Google Sheets. Built at Bimtho Ingeniería.',
      cover: 'app',
      tags: ['Supabase (PostgreSQL)', 'Web', 'Equipment Records'],
      category: 'salud',
      tracks: ['bio', 'data'],
      featured: true,
    },
    {
      id: 'births',
      title: 'Births in Caldas (2010–2024)',
      description:
        '**Power BI** dashboard analyzing births by place of residence in the department of Caldas, with interactive views of trends and geographic distribution.',
      imageUrlId: '8',
      images: birthsImages,
      tags: ['Power BI', 'Python', 'Public Health'],
      category: 'salud',
      tracks: ['bio', 'data'],
      downloadUrl: links.birthsDownload,
    },
    {
      id: 'pabon-inventory',
      title: 'Inventory mobile app · Clínica Pabón',
      description:
        'Mobile app in **AppSheet** for the biomedical equipment inventory of Clínica Cardioneurovascular Pabón, with a dashboard in Google Sheets and Looker Studio. Built during the Biomedical Engineering internship.',
      cover: 'app',
      tags: ['AppSheet', 'Google Sheets', 'Looker Studio'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'eda-outbreak',
      title: 'Acute Diarrheal Disease outbreak prediction',
      description:
        'Case forecasting in Ipiales with machine learning from epidemiological and environmental data, with a published exploratory analysis report.',
      imageUrlId: '1',
      tags: ['Python', 'Machine Learning', 'Public Health'],
      category: 'salud',
      tracks: ['bio', 'data'],
      githubUrl: links.clinicalRepo,
    },
    {
      id: 'heart',
      title: 'Heart failure prediction models',
      description: 'Risk classification on the "Heart Failure Prediction" dataset, optimized for accuracy and AUC.',
      imageUrlId: '3',
      tags: ['TensorFlow', 'Deep Learning', 'Classification'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'clustering',
      title: 'Patient clustering',
      description: 'Unsupervised clustering on the "Thyroid Disease" dataset.',
      imageUrlId: '2',
      tags: ['scikit-learn', 'Clustering'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'nano',
      title: 'Magnetite nanoparticle simulation',
      description:
        'Molecular dynamics simulation with Python, C++ and LAMMPS to study the structure of magnetite nanoparticles. Basis of the undergraduate thesis.',
      imageUrlId: '5',
      tags: ['Python', 'C++', 'LAMMPS', 'Nanotechnology'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
  ],

  skills: [
    {
      id: 'clinica',
      title: 'Biomedical Engineering',
      tracks: ['bio'],
      items: [
        'Preventive and corrective maintenance',
        'Calibration and metrology (VIM, SI, PAME)',
        'Medical device vigilance (adverse event reporting)',
        'Equipment records and inventories',
        'Healthcare service accreditation (Resolution 3100 of 2019)',
        'Resolution 001732 of 2026',
        'Biomedical equipment standards',
        'Vendor management and audits',
        'Occupational health and safety (SG-SST)',
        'Training for healthcare staff',
      ],
    },
    {
      id: 'herramientas',
      title: 'Data and Digital Tools',
      tracks: ['bio'],
      items: [
        'Advanced Excel and Power Query',
        'Power BI',
        'SQL',
        'Python',
        'AppSheet',
        'Looker Studio',
        'PostgreSQL (Supabase)',
        'Google Workspace',
        'MATLAB',
        'Applied AI (LLMs)',
      ],
    },
    {
      id: 'lenguajes',
      title: 'Data and BI',
      tracks: ['data'],
      items: [
        'SQL (JOINs, subqueries, window functions)',
        'Python (Pandas, NumPy, Matplotlib, Plotly)',
        'Power BI',
        'Power Query',
        'Advanced Excel',
        'Looker Studio',
        'Tableau',
        'ETL',
        'R',
        'CRM/ERP data',
      ],
    },
    {
      id: 'ia',
      title: 'AI and Machine Learning',
      tracks: ['data'],
      items: [
        'LLMs (Gemini, OpenAI and Claude APIs)',
        'RAG, embeddings and semantic search',
        'Prompt engineering',
        'Agentic development (Claude Code, Antigravity)',
        'scikit-learn',
        'TensorFlow',
        'OpenCV',
        'Classification, clustering and forecasting',
        'Statistical modeling (Poisson / Dixon-Coles, Elo)',
        'EDA',
      ],
    },
    {
      id: 'desarrollo',
      title: 'Development and Deployment',
      tracks: ['data'],
      items: [
        'TypeScript / JavaScript',
        'Next.js and React',
        'C# (ASP.NET)',
        'PostgreSQL (Supabase)',
        'Firebase',
        'REST APIs',
        'Streamlit',
        'Vercel and Cloudflare (Workers, D1)',
        'Git / GitHub',
        'AppSheet and Google Apps Script',
      ],
    },
    {
      id: 'blandas',
      title: 'Soft Skills',
      tracks: ['bio', 'data'],
      items: [
        'Analytical thinking',
        'Problem solving',
        'Assertive communication',
        'Teamwork',
        'Training and teaching',
        'Adaptability',
        'Continuous learning',
        'Data storytelling',
      ],
    },
  ],

  certifications: [
    { title: 'Diploma in Healthcare Service Accreditation (120 h)', issuer: 'Politécnico de Colombia', date: '2025', tracks: ['bio'] },
    { title: 'Biomedical Metrology Seminar', issuer: 'MEBI Metrología S.A.', date: 'Sep 2025', tracks: ['bio'] },
    { title: 'National Medical Device Vigilance Program', issuer: 'INVIMA', date: '2025', tracks: ['bio'] },
    { title: 'Psychological First Aid', issuer: '', date: '2025', tracks: ['bio'] },
    { title: 'Clinical Data Management with Artificial Intelligence', issuer: 'Universidad Autónoma de Manizales', date: 'Jul 2024', tracks: ['bio', 'data'] },
    { title: 'Summer of Scientific Research · DELFÍN Program', issuer: 'Universidad de Guadalajara', date: '2023', tracks: ['bio', 'data'] },
    { title: 'Data Analytics Fundamentals · Data Science for All', issuer: 'Correlation One / MinTIC', date: 'Dec 2022', tracks: ['data'] },
    { title: 'Digital Skills for Professionals · Workspace', issuer: 'Google Activate', date: '2022', tracks: ['data'] },
    { title: 'Foundations: Data, Data, Everywhere', issuer: 'Google', date: '', tracks: ['data'] },
    { title: 'Python for Data Science', issuer: 'Platzi', date: '', tracks: ['data'] },
    { title: 'Basic Differential Calculus for Data Science and AI', issuer: '', date: '', tracks: ['data'] },
    { title: 'Advanced Excel for Data Analysis', issuer: '', date: '', tracks: ['data'] },
    { title: 'Power BI Course', issuer: '', date: '', tracks: ['data'] },
    { title: 'Machine Learning with MATLAB', issuer: 'MathWorks', date: '', tracks: ['data'] },
    { title: 'MATLAB Fundamentals', issuer: 'MathWorks', date: '', tracks: ['data'] },
    { title: 'V Biomedical Symposium', issuer: 'SENA', date: '2022', tracks: ['bio'] },
    { title: 'English program (six levels completed)', issuer: 'Universidad de Nariño', date: '2016 – 2018', tracks: ['bio', 'data'] },
  ],

  awards: [
    {
      title: 'Best Presentation',
      issuer: 'XIV Departmental Meeting of Research Groups (RREDSI)',
      description:
        'Award for the best presentation of results from the Nanoscience and Nanotechnology research group at Universidad Autónoma de Manizales.',
      category: 'investigacion',
      icon: 'trophy',
      imageUrlId: 'exp-research',
    },
    {
      title: 'International Research Stay · DELFÍN Program',
      issuer: 'Universidad de Guadalajara, Mexico',
      description:
        'Selected for the XXVIII Pacific Summer of Scientific and Technological Research, in the project "Reuse of agave bagasse waste in functional bio-products for biomedical applications".',
      year: '2023',
      category: 'investigacion',
      icon: 'globe',
      imageUrlId: 'exp-delfin',
    },
    {
      title: 'Honorable Mention',
      issuer: 'Biomedical Engineering · Universidad Autónoma de Manizales',
      description: 'Distinction for outstanding academic performance throughout the program.',
      year: '2023',
      category: 'academico',
      icon: 'medal',
    },
    {
      title: 'Honors Scholarship',
      issuer: 'Biomedical Engineering · Universidad Autónoma de Manizales',
      description: 'Recognition for outstanding academic performance.',
      year: '2023',
      category: 'academico',
      icon: 'star',
    },
  ],

  quotes: [
    {
      text: 'The most advanced technology is the one that becomes invisible and focuses on what truly matters: human life.',
      author: 'Vision',
      icon: 'heart',
    },
    {
      text: 'At the intersection of clinical engineering and AI, we do not just process data, we save futures.',
      author: 'Professional purpose',
      icon: 'brain',
    },
    {
      text: 'True innovation is not building machines that think like humans, but tools that let humans heal better.',
      author: 'Technical philosophy',
      icon: 'sparkles',
    },
  ],
};
