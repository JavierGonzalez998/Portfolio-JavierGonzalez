import React from "react";
import "./About.css";
import ImgAbout from "../../media/ImgAbout.jpg";
import {useTranslation} from "react-i18next";
const About = () => {
  const [t, i18n] = useTranslation("global");
    const techn =[{
      name: "html5",
      class: "fab fa-html5 html"
    },
    {
      name: "css",
      class: "fab fa-css3-alt css"
    },
    {
      name: "js",
      class: "fab fa-js js"
    },
    {
      name: "bootstrap",
      class: "fab fa-bootstrap bootstrap"
    },
    {
      name: "react",
      class: "fab fa-react react"
    },
    {
      name: "php",
      class: "fab fa-php php"
    }
  ]
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>{t("about.title-about")}</h3>
        <p>{t("about.desc-about")}</p>
        <h3>{t("about.tech-about")}</h3>
        <ul className="mt-3"id="lista1">
          {techn.map((tech) =>
            <li key={techn.indexOf(tech)}>
              <i className={tech.class}></i>
            </li>
          )}
        </ul>
      </div>
      <div className="about-img">
        <img src={ImgAbout} alt="About" />
      </div>
    </div>
  );
}

export default About;
