import React from "react";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.header}>
      <a href="#home" className={style.logo}>
        A<span>bhishek</span>
      </a>
      <nav className={style.navbar}>
        <a href="#home" className={style.one}>
          Home
        </a>
        <a href="#about" className={style.two}>
          About
        </a>
        <a href="#skills" className={style.three}>
          Skills
        </a>
        <a href="#projects" className={style.four}>
          Projects
        </a>
        <a href="#contact" className={style.five}>
          Contact
        </a>
      </nav>
    </div>
  );
}
