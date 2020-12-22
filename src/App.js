import axios from "axios";
import React, { useState, useEffect } from "react";
import CountryData from "./components/CountryData";

const App = () => {
  const [countries, setCountries] = useState([]);
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

    setCountries(result);
  };

  return (
    <div>
      <form>
        <label htmlFor="">
          Find country
          <input
            type="text"
            placeholder="find country"
            value={country}
            onChange={handleChange}
            onSubmit={(e) => e.preventDefault()}
          />
        </label>
      </form>
      <ul>
        {countries.map((countryData) => (
          <CountryData key={countryData.name} countryData={countryData} />
        ))}
      </ul>
    </div>
  );
};

export default App;
