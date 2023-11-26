// __tests__/CompPostSearch.tsx
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PostSearch } from '@/components/PostSearch';
import { getPostsBySearch } from '@/services/getPosts';

jest.mock('@/services/getPosts', () => ({
  getPostsBySearch: jest.fn(),
}));

describe('PostSearch', () => {
  it('вызывает onSearch с правильными данными при отправке формы', async () => {
    const mockOnSearch = jest.fn();

    const mockPosts = [
      { id: 1, title: 'Пост 1' },
      { id: 2, title: 'Пост 2' },
    ];

    (getPostsBySearch as jest.Mock).mockResolvedValue({
      posts: mockPosts,
      totalPages: 1,
    });

    render(<PostSearch onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText(
      'search'
    ) as HTMLInputElement;
    const searchButton = screen.getByText('Search');

    searchInput.value = 'test';
    fireEvent.change(searchInput);

    fireEvent.click(searchButton);
  });
});
