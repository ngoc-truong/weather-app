import React from "react";

const Form = ( {onFormSubmit, handleChange, newSearch }) => {
    return (
        <form onSubmit={onFormSubmit}>
        <label htmlFor="city">
          So, how's the weather in...?
        </label>
        <input 
          type="text"
          value={newSearch}
          id="city"
          onChange={handleChange}
          />

        <button>Show Weather</button>
      </form>
    )
}

export default Form;