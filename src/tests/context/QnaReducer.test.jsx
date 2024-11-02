/* eslint-disable no-undef */
import { qnaReducer, initialState } from '/src/context/QnaReducer';
import { QnaData, QnaCategories } from '/src/data/speedboat-qna-a';

describe('qnaReducer', () => {
    it('should set questions and filteredQuestions on LOAD_QUESTIONS', () => {
        const action = { type: 'LOAD_QUESTIONS', payload: QnaData };
        const state = qnaReducer(initialState, action);
        expect(state.questions).toEqual(QnaData);
        expect(state.filteredQuestions).toEqual(QnaData);
        expect(state.isLoading).toBe(false);
    });

    it('should set categories on SET_CATEGORIES', () => {
        const action = { type: 'SET_CATEGORIES', payload: Object.entries(QnaCategories) };
        const state = qnaReducer(initialState, action);
        expect(state.categories).toEqual(Object.entries(QnaCategories));
    });

    it('should filter questions by category on FILTER_BY_CATEGORY', () => {
        const action = { type: 'FILTER_BY_CATEGORY', payload: 'BoatEngine' };
        const state = qnaReducer({ ...initialState, questions: QnaData }, action);
        expect(state.filteredQuestions).toEqual(QnaData.filter(q => q.id <= 8));
        expect(state.selectedCategory).toBe('BoatEngine');
    });

    it('should set loading to true on SET_LOADING', () => {
        const action = { type: 'SET_LOADING' };
        const state = qnaReducer(initialState, action);
        expect(state.isLoading).toBe(true);
    });

    it('should set loading to false on SET_LOADED', () => {
        const action = { type: 'SET_LOADED' };
        const state = qnaReducer({ ...initialState, isLoading: true }, action);
        expect(state.isLoading).toBe(false);
    });
});
