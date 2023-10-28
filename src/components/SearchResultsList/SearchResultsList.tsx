import React from 'react';
import { SearchResult } from '../SearchResult/SearchResult';
import { Person } from '../../models';
import './SearchResultsList.css';

export const SearchResultsList = ({ results }: { results: Person[] }) => {
  if (results.length === 0) {
    return <div className="no-results-message">Nothing found ...</div>;
  }
  return (
    <div className="results-list">
      {results.map((result: Person, id: number) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};
