import React from "react";
import Weather from "./Weather";


export default function App() {
  function handleSubmit(event) {
    event.preventDefault();
    return <Weather />;
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
