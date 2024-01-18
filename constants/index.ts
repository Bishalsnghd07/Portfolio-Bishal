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
    } 
    from "react-icons/rx";


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
        name:"Discord Logo",
        src: "/discord.svg",
        link: "https://discord.com/users/bishalsinghdeo"
    },
    {
        name:"GithubLogo",
        src: "/github.svg",
        link: "https://github.com/Bishalsnghd07"
    },
    {
        name:"LinkedIn Logo",
        src: "/linkedin.svg",
        link: "https://www.linkedin.com/in/bishal-singh-deo/"
    }
]

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
      link:"/project/[projectId]",
      details:"Renewals UI",
      additionalInfo: "This page has been created during my job. It contains all the information about client who buy our product or renew our product. We collect history of all the data's.",
      // img: "/space/RenewalsTransactions.png",
    },
    {
      id: 2,
      src: "/space/Skills.png",
      link:"/project/[projectId]",
      details:"Skills UI",
      additionalInfo: "This page contain information about all the skills which I gained by hands on expereience and as well as during job.",
      // img: `/static/images/insight/img_1.svg`,
    },
    {
      id: 3,
      src: "/space/RenewalsGraph.png",
      link:"/project/[projectId]",
      details:"RenewalsGraph UI",
      additionalInfo: "This page contain info about renews data, like client buy any product, we display it's purchased product with image, like which image they bought. I using apex chart and it's configuration to render the data in graphs.",
      // img: `/static/images/insight/img_1.svg`,
    },
    {
      id: 4,
      src: "/space/VideoStreaming.jpeg",
      link:"/project/[projectId]",
      details:"Video Streaming Web App",
      additionalInfo: "This video streaming web app I learnt from youtube and imply it. The tech which I used: React.js, Tailwind CSS, JavaScript XML, HTML5,JQuery, animation and loader. In this project I learnt, routing, mapping, navigation, structural behaviour of react and Responsiveness.",
      // img: `/static/images/insight/img_1.svg`,
    },
  ];
  
  export const ProImages2: ProjectDetailsType[] = [
    {
      id: 1,
      src: "/projects/E-Commerce.png",
      link:"/project/[projectId]",
      details:"Renewals UI",
      additionalInfo: "This page has been created during my job. It contains all the information about client who buy our product or renew our product. We collect history of all the data's.",
    },
    {
      id: 2,
      src: "/projects/Stack-overflow.png",
      link:"/project/[projectId]",
    },
    {
      id: 3,
      src: "/projects/Car-Rental.png",
      link:"/project/[projectId]",
    },
    {
      id: 4,
      src: "/projects/Myntra.png",
      link:"/project/[projectId]",
    },
  ];
  
  export const ServiceData = [
    {
      icon: RxReader,
      title: "React JS",
      content: "React is a JavaScript library for building user interfaces. React is used to build single-page applications and...",
      backgroundImage: "/space/SpaceCity7.jpeg",
    },
    {
      icon: RxCrop,
      title: "Next JS",
      content: "Next.js runs top of the React. It allows ssr, file based routing and many more which makes fastest build... ",
      backgroundImage: "/space/SpaceCity9.jpeg",
    },
    {
      icon: RxPencil2,
      title: "TypeScript",
      content: "TypeScript adds static typing to JavaScript, it is most preffered language considered by next.js...",
      backgroundImage: "/space/SpaceCity1.jpg",
    },
    {
      icon: RxDesktop,
      title: "JavaScript",
      content: "Highly used and one of the most popular language for using in frontend Development and websites building.",
      // In starting JavaScript has been created to replace Java for doing small scripting tasks..
      backgroundImage: "/space/SpaceCity6.jpeg",
    },
    {
      icon: RxAccessibility,
      title: "Tailwind CSS",
      content: "Modern and highly recommended CSS framework. It's utility first fundamentals makes easy to customize and...",
      // and this makes it different from others
      backgroundImage: "/space/SpaceCity5.jpeg",
    },
    {
      icon: RxRocket,
      title: "HTML",
      content: "My web development journey starts from HTML without it we can't make structure of web application for now.",
      backgroundImage: "/space/SpaceCity8.jpeg",
    },
  ];