/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import WrongAnwserResults from '/src/components/qnatest/WrongAnwserResults';
import { describe, it, expect, vi } from 'vitest';
import QnaContext from '/src/context/QnaContext';

// Mock data
const wrongQuestions = [
    {
        text: "Βύθισμα είναι:",
        answers: [
            { 
                id: 1,
                isCorrect: true,
                isSelected: false,
                text: 'Η κατακόρυφη απόσταση από την επιφάνεια της θάλασσας μέχρι την τρόπιδα του σκάφους.'
            },
            { 
                id: 2,
                isCorrect: false,
                isSelected: false,
                text: 'Η κατακόρυφη απόσταση από την επιφάνεια της θάλασσας μέχρι τον πυθμένα της.'
            },
            { 
                id: 3,
                isCorrect: false,
                isSelected: true,
                text: 'Το μήκος της αλυσίδας της άγκυρας που απαιτείται για την αγκυροβολία του σκάφους.'
            }
        ],
    },
    {
        id: 2,
        text: "Ο Βορειοανατολικός (ΒΑ) άνεμος λέγεται και:",
        answers: [
            { 
                id: 1,
                isCorrect: false,
                isSelected: false,
                text: 'Τραμουντάνα.'
            },
            { 
                id: 2,
                isCorrect: false,
                isSelected: false,
                text: 'Λεβάντες.'
            },
            { 
                id: 3,
                isCorrect: true,
                isSelected: false,
                text: 'Γραίγος.'
            }
        ],
        correct_answer: 3,
    },
];

// Mock function for converting IDs to Greek letters
const mockConvertIdToGreekLetter = vi.fn((id) => {
    const greekLetters = ['α', 'β', 'γ'];
    return greekLetters[id - 1] || '';
});

describe('WrongAnwserResults Component', () => {
    beforeEach(() => {
        render(
            <QnaContext.Provider value={{ convertIdToGreekLetter: mockConvertIdToGreekLetter }}>
                <WrongAnwserResults wrongQuestions={wrongQuestions} />
            </QnaContext.Provider>
        );
    });

    it('renders without crashing and displays the heading', () => {
        expect(screen.getByText(/Review Wrong Answers:/i)).toBeInTheDocument();
    });

    it('displays all wrong questions in accordions', () => {
        wrongQuestions.forEach((question) => {
            expect(screen.getByText(question.text)).toBeInTheDocument();
        });
    });

    it('calls convertIdToGreekLetter with correct IDs', () => {
        wrongQuestions.flatMap((question) => question.answers)
            .forEach((answer) => {
                expect(mockConvertIdToGreekLetter).toHaveBeenCalledWith(answer.id);
            });
    });
});
