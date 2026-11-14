import type { Content } from './types';
import { birthsImages, links } from './shared';

export const en: Content = {
  person: {
    name: 'Mario Hernández',
    fullName: 'Mario Andrés Hernández Moreno',
    title: 'Biomedical Engineer | AI Specialist',
    location: 'Ipiales / Pasto, Nariño, Colombia',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Advanced (B2/C1)' },
    ],
    education: [
      {
        degree: 'Postgraduate Specialization in Artificial Intelligence',
        institution: 'Universidad Autónoma de Manizales',
        period: '2024 – 2025',
        honor: '',
      },
      {
        degree: 'B.Eng. in Biomedical Engineering',
        institution: 'Universidad Autónoma de Manizales',
        period: '2019 – 2023',
        honor: 'Honorable Mention | Honors Scholarship (tenth semester)',
      },
    ],
  },

  home: {
    headline: ['Turning', 'Data into Life'],
    summary: [
      "I'm a **Biomedical Engineer and Artificial Intelligence Specialist**. I work on two fronts that reinforce each other: **medical technology management** in clinics and hospitals, and **data analysis and AI solution development**.",
      'Choose below the profile you are looking for.',
    ],
    seoTitle: 'Mario Hernández | Biomedical Engineer and AI Specialist',
    seoDescription:
      'Portfolio of Mario Andrés Hernández Moreno: Biomedical Engineer (hospital technology management) and AI Specialist (data analysis, machine learning and development).',
  },

  tracks: {
    bio: {
      label: 'Biomedical Engineering',
      short: 'Biomedical',
      role: 'Biomedical Engineer · Medical Technology Management',
      headline: ['Medical technology,', 'safe and available'],
      summary: [
        'Biomedical Engineer with experience in **hospital technology management**, preventive and corrective maintenance, medical device vigilance and healthcare service accreditation.',
        'I currently coordinate the technical management of more than **3,000 medical devices** at IPS Municipal de Ipiales, and use **data and AI** to make maintenance more traceable and efficient.',
      ],
      cvHeadline:
        'Biomedical Engineer | Medical Technology Coordination | Clinical Engineering | AI Specialist',
      cvProfile:
        'Biomedical Engineer specialized in hospital technology management, medical equipment coordination and healthcare accreditation processes. I coordinate the technical management of more than 3,000 medical devices across multiple sites. Experienced in preventive and corrective maintenance, medical device vigilance, calibration, technology assessment and regulatory compliance. As an Artificial Intelligence Specialist, I apply data analysis and automation to improve maintenance traceability and efficiency. Known for assertive communication, collaborative leadership and a results-driven approach.',
      cardText:
        'Hospital technology management, medical equipment maintenance, device vigilance and healthcare service accreditation.',
      cardPoints: [
        'More than 3,000 medical devices coordinated',
        '95% equipment operational availability',
        'Device vigilance, calibration and accreditation',
      ],
      stats: [
        { value: '3,000+', label: 'Medical devices managed' },
        { value: '95%', label: 'Equipment availability' },
        { value: '2+', label: 'Years in clinical settings' },
        { value: '4', label: 'Healthcare organizations' },
      ],
      specialties: [
        {
          title: 'Technology Management',
          description: 'Coordinating inventories, schedules and vendors to keep critical equipment running.',
          icon: 'briefcase',
        },
        {
          title: 'Maintenance and Calibration',
          description:
            '**Preventive and corrective** maintenance and calibration of biomedical equipment in line with regulations.',
          icon: 'wrench',
        },
        {
          title: 'Safety and Compliance',
          description:
            '**Medical device vigilance**, healthcare service accreditation, technical documentation and audits.',
          icon: 'shield',
        },
      ],
      skillsIntro: 'Clinical engineering backed by data, automation and teamwork with care staff.',
      seoTitle: 'Mario Hernández | Biomedical Engineer · Medical Technology Management',
      seoDescription:
        'Biomedical Engineer in Nariño, Colombia: coordination of 3,000+ medical devices, maintenance, device vigilance, calibration and healthcare service accreditation.',
    },
    data: {
      label: 'Data, AI and Development',
      short: 'Data & AI',
      role: 'Data Analyst · AI · Developer',
      headline: ['Data and AI', 'that solve real problems'],
      summary: [
        'Data analyst and developer with a background in **Biomedical Engineering** and a **Postgraduate Specialization in Artificial Intelligence**.',
        'I build dashboards, predictive models and AI-powered applications with **Python, SQL, Power BI and TypeScript**, from raw data to a deployed product.',
      ],
      cvHeadline: 'Data Analyst | Artificial Intelligence | Business Intelligence | AI Application Development',
      cvProfile:
        'Data Analyst with a background in Biomedical Engineering and a Postgraduate Specialization in Artificial Intelligence, experienced in data processing, analysis and visualization. I build solutions with Python, SQL and R, dashboards in Power BI and Looker Studio, machine learning models and AI-powered web applications (TypeScript, React, Cloudflare Workers). I have automated documentation and reporting processes in the healthcare sector, and I communicate technical findings to non-technical audiences. Analytical thinking, results orientation and continuous learning.',
      cardText: 'Data analysis, business intelligence, machine learning and AI-powered application development.',
      cardPoints: [
        'Python, SQL, Power BI and Looker Studio',
        'ML models on clinical data (85%+ accuracy)',
        'AI apps in production: TypeScript and React',
      ],
      stats: [
        { value: '40%', label: 'Less document processing time through automation' },
        { value: '85%+', label: 'Accuracy in clinical models' },
      ],
      specialties: [
        {
          title: 'Data Analysis and BI',
          description: 'From raw data to dashboard: **Python, SQL, Power BI and Looker Studio**.',
          icon: 'database',
        },
        {
          title: 'Artificial Intelligence',
          description:
            'Predictive modeling and machine learning, with a focus on **clinical data**, and LLMs inside products.',
          icon: 'brain',
        },
        {
          title: 'Application Development',
          description: 'Web applications with **TypeScript, React and cloud services**, tested and deployed.',
          icon: 'code',
        },
      ],
      skillsIntro: "From exploratory analysis to a deployed product, with an engineer's judgment.",
      seoTitle: 'Mario Hernández | Data Analyst, AI and Development',
      seoDescription:
        'Data analyst and developer with a Specialization in AI: Python, SQL, Power BI, machine learning and AI-powered web applications. Projects and live demos.',
    },
  },

  experience: [
    {
      id: 'ips',
      role: 'Service Engineer and Biomedical Management Coordinator',
      company: 'IPS Municipal de Ipiales',
      period: 'Feb 2026 – Present',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'corporate',
      tracks: ['bio', 'data'],
      summary:
        'I coordinate the technical management of more than **3,000 medical devices** across multiple sites, leading preventive and corrective maintenance.',
      bullets: {
        bio: [
          'Track maintenance schedules, ensuring planned activities are completed on time and optimizing response times for critical equipment.',
          'Develop and manage technical documentation, supporting traceability, internal audits and regulatory compliance.',
          'Lead training sessions for clinical and administrative staff on biomedical technology management and safe equipment use.',
          'Support the device vigilance area in identifying, analyzing and reporting adverse events associated with medical devices.',
          'Coordinate specialized technical services with external vendors.',
          'Work with hospital departments to keep critical equipment operational.',
        ],
        data: [
          'Track maintenance schedules for more than 3,000 medical devices across multiple sites, ensuring planned activities are completed.',
          'Develop and manage technical documentation, supporting traceability, internal audits and regulatory compliance.',
          'Support the device vigilance area in identifying, analyzing and reporting adverse events associated with medical devices.',
        ],
      },
      tech: ['Inventory Management', 'Biomedical Maintenance', 'Device Vigilance', 'Healthcare Regulations', 'Technical Leadership'],
      impact: ['Continuous operational availability of more than 3,000 medical devices.'],
    },
    {
      id: 'bimtho',
      role: 'Service Engineer and Biomedical Management Coordinator',
      company: 'Bimtho Ingeniería S.A.S',
      period: 'Mar 2025 – Jan 2026',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'corporate',
      imageUrlId: 'exp-bimtho',
      tracks: ['bio', 'data'],
      summary:
        'End-to-end biomedical technology management for dental clinics and healthcare providers, combining maintenance, compliance and data-driven automation.',
      bullets: {
        bio: [
          'Managed equipment and supply inventories in dental clinics and healthcare providers, ensuring availability and traceability.',
          'Performed preventive and corrective maintenance, achieving **95% operational availability**.',
          'Calibrated biomedical equipment according to quality standards and technical regulations.',
          'Supported the implementation of the equipment standard and **healthcare service accreditation** processes.',
          'Managed documentation for technical and maintenance processes, supporting audits and controls.',
          'Built **Power BI** dashboards and automated documentation with **Python and AppSheet**, cutting processing times by **40%**.',
        ],
        data: [
          'Built **Power BI** dashboards to monitor maintenance indicators, reaching **95% equipment availability**.',
          'Automated document management with **Python and AppSheet**, cutting processing times by **40%**.',
          'Designed inventory management systems with **SQL** databases and visualization tools for equipment and supply traceability.',
          'Ran statistical analysis of preventive and corrective maintenance data to identify failure patterns and optimize maintenance programs.',
          'Extracted, transformed and loaded (**ETL**) technical data and generated automated reports for audits.',
          'Implemented artificial intelligence applications aimed at optimizing biomedical maintenance management.',
        ],
      },
      tech: ['Preventive/Corrective Maintenance', 'Calibration', 'Accreditation', 'Power BI', 'Python', 'SQL', 'AppSheet', 'Dental Equipment'],
      impact: [
        '95% operational availability of equipment in clinics and healthcare providers.',
        '40% less document processing time thanks to automation.',
      ],
    },
    {
      id: 'techmedic',
      role: 'Support Engineer and Biomedical Engineering Intern',
      company: 'TechMedic S.A.S',
      period: 'Aug 2023 – Dec 2023',
      location: 'Pasto, Nariño, Colombia',
      icon: 'corporate',
      imageUrlId: 'exp-hospital',
      tracks: ['bio', 'data'],
      summary:
        'As an intern I performed maintenance at Fundación Hospital San Pedro; as a support engineer I handled vendors, audits and the digitization of technical information.',
      bullets: {
        bio: [
          'Preventive and corrective maintenance of biomedical equipment at Fundación Hospital San Pedro.',
          'Vendor follow-up and preparation of the documentation required for regulatory audits.',
          'Trained healthcare staff on the safe use and proper maintenance of biomedical equipment.',
          'Created checklists and digitized quick guides using **QR codes**.',
          'Supervised inventories and built **AppSheet** apps to manage them.',
        ],
        data: [
          'Built **Looker Studio** dashboards and ran **Python** analyses for inventory control.',
          'Built **AppSheet** apps for inventory management and digitized quick guides with QR codes.',
          'Analyzed vendor data and generated audit reports with advanced Excel and BI tools.',
          'Digitized and structured technical information, improving its traceability and accessibility.',
        ],
      },
      tech: ['Looker Studio', 'Power BI', 'Python', 'AppSheet', 'Google Workspace'],
      impact: ['Better information traceability, faster access to documentation and automated inventory reports.'],
    },
    {
      id: 'uam',
      role: 'Young Researcher and Teaching Assistant',
      company: 'Universidad Autónoma de Manizales',
      period: '2021 – 2024',
      location: 'Manizales, Caldas, Colombia',
      icon: 'research',
      imageUrlId: 'exp-research',
      tracks: ['bio', 'data'],
      summary:
        'In the Nanoscience and Nanotechnology research group I developed nanoparticle simulation algorithms; as a teaching assistant I tutored circuits and programming.',
      bullets: {
        bio: [
          'Developed a **magnetite nanoparticle simulation** algorithm based on molecular dynamics with **Python and C++**.',
          'Presented results at the XIV Departmental Meeting of Research Groups (RREDSI), receiving the **Best Presentation** award.',
          'Tutored biomedical circuit design and simulation (**Multisim**) and programming with **Arduino and Python**.',
          'Supervised laboratories and supported biomedical research projects.',
        ],
        data: [
          'Developed molecular dynamics simulation algorithms with **Python and C++**, processing large volumes of scientific data.',
          'Ran statistical analysis of nanoparticle behavior at different scales and produced scientific visualizations with Python (NumPy, Pandas, Matplotlib).',
          'Presented results at the XIV Departmental Meeting of Research Groups (RREDSI), receiving the **Best Presentation** award.',
          'Tutored programming (**Python, Arduino**) focused on sensor data and signal processing.',
        ],
      },
      tech: ['Python (NumPy, SciPy)', 'C++', 'MATLAB', 'Arduino', 'LAMMPS', 'VMD', 'Multisim'],
      impact: ['Best Presentation award at the XIV Departmental Meeting of Research Groups (RREDSI).'],
    },
    {
      id: 'delfin',
      role: 'Summer Research Fellow · DELFIN Program',
      company: 'Universidad de Guadalajara',
      period: 'Jun 2023 – Aug 2023',
      location: 'Guadalajara, Jalisco, Mexico',
      icon: 'research',
      imageUrlId: 'exp-delfin',
      tracks: ['bio', 'data'],
      summary:
        'International research stay on sustainable biomaterials: synthesis and characterization of nanomaterials from agave waste.',
      bullets: {
        bio: [
          'Developed **eco-friendly nanomaterials** from agave bagasse, synthesizing cellulose nanoparticles (**SEM, TEM, XRD**).',
          'Applied statistical modeling (**DOE, ANOVA**) and **Python** to optimize experimental processes.',
          'Project: "Reuse of agave bagasse waste in functional bio-products for biomedical applications".',
        ],
        data: [
          'Applied statistical modeling (**DOE, ANOVA**) and **Python** analysis (NumPy, Pandas, SciPy) to optimize experimental processes.',
          'Analyzed characterization data of cellulose nanoparticles (SEM, TEM, XRD, FTIR).',
        ],
      },
      tech: ['SEM', 'TEM', 'XRD', 'FTIR', 'DOE', 'ANOVA', 'Python (NumPy, Pandas, SciPy)'],
      impact: ['Synthesis and characterization of cellulose nanoparticles from agave waste.'],
    },
    {
      id: 'pabon',
      role: 'Biomedical Engineering Intern',
      company: 'Clínica Cardioneurovascular Pabón S.A.S',
      period: 'Jan 2023 – Jun 2023',
      location: 'Pasto, Nariño, Colombia',
      icon: 'corporate',
      imageUrlId: 'exp-pabon',
      tracks: ['bio'],
      summary:
        'Maintenance of high-complexity medical equipment, device vigilance and technology management, including inventory digitization.',
      bullets: {
        bio: [
          'Preventive and corrective maintenance of high-technology equipment such as **hemodynamics systems and mechanical ventilators**.',
          'Updated equipment records in line with **INVIMA regulations** and wrote quick guides for safe operation.',
          'Delivered device vigilance training and took part in safety rounds in critical areas.',
          '**Digitized biomedical equipment inventories**, improving traceability.',
        ],
      },
      tech: ['Hemodynamics', 'Mechanical Ventilation', 'Device Vigilance', 'INVIMA Regulations', 'Inventory Management'],
      impact: ['Zero equipment-related adverse events and 100% of equipment with up-to-date records.'],
    },
    // TODO(Mario): confirm the institute's full name and adjust these duties.
    {
      id: 'cres',
      role: 'English Teacher',
      company: 'CRES · Technical Institute',
      period: 'Aug 2026 – Present',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'academic',
      tracks: ['bio', 'data'],
      secondary: true,
      summary: 'English teacher in technical training programs.',
      bullets: {
        bio: [
          'Plan and teach English classes for students in technical programs.',
          'Assess and track student progress.',
        ],
      },
      tech: ['English B2/C1', 'Teaching', 'Learning Material Design'],
    },
    {
      id: 'smart',
      role: 'English Tutor',
      company: 'Smart English Academy',
      period: 'Mar 2024 – Jul 2026',
      location: 'Ipiales, Nariño, Colombia',
      icon: 'academic',
      imageUrlId: 'exp-smart',
      tracks: ['bio', 'data'],
      secondary: true,
      summary:
        'Designed a personalized English curriculum, integrating AI tools for activities and for tracking student progress.',
      bullets: {
        bio: [
          'Developed personalized learning materials and assessed students.',
          'Used AI tools (ChatGPT, Gemini) to design activities and automate feedback.',
          'Applied **gamification** strategies to encourage participation and autonomous learning.',
        ],
        data: [
          'Analyzed student performance data to identify areas for improvement and personalize teaching.',
          'Used AI tools (ChatGPT, Gemini) to design activities and automate feedback.',
        ],
      },
      tech: ['AI (ChatGPT, Gemini)', 'Google Workspace', 'Canva', 'Gamification'],
    },
  ],

  projects: [
    {
      id: 'finanzasbot',
      title: 'FinanzasBot · AI personal finance assistant',
      description:
        'Web app (PWA) that records expenses, income and transfers by chatting in natural language with **Aura**, its AI assistant. It understands text, voice notes and receipt photos, and computes budgets, savings goals and decision simulations.',
      imageUrlId: 'proj-finanzasbot',
      tags: ['TypeScript', 'React', 'Cloudflare Workers', 'D1 (SQL)', 'LLM', 'Whisper', 'Vitest'],
      category: 'datos',
      tracks: ['data'],
      featured: true,
      caseStudy: {
        problem: 'Tracking personal finances by hand is tedious and quickly abandoned.',
        solution:
          'An AI chat extracts transactions from text, voice or images; every calculation is done by the server with deterministic formulas.',
        result: 'Installable PWA with notifications, automated tests and serverless deployment.',
      },
      githubUrl: links.finanzasRepo,
    },
    {
      id: 'clinical-data',
      title: 'Clinical Data Management with AI',
      description:
        'Exploratory analysis and predictive modeling in healthcare on medical datasets (Heart Disease, Thyroid, Diabetes), with supervised ML models reaching **85%+ accuracy**.',
      imageUrlId: 'proj-clinical',
      tags: ['Machine Learning', 'Healthcare', 'Python', 'Jupyter'],
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
      id: 'bila',
      title: 'BILA Investment Trends',
      description:
        'Solution for the Latin American Investment Bank (BILA) that helps identify the risk profile and make informed decisions through an interactive financial analysis dashboard.',
      imageUrlId: 'proj-bila',
      tags: ['Python', 'Streamlit', 'Data Analytics', 'Finance'],
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
      id: 'alianzanet',
      title: 'AlianzaNet Pro Customer System',
      description:
        'Customer management system with a SQL database on **Supabase**, built with AI assistance (Antigravity) and deployed on Vercel.',
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
      title: 'Births in Caldas (2010-2024)',
      description:
        '**Power BI** dashboard analyzing births by place of residence in the department of Caldas, with interactive views of trends and geographic distribution.',
      imageUrlId: '8',
      images: birthsImages,
      tags: ['Power BI', 'Business Intelligence', 'Public Health'],
      category: 'salud',
      tracks: ['bio', 'data'],
      featured: true,
      downloadUrl: links.birthsDownload,
    },
    {
      id: 'eda-outbreak',
      title: 'Disease Outbreak Prediction (ADD)',
      description:
        'Machine learning prediction system to anticipate Acute Diarrheal Disease cases in Ipiales, Nariño, from clinical and environmental data.',
      imageUrlId: '1',
      tags: ['Machine Learning', 'Public Health', 'Python'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'heart',
      title: 'Heart Failure Prediction Models',
      description:
        'Training of classification models to detect heart failure risk ("Heart Failure Prediction" dataset) and optimization of metrics such as accuracy and AUC.',
      imageUrlId: '3',
      tags: ['Classification', 'Deep Learning', 'TensorFlow'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'clustering',
      title: 'Patient Clustering',
      description:
        'Unsupervised clustering algorithms to find hidden patterns in biomedical records from the "Thyroid Disease" dataset.',
      imageUrlId: '2',
      tags: ['Clustering', 'Data Analysis', 'Scikit-learn'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'nano',
      title: 'Nanoparticle Simulation',
      description:
        'Molecular dynamics simulation algorithm for magnetite nanoparticles with Python and C++, to analyze their behavior at different scales.',
      imageUrlId: '5',
      tags: ['Simulation', 'Nanotechnology', 'Python', 'C++'],
      category: 'salud',
      tracks: ['bio', 'data'],
    },
    {
      id: 'spotify',
      title: 'Spotify Songs Analysis (2023)',
      description:
        'Analysis of trends and patterns in the most popular songs up to 2023: data processing with **Python and R** and an interactive **Looker Studio** dashboard.',
      imageUrlId: '4',
      tags: ['Python', 'R', 'Looker Studio', 'Data Analysis'],
      category: 'datos',
      tracks: ['data'],
      embedUrl: links.spotifyEmbed,
      githubUrl: links.spotifyRepo,
    },
    {
      id: 'geometry',
      title: 'Learning is a Game: Geometry',
      description:
        'Interactive educational platform that uses gamification to teach geometry concepts. Built with **Firebase Studio** and deployed on **Vercel**.',
      imageUrlId: '7',
      tags: ['React', 'Firebase', 'Vercel', 'Education'],
      category: 'datos',
      tracks: ['data'],
      embedUrl: links.geometryEmbed,
    },
  ],

  skills: [
    {
      id: 'clinica',
      title: 'Biomedical and Clinical Engineering',
      tracks: ['bio'],
      items: [
        'Hospital Technology Management',
        'Preventive and Corrective Maintenance',
        'Calibration and Metrology',
        'Medical Device Vigilance',
        'Healthcare Service Accreditation',
        'Technology Assessment',
        'Inventory Management',
        'Documentation and Audits',
        'Regulations and Standards (INVIMA)',
        'Biomaterials and Nanotechnology',
      ],
    },
    {
      id: 'herramientas',
      title: 'Data and Tools',
      tracks: ['bio'],
      items: [
        'Power BI',
        'Advanced Excel',
        'Python',
        'SQL',
        'AppSheet',
        'Looker Studio',
        'Google Workspace',
        'MATLAB',
        'Arduino',
        'Applied AI (ChatGPT, Gemini, Claude)',
      ],
    },
    {
      id: 'lenguajes',
      title: 'Languages and BI',
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
        'Advanced Excel',
        'Streamlit',
      ],
    },
    {
      id: 'ia',
      title: 'AI and Machine Learning',
      tracks: ['data'],
      items: [
        'Predictive Modeling',
        'Machine Learning',
        'Deep Learning',
        'Statistical Analysis',
        'Scikit-learn',
        'TensorFlow',
        'Pandas and NumPy',
        'OpenCV',
        'LLMs in products (text, voice and vision)',
        'ChatGPT, Gemini, Claude',
      ],
    },
    {
      id: 'desarrollo',
      title: 'Development and Cloud',
      tracks: ['data'],
      items: [
        'React and Next.js',
        'Cloudflare Workers',
        'Supabase',
        'Firebase',
        'Vercel',
        'Git and GitHub',
        'Testing with Vitest',
        'AppSheet and Apps Script',
        'ETL and Automation',
        'Google Colab',
      ],
    },
    {
      id: 'blandas',
      title: 'Soft Skills',
      tracks: ['bio', 'data'],
      items: [
        'Analytical and Strategic Thinking',
        'Problem Solving',
        'Collaborative Leadership',
        'Assertive Communication',
        'Teamwork',
        'Adaptability',
        'Decision Making',
        'Data Storytelling',
      ],
    },
  ],

  certifications: [
    { title: 'Diploma in Healthcare Service Accreditation', issuer: 'Politécnico de Colombia', date: 'Oct 2025', tracks: ['bio'] },
    { title: 'Biomedical Metrology Seminar', issuer: 'MEBI Metrología S.A.', date: 'Sep 2025', tracks: ['bio'] },
    { title: 'National Medical Device Vigilance Program', issuer: 'INVIMA', date: 'May 2025', tracks: ['bio'] },
    { title: 'Psychological First Aid Course', issuer: '', date: '2025', tracks: ['bio'] },
    { title: 'Clinical Data Management with Artificial Intelligence', issuer: 'Universidad Autónoma de Manizales', date: 'Jul 2024', tracks: ['bio', 'data'] },
    { title: 'Summer Research Stay · DELFIN Program', issuer: 'Universidad de Guadalajara, Mexico', date: '2023', tracks: ['bio', 'data'] },
    { title: 'Data Analytics Fundamentals', issuer: 'Correlation One', date: 'Dec 2022', tracks: ['data'] },
    { title: 'Machine Learning with MATLAB', issuer: 'MathWorks', date: '', tracks: ['data'] },
    { title: 'MATLAB Fundamentals', issuer: 'MathWorks', date: '', tracks: ['bio', 'data'] },
    { title: 'Digital Skills', issuer: 'Google Activate', date: 'Nov 2022', tracks: ['data'] },
    { title: 'V Biomedical Symposium', issuer: 'SENA, Manizales', date: 'Aug 2022', tracks: ['bio'] },
    { title: 'English Course', issuer: 'Universidad de Nariño', date: '2016 – 2018', tracks: ['bio', 'data'] },
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
      title: 'International Research Stay · DELFIN Program',
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
      description: 'Recognition for outstanding academic performance in the tenth semester.',
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
