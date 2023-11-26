// __tests__/CompNavigation.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navigation } from '@/components/Navigation';
import { usePathname as mockUsePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Navigation', () => {
  it('отображает активную ссылку в зависимости от текущего pathname', () => {
    (mockUsePathname as jest.Mock).mockReturnValue('/current-path');

    const navLinks = [
      { label: 'Home', href: '/home' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ];

    render(<Navigation navLinks={navLinks} />);

    const activeLink = screen.getByText('About');
  });

  it('отображает неактивные ссылки', () => {
    (mockUsePathname as jest.Mock).mockReturnValue('/current-path');

    const navLinks = [
      { label: 'Home', href: '/home' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ];

    render(<Navigation navLinks={navLinks} />);

    const inactiveLink1 = screen.getByText('Home');
    const inactiveLink2 = screen.getByText('Contact');
    expect(inactiveLink1).not.toHaveClass('active');
    expect(inactiveLink2).not.toHaveClass('active');
  });
});
