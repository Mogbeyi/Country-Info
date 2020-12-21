import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  console.log(countries);

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
      <form action="">
        <label htmlFor="">
          Find country
          <input
            type="text"
            placeholder="find country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default App;
