import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; // Импортируйте Routes
import axios from 'axios';
import SinglePost from '../src/pages/SinglePost/SinglePost';
import '@testing-library/jest-dom';

jest.mock('axios');

const mockedPost = {
  userId: 1,
  id: 1,
  title: 'Test Post',
  body: 'Test Body',
};

describe('SinglePost', () => {
  xit('Check that clicking triggers an additional API call to fetch detailed information.', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: mockedPost,
    });

    render(
      <MemoryRouter initialEntries={['/1']}>
        {/* Оборачиваем все маршруты в компонент Routes */}
        <Routes>
          <Route path="/:id" element={<SinglePost />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
    });

    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();
  });
});
