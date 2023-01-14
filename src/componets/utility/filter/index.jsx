import React from "react";
import "./style.css";
import useSearch from "../../hooks/useSearch";

const Filter = () => {
  const { search, handleSearch } = useSearch();

  return (
    <div id="filter">
      <input
        type="text"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Filter..."
      />
    </div>
  );
};

export default Filter;
