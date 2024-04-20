import React, { useState } from "react";

export default function Weather(props) {
  return (
    <ul>
      <li>Temperature: {temperature}</li>
      <li>Description:</li>
      <li>Humidity: {humidity}</li>
      <li>Wind: {wind - speed}</li>
      <li></li>
    </ul>
  );
}
