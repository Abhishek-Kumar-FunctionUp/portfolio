import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.text}>
        <p>Copyright &copy; 2023 by Abhishek Kumar | All Rights Reserved.</p>
      </div>
      <div className={style.icons}>
        <a href="#home">
          <i>
            <AiOutlineArrowUp />
          </i>
        </a>
      </div>
    </footer>
  );
}
