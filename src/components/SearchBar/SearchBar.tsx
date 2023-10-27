import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Person } from '../../models';
import './SearchBar.css';

interface SearchBarProps {
  setResults: (results: Person[]) => void;
}

interface SearchBarState {
  input: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      input: '',
    };
  }

  fetchData = (value: string) => {
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
        this.props.setResults(results);
      });
  };

  handleChange = (value: string) => {
    this.setState({ input: value });
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
