import { useReducer, createContext, useEffect, useState } from 'react';
import { qnaReducer, initialState } from './QnaReducer';
import { QnaData, QnaCategories } from '../data/speedboat-qna-a'; // Import QNA Data


export const QnaContext = createContext();

// eslint-disable-next-line react/prop-types
export const QnaProvider = ({children}) => {

    const [state, dispatch] = useReducer(qnaReducer, initialState);
    const [showGoTop, setShowGoTop] = useState(false);

    // Load questions and categories when the app loads
    useEffect(() => {
        dispatch({ type: 'LOAD_QUESTIONS', payload: QnaData });
        dispatch({ type: 'SET_CATEGORIES', payload: Object.entries(QnaCategories) });
    }, []);

    // Handle scroll to toggle "Go to Top" button
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        setShowGoTop(scrollY > documentHeight * 0.1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Filter questions by category
    const filterQuestions = (category) => {
        dispatch({ type: 'FILTER_BY_CATEGORY', payload: category });
    };

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // Set loading state
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return (
        <QnaContext.Provider value={{ 
                ...state, 
                filterQuestions, 
                showGoTop, 
                scrollToTop,
                isLoading: state.isLoading 
            }}>
            {children}
        </QnaContext.Provider>
    );

};


export default QnaContext;