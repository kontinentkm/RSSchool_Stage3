import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import SinglePost from './SinglePost';
import '@testing-library/jest-dom';
import '@testing-library/dom';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('SinglePost', () => {
  it('Check that a loading indicator is displayed while fetching data', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        userId: 1,
        id: 1,
        title: 'Test Post',
        body: 'This is a test post.',
      },
    });

    render(
      <MemoryRouter initialEntries={['/posts/1']}>
        <Routes>
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();
    });
  });
});
