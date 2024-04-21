import React, { useState } from "react";
import axios from "axios";

export default function Weather(response) {
  let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=fbef01f4et1b02o0d25c27210a43ef3f&units=metric`;
  axios.get(url).then(showTemperature);

  return (
    <ul>
      <li>Temperature:</li>
      <li>Description:</li>
      <li>Humidity:</li>
      <li>Wind:</li>
      <li></li>
    </ul>
  );
}
