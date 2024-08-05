import React from "react";
import style from "./Skill.module.css";
import { skillData } from "../../Fixture/data";
import materialui from "../../Fixture/materialui.png";
export default function Skill() {
  return (
    <div className={style.skill} id="skills">
      <h2 className={style.heading}>
        My <span>Skills</span>
      </h2>
      <div className={style.container}>
        {skillData.map((skill, id) => (
          <div className={style.box}>
            {skill.id !== 8 ? (
              <i className={style.icon}>{skill.icon}</i>
            ) : (
              <img
                src={materialui}
                className={style.iconImg}
                alt="MaterialUI"
              />
            )}
            <h3>{skill.heading}</h3>
            <p>{skill.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
