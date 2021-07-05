import React from 'react';
import "./Slider.css";
import PokeTrainer from "../../media/PokeTrainer.png";
import {useTranslation} from "react-i18next";

const Slides = () => {
    const [t] = useTranslation("global");
    const slidesInfo = [
        {
            src: PokeTrainer,
            alt: "PokeTrainer",
            desc: "PokeTrainer",
            feat: t("slider.poketrainer-desc"),
            site: "http://poketrainer.somee.com",
            tech: ["ASP.NET", "Bootstrap"],
            github: "https://github.com/JavierGonzalez998/PokeTrainer"
        },
        {
            src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
            alt: "Project 2",
            desc: "Project 2",
            feat:  t("slider.soon"),
            site: "#",
            tech: [""],
            github: "#"
        },
        {
            src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
            alt: "Project 3",
            desc: "Project 3",
            feat: t("slider.soon"),
            site: "#",
            tech: [""],
            github: "#"
        }
    ]
    
    return (slidesInfo.map(slide =>(
        <div className="slide-container" key={slide.desc}> 
            <img href={slide.site} src={slide.src} alt={slide.alt}/>
            <div className="slide-desc">
                <span>{slide.feat}</span>
                <span className={slide.tech[0] === "" ? 'hidden' : 'show'}>{t("slider.site")} {slide.tech.map(tech => (tech + " "))}</span>
                <span className={slide.site === "#" ? 'hidden' : 'show'}><a className="link" href={slide.site}><i className="fas fa-external-link-alt"></i> {t("slider.goto-site")}</a></span>
                <span className={slide.github === "#" ? 'hidden' : 'show'}><a href={slide.github} className="link"><i className="fab fa-github"></i> {t("slider.goto-github")}</a></span>
            </div>
        </div>
    )));
        
}

export default Slides
