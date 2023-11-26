// components/Pagination.tsx
import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div>
      {pageNumbers.map((number) => (
        <span
          key={number}
          style={{
            margin: '0.5rem',
            cursor: 'pointer',
            fontWeight: currentPage === number ? 'bold' : 'normal',
          }}
          onClick={() => onPageChange(number)}
        >
          {number}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
