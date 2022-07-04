import React from "react";
import LightSaber from "../../assets/icons/lightSaber";

const SearchBar = ({ value, setValue, onSearch }) => {
  return (
    <div className="search-box">
      <button className="btn-search">
        <LightSaber />
      </button>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="input-search"
        placeholder="Type to Search..."
        onKeyPress={(e) => e.key === "Enter" && onSearch(e)}
      />
    </div>
  );
};

export default SearchBar;