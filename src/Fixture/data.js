import { FaBootstrap, FaReact } from "react-icons/fa";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandRedux,
  TbBrandTypescript,
} from "react-icons/tb";
import materialui from "./materialui.png";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiReactrouter, SiRecoil } from "react-icons/si";

export const skillData = [
  {
    id: 1,
    icon: <TbBrandHtml5 />,
    heading: "HTML5",
    detail:
      "HTML5 is a markup language used for structuring and presenting content on the World Wide Web",
  },
  {
    id: 2,
    icon: <TbBrandCss3 />,
    heading: "CSS",
    detail: "CSS is the language we use to style an HTML document",
  },
  {
    id: 3,
    icon: <TbBrandTypescript />,
    heading: "TypeScript",
    detail:
      "TypeScript is a strongly typed programming language that builds on JavaScript",
  },
  {
    id: 4,
    icon: <TbBrandJavascript />,
    heading: "JavaScript",
    detail: "JavaScript is the programming language of the Web",
  },
  {
    id: 5,
    icon: <TbBrandNextjs />,
    heading: "Next JS",
    detail:
      "Next.js enables developers to build fast, scalable, and SEO-friendly web applications",
  },
  {
    id: 6,
    icon: <FaReact />,
    heading: "ReactJS",
    detail: "React is a JavaScript library for building user interfaces",
  },
  {
    id: 7,
    icon: <TbBrandRedux />,
    heading: "Redux",
    detail:
      "Redux is used to maintain and update data across your applications for multiple components to share",
  },
  {
    id: 8,
    icon: <SiRecoil />,
    heading: "Recoil",
    detail: "Recoil is an experimental state management library",
  },
  {
    id: 9,
    icon: <FaBootstrap />,
    heading: "BootStarp",
    detail:
      "Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites",
  },
  {
    id: 10,
    icon: <img src={materialui} alt="materialUI" />,
    heading: "Material UI",
    detail:
      "Material UI is an open-source React component library that implements Google's Material Design",
  },
  {
    id: 11,
    icon: <AiOutlineAntDesign />,
    heading: "AntD",
    detail:
      "An enterprise-class UI design language and React UI library with a set of high-quality React components",
  },
  {
    id: 12,
    icon: <SiReactrouter />,
    heading: "React Router",
    detail:
      "React-Router is the core package containing standard components and functionalities to implement routing in React applications",
  },
];

export const projectData = [
  {
    id: 1,
    imgLink:
      "https://images.ctfassets.net/4v7glkww2pji/22CVefUFGWmv733IdTxbJe/34f433cc461397bcef808fb0037e1a07/735x418_container_vessel.jpg",
    name: "Oceanaut",
    detail: "This project is a vessel management and live location site",
    projectLink: "https://oceanaut.ca",
  },
  {
    id: 2,
    imgLink:
      " https://c4.wallpaperflare.com/wallpaper/362/691/614/golf-sports-sport-gloves-wallpaper-preview.jpg",
    name: "GOATT Golf",
    detail: "This project is a golf management site",
    projectLink: "https://goatt.golf/",
  },
  {
    id: 3,
    imgLink:
      "https://us.123rf.com/450wm/khaosai/khaosai2202/khaosai220200012/181366240-man-hand-touching-virtual-screen-to-lms-learning-management-system-web-icon-for-lesson-and-online.jpg?ver=6",
    name: "LMS",
    detail:
      "This project is a E- Learning Platform on which user can see the lesson video of particular course",
    projectLink: "https://illustrious-marigold-5b273f.netlify.app/",
  },
  {
    id: 4,
    imgLink:
      "https://c1.wallpaperflare.com/preview/435/683/594/business-close-up-code-coding.jpg",
    name: "Text Editor",
    detail:
      "This is a basic document editor website. Similar to Google Doucment",
    projectLink: "https://frolicking-conkies-61c311.netlify.app/",
  },
  {
    id: 5,
    imgLink:
      "https://dustinstout.com/wp-content/uploads/2021/05/twitter-image-sizes-1200x628-1.jpg",
    name: "Social Media",
    detail: "Social Networking website just like twitter",
    projectLink: "https://luminous-toffee-7c3ea2.netlify.app",
  },
  {
    id: 6,
    imgLink:
      "https://i0.wp.com/www.bakerlabels.co.uk/wp-content/uploads/2022/05/CARMEL_JANE_BAKER_NOV21-3986-2.jpg?resize=1080%2C675&ssl=1",
    name: "GYM Site",
    detail: "This is website based on Fitness and GYM",
    projectLink: "https://neon-lamington-83f9af.netlify.app/",
  },
  {
    id: 7,
    imgLink:
      "https://i1.pickpik.com/photos/8/991/651/cloudy-autumn-weather-stormy-rainy-preview.jpg",
    name: "Weather App",
    detail: "Dynamically find out the weather of particular region",
    projectLink: "https://radiant-kleicha-545200.netlify.app/",
  },
  {
    id: 8,
    imgLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtZHXaMXRU1lCzWVgPsw69lDVm7SmX9z4Qw&usqp=CAU",
    name: "NPM Package",
    detail: "This is the Basic Web App based on NPM packages",
    projectLink: "https://resilient-speculoos-6ce727.netlify.app/",
  },
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor in Computer Application",
    institution: "GLA College",
    duration: "2018 - 2021",
    location: "Jharkhand, India",
    grade: "Percentage: 70%",
    description: [
      "Specialized in Software Engineering and Web Development",
      "Completed coursework in Data Structures, Algorithms, and Database Management",
      "Final year project on Web Application Development",
    ],
    achievements: [
      "Dean's List for Academic Excellence (2021)",
      "Active member of Programming Club",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (Science)",
    institution: "M.D.N.G.G.P.S",
    duration: "2016 - 2018",
    location: "Jharkhand, India",
    grade: "Percentage: 62%",
    description: [
      "Major subjects: Physics, Chemistry, Mathematics, Computer Science",
      "Strong foundation in analytical and problem-solving skills",
      "Active participation in science exhibitions and coding events",
      "Leadership role as Class Representative",
    ],
    achievements: [
      "First Place Winner - District Level Science Exhibition",
      "Academic Excellence Merit Certificate",
    ],
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    institution: "M.D.N.G.G.P.S",
    duration: "2014 - 2016",
    location: "Jharkhand, India",
    grade: "CGPA: 8.6/10",
    description: [
      "Well-rounded education with focus on science and mathematics",
      "Introduction to computer programming and logical thinking",
      "Participation in various extracurricular activities",
      "Foundation for technical education and career development",
    ],
    achievements: [
      "First Place Winner - District Level Science Exhibition",
      "Active member of Science Club",
    ],
  },
];

export const experiences = [
  {
    id: 1,
    company: "AV Devs Solution",
    position: "Software Engineer",
    duration: "Nov. 2024 - Present",
    location: "Vadodara, Gujarat, India",
    description: [
      "Developed responsive web applications using Next.js and tailwind CSS",
      "Collaborated with cross-functional teams to deliver high-quality user interfaces",
      "Optimized application performance and improved user experience",
      "Implemented state management using Redux and Context API",
    ],
  },
  {
    id: 2,
    company: "Groovy Techno Web",
    position: "Frontend Developer",
    duration: "Sept. 2023 - Sept. 2024",
    location: "Nadiad, Gujarat, India",
    description: [
      "Built interactive websites using React JS and modern CSS frameworks",
      "Worked on mobile-first responsive design principles",
      "Assisted in client projects and requirement gathering",
      "Gained experience in version control using Git and GitHub",
    ],
  },
  {
    id: 3,
    company: "FunctionUp",
    position: "Frontend Developer Trainee",
    duration: "Nov. 2022 - Aug. 2023",
    location: "Remote",
    description: [
      "Built multiple projects using HTML5, CSS3, JavaScript, and React.js under mentor guidance",
      "Gained hands-on experience with version control systems (Git/GitHub) and collaborative development",
      "Participated in code reviews and learned industry best practices for clean, maintainable code",
      "Completed assignments on data structures, algorithms, and problem-solving techniques",
    ],
  },
];
