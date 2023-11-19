import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Search from '../src/components/Search/Search';
import { act } from 'react-dom/test-utils';

const mockStore = configureStore();

beforeEach(() => {
  localStorage.clear();
});

describe('Search', () => {
  it('Verify that clicking the Search button saves the entered value to the local storage', async () => {
    const store = mockStore({
      search: {
        inputValue: '',
      },
    });

    render(
      <Provider store={store}>
        <Search handleSearch={() => {}} />
      </Provider>
    );

    const input = screen.getByPlaceholderText('...') as HTMLInputElement;

    await act(async () => {
      fireEvent.change(input, {
        target: { value: 'test' },
      });
    });

    fireEvent.click(screen.getByText('Search'));
  });
});
