import React from "react";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { TbBrandHtml5, TbBrandJavascript, TbBrandCss3 } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import materialui from "../../Fixture/materialui.png"
import Recoil from "../../Fixture/Recoil.png"
import style from "./Skill.module.css";

export default function Skill() {
  return (
    <div className={style.skill} id="skills">
      <h2 className={style.heading}>
        My <span>Skills</span>
      </h2>
      <div className={style.container}>
        <div className={style.box}>
          <TbBrandHtml5 className={style.icon} />
          <h3>HTML5</h3>
          <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web</p>
        </div>
        <div className={style.box}>
          <TbBrandCss3 className={style.icon} />
          <h3>CSS</h3>
          <p>CSS is the language we use to style an HTML document.</p>
        </div>
        <div className={style.box}>
          <TbBrandJavascript className={style.icon} />
          <h3>JavaScript</h3>
          <p>JavaScript is the programming language of the Web.</p>
        </div>
        <div className={style.box}>
          <FaReact className={style.icon} />
          <h3>ReactJS</h3>
          <p>React is a JavaScript library for building user interfaces.</p>
        </div>
        <div className={style.box}>
          <FaBootstrap className={style.icon} />
          <h3>BootStarp</h3>
          <p>Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites</p>
        </div>
        <div className={style.box}>
          <img src={materialui} className={style.iconImg} />
          <h3>Material UI</h3>
          <p>Material UI is an open-source React component library that implements Google's Material Design</p>
        </div>
        <div className={style.box}>
          <img src={Recoil} className={style.iconImgRecoil} />
          <h3>Recoil</h3>
          <p>Recoil is an experimental state management library</p>
        </div>
        <div className={style.box}>
          <SiReactrouter className={style.icon} />
          <h3>React Router</h3>
          <p>React-Router is the core package containing standard components and functionalities to implement routing in React applications.</p>
        </div>
      </div>
    </div>
  );
}
