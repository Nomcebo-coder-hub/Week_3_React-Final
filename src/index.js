import React from "react";
import ReactDOM from "react-dom";
import SearchEngine from "./SearchEngine";
import Weather from "./Weather";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
