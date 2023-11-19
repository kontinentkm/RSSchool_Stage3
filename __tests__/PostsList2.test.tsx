import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import PostsList from '../src/components/PostsList/PostsList';
import SinglePost from '../src/pages/SinglePost/SinglePost';
import { useGetPostsQuery, useGetPostByIdQuery } from '../src/api';
import { Post } from '../src/types';
import '@testing-library/jest-dom';

// Мокируем RTK Query
jest.mock('../src/api', () => ({
  ...jest.requireActual('../src/api'),
  useGetPostsQuery: jest.fn(),
  useGetPostByIdQuery: jest.fn(),
}));

// Замокированные данные для теста
const mockPosts: Post[] = [
  { id: 1, title: 'Post 1', userId: 1, body: 'Body 1' },
  { id: 2, title: 'Post 2', userId: 2, body: 'Body 2' },
];

const mockPost: Post = { id: 1, title: 'Post 1', userId: 1, body: 'Body 1' };

beforeEach(() => {
  // Сброс моков между тестами
  jest.clearAllMocks();

  // Мокируем результат запроса RTK Query
  (useGetPostsQuery as jest.Mock).mockReturnValue({
    data: mockPosts,
    isError: false,
  });

  // Мокируем результат запроса RTK Query для SinglePost
  (useGetPostByIdQuery as jest.Mock).mockReturnValue({
    data: mockPost,
    isError: false,
  });
});

test('Validate that clicking on a card opens a detailed card component', async () => {
  // Подготавливаем моковый стор с использованием redux-mock-store
  const mockStore = configureMockStore<Record<string, never>>();
  const store: MockStoreEnhanced<Record<string, never>> = mockStore({});

  // Рендерим компонент в памяти с использованием замокированных данных
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path="/"
            element={<PostsList posts={mockPosts} loading={false} />}
          />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  // Имитируем клик по первой карточке
  userEvent.click(screen.getByText(mockPosts[0].title));

  // Ждем, пока SinglePost загрузится
  await waitFor(() => {
    // Проверяем, что SinglePost отрендерен с правильными данными
    const postTitleElement = screen.getByText(mockPost.title);
    expect(postTitleElement).toBeInTheDocument();
  });
});
