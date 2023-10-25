import React from 'react';
import { SearchResult } from '../SearchResult/SearchResult';
import { Person } from '../../models';
import './SearchResultsList.css';

export const SearchResultsList = ({ results }: { results: Person[] }) => {
  return (
    <div className="results-list">
      {results.map((result: Person, id: number) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};
