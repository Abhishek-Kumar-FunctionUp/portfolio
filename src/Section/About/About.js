import React from "react";
import AboutImage from "../../Fixture/About.png"
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.about} id="about">
      <div className={style.img}>
        <img
          src={AboutImage}
          alt="about-image"
        />
      </div>
      <div className={style.content}>
        <h2 className={style.heading}>
          About<span> Me!</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p>
          I am very energetic and have a skillful command on HTML, CSS, C, C++,
          JAVA, JAVASCRIPT, REACTJS, BOOTSTRAP and many more. I have done some
          projects based on my skills. I want to start my Professional carrier
          in IT field as I have a keen interest on exploring technology and want
          to solve some real life problem with the help of my tech skills. Apart from this I have intrest in :-
        </p>
        <ul>
        <li>Writing</li>
        <li>Poetry</li>
        <li>Graphics Designing</li>
        <li>Music</li>
        </ul>
      </div>
    </div>
  );
}
