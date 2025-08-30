import React from "react";
import AboutImage from "../../Fixture/About.png";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.about} id="about">
      <div className={style.img}>
        <img src={AboutImage} alt="about-image" />
      </div>
      <div className={style.content}>
        <h2 className={style.heading}>
          About<span> Me!</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p>
          Hello! I'm a passionate developer with a diverse skill set and a love
          for problem-solving. Over the years, I’ve gained proficiency in
          various technologies, including HTML, CSS, TypeScript, JavaScript,
          Next JS, React.js, Bootstrap, C, C++, and more. I thrive on turning
          ideas into functional, efficient solutions that can make a real
          impact.
          <br />
          My journey in the tech world began with a curiosity for how things
          work and a desire to create. Whether it's building sleek user
          interfaces or writing clean, optimized code, I’m always looking for
          ways to improve my craft. Each project I take on is an opportunity to
          learn and grow, and I take great pride in delivering high-quality
          work.
          <br />
          As I start my professional career in the IT field, I’m excited to
          collaborate with like-minded individuals, contribute to innovative
          projects, and solve real-world challenges with my tech skills.
          <br />
          My intrests:-
        </p>
        <ul>
          <li>Writing</li>
          <li>Poetry</li>
          <li>Riding Bikes</li>
        </ul>
      </div>
    </div>
  );
}
