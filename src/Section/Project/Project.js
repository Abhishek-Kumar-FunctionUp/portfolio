import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { projectData } from "../../Fixture/data";
import style from "./Project.module.css";

export default function Project() {
  return (
    <div className={style.project} id="projects">
      <h2 className={style.heading}>
        Latest <span>Project</span>
      </h2>
      <div className={style.container}>
        {projectData.map((e) => (
          <div className={style.box}>
            <img src={e.imgLink} alt="project" />
            <div className={style.layer}>
              <h4>{e.name}</h4>
              <p>{e.detail}</p>
              <a href={e.projectLink} target="_blank">
                <BiLinkExternal className={style.logo} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
