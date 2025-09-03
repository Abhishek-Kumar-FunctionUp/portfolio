import React from "react";
import style from "./Skill.module.css";
import { skillData } from "../../Fixture/data";
import materialui from "../../Fixture/materialui.png";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Skill() {
  const [skillRef, isSkillVisible] = useScrollAnimation(0.2);
  const [headingRef, isHeadingVisible] = useScrollAnimation(0.3);

  return (
    <div className={style.skill} id="skills" ref={skillRef}>
      {/* Floating Particles */}
      <div
        className={style.skillParticle}
        style={{ top: "15%", left: "8%", animationDelay: "0s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ top: "70%", right: "12%", animationDelay: "3s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ bottom: "20%", left: "20%", animationDelay: "6s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ top: "30%", right: "30%", animationDelay: "9s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ top: "60%", left: "5%", animationDelay: "1.5s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ top: "10%", right: "8%", animationDelay: "4.5s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ bottom: "40%", right: "15%", animationDelay: "7.5s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ top: "80%", left: "35%", animationDelay: "2s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ top: "25%", left: "70%", animationDelay: "5s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ bottom: "15%", right: "40%", animationDelay: "8s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ top: "45%", left: "10%", animationDelay: "3.5s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ bottom: "60%", right: "5%", animationDelay: "6.5s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ top: "5%", left: "50%", animationDelay: "1s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ bottom: "30%", left: "60%", animationDelay: "4s" }}
      ></div>
      <div
        className={style.skillParticle}
        style={{ top: "85%", right: "25%", animationDelay: "7s" }}
      ></div>

      <h2
        className={`${style.heading} ${isHeadingVisible ? style.animate : ""}`}
        ref={headingRef}
      >
        My <span>Skills</span>
      </h2>
      <div className={style.container}>
        {skillData.map((skill, id) => (
          <div
            className={`${style.box} ${isSkillVisible ? style.animateBox : ""}`}
            key={id}
            style={{
              transitionDelay: `${0.2}s`,
            }}
          >
            {skill.id !== 10 ? (
              <i className={style.icon}>{skill.icon}</i>
            ) : (
              <img
                src={materialui}
                className={style.iconImg}
                alt="MaterialUI"
              />
            )}
            <h3>{skill.heading}</h3>
            <p className={style.detail}>{skill.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
