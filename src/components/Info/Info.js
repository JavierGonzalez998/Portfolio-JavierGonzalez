import React from 'react';
import "./Info.css";
import {useTranslation} from "react-i18next";
const Info = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="info-container">
            <div className="info">
                <h1>{t("info.info-title")}</h1>
            </div>
        </div>
    )
}

export default Info
