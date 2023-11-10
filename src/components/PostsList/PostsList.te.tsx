import React from 'react';
import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import PostsList from './PostsList';
import SinglePost from '../../pages/SinglePost/SinglePost';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PostsList component', () => {
  test('Opens SinglePost when clicking on Link', async () => {
    // Mock posts data
    const mockPosts = [
      {
        userId: 1,
        id: 1,
        title: 'Post 1',
        body: 'Body 1',
      },
      {
        userId: 1,
        id: 2,
        title: 'Post 2',
        body: 'Body 2',
      },
      // Add more mock posts as needed
    ];

    // Mock Axios response for posts
    mockedAxios.get.mockResolvedValueOnce({ data: mockPosts });

    // Mock Axios response for single post
    mockedAxios.get.mockResolvedValueOnce({
      data: { id: 1, title: 'Post 1', body: 'Body 1' },
    });

    // Render the component with MemoryRouter and Routes
    render(
      <MemoryRouter initialEntries={['/posts']}>
        <Routes>
          <Route
            path="/posts"
            element={<PostsList posts={mockPosts} loading={false} />}
          />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for the posts to load
    await waitFor(() => screen.getByText('Post 1'));

    // Get the Link element and click on it
    const postLink = screen.getByRole('link', { name: /1 - Post 1/i });
    act(() => {
      fireEvent.click(postLink);
    });

    // Assert that the SinglePost page is rendered
    await waitFor(() => screen.getByText('Single Post Page'));
    expect(screen.getByText('Post ID: 1')).toBeInTheDocument();
    expect(screen.getByText('Post Title: Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post Body: Body 1')).toBeInTheDocument();
  });
});
