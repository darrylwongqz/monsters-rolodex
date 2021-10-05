import React from "react";

import "./search-box.styles.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="Search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export { SearchBox };
