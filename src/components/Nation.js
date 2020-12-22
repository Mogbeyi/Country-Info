import React from "react";

const Nation = ({ nation }) => {
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
    </div>
  );
};

export default Nation;
