/* eslint-disable no-undef */
import { render,screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from 'src/components/layouts/Footer';

test('renders Footer with logo, year, and link', () => {
    render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );
    const logo = screen.getByAltText('Logo');
    const link = screen.getByRole('link', { name: /T\.Tsolovikos/i });
    const year = new Date().getFullYear().toString();

    expect(logo).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/TsolosT');
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
});
