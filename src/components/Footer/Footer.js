import React from 'react'
import "./Footer.css";
import {useTranslation} from "react-i18next";
const Footer = () => {
    const [t] = useTranslation("global");
    return (
        <div className="footer">
            <div className="footer-info">
                <h1>{t("footer.info-title")}</h1>
                <p>{t("footer.info-subtitle")}</p>
            </div>
            <div className="footer-contact">
                <h3>{t("footer.contact-title")}</h3>
                <p>{t("footer.contact-subtitle")}</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                   {t("footer.design-by")}
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
