import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PostsList from './PostsList';
import '@testing-library/jest-dom';

const mockedPosts = [
  { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
  { userId: 1, id: 2, title: 'Post 2', body: 'Body 2' },
];

describe('PostsList', () => {
  it('Ensure that the card component renders the relevant card data', () => {
    render(
      <MemoryRouter>
        <PostsList posts={mockedPosts} loading={false} />
      </MemoryRouter>
    );

    mockedPosts.forEach((post) => {
      const link = screen.queryByText((content, element) => {
        const hasIdAndTitle =
          element?.textContent === `${post.id} - ${post.title}`;
        const isLink = element?.tagName.toLowerCase() === 'a';
        return hasIdAndTitle && isLink;
      });

      expect(link).toBeInTheDocument();
    });
  });
});
