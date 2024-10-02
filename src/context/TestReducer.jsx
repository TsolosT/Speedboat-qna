export const initialTestState = {
    inTest: false,
    currentTest: null,
    answers: [],
    results: null,
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
            return initialTestState;
        default:
            return state;
    }
};
