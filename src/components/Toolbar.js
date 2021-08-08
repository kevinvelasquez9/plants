import React from 'react';
import Filter from './Filter';
import SearchBar from './SearchBar';

const Toolbar = ({ setSearchTerm }) => {
  return (
    <div className="mt-6 is-flex is-justify-content-space-around is-flex-wrap-wrap">
      <Filter />
      <SearchBar setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default Toolbar;
