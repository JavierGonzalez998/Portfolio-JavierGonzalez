import React from 'react'
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./Slider.css"
import Slides from "./Slides";
import {useTranslation} from "react-i18next";

const Slider = () => {
    const [t] = useTranslation("global");
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2> {t("slider.my-projects")}</h2> 
            </div>
            <Carousel
                arrows
                slidesPerPage = {4}
                infinite
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={1000}
                breakpoints={{
                    960: {
                    slidesPerPage: 3,
                    arrows: false,
                    itemWidth: 600,
                    }
                }}
            >
                <Slides/> 
            </Carousel>
        </div>
    )
}

export default Slider
