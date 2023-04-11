import React from "react";
import { BsFillArrowUpCircleFill} from "react-icons/bs";
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
            <BsFillArrowUpCircleFill />
          </i>
        </a>
      </div>
    </footer>
  );
}
