import React, { useState, useEffect } from "react";
import axios from "axios";
const { REACT_APP_API_KEY } = process.env;

const Weather = ({ nation }) => {
  const [weatherInfo, setWeatherInfo] = useState([]);

  const hook = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${REACT_APP_API_KEY}&query=${nation.capital}`
      )
      .then((response) => {
        setWeatherInfo(response.data);
      });
  };

  useEffect(hook, [nation.capital]);

  return (
    <div>
      <h2>Weather in {nation.capital}</h2>
      <strong>temperature:</strong>{" "}
      {weatherInfo.current ? weatherInfo.current.temperature : null} celcius
      <div>
        <img
          src={
            weatherInfo.current ? weatherInfo.current.weather_icons[0] : null
          }
          alt=""
        />
      </div>
      <p>
        <strong>wind: </strong>
        {weatherInfo.current ? weatherInfo.current.wind_speed : null} mph
        direction {weatherInfo.current ? weatherInfo.current.wind_dir : null}
      </p>
    </div>
  );
};

export default Weather;
