// __tests__/CompPagination.tsx
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '@/components/Pagination';

describe('Pagination', () => {
  const totalPages = 5;
  const onPageChangeMock = jest.fn();

  it('отображает правильное количество страниц', () => {
    const currentPage = 3;
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChangeMock}
      />
    );

    const pageNumbers = screen.getAllByText(/\d+/);
    expect(pageNumbers).toHaveLength(totalPages);

    pageNumbers.forEach((page, index) => {
      expect(page).toHaveTextContent((index + 1).toString());
    });
  });

  it('вызывает onPageChange с правильным номером страницы при клике', () => {
    const currentPage = 3;
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChangeMock}
      />
    );

    const targetPage = 5;
    const pageButton = screen.getByText(targetPage.toString());
    fireEvent.click(pageButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(targetPage);
  });

  it('помечает текущую страницу', () => {
    const currentPage = 3;
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChangeMock}
      />
    );

    const activePage = screen.getByText(currentPage.toString());
    expect(activePage).toHaveStyle({ fontWeight: 'bold' });
  });
});
