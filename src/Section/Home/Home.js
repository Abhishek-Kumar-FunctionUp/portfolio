import React, { useEffect, useRef } from "react";
import style from "./Home.module.css";
import Resume from "../../Fixture/Resume_Abhishek.pdf";
import Image from "../../Fixture/Home.png"
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFillPenFill,
  BsCodeSlash,
  BsMusicNoteList
} from "react-icons/bs";
import { FaGuitar } from "react-icons/fa";
import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    let typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Writer", "Poet", "Graphics Designer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  });

  return (
    <div className={style.home} id="home">
      <div className={style.homeContent}>
        <h3>Hello, It's Me</h3>
        <h1>Abhishek Kumar</h1>
        <h3 className={style.typewriter}>
          And I'm a <span ref={el}>Frontend Developer</span>
        </h3>
        <p>
          I am very energetic and have a skillful command on HTML, CSS, C, C++,
          JAVA, JAVASCRIPT, REACTJS, BOOTSTRAP and many more. I have done some
          projects based on my skills. I want to start my Professional carrier
          in IT field as I have a keen interest on exploring technology and want
          to solve some real life problem with the help of my tech skills.
        </p>
        <div className={style.socialMedia}>
          <a
            href="https://www.facebook.com/profile.php?id=100004129398541"
            target="_blank"
            className={style.socialOne}
          >
            <BsFacebook />
          </a>
          <a
            href="https://twitter.com/Fakir0703"
            target="_blank"
            className={style.socialTwo}
          >
            <BsTwitter />
          </a>
          <a
            href="https://instagram.com/the_heartful_shayari?igshid=YmMyMTA2M2Y="
            target="_blank"
            className={style.socialThree}
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-586b67143/"
            target="_blank"
            className={style.socialFour}
          >
            <BsLinkedin />
          </a>
        </div>
        <a
          href={Resume}
          download="Abhishek Kumar"
          target="_blank"
          className={style.btn}
        >
          Download CV
        </a>
      </div>
      {/* <div className={style.imgDp}>
        <img
          src={Image}
          alt="Dp"
        />
      </div> */}
      <div className={style.intrest_container}>
        <div className={style.intrest_box}>
          <div className={style.intrest1}>
            <i>
              <FaGuitar />
            </i>
            <h3>Intrests</h3>
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
