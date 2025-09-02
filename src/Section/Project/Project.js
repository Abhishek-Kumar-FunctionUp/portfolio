import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { projectData } from "../../Fixture/data";
import style from "./Project.module.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Project() {
  const [projectRef, isProjectVisible] = useScrollAnimation(0.2);
  const [headingRef, isHeadingVisible] = useScrollAnimation(0.3);

  return (
    <div className={style.project} id="projects" ref={projectRef}>
      <h2
        className={`${style.heading} ${isHeadingVisible ? style.animate : ""}`}
        ref={headingRef}
      >
        Latest <span>Project</span>
      </h2>
      <div className={style.container}>
        {projectData.map((e, index) => (
          <div
            className={`${style.box} ${
              isProjectVisible ? style.animateBox : ""
            }`}
            key={e.id || index}
            style={{
              transitionDelay: `${index * 0.2}s`,
            }}
          >
            <img src={e.imgLink} alt={e.name} />
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
