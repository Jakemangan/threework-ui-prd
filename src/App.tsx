import React from "react";
import "./App.css";
import { TiSpanner } from "react-icons/ti";

function App() {
  return (
    <div className="App">
      <div id="spanner-c">
        <TiSpanner size={100} className="spanner"></TiSpanner>
      </div>
      <h1>Threework.io is currently under construction.</h1>
      <h3>Please check back later.</h3>
    </div>
  );
}

export default App;
