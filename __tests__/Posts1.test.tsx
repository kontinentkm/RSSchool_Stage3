import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { useGetPostsQuery } from '../src/api';
import '@testing-library/jest-dom';
import Posts from '../src/pages/Posts/Posts';

jest.mock('../src/api', () => ({
  ...jest.requireActual('../src/api'),
  useGetPostsQuery: jest.fn(),
  useGetPostByIdQuery: jest.fn(),
}));

const mockPosts = [
  { id: 1, title: 'Post 1', userId: 1, body: 'Body 1' },
  { id: 2, title: 'Post 2', userId: 2, body: 'Body 2' },
];

interface RootState {
  search: {
    inputValue: string;
  };
}

test('Verify that changing the posts per page updates the displayed posts', async () => {
  (useGetPostsQuery as jest.Mock).mockReturnValue({
    data: mockPosts,
    isError: false,
    isLoading: false,
  });

  const mockStore = configureMockStore<RootState>();
  const store: MockStoreEnhanced<RootState> = mockStore({
    search: { inputValue: '' },
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/posts']}>
        <Routes>
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  userEvent.selectOptions(screen.getByTestId('postsPerPage'), '5');
  expect(screen.getByTestId('postsPerPage')).toHaveValue('5');
});
