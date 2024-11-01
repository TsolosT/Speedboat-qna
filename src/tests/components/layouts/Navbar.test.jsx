/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from 'src/components/layouts/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Navbar with all navigation links', () => {
    render(
        <Router>
            <Navbar />
        </Router>
    );
    
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const takeTestLink = screen.getByRole('link', { name: /take test/i });
    const studyQnaLink = screen.getByRole('link', { name: /study q&a/i });

    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(takeTestLink).toHaveAttribute('href', '/take-test');
    expect(studyQnaLink).toHaveAttribute('href', '/study-qna');
});

test('opens drawer in mobile view', () => {
    render(
        <Router>
            <Navbar />
        </Router>
    );

    const menuIcon = screen.getByLabelText(/open drawer/i);
    fireEvent.click(menuIcon);

    // Check if drawer links are now visible
    expect(screen.getByRole('link', { name: /home/i })).toBeVisible();
    expect(screen.getByRole('link', { name: /about/i })).toBeVisible();
});
