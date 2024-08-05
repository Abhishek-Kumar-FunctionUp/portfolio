import { FaBootstrap, FaReact } from "react-icons/fa";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandRedux,
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
    icon: <TbBrandJavascript />,
    heading: "JavaScript",
    detail: "JavaScript is the programming language of the Web",
  },
  {
    id: 4,
    icon: <FaReact />,
    heading: "ReactJS",
    detail: "React is a JavaScript library for building user interfaces",
  },
  {
    id: 5,
    icon: <TbBrandRedux />,
    heading: "Redux",
    detail:
      "Redux is used to maintain and update data across your applications for multiple components to share",
  },
  {
    id: 6,
    icon: <SiRecoil />,
    heading: "Recoil",
    detail: "Recoil is an experimental state management library",
  },
  {
    id: 7,
    icon: <FaBootstrap />,
    heading: "BootStarp",
    detail:
      "Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites",
  },
  {
    id: 8,
    icon: <img src={materialui} alt="materialUI" />,
    heading: "Material UI",
    detail:
      "Material UI is an open-source React component library that implements Google's Material Design",
  },
  {
    id: 9,
    icon: <AiOutlineAntDesign />,
    heading: "AntD",
    detail:
      "An enterprise-class UI design language and React UI library with a set of high-quality React components",
  },
  {
    id: 10,
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
      "https://us.123rf.com/450wm/khaosai/khaosai2202/khaosai220200012/181366240-man-hand-touching-virtual-screen-to-lms-learning-management-system-web-icon-for-lesson-and-online.jpg?ver=6",
    name: "LMS",
    detail:
      "This project is a E- Learning Platform on which user can see the lesson video of particular course",
    projectLink: "https://illustrious-marigold-5b273f.netlify.app/",
  },
  {
    id: 2,
    imgLink:
      "https://c1.wallpaperflare.com/preview/435/683/594/business-close-up-code-coding.jpg",
    name: "Text Editor",
    detail:
      "This is a basic document editor website. Similar to Google Doucment",
    projectLink: "https://frolicking-conkies-61c311.netlify.app/",
  },
  {
    id: 3,
    imgLink:
      "https://dustinstout.com/wp-content/uploads/2021/05/twitter-image-sizes-1200x628-1.jpg",
    name: "Socail Media",
    detail: "Social Networking website just like twitter",
    projectLink: "https://luminous-toffee-7c3ea2.netlify.app",
  },
  {
    id: 4,
    imgLink:
      "https://i0.wp.com/www.bakerlabels.co.uk/wp-content/uploads/2022/05/CARMEL_JANE_BAKER_NOV21-3986-2.jpg?resize=1080%2C675&ssl=1",
    name: "GYM Site",
    detail: "This is website based on Fitness and GYM",
    projectLink: "https://neon-lamington-83f9af.netlify.app/",
  },
  {
    id: 5,
    imgLink:
      "https://i1.pickpik.com/photos/8/991/651/cloudy-autumn-weather-stormy-rainy-preview.jpg",
    name: "Weather App",
    detail: "Dynamically find out the weather of particular region",
    projectLink: "https://radiant-kleicha-545200.netlify.app/",
  },
  {
    id: 6,
    imgLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtZHXaMXRU1lCzWVgPsw69lDVm7SmX9z4Qw&usqp=CAU",
    name: "NPM Package",
    detail: "This is the Basic Web App based on NPM packages",
    projectLink: "https://resilient-speculoos-6ce727.netlify.app/",
  },
];
