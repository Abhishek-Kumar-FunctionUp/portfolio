import React, { useState, useEffect } from "react";
import style from "./Experience.module.css";
import { BsBuilding, BsCalendar, BsGeoAlt } from "react-icons/bs";
import { experiences } from "../../Fixture/data";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Experience() {
  const [experienceRef, isExperienceVisible] = useScrollAnimation(0.2);
  const [headingRef, isHeadingVisible] = useScrollAnimation(0.3);
  const [experienceYears, setExperienceYears] = useState(0);

  // Calculate actual years of experience
  const startDate = new Date("2023-09-01"); // Starting from FunctionUp
  const currentDate = new Date();
  const years = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365);
  const actualYears = Math.floor(years * 10) / 10; // Round to 1 decimal

  const techStackBadges = [
    "TypeScript",
    "JavaScript",
    "Tailwind",
    "Google Cloud",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Bootstrap",
    "Figma",
    "Coral Draw",
  ];

  // Calculate years of experience - simple approach
  useEffect(() => {
    // Set initial value immediately
    if (experienceYears === 0) {
      setExperienceYears(actualYears);
    }

    // Animate when heading is visible
    if (isHeadingVisible) {
      setExperienceYears(0); // Reset for animation
      let currentYear = 0;
      const increment = actualYears / 40; // Animation steps
      const timer = setInterval(() => {
        currentYear += increment;
        if (currentYear >= actualYears) {
          setExperienceYears(actualYears);
          clearInterval(timer);
        } else {
          setExperienceYears(Math.floor(currentYear * 10) / 10);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isHeadingVisible, actualYears]);

  return (
    <section className={style.experience} id="experience" ref={experienceRef}>
      {/* Floating Tech Stack Badges */}
      {techStackBadges.map((tech, index) => (
        <div
          key={tech}
          className={style.floatingBadge}
          style={{
            animationDelay: `${index * 1.2}s`,
          }}
        >
          {tech}
        </div>
      ))}

      {/* Floating Particles */}
      <div className={style.particle}></div>
      <div className={style.particle}></div>
      <div className={style.particle}></div>

      <h2
        className={`${style.heading} ${isHeadingVisible ? style.animate : ""}`}
        ref={headingRef}
      >
        My <span>Experience</span>
      </h2>
      <div className={style.experienceCounter}>
        {experienceYears > 0 ? experienceYears : actualYears}+ Years
      </div>
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
            <div className={`${style.cardContent} ${style.card3D}`}>
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
                {exp.techStack && (
                  <div className={style.techStackContainer}>
                    {exp.techStack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className={style.techBadge}
                        style={{
                          animationDelay: `${techIdx * 0.1}s`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={style.timeline}>
              <div className={style.timelineNode}></div>
            </div>
            <div className={style.progressIndicator}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
