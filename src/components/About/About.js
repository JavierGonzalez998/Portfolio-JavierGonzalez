import React from "react";
import "./About.css";
import ImgAbout from "../../media/ImgAbout.jpg";
const About = () => {
  return (
    <div className="about-container">
        
      <div className="about-desc">
        <h3>Déjame contarte sobre mí</h3>
        <p>
          Mi nombre es Javier Gonzalez, tengo 21 años y vivo en Iquique, Chile.
          
          Actualmente estoy estudiando Analista Programador en Inacap. Estoy
          aprendiendo React, NodeJs, Express y MongoDB (Stack MERN). Amo
          programar y me gustaría aprender más tecnologías web para expandir mis
          conocimientos. También me gusta componer y producir música.
        </p>
        <h3>Tecnologías que uso</h3>
        <ul className="mt-3"id="lista1">
          <li>
          <i className="fab fa-html5 html"></i>
          </li>
          <li>
          <i className="fab fa-css3-alt css"></i>
          </li>
          <li>
          <i className="fab fa-js js"></i>
          </li>
          <li>
          <i className="fab fa-bootstrap bootstrap"></i>
          </li>
          <li>
          <i className="fab fa-react react"></i>
          </li>
          <li>
          <i className="fab fa-php php"></i>
          </li>
        </ul>
      </div>
      <div className="about-img">
        <img src={ImgAbout} alt="About" />
      </div>
    </div>
  );
};

export default About;
