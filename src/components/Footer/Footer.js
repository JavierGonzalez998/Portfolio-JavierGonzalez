import React from 'react'
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <h1>Javier Gonzalez</h1>
                <p>Ubicado en Iquique, Chile</p>
            </div>
            <div className="footer-contact">
                <h3>Contáctame</h3>
                <p>y pongámonos a trabajar!</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Diseñado por Javier Gonzalez
                </div>
                <div className="sns-links">
                    <a href="https://www.facebook.com/JavierGonzalez998" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-square"></i>
                    </a>
                    <i className="far fa-envelope"></i><p>javiergonzaleze98@gmail.com</p>
                    <a href="https://github.com/JavierGonzalez998" target="_blank" rel="noreferrer">
                    <i className="fab fa-github github"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
