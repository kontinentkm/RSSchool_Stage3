import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { useGetPostsQuery } from '../src/api';
import '@testing-library/jest-dom';
import Posts from '../src/pages/Posts/Posts';

// Мокируем RTK Query
jest.mock('../src/api', () => ({
  ...jest.requireActual('../src/api'),
  useGetPostsQuery: jest.fn(),
  useGetPostByIdQuery: jest.fn(),
}));

interface RootState {
  search: {
    inputValue: string;
  };
}

test('Check that an appropriate message is displayed if no cards are present', async () => {
  // Мокируем результат запроса RTK Query с пустым массивом
  (useGetPostsQuery as jest.Mock).mockReturnValue({
    data: [],
    isError: false,
    isLoading: false,
  });

  // Подготавливаем моковый стор с использованием redux-mock-store
  const mockStore = configureMockStore<RootState>(); // Указываем тип RootState
  const store: MockStoreEnhanced<RootState> = mockStore({
    search: { inputValue: '' },
  });

  // Рендерим компонент в памяти с использованием замокированных данных
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/posts']}>
        <Routes>
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  // Дожидаемся, пока компонент перерендерится
  await waitFor(() => {
    // Проверяем, что отображается сообщение о том, что постов не найдено
    expect(screen.getByText('No posts found')).toBeInTheDocument();
  });
});
