import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";
const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Javier Gonzalez</h1>
            <p>Analista Programador | Web Developer</p>
        </div>
    )
}

export default Cover
