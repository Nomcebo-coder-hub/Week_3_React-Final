import React from "react";
import axios from "axios";

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=fbef01f4et1b02o0d25c27210a43ef3f&units=metric`;
axios.get(url).then(showTemperature);
