import React from "react";
import "./CardContainer.css";


const Card = props =>{
    return (
            <div className="photoContainer">
            <h2>{props.title}</h2>
            <img src={props.imgURL} alt=""/>
            <h3>{props.copyright}</h3>
            <p>{props.explanation}</p>
        </div>
        );
}

export default Card;
