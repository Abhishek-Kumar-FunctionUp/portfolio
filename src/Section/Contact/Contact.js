import React, { useMemo } from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail, SiNetlify } from "react-icons/si";
import style from "./Contact.module.css";
import ContactForm from "./ContactUs";
import { FaXTwitter } from "react-icons/fa6";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Contact() {
  const [contactRef, isContactVisible] = useScrollAnimation(0.2);
  const [headingRef, isHeadingVisible] = useScrollAnimation(0.3);
  const [iconsRef, isIconsVisible] = useScrollAnimation(0.3);

  // Floating particles for contact background
  const contactParticles = useMemo(() => {
    return Array.from({ length: 35 }, (_, index) => (
      <div
        key={index}
        className={style.contactParticle}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 12}s`,
          animationDuration: `${10 + Math.random() * 10}s`,
        }}
      />
    ));
  }, []);

  return (
    <div className={style.contact} id="contact" ref={contactRef}>
      {contactParticles}
      <h2
        className={`${style.heading} ${isHeadingVisible ? style.animate : ""}`}
        ref={headingRef}
      >
        Contact <span>Me!</span>
      </h2>
      <ContactForm isVisible={isContactVisible} />
      <div
        className={`${style.icons} ${isIconsVisible ? style.animateIcons : ""}`}
        ref={iconsRef}
      >
        <a
          href="mailto:abhi2k5u@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send email"
        >
          <i className={style.icons1}>
            <SiGmail />
          </i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100004129398541"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Facebook profile"
        >
          <i className={style.icons2}>
            <BsFacebook />
          </i>
        </a>
        <a
          href="https://twitter.com/Fakir0703"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Twitter profile"
        >
          <i className={style.icons3}>
            <FaXTwitter />
          </i>
        </a>
        <a
          href="https://instagram.com/the_heartful_shayari?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Instagram profile"
        >
          <i className={style.icons4}>
            <BsInstagram />
          </i>
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-kumar-586b67143/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
        >
          <i className={style.icons5}>
            <BsLinkedin />
          </i>
        </a>
        <a
          href="https://github.com/Abhishek-Kumar-FunctionUp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
        >
          <i className={style.icons6}>
            <BsGithub />
          </i>
        </a>
        <a
          href="https://app.netlify.com/teams/abhishek-kumar-functionup/overview"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Netlify dashboard"
        >
          <i className={style.icons7}>
            <SiNetlify />
          </i>
        </a>
      </div>
    </div>
  );
}
