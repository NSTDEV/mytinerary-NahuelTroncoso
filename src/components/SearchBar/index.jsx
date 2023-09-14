import './style.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;
    setSearchValue(value);
    dispatch(onSearch(value));
  };

  return (
    <div className="search-bar">
      <input id='search-bar' type="text" placeholder="Search..." value={searchValue} onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
