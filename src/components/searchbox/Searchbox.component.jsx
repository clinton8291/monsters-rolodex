import React from "react";
import "./Searchbox.styles.css";

const Searchbox = ({placeholder, handleChange}) => {
  return (
    <input
      className='search-box'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Searchbox;
