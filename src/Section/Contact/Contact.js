import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { SiGmail, SiNetlify } from "react-icons/si";
import style from "./Contact.module.css";
import ContactForm from "./ContactUs";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className={style.contact} id="contact">
      <h2 className={style.heading}>
        Contact <span>Me!</span>
      </h2>
      <ContactForm />
      <div className={style.icons}>
        <a href="mailto:abhi2k5u@gmail.com" target="_blank">
          <i className={style.icons1}>
            <SiGmail />
          </i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100004129398541"
          target="_blank"
        >
          <i className={style.icons2}>
            <BsFacebook />
          </i>
        </a>
        <a href="https://twitter.com/Fakir0703" target="_blank">
          <i className={style.icons3}>
            <FaXTwitter />
          </i>
        </a>
        <a
          href="https://instagram.com/the_heartful_shayari?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <i className={style.icons4}>
            <BsInstagram />
          </i>
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-kumar-586b67143/"
          target="_blank"
        >
          <i className={style.icons5}>
            <BsLinkedin />
          </i>
        </a>
        <a href="https://github.com/Abhishek-Kumar-FunctionUp" target="_blank">
          <i className={style.icons6}>
            <BsGithub />
          </i>
        </a>
        <a
          href="https://app.netlify.com/teams/abhishek-kumar-functionup/overview"
          target="_blank"
        >
          <i className={style.icons7}>
            <SiNetlify />
          </i>
        </a>
      </div>
    </div>
  );
}
