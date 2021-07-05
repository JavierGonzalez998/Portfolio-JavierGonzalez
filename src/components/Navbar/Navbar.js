import React, {useState} from 'react';
import "./Navbar.css";
import {useTranslation} from "react-i18next";
import esp from "../../media/espana.png";
import usa from "../../media/estados-unidos.png";

const Navbar = ({ isScrolling }) => {
    const [t, i18n] = useTranslation("global");

    const setLocalStorage = (lang) =>{
        try {
            i18n.changeLanguage(lang);
        } catch (error) {
            console.log(error);
        }
    }

    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    };

    return (
        <div className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>Javier Gonzalez</div>
            <div className="languaje">
                 <button className="es" onClick={()=> setLocalStorage("es")}><img src={esp} alt="spain flag"/></button>
                 <button className="en" onClick={()=> setLocalStorage("en")}><img src={usa} alt="eeuu flag"/></button>
            </div>
           
        </div>
    )
}

export default Navbar
