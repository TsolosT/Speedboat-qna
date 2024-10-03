export const initialTestState = {
    inTest: false,
    currentTest: null,
    answers: [],
    results: null,
    currentQuestion: 0,
};

export const testReducer = (state, action) => {
    switch (action.type) {
        case 'START_TEST':
            return {
                ...state,
                inTest: true,
                currentTest: {
                    selectedQuestions: action.payload.selectedQuestions,
                    showAnswersImmediately: action.payload.showAnswersImmediately,
                },
                answers: [],
                results: null,
                currentQuestion: 0,
            };
        case 'SUBMIT_ANSWER':
            return {
                ...state,
                answers: [...state.answers, action.payload],
            };
        case 'END_TEST':
            return {
                ...state,
                inTest: false,
                results: action.payload,
            };
        case 'RESET_TEST':
            return {
                ...state,
                answers: [],
                results: null, 
                currentTest: {
                    ...state.currentTest, 
                },
                currentQuestion: 0, 
            };
        case 'INCREMENT_QUESTION':
            return { 
                ...state, 
                currentQuestion: state.currentQuestion + 1 
            };
        default:
            return state;
    }
};
