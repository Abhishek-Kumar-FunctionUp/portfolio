import React from "react";
import AboutImage from "../../Fixture/About.png";
import style from "./About.module.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function About() {
  const [headingRef, isHeadingVisible] = useScrollAnimation(0.3);
  const [contentRef, isContentVisible] = useScrollAnimation(0.2);
  const [imageRef, isImageVisible] = useScrollAnimation(0.3);

  return (
    <div className={style.about} id="about">
      <div
        className={`${style.img} ${isImageVisible ? style.animate : ""}`}
        ref={imageRef}
      >
        <img src={AboutImage} alt="about-image" />
      </div>
      <div className={style.content} ref={contentRef}>
        <h2
          className={`${style.heading} ${
            isHeadingVisible ? style.animate : ""
          }`}
          ref={headingRef}
        >
          About<span> Me!</span>
        </h2>
        <h3 className={isContentVisible ? style.animateRight : ""}>
          Frontend Developer
        </h3>
        <p className={isContentVisible ? style.animateLeft : ""}>
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
          <li className={isContentVisible ? style.animateBottom : ""}>
            Writing
          </li>
          <li className={isContentVisible ? style.animateBottom : ""}>
            Poetry
          </li>
          <li className={isContentVisible ? style.animateBottom : ""}>
            Riding Bikes
          </li>
        </ul>
      </div>
    </div>
  );
}
