export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
  {
    title: 'Real-Time Crypto Tracker',
    desc: 'A frontend web application that allows users to track live cryptocurrency prices using the CoinGecko API with real-time charts and filters.',
    subdesc:
      'Built using React.js, Tailwind CSS, and Material UI for modern responsive design with API Integration from CoinGecko for live crypto data.',
    href: 'https://crypto-tracker-react-five.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/cryptotrackericon.png',
    logoStyle: {
      backgroundColor: '#1A1A1D',
      border: '0.2px solid #3B3B3F',
      boxShadow: '0px 0px 60px 0px #4ECCA34D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'Material UI', path: '/assets/materialui.svg' },
      { id: 4, name: 'CoinGecko API', path: '/assets/coingeckko.png' },
    ],
  },
  {
    title: 'eCommerce Platform with Admin Panel',
    desc: 'A scalable and feature-rich eCommerce platform offering seamless shopping experience with dedicated user & admin dashboards, product management, and secure payment integration.',

    subdesc: 'Built with React.js, Node.js, Express.js, and MongoDB. Integrated advanced features like JWT Authentication, secure payment gateways (Stripe & Razorpay), product search, order tracking, and responsive design for all devices.',
    
    href: 'https://ecommerce-s4qd.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/cart.gif',
    logoStyle: {
      backgroundColor: '#222831',
      border: '0.2px solid #393E46',
      boxShadow: '0px 0px 60px 0px #00ADB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'Node', path: '/assets/nodejs.svg' },
      { id: 4, name: 'MongoDB', path: '/assets/mongodb.svg' },
    ],
  },
  {
    title: 'IoT Forest Fire Warning System',
    desc: 'An IoT-powered smart forest fire detection and alert system designed for early wildfire prediction and real-time monitoring across large forest areas using advanced sensors, communication modules, and intelligent algorithms.',

subdesc: 'Developed using Arduino, DHT22, MQ-series sensors, NEO-6M GPS, LoRa-based wireless communication, and GSM-based SMS alert system. Future scalability includes satellite-based geo-mapping and Machine Learning models for predictive fire analysis and automated early warning across vast forest landscapes.'
,
    href: 'https://github.com/techvogue/forest-fire-warning-system',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/iot.png',
    logoStyle: {
      backgroundColor: '#12372A',
      border: '0.2px solid #436850',
      boxShadow: '0px 0px 60px 0px #ADBC9F4D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Arduino', path: '/assets/arduino.svg' },
      { id: 2, name: 'LoRa', path: '/assets/gps.gif' },
      { id: 3, name: 'GSM', path: '/assets/gsm.png' },
      { id: 4, name: 'IoT', path: '/assets/iot.png' },
    ],
  },
];



export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
