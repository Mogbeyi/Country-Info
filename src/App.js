import axios from "axios";
import React, { useState, useEffect } from "react";
import Country from "./components/Country";
import Form from "./components/Form";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [country, setCountry] = useState("");

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  };

  useEffect(hook, []);

  const handleChange = (event) => {
    setCountry(event.target.value);
    findCountry();
  };

  const findCountry = () => {
    const result = countries.filter((countryInfo) =>
      countryInfo.name.toLowerCase().includes(country.toLowerCase())
    );

    setFilterCountries(result);
  };

  const countryLength = filterCountries.length;

  if (countryLength > 10) {
    return (
      <div>
        <Form handleChange={handleChange} country={country} />

        <p>Too many matches, specify another title</p>
      </div>
    );
  } else if (countryLength === 1) {
    const nation = filterCountries[0];

    return (
      <div>
        <Form handleChange={handleChange} country={country} />

        <h1>{nation.name}</h1>
        <p>Capital: {nation.capital}</p>
        <p>Population: {nation.population}</p>

        <strong>Languages</strong>

        <ul>
          {nation.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>

        <img src={nation.flag} alt="" width="150" height="100"/>

      </div>
    );
  } else if (countryLength <= 10) {
    return (
      <div>
        <Form handleChange={handleChange} country={country} />

        <ul>
          {filterCountries.map((countryData) => (
            <Country
              key={countryData.name}
              countryData={countryData}
              filterCountries={filterCountries}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default App;
