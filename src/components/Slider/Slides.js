import React from 'react';
import "./Slider.css";
import PokeTrainer from "../../media/PokeTrainer.png";
const slidesInfo = [
    {
        src: PokeTrainer,
        alt: "PokeTrainer",
        desc: "PokeTrainer",
        feat: "PokeTrainer es un sitio en el que puedes administrar tu equipo pokemon",
        site: "http://poketrainer.somee.com",
        github: "https://github.com/JavierGonzalez998/PokeTrainer"
    },
    {
        src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt: "Project 2",
        desc: "Project 2",
        feat: "Pronto mas proyectos",
        site: "#",
        github: "#"
    },
    {
        src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt: "Project 3",
        desc: "Project 3",
        feat: "Pronto mas proyectos",
        site: "#",
        github: "#"
    }
]


const slides = slidesInfo.map(slide =>(
    <div className="slide-container"> 
        <img href={slide.site} src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
            <span>{slide.feat}</span>
            <span><a className="link" href={slide.site}><i class="fas fa-external-link-alt"></i> Ir al Sitio</a></span>
            <span><a href={slide.github} className="link"><i className="fab fa-github"></i> Ir al repositorio</a></span>
        </div>
    </div>
));

export default slides;