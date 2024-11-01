/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import QnaList from 'src/components/qnastudy/QnaList';
import '@testing-library/jest-dom'; 

vi.mock('@mui/material', async () => {
    const actual = await vi.importActual('@mui/material'); // retain other MUI components
    return {
        ...actual,
        Box: (props) => <div style={props.sx} {...props} />, // Mock Box component
    };
});

// Mock Data
const mockQuestions = [
    {
        id: 1,
        question: "Βύθισμα είναι:",
        category: [{ title: "BoatEngine" }],
        answers: [
            { 
                id: 1,
                text: 'Η κατακόρυφη απόσταση από την επιφάνεια της θάλασσας μέχρι την τρόπιδα του σκάφους.'
            },
            { 
                id: 2,
                text: 'Η κατακόρυφη απόσταση από την επιφάνεια της θάλασσας μέχρι τον πυθμένα της.'
            },
            { 
                id: 3,
                text: 'Το μήκος της αλυσίδας της άγκυρας που απαιτείται για την αγκυροβολία του σκάφους.'
            }
        ],
        correct_answer: 1,
    },
    {
        id: 2,
        question: "Ο Βορειοανατολικός (ΒΑ) άνεμος λέγεται και:",
        category: [{ title: "WeatherWarningLights" }],
        answers: [
            { 
                id: 1,
                text: 'Τραμουντάνα.'
            },
            { 
                id: 2,
                text: 'Λεβάντες.'
            },
            { 
                id: 3,
                text: 'Γραίγος.'
            }
        ],
        correct_answer: 3,
    },
];

// Mock function to convert answer IDs to Greek letters
const mockConvertIdToGreekLetter = (id) => {
    const greekLetters = ["Α", "Β", "Γ", "Δ"];
    return greekLetters[id - 1] || id;
};

describe('QnaList', () => {
    test('renders questions with correct structure and answers', () => {
        render(<QnaList questions={mockQuestions} convertIdToGreekLetter={mockConvertIdToGreekLetter} />);

        // Check the category title and question text for the first question
        expect(screen.getByText('BoatEngine')).toBeInTheDocument();
        expect(screen.getByText("1. Βύθισμα είναι:")).toBeInTheDocument();

        // Check that the answers are displayed with Greek letters
        expect(screen.getByText('Α. Η κατακόρυφη απόσταση από την επιφάνεια της θάλασσας μέχρι την τρόπιδα του σκάφους.')).toBeInTheDocument();
        expect(screen.getByText('Β. Η κατακόρυφη απόσταση από την επιφάνεια της θάλασσας μέχρι τον πυθμένα της.')).toBeInTheDocument();
        expect(screen.getByText('Γ. Το μήκος της αλυσίδας της άγκυρας που απαιτείται για την αγκυροβολία του σκάφους.')).toBeInTheDocument();

        // Check the category title and question text for the second question
        expect(screen.getByText('WeatherWarningLights')).toBeInTheDocument();
        expect(screen.getByText("2. Ο Βορειοανατολικός (ΒΑ) άνεμος λέγεται και:")).toBeInTheDocument();

        // Check that the answers are displayed with Greek letters
        expect(screen.getByText('Α. Τραμουντάνα.')).toBeInTheDocument();
        expect(screen.getByText('Β. Λεβάντες.')).toBeInTheDocument();
        expect(screen.getByText('Γ. Γραίγος.')).toBeInTheDocument();
    });

    //Has problem to set sx style and render it in test to access it.. Cant apply in jsdom need in browser env
    // test('applies correct styling for the correct answer', () => {
    //     render(<QnaList questions={mockQuestions} convertIdToGreekLetter={mockConvertIdToGreekLetter} />);

    //     const correctAnswerBox = screen.getByText('Α. Η κατακόρυφη απόσταση από την επιφάνεια της θάλασσας μέχρι την τρόπιδα του σκάφους.').parentElement;
    //     const styles = window.getComputedStyle(correctAnswerBox);

    //     expect(styles.border).toBe('1px solid rgb(0, 191, 166)');
    //     expect(styles.color).toBe('rgb(0, 191, 166)');

    // });
    
});
