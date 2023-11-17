import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import SinglePost from '../src/pages/SinglePost/SinglePost';
import '@testing-library/jest-dom';
import '@testing-library/dom';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('SinglePost', () => {
  xit('Make sure the detailed card component correctly displays the detailed card data', async () => {
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

    await waitFor(() => {
      expect(screen.getByText('Single Post Page')).toBeInTheDocument();
    });

    const findPostID = () => {
      const spanIDElement = screen.getByText('Post ID:');
      return spanIDElement.nextSibling?.textContent || '';
    };
    expect(findPostID()).toBe('1');

    const findPostTitle = () => {
      const spanTitleElement = screen.getByText('Post Title:');
      return spanTitleElement.nextSibling?.textContent || '';
    };
    expect(findPostTitle()).toBe('Test Post');

    const findPostBody = () => {
      const spanBodyElement = screen.getByText('Post Body:');
      return spanBodyElement.nextSibling?.textContent || '';
    };
    expect(findPostBody()).toBe('This is a test post.');
  });
});
