import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../src/components/Pagination/Pagination';

describe('Pagination', () => {
  it('Check navigation on button click', () => {
    const paginateMock = jest.fn();
    const totalPosts = 20;

    render(
      <Pagination
        postsPerPage={5}
        totalPosts={totalPosts}
        paginate={paginateMock}
      />
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(Math.ceil(totalPosts / 5));

    fireEvent.click(buttons[0]);
    expect(paginateMock).toHaveBeenCalledWith(1);

    fireEvent.click(buttons[1]);
    expect(paginateMock).toHaveBeenCalledWith(2);
  });
});
