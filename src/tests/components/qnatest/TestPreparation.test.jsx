/* eslint-disable no-undef */
// TestPreparation.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import TestPreparation from '/src/components/qnatest/TestPreparation';
import { TestContext } from '/src/context/TestContext';

// Mock the imported image
vi.mock('/src/assets/takingtest.png', () => ({ default: 'mocked-take-test-img' }));

// Mock the icons used in the component
vi.mock('@mui/icons-material/SailingOutlined', () => ({
    default: () => <span data-testid="mock-sailing-icon" />,
}));
vi.mock('@mui/icons-material/Info', () => ({
    default: () => <span data-testid="mock-info-icon" />,
}));
vi.mock('@mui/icons-material/ArrowRightAlt', () => ({
    default: () => <span data-testid="mock-arrow-icon" />,
}));

describe('TestPreparation Component', () => {
    let startTestMock;
    let onStartTestMock;

    beforeEach(() => {
        startTestMock = vi.fn();
        onStartTestMock = vi.fn();
    });

    const renderComponent = () =>
        render(
        <TestContext.Provider value={{ startTest: startTestMock }}>
            <TestPreparation onStartTest={onStartTestMock} />
        </TestContext.Provider>
        );

    it('renders without crashing and displays initial elements', () => {
        renderComponent();
        expect(screen.getByAltText('Speedboat tests')).toHaveAttribute('src', 'mocked-take-test-img');
        expect(screen.getByText('Prepare for the Test')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /start test/i })).toBeDisabled();
    });

    it('enables the "Start Test" button when options are selected', () => {
        renderComponent();

        // Select number of questions and answer display preference
        fireEvent.click(screen.getByLabelText('20 Questions'));
        fireEvent.click(screen.getByLabelText('Immediately'));

        const startButton = screen.getByRole('button', { name: /start test/i });
        expect(startButton).toBeEnabled();
    });

    it('disables the "Start Test" button if options are not fully selected', () => {
        renderComponent();
    
        const startButton = screen.getByRole('button', { name: /start test/i });
    
        // Select only the question count option and check if button is disabled
        fireEvent.click(screen.getByLabelText('20 Questions'));
        expect(startButton).toBeDisabled();
    
        // Deselect the question count and select only the answer display option
        fireEvent.click(screen.getByLabelText('20 Questions')); // Deselect
        expect(startButton).toBeDisabled();
    });

    it('calls startTest with the correct options and onStartTest when "Start Test" is clicked', () => {
        renderComponent();

        fireEvent.click(screen.getByLabelText('20 Questions'));
        fireEvent.click(screen.getByLabelText('Immediately'));
        fireEvent.click(screen.getByLabelText('Shuffle Answers'));

        const startButton = screen.getByRole('button', { name: /start test/i });
        fireEvent.click(startButton);

        expect(startTestMock).toHaveBeenCalledWith({
        useRandom20: true,
        showAnswersImmediately: true,
        shuffleAnswers: true,
        });
        expect(onStartTestMock).toHaveBeenCalledWith({
        questionCount: 20,
        showAnswers: 'immediately',
        });
    });
});
