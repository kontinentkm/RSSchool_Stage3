import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';
import { SearchProvider } from './SearchContext';

describe('Search', () => {
  it('Verify that clicking the Search button saves the entered value to the local storage', () => {
    const localStorageMock = jest.spyOn(Storage.prototype, 'setItem');

    render(
      <SearchProvider>
        <Search handleSearch={() => {}} />
      </SearchProvider>
    );

    fireEvent.change(screen.getByPlaceholderText('...'), {
      target: { value: 'test' },
    });

    fireEvent.click(screen.getByText('Search'));

    expect(localStorageMock).toHaveBeenCalledWith('searchInput', 'test');
  });
});
