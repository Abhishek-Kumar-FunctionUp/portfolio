import React, { useEffect, useRef, useMemo } from "react";
import style from "./Home.module.css";
import "./HomeParticles.css";
import Resume from "../../Fixture/Resume_Abhishek.pdf";
import Image from "../../Fixture/Home.svg";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsFillPenFill,
  BsCodeSlash,
  BsMusicNoteList,
} from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa";
import Typed from "typed.js";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const el = useRef(null);

  // Floating particles for home background
  const homeParticles = useMemo(() => {
    return Array.from({ length: 30 }, (_, index) => (
      <div
        key={index}
        className="homeParticle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${6 + Math.random() * 8}s`,
        }}
      />
    ));
  }, []);

  useEffect(() => {
    let typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Writer", "Poet", "Graphics Designer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  });

  return (
    <div className={style.home} id="home">
      {homeParticles}
      {/* Floating Particles */}
      <div
        className={style.floatingParticle}
        style={{ top: "20%", left: "10%", animationDelay: "0s" }}
      ></div>
      <div
        className={style.floatingParticle}
        style={{ top: "60%", right: "15%", animationDelay: "2s" }}
      ></div>
      <div
        className={style.floatingParticle}
        style={{ bottom: "30%", left: "15%", animationDelay: "4s" }}
      ></div>
      <div
        className={style.floatingParticle}
        style={{ top: "40%", right: "25%", animationDelay: "6s" }}
      ></div>

      <div className={style.homeContent}>
        <h3>Hello, It's Me</h3>
        <h1>Abhishek Kumar</h1>
        <h3 className={style.typewriter}>
          And I'm a <span ref={el}>Frontend Developer</span>
        </h3>
        <p className={style.para}>
          Hello! I'm a passionate and dynamic developer with a strong command of
          technologies like HTML, CSS, JavaScript, TypeScript, C, C++, React.js,
          Next.js, Redux, Recoil, and more. I thrive on creating innovative
          solutions and have worked on various projects that showcase my skills.
          With a deep interest in technology and problem-solving, I aim to use
          my expertise to tackle real-world challenges and make an impact.
        </p>
        <div className={style.socialMedia}>
          <a
            href="https://www.facebook.com/profile.php?id=100004129398541"
            target="_blank"
            className={style.socialOne}
          >
            <BsFacebook className={style.icon} />
          </a>
          <a
            href="https://twitter.com/Fakir0703"
            target="_blank"
            className={style.socialTwo}
          >
            <FaXTwitter className={style.icon} />
          </a>
          <a
            href="https://instagram.com/the_heartful_shayari?igshid=YmMyMTA2M2Y="
            target="_blank"
            className={style.socialThree}
          >
            <BsInstagram className={style.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-586b67143/"
            target="_blank"
            className={style.socialFour}
          >
            <BsLinkedin className={style.icon} />
          </a>
        </div>
        <div className={style.actionBtns}>
          <a
            href={Resume}
            download="Abhishek Kumar"
            target="_blank"
            className={style.btn}
          >
            📄 Download CV
          </a>
          <button
            className={style.btn}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            🚀 Hire Me
          </button>
        </div>
      </div>
      <div className={style.imgDp}>
        <img src={Image} alt="Abhishek Kumar" />
        <div className={style.imageGlow}></div>
      </div>
      <div className={style.intrest_container}>
        <div className={style.intrest_box}>
          <div className={style.intrest1}>
            <i>
              <FaMotorcycle />
            </i>
            <h3>Bike Riding</h3>
          </div>
          <div className={style.intrest2}>
            <i>
              <BsFillPenFill />
            </i>
            <h3>Writing</h3>
          </div>
          <div className={style.intrest3}>
            <i>
              <BsCodeSlash />
            </i>
            <h3>Graphics</h3>
          </div>
          <div className={style.intrest4}>
            <i>
              <BsMusicNoteList />
            </i>
            <h3>Music</h3>
          </div>
          <div className={style.circle} />
        </div>
        <div className={style.overlay} />
      </div>
    </div>
  );
}
