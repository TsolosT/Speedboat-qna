// BasicRules.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BasicRules from '/src/components/qnastudy/BasicRules';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { vi } from 'vitest';

// Mock assets using Vitest's vi.mock
vi.mock('../../assets/sxima_prote.webp', () => 'boatPriority');
vi.mock('../../assets/marinecodesignals.webp', () => 'marinesCodeSignal');

// Mock useMediaQuery to simulate different screen sizes
vi.mock('@mui/material/useMediaQuery', () => ({
    default: vi.fn(),
}));



// Define a theme for MUI components to render correctly
const theme = createTheme();

// Wrapper for the component to provide the MUI theme
const renderWithTheme = (component) => render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

describe('BasicRules Component', () => {
    it('renders content based on selectedCategory prop', () => {
        renderWithTheme(<BasicRules selectedCategory={0} />);
        expect(screen.getByText('Κανόνες Προτεραιότητας')).toBeInTheDocument();
        
        renderWithTheme(<BasicRules selectedCategory={1} />);
        expect(screen.getByText('ΠΡΙΝ ΑΠΟ ΤΟΝ ΑΠΟΠΛΟΥ')).toBeInTheDocument();

        renderWithTheme(<BasicRules selectedCategory={2} />);
        expect(screen.getByText('Σε Λιμάνι')).toBeInTheDocument();
    });

    it('renders fallback content when selectedCategory is invalid', () => {
        renderWithTheme(<BasicRules selectedCategory={99} />);
        expect(screen.getByText('Content not available')).toBeInTheDocument();
    });

    it('opens modal when "Preview Signals" button is clicked in category 4', () => {
        renderWithTheme(<BasicRules selectedCategory={4} />);
        
        // Find and click the button to open the modal
        const button = screen.getByRole('button', { name: /Preview Signals/i });
        fireEvent.click(button);

        // Verify if modal content is shown
        expect(screen.getByAltText('Zoomed')).toBeInTheDocument();
    });

});
