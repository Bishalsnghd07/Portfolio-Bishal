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
      details:"Hello",
      additionalInfo: "This is additional information for the first project.",
      // img: "/space/RenewalsTransactions.png",
    },
    {
      id: 2,
      src: "/space/Skills.png",
      link:"/project/[projectId]",
      details:"Hello",
      additionalInfo: "This is additional information for the 2nd project.",
      // img: `/static/images/insight/img_1.svg`,
    },
    {
      id: 3,
      src: "/space/RenewalsGraph.png",
      link:"/project/[projectId]",
      details:"Hello",
      additionalInfo: "This is additional information for the 3rd project.",
      // img: `/static/images/insight/img_1.svg`,
    },
    {
      id: 4,
      src: "/space/VideoStreaming.jpeg",
      link:"/project/[projectId]",
      details:"Hello",
      additionalInfo: "This is additional information for the 4th project.",
      // img: `/static/images/insight/img_1.svg`,
    },
  ];
  
  export const ProImages2 = [
    {
      src: "/projects/E-Commerce.png",
    },
    {
      src: "/projects/Stack-overflow.png",
    },
    {
      src: "/projects/Car-Rental.png",
    },
    {
      src: "/projects/Myntra.png",
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