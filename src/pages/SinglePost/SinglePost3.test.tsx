import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import SinglePost from './SinglePost';
import '@testing-library/jest-dom';
import '@testing-library/dom';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('SinglePost', () => {
  it('Ensure that clicking the close button hides the component', async () => {
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

    const closeButton = screen.getByText('Close');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(window.history.length).toBe(1);
    });
  });
});
