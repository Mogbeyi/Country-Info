import React from "react";

const Form = ({ handleChange, country }) => {
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
    </div>
  );
};

export default Form;
