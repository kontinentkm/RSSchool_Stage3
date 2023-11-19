import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
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

const mockPost = { id: 1, title: 'Test Post', body: 'Test Body' };

beforeEach(() => {
  jest.clearAllMocks();
});

test('Make sure the detailed card component correctly displays the detailed card data', async () => {
  const store = mockStore({
    search: { inputValue: '' },
    postsPerPage: 5,
  });

  (useGetPostByIdQuery as jest.Mock).mockReturnValue({
    data: mockPost,
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

  await waitFor(() => {
    const postTitleElement = screen.getByText('Test Post');
    expect(postTitleElement).toBeInTheDocument();

    const postBodyElement = screen.getByText('Test Body');
    expect(postBodyElement).toBeInTheDocument();
  });
});
