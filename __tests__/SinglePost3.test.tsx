import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SinglePost from '../src/pages/SinglePost/SinglePost';
import { useGetPostByIdQuery } from '../src/api';
import '@testing-library/jest-dom';

const mockStore = configureMockStore();

// Мокируем RTK Query
jest.mock('../src/api', () => ({
  ...jest.requireActual('../src/api'),
  useGetPostByIdQuery: jest.fn(),
}));

const mockPost = { id: 1, title: 'Test Post', body: 'Test Body' };

beforeEach(() => {
  // Сброс моков между тестами
  jest.clearAllMocks();
});

test('Make sure the detailed card component correctly displays the detailed card data', async () => {
  // Подготавливаем моковый стор с использованием redux-mock-store
  const store = mockStore({
    search: { inputValue: '' },
    postsPerPage: 5,
  });

  // Мокируем результат запроса RTK Query
  (useGetPostByIdQuery as jest.Mock).mockReturnValue({
    data: mockPost,
    isError: false,
  });

  // Рендерим компонент в памяти и используем MemoryRouter для предоставления параметра id
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/posts/1']}>
        <Routes>
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  await waitFor(() => {
    const closeButton = screen.getByText('Close');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
  });

  await waitFor(() => {
    expect(window.history.length).toBe(1);
  });
});
