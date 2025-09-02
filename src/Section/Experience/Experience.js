import React from "react";
import style from "./Experience.module.css";
import { BsBuilding, BsCalendar, BsGeoAlt } from "react-icons/bs";
import { experiences } from "../../Fixture/data";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Experience() {
  const [experienceRef, isExperienceVisible] = useScrollAnimation(0.2);
  const [headingRef, isHeadingVisible] = useScrollAnimation(0.3);

  return (
    <section className={style.experience} id="experience" ref={experienceRef}>
      <h2
        className={`${style.heading} ${isHeadingVisible ? style.animate : ""}`}
        ref={headingRef}
      >
        My <span>Experience</span>
      </h2>
      <div className={style.experienceContainer}>
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`${style.experienceCard} ${
              index % 2 === 0 ? style.left : style.right
            } ${isExperienceVisible ? style.animateCard : ""}`}
            style={{
              transitionDelay: `${index * 0.3}s`,
            }}
          >
            <div className={style.cardContent}>
              <div className={style.cardHeader}>
                <h3 className={style.position}>{exp.position}</h3>
                <div className={style.companyInfo}>
                  <div className={style.company}>
                    <BsBuilding className={style.icon} />
                    <span>{exp.company}</span>
                  </div>
                  <div className={style.duration}>
                    <BsCalendar className={style.icon} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className={style.location}>
                    <BsGeoAlt className={style.icon} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className={style.cardBody}>
                <ul className={style.description}>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={style.timeline}>
              <div className={style.timelineNode}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
