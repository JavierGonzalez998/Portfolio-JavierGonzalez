import React from 'react'
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <h1>Javier Gonzalez</h1>
                <p>Based in Iquique, Chile</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>and let's get down to work!</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Design by Javier Gonzalez
                </div>
                <div className="sns-links">
                    <a href="https://www.facebook.com/JavierGonzalez998" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-square"></i>
                    </a>
                    <i className="far fa-envelope"></i><p>javiergonzaleze98@gmail.com</p>
                    <a href="https://github.com/JavierGonzalez998" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                    </a>
                    <i className="fas fa-phone"></i><p>(+569) 61920063</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
