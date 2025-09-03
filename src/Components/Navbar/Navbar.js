import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section highlighting
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setActiveSection(hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace("#", ""));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Trigger hashchange event for animations
      setTimeout(() => {
        window.location.hash = targetId;
      }, 50);
    }
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`${style.header} ${scrolled ? style.scrolled : ""}`}>
        <a
          href="#home"
          className={style.logo}
          onClick={(e) => handleNavClick(e, "#home")}
        >
          A<span>bhishek</span>
        </a>
        <nav className={style.navbar}>
          <a
            href="#home"
            className={`${style.one} ${
              activeSection === "home" ? style.active : ""
            }`}
            onClick={(e) => handleNavClick(e, "#home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`${style.two} ${
              activeSection === "about" ? style.active : ""
            }`}
            onClick={(e) => handleNavClick(e, "#about")}
          >
            About
          </a>
          <a
            href="#skills"
            className={`${style.three} ${
              activeSection === "skills" ? style.active : ""
            }`}
            onClick={(e) => handleNavClick(e, "#skills")}
          >
            Skills
          </a>
          <a
            href="#experience"
            className={`${style.five} ${
              activeSection === "experience" ? style.active : ""
            }`}
            onClick={(e) => handleNavClick(e, "#experience")}
          >
            Experience
          </a>
          <a
            href="#education"
            className={`${style.four} ${
              activeSection === "education" ? style.active : ""
            }`}
            onClick={(e) => handleNavClick(e, "#education")}
          >
            Education
          </a>
          <a
            href="#projects"
            className={`${style.six} ${
              activeSection === "projects" ? style.active : ""
            }`}
            onClick={(e) => handleNavClick(e, "#projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`${style.seven} ${
              activeSection === "contact" ? style.active : ""
            }`}
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Contact
          </a>
        </nav>

        <RxHamburgerMenu
          className={style.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        />
      </div>

      {menuOpen && (
        <div
          className={style.sidebarOverlay}
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMenuOpen(false)}
          role="button"
          tabIndex={0}
        >
          <div
            className={style.sidebarMenu}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="dialog"
            tabIndex={0}
          >
            <button
              className={style.closeBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <nav className={style.sidebarNavbar}>
              <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
                Home
              </a>
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
                About
              </a>
              <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")}>
                Skills
              </a>
              <a
                href="#education"
                onClick={(e) => handleNavClick(e, "#education")}
              >
                Education
              </a>
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, "#experience")}
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
              >
                Projects
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
