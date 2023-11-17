import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../src/components/Search/SearchContext1';
import Posts from '../src/pages/Posts/Posts';
import axios from 'axios';

jest.mock('axios');

describe('Posts', () => {
  xit('Verify that the component renders the specified number of cards', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
        { userId: 1, id: 2, title: 'Post 2', body: 'Body 2' },
        { userId: 1, id: 3, title: 'Post 3', body: 'Body 3' },
        { userId: 1, id: 4, title: 'Post 4', body: 'Body 4' },
        { userId: 1, id: 5, title: 'Post 5', body: 'Body 5' },
        { userId: 1, id: 6, title: 'Post 6', body: 'Body 6' },
      ],
    });

    render(
      <MemoryRouter>
        <SearchProvider>
          <Posts />
        </SearchProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const postItems = document.querySelectorAll('.post-item');
      expect(postItems).toHaveLength(6);
    });

    userEvent.selectOptions(screen.getByTestId('postsPerPage'), '5');

    await waitFor(() => {
      const postItems = document.querySelectorAll('.post-item');
      expect(postItems).toHaveLength(5);
    });
  });
});
