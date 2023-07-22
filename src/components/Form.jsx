// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
// You can also destructure your props directly from the parameter list

import React, { useState } from 'react';

function Form(props) {
  const [formData, setFormData] = useState({ searchTerm: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission and page reload
    props.moviesearch(formData.searchTerm); // Pass the search term to the parent component
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm" // Set the name to match the key in the formData state
          value={formData.searchTerm} // Bind the value to the state to make it a controlled component
          onChange={handleChange} // Handle changes in the input
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Form;
