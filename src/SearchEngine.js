import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="SearchEngine">
      <form>
        <input type="search" placeholder="Enter a city" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
