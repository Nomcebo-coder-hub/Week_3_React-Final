import React from "react";
import ReactDOM from "react-dom";
import SearchEngine from "./SearchEngine";

import "./styles.css";

function App() {
  return <h1>Weather Search Engine</h1>;
  <SearchEngine />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
