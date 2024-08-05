import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import style from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={style.footer}>
      <div className={style.text}>
        <p>Copyright &copy; {year} by Abhishek Kumar | All Rights Reserved.</p>
      </div>
      <div className={style.icons}>
        <a href="#home">
          <i>
            <BsFillArrowUpCircleFill />
          </i>
        </a>
      </div>
    </footer>
  );
}
