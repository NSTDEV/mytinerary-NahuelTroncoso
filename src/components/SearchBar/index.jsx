import './style.css';
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    const value = event.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input id='search-bar' type="text" placeholder="Search..." value={searchValue} onChange={handleChange} />
    </div>
  );
};

export default SearchBar;