import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Person } from '../../models';
import './SearchBar.css';

interface SearchBarProps {
  setResults: (results: Person[]) => void;
  setLoadingState: (isLoading: boolean) => void;
}

interface SearchBarState {
  input: string;
  isLoading: boolean;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      input: '',
      isLoading: false,
    };
  }

  fetchData = (value: string) => {
    if (this.state.input === 'error') {
      throw new Error('You entered "error"!');
    }
    this.props.setLoadingState(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user: Person) => {
          return (
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setTimeout(() => {
          this.props.setResults(results);
          this.props.setLoadingState(false);
        }, 500);
      });
  };

  handleChange = (value: string) => {
    this.setState({ input: value });
    localStorage.setItem('searchInput', value);
  };

  handleSearch = () => {
    this.fetchData(this.state.input);
  };

  handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  componentDidMount() {
    console.log(
      'To see the error type "error", run the search and reload the page'
    );
    const savedInput = localStorage.getItem('searchInput');
    if (savedInput) {
      this.setState({ input: savedInput }, () => {
        this.handleSearch();
      });
    }
    this.fetchData('');
  }

  render() {
    return (
      <div className="input_wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="..."
          value={this.state.input}
          onChange={(e) => this.handleChange(e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <button className="search-button" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
