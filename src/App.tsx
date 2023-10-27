import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { SearchResultsList } from './components/SearchResultsList/SearchResultsList';
import { Person } from './models';
import './App.css';
import { Loader } from './components/Loader/Loader';

interface AppProps {
  results?: Person[];
}

interface AppState {
  results: Person[];
  isLoading: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      results: [],
      isLoading: false,
    };
  }

  setResults = (results: Person[]) => {
    this.setState({ isLoading: false, results });
  };

  setLoadingState = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  render() {
    return (
      <div className="App">
        <div className="search-bar-container">
          <SearchBar
            setResults={this.setResults}
            setLoadingState={this.setLoadingState}
          />
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <SearchResultsList results={this.state.results} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
