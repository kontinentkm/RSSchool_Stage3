import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../../components/Search/SearchContext';
import Posts from './Posts';
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
