import React, { useState } from "react";

export default function SearchEngine() {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" />
      <input type="submit" value="Search" />
    </form>
  );
}
