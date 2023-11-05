import React, { useState } from 'react';
import { SearchProps } from '../../../Types';
import './Search.css';

export default function Search({ handleSearch }: SearchProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(inputValue);
      localStorage.setItem('searchInput', inputValue);
    }
  };

  const handleSearchClick = (inputValue: string) => {
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
      <button
        className="search-button"
        onClick={() => {
          handleSearchClick(inputValue);
        }}
      >
        Search
      </button>
    </div>
  );
}
