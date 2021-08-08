import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="mb-6" style={{ width: '67%' }}>
      <input
        className="input pr-5"
        type="text"
        placeholder="Search for plants"
        onChange={(event) => setSearchTerm(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
