import React, {useEffect, useState} from "react";
import "./CardContainer.css";
import axios from "axios";
import Card from "./Card";


const CardContainer = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=IbbT27g3YIwegXGigddhTSnujZFiRB75w9LPTgeU")
        .then(response => {
            console.log(response.data);
            setData(response.data);
        })
        .catch(error=>{
            console.log("data has an error", error);
        });
    }, []);
    console.log(data);
    
     return (
        <Card
        key={data.index}
        imgURL={data.url}
        copyright={data.copyright}
        explanation={data.explanation}
        />
    )
};

export default CardContainer;