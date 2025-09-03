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
      {/* Floating Particles */}
      <div
        className={style.projectParticle}
        style={{ top: "10%", left: "5%", animationDelay: "0s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ top: "80%", right: "8%", animationDelay: "4s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ bottom: "15%", left: "15%", animationDelay: "8s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ top: "25%", right: "20%", animationDelay: "12s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ top: "55%", left: "3%", animationDelay: "2s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ top: "35%", right: "5%", animationDelay: "6s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ bottom: "45%", left: "25%", animationDelay: "10s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ top: "70%", left: "40%", animationDelay: "14s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ top: "15%", right: "35%", animationDelay: "3s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ bottom: "25%", right: "10%", animationDelay: "7s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ top: "90%", left: "60%", animationDelay: "11s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ top: "40%", left: "80%", animationDelay: "15s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ bottom: "5%", right: "30%", animationDelay: "1s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ top: "5%", left: "75%", animationDelay: "5s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ bottom: "65%", right: "45%", animationDelay: "9s" }}
      ></div>
      <div
        className={style.projectParticle}
        style={{ top: "95%", right: "50%", animationDelay: "13s" }}
      ></div>

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
              transitionDelay: `${0.2}s`,
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
