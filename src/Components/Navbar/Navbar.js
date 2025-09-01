import React, { useState } from "react";
import style from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      <RxHamburgerMenu
        className={style.hamburger}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      />

      {menuOpen && (
        <div
          className={style.sidebarOverlay}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className={style.sidebarMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={style.closeBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <nav className={style.sidebarNavbar}>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
