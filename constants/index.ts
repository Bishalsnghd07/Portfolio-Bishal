import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
  RxHome,
  RxPerson,
  RxDashboard,
  RxReader,
  RxCrop,
  RxPencil2,
  RxAccessibility,
  RxDesktop,
  RxRocket,
} from "react-icons/rx";

// constants.ts
export type ProjectDetailsType = {
  id: number;
  src: string;
  link: string;
  details?: string;
  additionalInfo?: string;
  // img: string;
};

export const Socials = [
  {
    name: "Discord Logo",
    src: "/discord.svg",
    link: "https://discord.com/users/bishalsinghdeo",
  },
  {
    name: "GithubLogo",
    src: "/github.svg",
    link: "https://github.com/Bishalsnghd07",
  },
  {
    name: "LinkedIn Logo",
    src: "/linkedin.svg",
    link: "https://www.linkedin.com/in/bishal-singh-deo/",
  },
];

export const NavLinks = [
  {
    name: "Home",
    icon: RxHome,
    link: "/",
  },
  {
    name: "About me",
    icon: RxPerson,
    link: "/about-me",
  },
  {
    name: "Projects",
    icon: RxDashboard,
    link: "/project",
  },
  // {
  //   name: "Projects",
  //   icon: RxDashboard,
  //   link: "/project/1",
  // },
];

export const ProImages: ProjectDetailsType[] = [
  {
    id: 1,
    src: "/space/RenewalsTransactions.png",
    link: "/project/[projectId]",
    details: "Renewals UI",
    additionalInfo:
      "This page has been created during my job. It contains all the information about client who buy our product or renew our product. We collect history of all the data's.",
    // img: "/space/RenewalsTransactions.png",
  },
  {
    id: 2,
    src: "/space/Skills.png",
    link: "/project/[projectId]",
    details: "Skills UI",
    additionalInfo:
      "This page contain information about all the skills which I gained by hands on expereience and as well as during job.",
    // img: `/static/images/insight/img_1.svg`,
  },
  {
    id: 3,
    src: "/space/RenewalsGraph.png",
    link: "/project/[projectId]",
    details: "RenewalsGraph UI",
    additionalInfo:
      "This page contain info about renews data, like client buy any product, we display it's purchased product with image, like which image they bought. I using apex chart and it's configuration to render the data in graphs.",
    // img: `/static/images/insight/img_1.svg`,
  },
  {
    id: 4,
    src: "/space/VideoStreaming.jpeg",
    link: "/project/[projectId]",
    details: "Video Streaming Web App",
    additionalInfo:
      "This video streaming web app I learnt from youtube and imply it. The tech which I used: React.js, Tailwind CSS, JavaScript XML, HTML5,JQuery, animation and loader. In this project I learnt, routing, mapping, navigation, structural behaviour of react and Responsiveness.",
    // img: `/static/images/insight/img_1.svg`,
  },
];

export const ProImages2: ProjectDetailsType[] = [
  {
    id: 1,
    src: "/projects/E-Commerce.png",
    link: "/project/[projectId]",
    details: "Renewals UI",
    additionalInfo:
      "This page has been created during my job. It contains all the information about client who buy our product or renew our product. We collect history of all the data's.",
  },
  {
    id: 2,
    src: "/projects/Stack-overflow.png",
    link: "/project/[projectId]",
  },
  {
    id: 3,
    src: "/projects/Car-Rental.png",
    link: "/project/[projectId]",
  },
  {
    id: 4,
    src: "/projects/Myntra.png",
    link: "/project/[projectId]",
  },
];

export const ServiceData = [
  {
    icon: RxReader,
    title: "React JS",
    content:
      "React is a JavaScript library for building user interfaces. React is used to build single-page applications and...",
    backgroundImage: "/space/SpaceCity7.jpeg",
  },
  {
    icon: RxCrop,
    title: "Next JS",
    content:
      "Next.js runs top of the React. It allows ssr, file based routing and many more which makes fastest build... ",
    backgroundImage: "/space/SpaceCity9.jpeg",
  },
  {
    icon: RxPencil2,
    title: "TypeScript",
    content:
      "TypeScript adds static typing to JavaScript, it is most preffered language considered by next.js...",
    backgroundImage: "/space/SpaceCity1.jpg",
  },
  {
    icon: RxDesktop,
    title: "JavaScript",
    content:
      "Highly used and one of the most popular language for using in frontend Development and websites building.",
    // In starting JavaScript has been created to replace Java for doing small scripting tasks..
    backgroundImage: "/space/SpaceCity6.jpeg",
  },
  {
    icon: RxAccessibility,
    title: "Tailwind CSS",
    content:
      "Modern and highly recommended CSS framework. It's utility first fundamentals makes easy to customize and...",
    // and this makes it different from others
    backgroundImage: "/space/SpaceCity5.jpeg",
  },
  {
    icon: RxRocket,
    title: "HTML",
    content:
      "My web development journey starts from HTML without it we can't make structure of web application for now.",
    backgroundImage: "/space/SpaceCity8.jpeg",
  },
];

// export const chatbotData = [
//   {
//     question: "What is your company about?",
//     options: [
//       {
//         option: "Tech Solutions Provider",
//         followUp: {
//           question: "What industries do you serve?",
//           options: [
//             {
//               option: "Healthcare",
//               followUp: {
//                 question: "What services do you provide in Healthcare?",
//                 options: [
//                   { option: "AI Integration" },
//                   { option: "Cloud Solutions" },
//                 ],
//               },
//             },
//             {
//               option: "Education",
//               followUp: {
//                 question: "What services do you provide in Education?",
//                 options: [
//                   { option: "Web Development" },
//                   { option: "Mobile App Development" },
//                 ],
//               },
//             },
//             {
//               option: "Finance",
//               followUp: {
//                 question: "What services do you provide in Finance?",
//                 options: [
//                   { option: "AI Integration" },
//                   { option: "Cloud Solutions" },
//                   { option: "Mobile App Development" },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     question: "How can I contact support?",
//     options: [
//       {
//         option: "Email",
//         followUp: {
//           question: "Please email us at support@example.com.",
//           options: [],
//         },
//       },
//       {
//         option: "Phone",
//         followUp: {
//           question: "You can call us at +1234567890.",
//           options: [],
//         },
//       },
//     ],
//   },
//   {
//     question: "What are your business hours?",
//     options: [
//       {
//         option: "Business Hours",
//         followUp: {
//           question:
//             "Our business hours are 9 AM to 5 PM, Monday through Friday.",
//           options: [],
//         },
//       },
//     ],
//   },
//   {
//     question: "Do you offer remote services?",
//     options: [
//       {
//         option: "Yes",
//         followUp: {
//           question:
//             "Yes, we offer remote services worldwide for all our solutions.",
//           options: [],
//         },
//       },
//       {
//         option: "No",
//         followUp: {
//           question: "Currently, we only offer remote services worldwide.",
//           options: [],
//         },
//       },
//     ],
//   },
// ];

interface FollowUpOption {
  option: string;
  answer?: string;
  followUp?: FollowUpQuestion;
}

interface FollowUpQuestion {
  question: string;
  options: FollowUpOption[];
}

interface ChatbotDataItem {
  question: string;
  options: FollowUpOption[];
}

export const chatbotData: ChatbotDataItem[] = [
  {
    question: "What services do you offer as a Full Stack Developer?",
    options: [
      {
        option: "Web Development",
        followUp: {
          question: "What type of web development services do you need?",
          options: [
            {
              option: "Frontend Development",
              answer:
                "I specialize in responsive, modern frontend development using React, Next.js, Tailwind CSS, and TypeScript. I can create dynamic UI/UX designs, component libraries, and optimize for performance.",
            },
            {
              option: "Backend Development",
              answer:
                "I provide scalable backend solutions using Node.js, Express, RESTful or GraphQL APIs, and databases like MongoDB or PostgreSQL. Security, performance, and maintainability are key priorities.",
            },
            {
              option: "Full Stack Web App",
              answer:
                "I build end-to-end web applications using the MERN or Next.js stack, handling everything from UI design and API architecture to deployment and DevOps.",
            },
            {
              option: "Landing Page / Marketing Site",
              answer:
                "I design fast, SEO-friendly landing pages using modern frontend tools like Next.js or plain HTML/CSS if needed, optimized for conversions and mobile responsiveness.",
            },
          ],
        },
      },
      {
        option: "API Development & Integration",
        followUp: {
          question: "What type of API work do you need?",
          options: [
            {
              option: "Build a new REST API",
              answer:
                "I design and implement RESTful APIs with proper versioning, documentation (Swagger/OpenAPI), and security measures (JWT, OAuth).",
            },
            {
              option: "GraphQL API Development",
              answer:
                "I create efficient GraphQL APIs with proper type definitions, resolvers, and caching strategies using Apollo Server or GraphQL Yoga.",
            },
            {
              option: "Third-party API Integration",
              answer:
                "I integrate with popular APIs like Stripe, Google Maps, or social media platforms, handling authentication, rate limiting, and error handling.",
            },
          ],
        },
      },
      {
        option: "Database Design & Management",
        followUp: {
          question: "Which type of database do you prefer?",
          options: [
            {
              option: "SQL (PostgreSQL, MySQL)",
              answer:
                "I design normalized SQL databases with proper indexing, query optimization, and ACID compliance using PostgreSQL or MySQL.",
            },
            {
              option: "NoSQL (MongoDB, Firebase)",
              answer:
                "I implement schema design for NoSQL databases focusing on scalability and performance, using MongoDB or Firebase Firestore.",
            },
            {
              option: "Not Sure",
              answer:
                "I can help analyze your requirements and recommend the best database solution for your use case and scale needs.",
            },
          ],
        },
      },
      {
        option: "Deployment & DevOps",
        followUp: {
          question: "What environment do you want to deploy in?",
          options: [
            {
              option: "AWS",
              answer:
                "I deploy and manage infrastructure on AWS using services like EC2, S3, Lambda, and RDS, with Terraform for infrastructure-as-code.",
            },
            {
              option: "Vercel/Netlify",
              answer:
                "I configure and optimize deployments for frontend applications and static sites using Vercel or Netlify with CI/CD pipelines.",
            },
            {
              option: "Dockerized Setup",
              answer:
                "I containerize applications using Docker and manage orchestration with Kubernetes or Docker Compose for development and production environments.",
            },
            {
              option: "CI/CD Setup",
              answer:
                "I implement continuous integration and deployment pipelines using GitHub Actions, CircleCI, or Jenkins for automated testing and deployment.",
            },
          ],
        },
      },
      {
        option: "Maintenance & Support",
        followUp: {
          question: "What kind of support do you need?",
          options: [
            {
              option: "Bug Fixing",
              answer:
                "I provide debugging and issue resolution services with detailed root cause analysis and preventive measures.",
            },
            {
              option: "Feature Enhancements",
              answer:
                "I implement new features while maintaining code quality and backwards compatibility.",
            },
            {
              option: "Ongoing Maintenance",
              answer:
                "I offer retainer-based maintenance packages for regular updates, security patches, and performance monitoring.",
            },
          ],
        },
      },
    ],
  },
];
