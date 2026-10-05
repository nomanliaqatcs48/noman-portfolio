export const RESUME_URL = '/resume.pdf';
export const RESUME_FILENAME = 'Muhammad_Noman_Liaqat_Resume.pdf';

export const contact = {
  email: 'nomanliaqatcs48@gmail.com',
  phone: '+92 332 4060282',
  phoneHref: 'tel:+923324060282',
  linkedin: 'https://www.linkedin.com/in/noman-liaqat-40953a158/',
  linkedinLabel: 'in/noman-liaqat-40953a158',
  location: 'Lahore, Pakistan · Open to remote',
};

export const skills = [
  { title: 'Frontend & UI', icon: 'monitor', tags: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Redux', 'Redux Toolkit', 'Redux-Saga', 'MobX', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Material UI', 'Ant Design', 'Bootstrap'] },
  { title: 'Mobile', icon: 'phone', tags: ['React Native', 'React Navigation', 'Redux Toolkit', 'Axios', 'REST API Integration', 'Android & iOS'] },
  { title: 'Backend & APIs', icon: 'code', tags: ['Node.js', 'Express.js', 'NestJS', 'GraphQL', 'REST APIs', 'Swagger'] },
  { title: 'Databases', icon: 'db', tags: ['MongoDB', 'PostgreSQL', 'MariaDB', 'Redis', 'Sequelize'] },
  { title: 'E-Commerce & Web3', icon: 'cart', tags: ['Shopify', 'Liquid', 'Shopify API', 'Shopify CLI', 'Web3', 'Solana'] },
  { title: 'Cloud & Tools', icon: 'cloud', tags: ['AWS S3', 'Git', 'GitHub', 'AI Integrations', 'Agile / Scrum'] },
];

export const jobs = [
  {
    title: 'Senior Software Engineer',
    company: 'InvoZone',
    date: 'Sep 2021 – Sep 2026',
    location: 'Lahore, Pakistan',
    points: [
      'Delivered full-stack features across 9 client and in-house products: InvoDesk, InvoHub, Invoswift, Dcl vTwin, Drb Saudi NFT Club, Oslo Crypto, AppRent, We Cut Trees and Apt Game.',
      'Built backend services with NestJS, GraphQL, Node.js and Express.js on PostgreSQL, MongoDB and Redis, with file storage on AWS S3.',
      'Built reusable React.js components and shared packages, using Redux and Redux Toolkit for state management and optimizing apps for speed and scalability.',
      'Built cross-platform React Native apps for Big Health (Sleepio, SleepioRx, Daylight) and Blusha (Staff App, Partner), handling frontend development and REST API integration with Redux Toolkit and React Navigation.',
      'Developed and customized Shopify stores for Spartan Race and Lab Supply Network using Shopify Liquid, Shopify API, Shopify CLI and GraphQL.',
      'Ensured the technical feasibility of UI/UX designs and worked closely with cross-functional teams in agile sprints.',
    ],
    tags: ['React.js', 'Next.js', 'NestJS', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS S3', 'React Native', 'Shopify'],
  },
  {
    title: 'Software Engineer',
    company: 'Big Data Insights',
    date: 'Dec 2020 – Aug 2021',
    location: 'Lahore, Pakistan',
    points: [
      'Built React.js frontends for Intellistocks and Lead Generation using Redux, Redux-Saga and Material UI.',
      'Built reusable code and libraries with Redux state management, ensuring UI/UX feasibility and optimizing for speed and scalability.',
    ],
    tags: ['React.js', 'Redux-Saga', 'Material UI'],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Devigital Systems',
    date: 'May 2018 – Nov 2020',
    location: 'Lahore, Pakistan',
    points: [
      'Worked as a MERN stack developer, building reusable components, admin panels and complex web pages with React.js, plus REST APIs with Node.js and Express.js.',
      'Built the Bokksu e-commerce store and Bokksu Customer Portal, integrated with Shopify.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Shopify'],
  },
];

export const filters = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'shopify', label: 'Shopify' },
  { key: 'ai', label: 'AI & Web3' },
];
