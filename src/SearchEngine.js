import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: 90,
      icon: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=fbef01f4et1b02o0d25c27210a43ef3f&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{weather.temperature}°C</li>
          <li>Temperature:{weather.temperature}°C</li>
          <li>Temperature:{weather.temperature}°C</li>
          <li>Temperature:{weather.temperature}°C</li>
          <li>Temperature:{weather.temperature}°C</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
