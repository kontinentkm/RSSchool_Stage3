import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import PostsList from '../src/components/PostsList/PostsList';
import { useGetPostsQuery } from '../src/api';
import { Post } from '../src/types';
import '@testing-library/jest-dom';

// Мокируем RTK Query
jest.mock('../src/api', () => ({
  ...jest.requireActual('../src/api'),
  useGetPostsQuery: jest.fn(),
}));

// Замокированные данные для теста
const mockPosts: Post[] = [
  { id: 1, title: 'Post 1', userId: 1, body: 'Body 1' },
  { id: 2, title: 'Post 2', userId: 2, body: 'Body 2' },
];

beforeEach(() => {
  // Сброс моков между тестами
  jest.clearAllMocks();

  // Мокируем результат запроса RTK Query
  (useGetPostsQuery as jest.Mock).mockReturnValue({
    data: mockPosts,
    isError: false,
  });
});

test('Ensure that the card component renders the relevant card data', () => {
  // Подготавливаем моковый стор с использованием redux-mock-store (если нужно)
  const mockStore = configureMockStore<Record<string, never>>();

  const store: MockStoreEnhanced<Record<string, never>> = mockStore({});

  // Рендерим компонент в памяти с использованием замокированных данных
  render(
    <Provider store={store}>
      <MemoryRouter>
        <PostsList posts={mockPosts} loading={false} />
      </MemoryRouter>
    </Provider>
  );

  // Проверяем, что заголовки постов отображаются на странице
  mockPosts.forEach((post) => {
    const postTitleElement = screen.getByText(post.title);
    expect(postTitleElement).toBeInTheDocument();
  });
});
