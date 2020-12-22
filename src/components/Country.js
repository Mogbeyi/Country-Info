import React from "react";

const country = ({ countryData, countries }) => {
  return (
    <div>
      <li>{countryData.name}</li>
    </div>
  );
};

export default country;
