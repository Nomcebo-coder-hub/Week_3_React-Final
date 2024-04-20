import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";
import SearchEngine from "./SearchEngine";

function App() {
  return <h1>Weather Search Engine</h1>;
  <SearchEngine />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
