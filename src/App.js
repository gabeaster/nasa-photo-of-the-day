import React, {useEffect} from "react";
import "./App.css";
import axios from "axios";
import HeaderBar from "../src/components/HeaderBar";
import CardContainer from "../src/components/CardContainer";

function App() {

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
    <div className="App">
      <HeaderBar />
      <CardContainer />
    </div>
  );
};

console.log(HeaderBar);
console.log(CardContainer);

export default App;
