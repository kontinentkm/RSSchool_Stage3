import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Person } from '../../models';
import './SearchBar.css';

export const SearchBar = ({
  setResults,
}: {
  setResults: (results: Person[]) => void;
}) => {
  const [input, setInput] = useState('');

  const fetchData = (value: string) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user: Person) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input_wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
