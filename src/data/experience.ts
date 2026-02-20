export type Experience = {
  role: string
  company: {
    name: string
    href?: string
  }
  location: string
  start: string
  end?: string
  highlights: string[]
  tags: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    role: 'Software Engineer',
    company: { name: 'Soundraw', href: 'https://soundraw.io' },
    location: 'Tokyo, Japan (Remote)',
    start: 'Jan 2025',
    end: 'Present',
    highlights: [
      'Built new mobile-application APIs for AI music creation and delivery.',
      'Maintained the soundraw.io website, shipped new genres, and improved the music creation flow.',
      'Generated 20,000+ songs in one week to support a $150K+ enterprise deal.'
    ],
    tags: [
      'Domain Modeling',
      'FFmpeg',
      'Linear',
      'Ruby on Rails',
      'Vue',
      'Heroku',
      'POSTGRES',
      'MONGODB',
      'AI AGENTS'
    ]
  },
  {
    role: 'Software Engineer (Consulting)',
    company: { name: 'Kadric Smart Solutions', href: 'https://www.ksmartsolutions.jp' },
    location: 'Tokyo, Japan (Remote)',
    start: 'May 2023',
    end: 'Nov 2025',
    highlights: [
      'Built logistics management tooling and integrations for enterprise customers.',
      'Led UI/UX discovery with stakeholders and shipped React-based operational dashboards.',
      'Delivered prototypes spanning gateway services, kiosk experiences, and Android device flows.'
    ],
    tags: [
      'Consulting',
      'React',
      'TypeScript',
      'Node.js',
      'Vue',
      'Java',
      'Spring',
      'MUI',
      'deck.gl',
      'AWS',
      'Terraform',
      'Japanese',
      'Docker'
    ]
  },
  {
    role: 'Data Reliability Engineer',
    company: { name: 'Moneytree', href: 'https://getmoneytree.com' },
    location: 'Tokyo, Japan (Remote)',
    start: 'Jan 2020',
    end: 'Apr 2023',
    highlights: [
      'Maintained financial data aggregation pipelines serving 3,000+ banks and 5M+ users.',
      'Optimized dozens of integrations, cutting monthly running costs by 30%+.',
      'Created monitoring, alerting, and SOPs that improved incident response times.'
    ],
    tags: [
      'TypeScript',
      'AWS',
      'Ruby on Rails',
      'SQL',
      'Web Scraping',
      'Observability',
      'Atlassian',
      'Domain Modeling',
      'Fintech'
    ]
  },
  {
    role: 'Software Developer',
    company: { name: 'MuchMore Digital', href: 'https://muchmore.digital' },
    location: 'Recife / Sao Paulo, Brazil',
    start: 'Jul 2016',
    end: 'Feb 2019',
    highlights: [
      'Built CMS and APIs for large automotive and battery clients.',
      'Developed chatbot infrastructure and conversational experiences.',
      'Owned data lake ETL scripts, dashboards, and analytics integrations.'
    ],
    tags: [
      'Node.js',
      'Java',
      'Python',
      'Play Framework',
      'REST API',
      'AngularJS',
      'GCP',
      'MongoDB',
      'GTM',
      'GA'
    ]
  },
  {
    role: 'Data Visualization Analyst (Internship)',
    company: { name: 'Mitsubishi Fuso', href: 'https://www.mitsubishi-fuso.com' },
    location: 'Kawasaki, Japan',
    start: 'Apr 2019',
    end: 'Oct 2019',
    highlights: [
      'Designed dashboards to drive after-sales parts pricing decisions.',
      'Built time-intelligent datasets with PowerBI, DAX, and SQL.'
    ],
    tags: ['PowerBI', 'DAX', 'SQL', 'Excel', 'Python']
  }
]
