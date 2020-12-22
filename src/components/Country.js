import React, { useState } from "react";
import Nation from "./Nation";

const Country = ({ countryData, filterCountries, countryIndex }) => {
  const [showNation, setShowNation] = useState(false);

  return (
    <div>
      {showNation ? (
        <Nation nation={filterCountries[countryIndex]} />
      ) : (
        <li>
          {countryData.name}{" "}
          <button onClick={() => setShowNation(true)}>show</button>
        </li>
      )}
    </div>
  );
};

export default Country;
