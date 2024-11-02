/* eslint-disable no-undef */
import { testReducer, initialTestState } from '/src/context/TestReducer';

describe('testReducer', () => {
    it('should start the test on START_TEST', () => {
        const action = {
            type: 'START_TEST',
            payload: {
                selectedQuestions: [{ id: 1, question: 'Sample question' }],
                showAnswersImmediately: true,
            },
        };
        const state = testReducer(initialTestState, action);
        expect(state.inTest).toBe(true);
        expect(state.currentTest.selectedQuestions).toEqual(action.payload.selectedQuestions);
        expect(state.currentTest.showAnswersImmediately).toBe(true);
        expect(state.answers).toEqual([]); 
        expect(state.results).toBeNull();
        expect(state.currentQuestion).toBe(0);
    });

    it('should add answer on SUBMIT_ANSWER', () => {
        const action = { type: 'SUBMIT_ANSWER', payload: { questionId: 1, answerId: 2 } };
        const state = testReducer({ ...initialTestState, answers: [] }, action);
        expect(state.answers).toEqual([{ questionId: 1, answerId: 2 }]);
    });

    it('should end the test on END_TEST', () => {
        const action = { type: 'END_TEST', payload: { score: 15 } };
        const state = testReducer({ ...initialTestState, inTest: true }, action);
        expect(state.inTest).toBe(false);
        expect(state.results).toEqual({ score: 15 });
    });

    it('should reset the test on RESET_TEST', () => {
        const action = { type: 'RESET_TEST' };
        const state = testReducer({
            ...initialTestState,
            answers: [{ questionId: 1, answerId: 2 }],
            results: { score: 10 },
        }, action);
        expect(state.answers).toEqual([]);
        expect(state.results).toBeNull();
        expect(state.currentQuestion).toBe(0);
    });

    it('should increment currentQuestion on INCREMENT_QUESTION', () => {
        const action = { type: 'INCREMENT_QUESTION' };
        const state = testReducer({ ...initialTestState, currentQuestion: 2 }, action);
        expect(state.currentQuestion).toBe(3);
    });
});
