import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Search from '../src/components/Search/Search';
import '@testing-library/jest-dom';

const mockStore = configureStore();

beforeEach(() => {
  localStorage.clear();
});

describe('Search', () => {
  it('Check that the component retrieves the value from the local storage upon mounting', async () => {
    localStorage.setItem('searchInput', 'testValue');

    const store = mockStore({
      search: {
        inputValue: 'testValue',
      },
    });

    render(
      <Provider store={store}>
        <Search handleSearch={() => {}} />
      </Provider>
    );

    await waitFor(() => {
      const input = screen.getByPlaceholderText('...') as HTMLInputElement;
      expect(input.value).toBe('testValue');
    });
  });
});
