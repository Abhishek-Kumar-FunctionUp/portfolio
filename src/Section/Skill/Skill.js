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
              transitionDelay: `${id * 0.2}s`,
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
