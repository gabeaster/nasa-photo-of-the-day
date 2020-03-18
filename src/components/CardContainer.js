import React, {useEffect} from "react";
import "./CardContainer.css";
import axios from "axios";
import PhotoContainer from "./cardComponents/PhotoContainer";
import ArrowToThePast from "./cardComponents/ArrowToThePast";
import DateContainer from "./cardComponents/DateContainer";
import ArrowToTheFuture from "./cardComponents/ArrowToTheFuture";

const CardContainer = () => {

      useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=IbbT27g3YIwegXGigddhTSnujZFiRB75w9LPTgeU")
      .then(response =>
        console.log(response)
      )
      .catch(error => {
        return ("data has an error", error)
      })
  }, []);

    return (
        <>
        <PhotoContainer />
        <ArrowToThePast />
        <DateContainer />
        <ArrowToTheFuture />
        </>
    );
};

export default CardContainer;