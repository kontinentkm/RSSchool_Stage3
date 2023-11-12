import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('Check navigation on button click', () => {
    const paginateMock = jest.fn();
    const totalPosts = 20; // Задайте общее количество постов

    render(
      <Pagination
        postsPerPage={5}
        totalPosts={totalPosts}
        paginate={paginateMock}
      />
    );

    // Проверяем, что кнопки для каждой страницы отображаются
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(Math.ceil(totalPosts / 5));

    // Нажимаем на первую кнопку
    fireEvent.click(buttons[0]);
    // Проверяем, что функция paginate вызывается с правильным номером страницы
    expect(paginateMock).toHaveBeenCalledWith(1);

    // Нажимаем на вторую кнопку
    fireEvent.click(buttons[1]);
    // Проверяем, что функция paginate вызывается с правильным номером страницы
    expect(paginateMock).toHaveBeenCalledWith(2);
  });
});
