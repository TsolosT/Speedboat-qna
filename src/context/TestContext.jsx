import { createContext, useReducer, useContext } from 'react';
import { QnaContext } from './QnaContext'; // Import the questions from QnaContext
import { testReducer, initialTestState } from './TestReducer';

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
    const { questions, setLoading, setLoaded } = useContext(QnaContext); // Get questions from QnaContext

    const [state, dispatch] = useReducer(testReducer, initialTestState);

    // Function to start the test
    const startTest =  ({ useRandom20, showAnswersImmediately, shuffleAnswers }) => {
        let selectedQuestions;
        
        setLoading();
        if (useRandom20) {
            // Get 20 random questions
            // selectedQuestions =  getRandomQuestions(questions, 5); tesing propose
            selectedQuestions =  getRandomQuestions(questions, 20);
        } else {
            // Shuffle all questions
            selectedQuestions =  shuffleArray([...questions]);
        }

        // Shuffle answers per question if shuffleAnswers is true
        if (shuffleAnswers) {
            selectedQuestions = selectedQuestions.map((question) => {
                const shuffledAnswers = shuffleArray([...question.answers]); // Shuffle the answers
            
                // Find the new index of the correct answer in the shuffled array
                const newCorrectAnswerIndex = shuffledAnswers.findIndex(
                    (ans) => ans.id === question.correct_answer
                );
            
                return {
                    ...question,
                    answers: shuffledAnswers, // Use the shuffled answers
                    correct_answer: newCorrectAnswerIndex+1,
                };
            });            
        }

        // Dispatch the action to start the test
        dispatch({ type: 'START_TEST', 
            payload: {
                selectedQuestions,
                showAnswersImmediately
        }});
        setLoaded();
    };

    const submitAnswer = (answer) => {
        dispatch({ type: 'SUBMIT_ANSWER', payload: answer });
    };

    const endTest = (results) => {
        dispatch({ type: 'END_TEST', payload: results });
    };

    const resetTest = () => {
        dispatch({ type: 'RESET_TEST' });
    };

    const incrementQuestion = () => {
        dispatch({ type: 'INCREMENT_QUESTION' });
    };

    // Helper function to shuffle an array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Helper function to get 20 random questions from an array
    const getRandomQuestions = (questions, limit = 20) => {
        // First, shuffle the array
        const shuffledQuestions = shuffleArray([...questions]); // Copy to avoid mutating original array
        // Then, return the first 'limit' number of questions (default to 20)
        return shuffledQuestions.slice(0, limit);
    };

    return (
        <TestContext.Provider value={{ 
                ...state, 
                startTest, 
                submitAnswer, 
                endTest, 
                resetTest,
                incrementQuestion,
                questions 
            }}>
                {children}
        </TestContext.Provider>
    );
};
