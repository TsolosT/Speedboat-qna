/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import TestList from '/src/components/qnatest/TestList';
import { TestContext } from '/src/context/TestContext';
import QnaContext from '/src/context/QnaContext';

vi.mock('@mui/icons-material/RestartAlt', () => ({ default: () => <span data-testid="mock-restart-icon" /> }));
vi.mock('@mui/icons-material/NoteAddOutlined', () => ({ default: () => <span data-testid="mock-add-icon" /> }));

describe('TestList Component', () => {
    let incrementQuestionMock;
    let resetTestMock;
    let restartWithQuestionsMock;
    let onNewTestMock;

    beforeEach(() => {
        incrementQuestionMock = vi.fn();
        resetTestMock = vi.fn();
        restartWithQuestionsMock = vi.fn();
        onNewTestMock = vi.fn();
    });

    const questions = [
        {
            correct_answer: 1,
            category: [ {id:1 , title:'Σκάφος - Μηχανές' }],
            id: 1,
            question: "Βύθισμα είναι:",
            answers: [
                { id: 1, text: 'Η κατακόρυφη απόσταση από την επιφάνεια της θάλασσας μέχρι την τρόπιδα του σκάφους.' },
                { id: 2, text: 'Η κατακόρυφη απόσταση από την επιφάνεια της θάλασσας μέχρι τον πυθμένα της.' },
                { id: 3,  text: 'Το μήκος της αλυσίδας της άγκυρας που απαιτείται για την αγκυροβολία του σκάφους.' }
            ],
        },
        {
            correct_answer: 3,
            id: 2,
            question: "Ο Βορειοανατολικός (ΒΑ) άνεμος λέγεται και:",
            answers: [
                { id: 1, text: 'Τραμουντάνα.' },
                { id: 2, text: 'Λεβάντες.' },
                { id: 3, text: 'Γραίγος.' }
            ],
        },
    ];

    const renderComponent = (testContextValue, qnaContextValue) =>
        render(
            <QnaContext.Provider value={qnaContextValue}>
                <TestContext.Provider value={testContextValue}>
                    <TestList onNewTest={onNewTestMock} />
                </TestContext.Provider>
            </QnaContext.Provider>
        );

    it('displays Spinner while loading', () => {
        renderComponent(
            { currentTest: null },
            { isLoading: true, convertIdToGreekLetter: (id) => String.fromCharCode(945 + id) }
        );
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('renders questions and answers correctly', () => {
        renderComponent(
            {
                currentTest: { selectedQuestions: questions }, 
                currentQuestion: 0,
                incrementQuestion: incrementQuestionMock,
            },
            { isLoading: false, convertIdToGreekLetter: (id) => String.fromCharCode(945 + id) }
        );
    
        expect(screen.getByText('Βύθισμα είναι:')).toBeInTheDocument();
        expect(screen.getByLabelText('β. Η κατακόρυφη απόσταση από την επιφάνεια της θάλασσας μέχρι την τρόπιδα του σκάφους.')).toBeInTheDocument();
        expect(screen.getByLabelText('δ. Το μήκος της αλυσίδας της άγκυρας που απαιτείται για την αγκυροβολία του σκάφους.')).toBeInTheDocument();
    });

    it('locks answer if showAnswersImmediately is enabled', () => {
        renderComponent(
            {
                currentTest: { selectedQuestions: questions, showAnswersImmediately: true },
                currentQuestion: 0,
                incrementQuestion: incrementQuestionMock,
            },
            { isLoading: false, convertIdToGreekLetter: (id) => String.fromCharCode(945 + id) }
        );

        const answerOption = screen.getByLabelText('δ. Το μήκος της αλυσίδας της άγκυρας που απαιτείται για την αγκυροβολία του σκάφους.');
        fireEvent.click(answerOption);

        expect(answerOption).toBeDisabled();
        expect(screen.getByRole('button', { name: /next/i })).toBeEnabled();
    });

    it('increments question on "Next" button click', () => {
        renderComponent(
            {
                currentTest: {
                    selectedQuestions: questions,
                },
                currentQuestion: 0,
                incrementQuestion: incrementQuestionMock,
            },
            { isLoading: false, convertIdToGreekLetter: (id) => String.fromCharCode(945 + id) }
        );

        fireEvent.click(screen.getByLabelText('δ. Το μήκος της αλυσίδας της άγκυρας που απαιτείται για την αγκυροβολία του σκάφους.'));
        fireEvent.click(screen.getByRole('button', { name: /next/i }));

        expect(incrementQuestionMock).toHaveBeenCalled();
    });

    // it('displays results when all questions are answered', () => {
    //     renderComponent(
    //         {
    //             currentTest: { selectedQuestions: questions },
    //             currentQuestion: 0,
    //             incrementQuestion: incrementQuestionMock,
    //         },
    //         { isLoading: false, convertIdToGreekLetter: (id) => String.fromCharCode(945 + id) }
    //     );

    //     fireEvent.click(screen.getByLabelText('δ. Το μήκος της αλυσίδας της άγκυρας που απαιτείται για την αγκυροβολία του σκάφους.'));
    //     fireEvent.click(screen.getByRole('button', { name: /See Results/i }));

    //     expect(screen.getByText('Test Results')).toBeInTheDocument();
    // });

    it('resets the test on "Restart Test" button click', () => {
        renderComponent(
            {
                currentTest: { selectedQuestions: questions },
                resetTest: resetTestMock,
                currentQuestion: 1,
            },
            { isLoading: false, convertIdToGreekLetter: (id) => String.fromCharCode(945 + id) }
        );

        fireEvent.click(screen.getByRole('button', { name: /restart test/i }));
        expect(resetTestMock).toHaveBeenCalled();
    });

    // it('restarts with incorrect questions on "Repeat Wrong Test" click', async () => {
    //     renderComponent(
    //         {
    //             currentTest: questions,
    //             answeredQuestions: questions,
    //             restartWithQuestions: restartWithQuestionsMock,
    //         },
    //         { isLoading: false, convertIdToGreekLetter: (id) => String.fromCharCode(945 + id) }
    //     );
    
    //     // Debugging output to inspect the rendered DOM
    //     screen.debug();
    
    //     // Wait for the button to appear in the document
    //     await waitFor(() => {
    //         expect(screen.getByRole('button', { name: /repeat wrong test/i })).toBeInTheDocument();
    //     });
    
    //     // Click the button
    //     fireEvent.click(screen.getByRole('button', { name: /repeat wrong test/i }));
    //     expect(restartWithQuestionsMock).toHaveBeenCalled();
    // });
    
});
