/* eslint-disable no-undef */
import { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { QnaProvider, QnaContext } from '/src/context/QnaContext';
import { QnaData } from '/src/data/speedboat-qna-a';

const TestComponent = () => {
    const { questions, filterQuestions, showGoTop, scrollToTop, convertIdToGreekLetter, isLoading } = useContext(QnaContext);
    return (
        <div>
            <button onClick={() => filterQuestions('BoatEngine')}>Filter Boat Engine</button>
            <button onClick={scrollToTop}>Scroll To Top</button>
            <div>Questions count: {questions.length}</div>
            <div>Show Go Top: {showGoTop ? 'Yes' : 'No'}</div>
            <div>Converted: {convertIdToGreekLetter(1)}</div>
            <div>{isLoading ? 'Loading...' : 'Loaded'}</div>
        </div>
    );
};

describe('QnaContext Provider', () => {
    it('provides the default questions and displays them in the component', () => {
        render(
            <QnaProvider>
                <TestComponent />
            </QnaProvider>
        );
        expect(screen.getByText(`Questions count: ${QnaData.length}`)).toBeInTheDocument();
    });

    it('shows "Go to Top" button based on scroll state', () => {
        render(
            <QnaProvider>
                <TestComponent />
            </QnaProvider>
        );

        // Simulate scroll event to set `showGoTop` to true
        fireEvent.scroll(window, { target: { scrollY: 500 } });
        expect(screen.getByText('Show Go Top: Yes')).toBeInTheDocument();
        
        // Simulate scroll event to set `showGoTop` to false
        fireEvent.scroll(window, { target: { scrollY: 0 } });
        expect(screen.getByText('Show Go Top: No')).toBeInTheDocument();
    });

    it('converts numbers to Greek letters', () => {
        render(
            <QnaProvider>
                <TestComponent />
            </QnaProvider>
        );
        expect(screen.getByText('Converted: α')).toBeInTheDocument();
    });

    it('displays loading state properly', () => {
        render(
            <QnaProvider>
                <TestComponent />
            </QnaProvider>
        );
        expect(screen.getByText('Loaded')).toBeInTheDocument(); // Initially, loading is set to false.
    });
});
