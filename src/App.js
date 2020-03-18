import React from "react";
import "./App.css";
import HeaderBar from "../src/components/HeaderBar";
import CardContainer from "../src/components/CardContainer";

function App() {

  return (
    <div className="App">
      <HeaderBar />
      <CardContainer />
    </div>
  );
};

// console.log(HeaderBar);
// console.log(CardContainer);

export default App;
