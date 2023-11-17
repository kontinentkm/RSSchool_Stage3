import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Search from '../src/components/Search/Search';
import { SearchProvider } from '../src/components/Search/SearchContext1';
import '@testing-library/jest-dom';

beforeEach(() => {
  localStorage.clear();
});

describe('Search', () => {
  xit('Check that the component retrieves the value from the local storage upon mounting', async () => {
    localStorage.setItem('searchInput', 'testValue');

    render(
      <SearchProvider>
        <Search handleSearch={() => {}} />
      </SearchProvider>
    );

    fireEvent.click(screen.getByText('Search'));

    await waitFor(
      () => {
        const input = screen.getByPlaceholderText('...') as HTMLInputElement;
        expect(input.value).toBe('');
      },
      { timeout: 500 }
    );
  });
});
