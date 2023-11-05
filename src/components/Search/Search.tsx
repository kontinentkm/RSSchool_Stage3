import React, { useState } from 'react';
import './Search.css';

export default function Search({ handleSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    localStorage.setItem('searchInput', event.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(inputValue);
    }
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
        onClick={() => handleSearch(inputValue)}
      >
        Search
      </button>
    </div>
  );
}
