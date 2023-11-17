import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import SinglePost from '../src/pages/SinglePost/SinglePost';
import '@testing-library/jest-dom';
import '@testing-library/dom';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('SinglePost', () => {
  xit('Ensure that clicking the close button hides the component', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        userId: 1,
        id: 1,
        title: 'Test Post',
        body: 'This is a test post.',
      },
    });

    render(
      <MemoryRouter initialEntries={['/RSSchool_Stage3/dist/posts/1']}>
        <Routes>
          <Route
            path="/RSSchool_Stage3/dist/posts/:id"
            element={<SinglePost />}
          />
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
