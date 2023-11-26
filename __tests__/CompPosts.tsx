import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Posts } from '@/components/Posts';
import { Post } from '@/types';

const mockPosts: Post[] = [
  { id: 1, title: 'Пост 1', userId: 1, body: 'Текст поста 1' },
  { id: 2, title: 'Пост 2', userId: 2, body: 'Текст поста 2' },
];

test('Рендерит список постов с правильными заголовками и ссылками', () => {
  render(<Posts posts={mockPosts} />);

  mockPosts.forEach((post) => {
    const postElement = screen.getByText(post.title);
    const postLink = screen.getByRole('link', { name: post.title });

    expect(postElement).toBeInTheDocument();
    expect(postLink).toHaveAttribute('href', `/blog/${post.id}`);
  });
});
