import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../src/components/Search/SearchContext1';
import Posts from '../src/pages/Posts/Posts';
import axios from 'axios';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('Posts', () => {
  xit('Check that an appropriate message is displayed if no cards are present', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({ data: [] });

    render(
      <MemoryRouter>
        <SearchProvider>
          <Posts />
        </SearchProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const noCardsMessage = screen.getByText('No posts found');
      expect(noCardsMessage).toBeInTheDocument();
    });
  });
});
