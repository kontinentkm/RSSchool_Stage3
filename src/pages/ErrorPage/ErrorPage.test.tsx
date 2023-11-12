import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import ErrorPage from '../ErrorPage/ErrorPage';

test('Ensure that the 404 page is displayed when navigating to an invalid route', () => {
  render(
    <MemoryRouter initialEntries={['/nonexistent-route']}>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </MemoryRouter>
  );

  const imgElement = screen.getByAltText('img');
  expect(imgElement).toBeInTheDocument();

  const backButtonElement = screen.getByText('Back');
  expect(backButtonElement).toBeInTheDocument();
});
