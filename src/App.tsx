import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { SearchResultsList } from './components/SearchResultsList/SearchResultsList';
import { Person } from './models';
import './App.css';

interface AppProps {
  results?: Person[];
}

interface AppState {
  results: Person[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      results: [],
    };
  }

  setResults = (results: Person[]) => {
    this.setState({ results });
  };

  render() {
    return (
      <div className="App">
        <div className="search-bar-container">
          <SearchBar setResults={this.setResults} />
          <SearchResultsList results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
