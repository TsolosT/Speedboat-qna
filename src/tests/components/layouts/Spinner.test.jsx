/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Spinner from 'src/components/layouts/Spinner';

test('renders Spinner with image', () => {
    render(<Spinner />);
    const spinnerImage = screen.getByAltText('Loading...');
    expect(spinnerImage).toBeInTheDocument();
    expect(spinnerImage).toHaveAttribute('src', expect.stringContaining('spinner.gif'));
    expect(spinnerImage).toHaveClass('text-center mx-auto');
});
