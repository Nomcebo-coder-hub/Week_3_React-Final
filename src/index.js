import React from "react";
import ReactDOM from "react-dom";
import SearchEngine from "./SearchEngine";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <SearchEngine />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
