// Search.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchInput, selectSearchInput } from '../../features/searchSlice';
import './Search.css';

interface SearchProps {
  handleSearch: (inputValue: string) => void;
}

export default function Search({ handleSearch }: SearchProps) {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectSearchInput);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(event.target.value));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(inputValue);
      localStorage.setItem('searchInput', inputValue);
    }
  };

  const handleSearchClick = () => {
    handleSearch(inputValue);
    localStorage.setItem('searchInput', inputValue);
  };

  return (
    <div className="input_wrapper">
      <input
        placeholder="..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
}
