import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import style from "./Project.module.css";

export default function Project() {
  return (
    <div className={style.project} id="projects">
      <h2 className={style.heading}>
        Latest <span>Project</span>
      </h2>
      <div className={style.container}>
        <div className={style.box}>
          <img
            src="https://us.123rf.com/450wm/khaosai/khaosai2202/khaosai220200012/181366240-man-hand-touching-virtual-screen-to-lms-learning-management-system-web-icon-for-lesson-and-online.jpg?ver=6"
            alt="project"
          />
          <div className={style.layer}>
            <h4>LMS</h4>
            <p>
            This project is a E- Learning Platform on which user can see the lesson video of particular course
            </p>
            <a href="https://illustrious-marigold-5b273f.netlify.app/" target="_blank">
              <BiLinkExternal className={style.logo} />
            </a>
          </div>
        </div>
        <div className={style.box}>
          <img
            src="https://c1.wallpaperflare.com/preview/435/683/594/business-close-up-code-coding.jpg"
            alt="project"
          />
          <div className={style.layer}>
            <h4>Text Editor</h4>
            <p>
            This is a basic document editor website. Similar to Google Doucment
            </p>
            <a href="https://frolicking-conkies-61c311.netlify.app/" target="_blank">
              <BiLinkExternal className={style.logo} />
            </a>
          </div>
        </div>
        <div className={style.box}>
          <img
            src="https://dustinstout.com/wp-content/uploads/2021/05/twitter-image-sizes-1200x628-1.jpg"
            alt="project"
          />
          <div className={style.layer}>
            <h4>Socail Media</h4>
            <p>
            Social Networking website just like twitter
            </p>
            <a href="https://luminous-toffee-7c3ea2.netlify.app" target="_blank">
              <BiLinkExternal className={style.logo} />
            </a>
          </div>
        </div>
        <div className={style.box}>
          <img
            src="https://i0.wp.com/www.bakerlabels.co.uk/wp-content/uploads/2022/05/CARMEL_JANE_BAKER_NOV21-3986-2.jpg?resize=1080%2C675&ssl=1"
            alt="project"
          />
          <div className={style.layer}>
            <h4>GYM Site</h4>
            <p>
            This is website based on Fitness and GYM
            </p>
            <a href="https://neon-lamington-83f9af.netlify.app/" target="_blank">
              <BiLinkExternal className={style.logo} />
            </a>
          </div>
        </div>
        <div className={style.box}>
          <img
            src="https://i1.pickpik.com/photos/8/991/651/cloudy-autumn-weather-stormy-rainy-preview.jpg"
            alt="project"
          />
          <div className={style.layer}>
            <h4>Weather App</h4>
            <p>
             Dynamically find out the weather of particular region
            </p>
            <a href="https://radiant-kleicha-545200.netlify.app/" target="_blank">
              <BiLinkExternal className={style.logo} />
            </a>
          </div>
        </div>
        <div className={style.box}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtZHXaMXRU1lCzWVgPsw69lDVm7SmX9z4Qw&usqp=CAU"
            alt="project"
          />
          <div className={style.layer}>
            <h4>NPM Package</h4>
            <p>
            This is the Basic Web App based on NPM packages
            </p>
            <a href="https://resilient-speculoos-6ce727.netlify.app/" target="_blank">
              <BiLinkExternal className={style.logo} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
