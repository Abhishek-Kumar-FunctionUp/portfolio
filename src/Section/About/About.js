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
      {/* Bike Animation Elements */}
      <div className={style.bikeContainer}>
        <div className={style.bike}>🏍️</div>
        <div className={style.tireTracks}></div>
      </div>

      {/* Racing Stripes */}
      <div className={style.racingStripes}>
        <div className={style.stripe}></div>
        <div className={style.stripe}></div>
        <div className={style.stripe}></div>
      </div>

      {/* Speed Lines */}
      <div className={style.speedLines}>
        <div className={style.speedLine}></div>
        <div className={style.speedLine}></div>
        <div className={style.speedLine}></div>
        <div className={style.speedLine}></div>
        <div className={style.speedLine}></div>
      </div>

      {/* Floating Particles */}
      <div
        className={style.aboutParticle}
        style={{ top: "15%", left: "5%", animationDelay: "0s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ top: "75%", right: "10%", animationDelay: "4s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ bottom: "25%", left: "12%", animationDelay: "8s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ top: "45%", left: "2%", animationDelay: "2s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ top: "25%", right: "5%", animationDelay: "6s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ bottom: "50%", left: "25%", animationDelay: "10s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ top: "85%", left: "35%", animationDelay: "1s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ top: "10%", right: "25%", animationDelay: "5s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ bottom: "15%", right: "35%", animationDelay: "9s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ top: "60%", left: "45%", animationDelay: "3s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ top: "35%", right: "45%", animationDelay: "7s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ bottom: "40%", right: "15%", animationDelay: "11s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ top: "5%", left: "70%", animationDelay: "0.5s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ bottom: "10%", left: "60%", animationDelay: "4.5s" }}
      ></div>
      <div
        className={style.aboutParticle}
        style={{ top: "90%", right: "20%", animationDelay: "8.5s" }}
      ></div>

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
            ✍️ Writing
          </li>
          <li className={isContentVisible ? style.animateBottom : ""}>
            📝 Poetry
          </li>
          <li
            className={`${isContentVisible ? style.animateBottom : ""} ${
              style.bikeInterest
            }`}
          >
            🏍️ Riding Bikes
            <div className={style.miniSpeedometer}></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
