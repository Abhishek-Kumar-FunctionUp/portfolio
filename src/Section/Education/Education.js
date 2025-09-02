import React from "react";
import style from "./Education.module.css";
import { BsBook, BsCalendar, BsGeoAlt, BsTrophy } from "react-icons/bs";
import { educationData } from "../../Fixture/data";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Education() {
  const [educationRef, isEducationVisible] = useScrollAnimation(0.2);
  const [headingRef, isHeadingVisible] = useScrollAnimation(0.3);

  return (
    <section className={style.education} id="education" ref={educationRef}>
      <h2
        className={`${style.heading} ${isHeadingVisible ? style.animate : ""}`}
        ref={headingRef}
      >
        My <span>Education</span>
      </h2>
      <div className={style.educationContainer}>
        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            className={`${style.educationCard} ${
              index % 2 === 0 ? style.left : style.right
            } ${isEducationVisible ? style.animateCard : ""}`}
            style={{
              transitionDelay: `${index * 0.3}s`,
            }}
          >
            <div className={style.cardContent}>
              <div className={style.cardHeader}>
                <h3 className={style.degree}>{edu.degree}</h3>
                <div className={style.institutionInfo}>
                  <div className={style.institution}>
                    <BsBook className={style.icon} />
                    <span>{edu.institution}</span>
                  </div>
                  <div className={style.duration}>
                    <BsCalendar className={style.icon} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className={style.location}>
                    <BsGeoAlt className={style.icon} />
                    <span>{edu.location}</span>
                  </div>
                  <div className={style.grade}>
                    <BsTrophy className={style.icon} />
                    <span>{edu.grade}</span>
                  </div>
                </div>
              </div>
              <div className={style.cardBody}>
                <div className={style.description}>
                  <h4>Course Details:</h4>
                  <ul>
                    {edu.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={style.achievements}>
                  <h4>Achievements:</h4>
                  <ul>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
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
