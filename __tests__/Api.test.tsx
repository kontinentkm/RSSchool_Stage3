// api.test.js
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../mocks/server';
import { api, useGetPostsQuery, useGetPostByIdQuery } from '../api';

// Mock API функции
jest.mock('../api', () => ({
  ...jest.requireActual('../api'),
  useGetPostsQuery: jest.fn(),
  useGetPostByIdQuery: jest.fn(),
}));

// Запускаем мок-сервер перед тестами
beforeAll(() => server.listen());

// Сбрасываем состояние мок-сервера после каждого теста
afterEach(() => server.resetHandlers());

// Отключаем мок-сервер после всех тестов
afterAll(() => server.close());

test('useGetPostsQuery fetches posts correctly', async () => {
  // Устанавливаем возвращаемое значение для мокированной функции
  useGetPostsQuery.mockReturnValue({
    data: [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
    ],
    isError: false,
    isLoading: false,
  });

  render(<Component />); // Подразумевается, что у вас есть компонент, использующий useGetPostsQuery

  // Ваш код теста
  // Ожидаем, что данные, возвращаемые вашей мокированной функцией, будут отображены на экране
  expect(screen.getByText('Post 1')).toBeInTheDocument();
  expect(screen.getByText('Post 2')).toBeInTheDocument();

  // Проверяем, что функция была вызвана с правильными параметрами
  expect(useGetPostsQuery).toHaveBeenCalledWith();
});

test('useGetPostByIdQuery fetches a single post correctly', async () => {
  // Устанавливаем возвращаемое значение для мокированной функции
  useGetPostByIdQuery.mockReturnValue({
    data: { id: 1, title: 'Post 1' },
    isError: false,
    isLoading: false,
  });

  render(<Component />); // Подразумевается, что у вас есть компонент, использующий useGetPostByIdQuery

  // Ваш код теста
  // Ожидаем, что данные, возвращаемые вашей мокированной функцией, будут отображены на экране
  expect(screen.getByText('Post 1')).toBeInTheDocument();

  // Проверяем, что функция была вызвана с правильными параметрами
  expect(useGetPostByIdQuery).toHaveBeenCalledWith(1);
});
