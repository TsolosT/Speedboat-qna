// TakeTest.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';
import TakeTest from '/src/pages/TakeTest';
import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';

// Mock the child components
vi.mock('/src/components/qnatest/TestPreparation', () => {
    return { 
        default: ({ onStartTest }) => (
            <div>
                <button onClick={() => onStartTest({ questionCount: 10, showAnswers: true })}>
                    Start Test
                </button>
            </div>
        )
    };
});

vi.mock('/src/components/qnatest/TestList', () => {
    return { 
        default: ({ onNewTest, questionCount, showAnswers }) => (
            <div>
                <h1>Test List</h1>
                <button onClick={onNewTest}>New Test</button>
                <p>Question Count: {questionCount}</p>
                <p>Show Answers: {showAnswers ? 'Yes' : 'No'}</p>
            </div>
        )
    };
});

describe('TakeTest Component', () => {
    it('renders TestPreparation initially', () => {
        render(<TakeTest />);

        // Check if TestPreparation component is rendered
        expect(screen.getByRole('button', { name: /start test/i })).toBeInTheDocument();
    });

    it('starts the test and renders TestList with correct settings', () => {
        render(<TakeTest />);

        // Click the button to start the test
        fireEvent.click(screen.getByRole('button', { name: /start test/i }));

        // Check if TestList component is rendered
        expect(screen.getByText(/test list/i)).toBeInTheDocument();
        expect(screen.getByText(/question count: 10/i)).toBeInTheDocument();
        expect(screen.getByText(/show answers: yes/i)).toBeInTheDocument();
    });

    it('can start a new test', () => {
        render(<TakeTest />);

        // Start the test first
        fireEvent.click(screen.getByRole('button', { name: /start test/i }));

        // Click the button to start a new test
        fireEvent.click(screen.getByRole('button', { name: /new test/i }));

        // Check that the TestPreparation component is rendered again
        expect(screen.getByRole('button', { name: /start test/i })).toBeInTheDocument();
    });
});
