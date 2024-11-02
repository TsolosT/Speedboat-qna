// NotFound.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';
import NotFound from '/src/pages/NotFound'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import { describe, it, expect } from 'vitest';

describe('NotFound Component', () => {
    it('renders correctly with the expected content', () => {
        render(
            <Router>
                <NotFound />
            </Router>
        );

        // Check for main heading
        expect(screen.getByRole('heading', { name: /404 - page not found/i })).toBeInTheDocument();

        // Check for secondary message
        expect(screen.getByText(/oops! the page you're looking for doesn't exist/i)).toBeInTheDocument();

        // Check for the button
        const button = screen.getByText('Back To Home');
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('href', '/'); 
    });

    it('navigates back to home when the button is clicked', () => {
        render(
            <Router>
                <NotFound />
            </Router>
        );

        const button = screen.getByText('Back To Home');
        fireEvent.click(button);
    });
});
