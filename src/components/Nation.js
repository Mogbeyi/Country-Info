import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";
const { REACT_APP_API_KEY } = process.env;

const Nation = ({ nation }) => {
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
      <h1>{nation.name}</h1>
      <p>Capital: {nation.capital}</p>
      <p>Population: {nation.population}</p>
      <strong>Languages</strong>
      <ul>
        {nation.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={nation.flag} alt="" width="150" height="100" />

      <Weather nation={nation} weatherInfo={weatherInfo} />
    </div>
  );
};

export default Nation;
