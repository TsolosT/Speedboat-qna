/* eslint-disable react/display-name */
import { render, screen, fireEvent } from '@testing-library/react';
import StudyQna from '/src/pages/StudyQna'; 
import { describe, it, expect, vi } from 'vitest';
import { QnaContext } from '/src/context/QnaContext';

// Mocking child components
vi.mock('/src/components/qnastudy/Spinner', () => () => <div>Loading...</div>);
vi.mock('/src/components/qnastudy/QnaList', () => {
    return {
        default: ({ questions }) => (
            <div>
                <h1>Q&A List</h1>
                {questions.map((question) => (
                    <div key={question.id}>{question.text}</div>
                ))}
            </div>
        )
    };
});
vi.mock('/src/components/qnastudy/BasicRules', () => {
    return {
        default: ({ selectedCategory }) => (
                    <div>Basic Rules for category: {selectedCategory}</div>
                )
    };
});
// vi.mock('/src/components/qnastudy/WindCompass', () => {});

describe('StudyQna Component', () => {
    const mockContextValue = {
        filteredQuestions: [{ id: 1, text: 'What is the rule of sailing?' }],
        isLoading: false,
        categories: [
            [0, 'Basic Rules'],
            [1, 'Sailing'],
        ],
        selectedCategory: 0,
        filterQuestions: vi.fn(),
        showGoTop: true,
        scrollToTop: vi.fn(),
        convertIdToGreekLetter: vi.fn(),
    };

    it('renders loading spinner when isLoading is true', () => {
        const contextValue = { ...mockContextValue, isLoading: true };
        render(
            <QnaContext.Provider value={contextValue}>
                <StudyQna />
            </QnaContext.Provider>
        );

        expect(screen.getByAltText('Loading...')).toBeInTheDocument();
    });

    it('renders Basic Rules when selected tab is Basic Rules', () => {
        render(
            <QnaContext.Provider value={mockContextValue}>
                <StudyQna />
            </QnaContext.Provider>
        );

        // Verify that the Basic Rules content is displayed
        expect(screen.getByText(/Basic Rules for category: 0/i)).toBeInTheDocument();
    });

    it('changes to Q&A section and displays questions', () => {
        render(
            <QnaContext.Provider value={mockContextValue}>
                <StudyQna />
            </QnaContext.Provider>
        );

        // Switch to Q&A tab
        fireEvent.click(screen.getByText(/Q&A/i));

        // Verify that the Q&A List is displayed with questions
        expect(screen.getByText(/Q&A List/i)).toBeInTheDocument();
        expect(screen.getByText(/What is the rule of sailing?/i)).toBeInTheDocument();
    });

    it('renders Wind Compass when selected tab is In Dept', () => {
        render(
            <QnaContext.Provider value={mockContextValue}>
                <StudyQna />
            </QnaContext.Provider>
        );

        // Switch to In Dept tab (disabled in the implementation, so we check that it doesn't show)
        fireEvent.click(screen.getByText(/In Dept/i));
        
        // Verify that Wind Compass is not shown since it's a disabled tab
        expect(screen.queryByText(/Wind Compass Content/i)).not.toBeInTheDocument();
    });
    
    it('renders Go to Top button and triggers scrollToTop', () => {
        render(
            <QnaContext.Provider value={mockContextValue}>
                <StudyQna />
            </QnaContext.Provider>
        );

        // Verify that the Go to Top button is present
        expect(screen.getByLabelText(/go to top/i)).toBeInTheDocument();

        // Click the button and check if scrollToTop is called
        fireEvent.click(screen.getByLabelText(/go to top/i));
        expect(mockContextValue.scrollToTop).toHaveBeenCalled();
    });
});
