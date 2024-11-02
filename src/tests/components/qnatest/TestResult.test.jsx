/* eslint-disable no-undef */
// TestResult.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import TestResult from '/src/components/qnatest/TestResult';
import { vi } from 'vitest';

// Mock static image imports with Vitest
vi.mock('/src/assets/assets/failed-exam.png', () => ({ default: '/Speedboat-qna/src/assets/failed-exam.png' }));
vi.mock('/src/assets/passed-exam.png', () => ({ default: '/Speedboat-qna/src/assets/passed-exam.png' }));

// Mock the WrongAnwserResults component
vi.mock('/src/components/qnatest/WrongAnwserResults', () => ({
    default: ({ wrongQuestions }) => (
        <div>
        {wrongQuestions.map((q) => (
            <div key={q.text}>{q.text}</div>
        ))}
        </div>
    ),
}));

// Mock react-confetti to avoid canvas rendering issues
vi.mock('react-confetti', () => {
    return {
        __esModule: true,
        default: () => <div data-testid="mock-confetti" />,
    };
});

describe('TestResult Component', () => {
    const wrongQuestions = [
        {
            isCorrect: false,
            question: {
                id: 1,
                question: "Βύθισμα είναι:",
                answers: [
                    { id: 1, isCorrect: true, isSelected: false, text: 'Η κατακόρυφη απόσταση από την επιφάνεια της θάλασσας μέχρι την τρόπιδα του σκάφους.' },
                    { id: 2, isCorrect: false, isSelected: false, text: 'Η κατακόρυφη απόσταση από την επιφάνεια της θάλασσας μέχρι τον πυθμένα της.' },
                    { id: 3, isCorrect: false, isSelected: true, text: 'Το μήκος της αλυσίδας της άγκυρας που απαιτείται για την αγκυροβολία του σκάφους.' }
                ],
            },
            selectedAnswer: 3,
        },
        {
            isCorrect: true,
            question: {
                id: 2,
                question: "Ο Βορειοανατολικός (ΒΑ) άνεμος λέγεται και:",
                answers: [
                    { id: 1, isCorrect: false, isSelected: false, text: 'Τραμουντάνα.' },
                    { id: 2, isCorrect: false, isSelected: false, text: 'Λεβάντες.' },
                    { id: 3, isCorrect: true, isSelected: false, text: 'Γραίγος.' }
                ],
            },
            selectedAnswer: 3,
        },
    ];

    const onResetTest = vi.fn();
    const onNewTest = vi.fn();
    const onRepeatWrongTest = vi.fn();

    it('renders "Passed" result with confetti when score meets pass criteria', () => {
        render(
        <TestResult
            score={18}
            total={20}
            onResetTest={onResetTest}
            onNewTest={onNewTest}
            onRepeatWrongTest={onRepeatWrongTest}
            showAnswers
            answeredQuestions={wrongQuestions}
        />
        );

        expect(screen.getByText('Passed')).toBeInTheDocument();
        expect(screen.getByText('You got 18 out of 20 correct!')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /Results/i })).toHaveAttribute('src', '/Speedboat-qna/src/assets/passed-exam.png');
        expect(screen.getByText('Set New Test')).toBeInTheDocument();
        expect(screen.getByTestId('mock-confetti')).toBeInTheDocument(); // Confirm mock confetti renders
    });

    it('renders "Failed" result without confetti when score does not meet pass criteria', () => {
        render(
        <TestResult
            score={10}
            total={20}
            onResetTest={onResetTest}
            onNewTest={onNewTest}
            onRepeatWrongTest={onRepeatWrongTest}
            showAnswers
            answeredQuestions={wrongQuestions}
        />
        );

        expect(screen.getByText('Failed')).toBeInTheDocument();
        expect(screen.getByText('You got 10 out of 20 correct!')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /Results/i })).toHaveAttribute('src', '/Speedboat-qna/src/assets/failed-exam.png');
    });

    it('calls the appropriate handler when buttons are clicked', () => {
        render(
        <TestResult
            score={10}
            total={20}
            onResetTest={onResetTest}
            onNewTest={onNewTest}
            onRepeatWrongTest={onRepeatWrongTest}
            showAnswers
            answeredQuestions={wrongQuestions}
        />
        );

        fireEvent.click(screen.getByText('Repeat Test'));
        expect(onResetTest).toHaveBeenCalledTimes(1);

        fireEvent.click(screen.getByText('Set New Test'));
        expect(onNewTest).toHaveBeenCalledTimes(1);

        fireEvent.click(screen.getByText('Repeat Wrong Questions'));
        expect(onRepeatWrongTest).toHaveBeenCalledTimes(1);
    });

    it('disables the "Repeat Wrong Questions" button if all questions are correct', () => {
        const allCorrectQuestions = [
            { isCorrect: true, question: wrongQuestions[1], selectedAnswer: wrongQuestions[1].question.answers[2].id }
        ];

        render(
        <TestResult
            score={1}
            total={1}
            onResetTest={onResetTest}
            onNewTest={onNewTest}
            onRepeatWrongTest={onRepeatWrongTest}
            showAnswers
            answeredQuestions={allCorrectQuestions}
        />
        );

        expect(screen.getByText('Repeat Wrong Questions')).toBeDisabled();
    });

    it('renders the WrongAnwserResults component with the correct data for wrong answers', () => {
        render(
        <TestResult
            score={10}
            total={20}
            onResetTest={onResetTest}
            onNewTest={onNewTest}
            onRepeatWrongTest={onRepeatWrongTest}
            showAnswers
            answeredQuestions={wrongQuestions}
        />
        );

        // Check if wrong questions are rendered in Greek
        expect(screen.getByText('1.Βύθισμα είναι:')).toBeInTheDocument();
    });
});
