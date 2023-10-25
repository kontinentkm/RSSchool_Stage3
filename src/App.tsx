import { useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { SearchResultsList } from './components/SearchResultsList/SearchResultsList';
import { Person } from './models';
import './App.css';

function App() {
  const [results, setResults] = useState<Person[]>([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
}

export default App;
