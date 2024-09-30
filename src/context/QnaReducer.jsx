export const initialState = {
    questions: [],
    filteredQuestions: [],
    categories: [],
    selectedCategory: 'All',
    isLoading: false
};

export const qnaReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_QUESTIONS':
            return {
                ...state,
                questions: action.payload,
                filteredQuestions: action.payload, // Initially show all questions
            };
        case 'SET_CATEGORIES':
            return { ...state, categories: action.payload };

        case 'FILTER_BY_CATEGORY': {
            const filteredQuestions = action.payload === 'All'
                ? state.questions
                : state.questions.filter(question =>
                    action.payload === 'BoatEngine' ? question.id <= 8 :
                    action.payload === 'WeatherWarningLights' ? question.id > 8 && question.id <= 21 :
                    action.payload === 'PreparingSailSafePlus' ? question.id > 21 && question.id <= 46 :
                    action.payload === 'IcfrPriority' ? question.id > 46 && question.id <= 68 :
                    action.payload === 'DayPatterns' ? question.id > 68 && question.id <= 73 :
                    action.payload === 'NavigationLights' ? question.id > 73 && question.id <= 91 :
                    action.payload === 'Maps' ? question.id > 91 : true
                );
            
            return {
                ...state,
                filteredQuestions,
                selectedCategory: action.payload,
            };
        }
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: true,
            };
        }
        default:
            return state;
    }
};
