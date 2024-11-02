import { render, screen } from '@testing-library/react';
import About from '/src/pages/About'; 
import { describe, it, expect } from 'vitest';

describe('About Component', () => {
    it('renders correctly with the expected content', () => {
        render(<About />);

        // Check for main heading
        expect(screen.getByText('SpeedBoat Exam Q&A')).toBeInTheDocument();

        // Check for subheading
        expect(screen.getByText('About the App')).toBeInTheDocument();

        // Check for the main description text
        expect(screen.getByText('Immediate feedback on correct and incorrect answers.')).toBeInTheDocument();

        // Check for the link to supporting documents
        const link = screen.getByRole('link', { name: /ls-elakt/i });
        expect(link).toHaveAttribute('href', 'https://adeies.hcg.gr/adeies/dikaiologhtika/');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        
        // Check for developer info
        const developerLink = screen.getByRole('link', { name: /t.tsolovikos/i });
        expect(developerLink).toHaveAttribute('href', 'https://github.com/TsolosT');
    });
});