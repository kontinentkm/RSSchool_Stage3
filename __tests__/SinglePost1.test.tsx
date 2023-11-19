import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SinglePost from '../src/pages/SinglePost/SinglePost';
import { useGetPostByIdQuery } from '../src/api';
import '@testing-library/jest-dom';

const mockStore = configureMockStore();

jest.mock('../src/api', () => ({
  ...jest.requireActual('../src/api'),
  useGetPostByIdQuery: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test('Check that a loading indicator is displayed while fetching data', async () => {
  const store = mockStore({
    search: { inputValue: '' },
    postsPerPage: 5,
  });

  (useGetPostByIdQuery as jest.Mock).mockReturnValue({
    data: null,
    isError: false,
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/posts/1']}>
        <Routes>
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});
