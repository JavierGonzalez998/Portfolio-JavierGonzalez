import React from 'react';
import "./About.css";
import ImgAbout from "../../media/ImgAbout.jpg"
const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>My name is Javier Gonzalez. Actually I'm studying Analista Programador in Inacap. I'm learning React, NodeJS, Express and MongoDB (MERN stack). I love programming and I'd like learn more web technologies to expand my knowledge. Also I like compose and produce music</p>
            </div>
            <div className="about-img">
                <img src={ImgAbout} alt="About"/>
            </div>
        </div>
    )
}

export default About
