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
        {skillData.map((skill, id) =>
          <div
            className={style.box}
            key={id}
            style={{
              animationDelay: `${2 + id * 0.2}s, ${3 + id * 0.2}s`
            }}
          >
            {skill.id !== 10
              ? <i className={style.icon}>
                  {skill.icon}
                </i>
              : <img
                  src={materialui}
                  className={style.iconImg}
                  alt="MaterialUI"
                />}
            <h3>
              {skill.heading}
            </h3>
            <p>
              {skill.detail}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
