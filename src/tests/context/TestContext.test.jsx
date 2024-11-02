/* eslint-disable no-undef */
import { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TestProvider, TestContext } from '/src/context/TestContext';
import { QnaProvider } from '/src/context/QnaContext'; // To provide questions

const TestComponent = () => {
    const { startTest, submitAnswer, endTest, resetTest, incrementQuestion, inTest, currentQuestion, results } = useContext(TestContext);
    return (
        <div>
            <button onClick={() => startTest({ useRandom20: true, showAnswersImmediately: true, shuffleAnswers: true })}>
                Start Test
            </button>
            <button onClick={() => submitAnswer({ questionId: 1, answerId: 2 })}>Submit Answer</button>
            <button onClick={() => endTest({ score: 15 })}>End Test</button>
            <button onClick={resetTest}>Reset Test</button>
            <button onClick={incrementQuestion}>Next Question</button>
            <div>In Test: {inTest ? 'Yes' : 'No'}</div>
            <div>Current Question: {currentQuestion}</div>
            <div>Results: {results ? `Score: ${results.score}` : 'None'}</div>
        </div>
    );
};

describe('TestContext Provider', () => {
    it('should start the test and display inTest as true', () => {
        render(
            <QnaProvider>
                <TestProvider>
                    <TestComponent />
                </TestProvider>
            </QnaProvider>
        );
        fireEvent.click(screen.getByText('Start Test'));
        expect(screen.getByText('In Test: Yes')).toBeInTheDocument();
    });

    it('should submit an answer', () => {
        render(
            <QnaProvider>
                <TestProvider>
                    <TestComponent />
                </TestProvider>
            </QnaProvider>
        );
        fireEvent.click(screen.getByText('Start Test'));
        fireEvent.click(screen.getByText('Submit Answer'));
        // Check if answers array in state contains the submitted answer (additional tests may be required based on setup)
    });

    it('should end the test and display results', () => {
        render(
            <QnaProvider>
                <TestProvider>
                    <TestComponent />
                </TestProvider>
            </QnaProvider>
        );
        fireEvent.click(screen.getByText('Start Test'));
        fireEvent.click(screen.getByText('End Test'));
        expect(screen.getByText('Results: Score: 15')).toBeInTheDocument();
    });

    it('should reset the test', () => {
        render(
            <QnaProvider>
                <TestProvider>
                    <TestComponent />
                </TestProvider>
            </QnaProvider>
        );
        fireEvent.click(screen.getByText('Start Test'));
        fireEvent.click(screen.getByText('Submit Answer'));
        fireEvent.click(screen.getByText('End Test'));
        fireEvent.click(screen.getByText('Reset Test'));
        expect(screen.getByText('In Test: No')).toBeInTheDocument();
        expect(screen.getByText('Results: None')).toBeInTheDocument();
    });

    it('should increment currentQuestion on next question', () => {
        render(
            <QnaProvider>
                <TestProvider>
                    <TestComponent />
                </TestProvider>
            </QnaProvider>
        );
        fireEvent.click(screen.getByText('Start Test'));
        fireEvent.click(screen.getByText('Next Question'));
        expect(screen.getByText('Current Question: 1')).toBeInTheDocument();
    });
});
