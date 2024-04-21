import React, { useState } from "react";

export default function SearchEngine() {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=fbef01f4et1b02o0d25c27210a43ef3f&units=metric`;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" />
      <input type="submit" value="Search" />
    </form>
  );
}
