import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PostsList from '../../components/PostsList/PostsList';
import '@testing-library/jest-dom';

jest.mock('axios');

const mockedPosts = [
  { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
  { userId: 1, id: 2, title: 'Post 2', body: 'Body 2' },
];

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('PostsList', () => {
  xit('Validate that clicking on a card opens a detailed card component', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path="/"
            element={<PostsList posts={mockedPosts} loading={false} />}
          />
          <Route
            path="/:postId"
            element={<div data-testid="single-post-page">Single Post Page</div>}
          />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      userEvent.click(screen.getByText('Post 1'));
    });
  });
});
