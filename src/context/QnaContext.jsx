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
        setLoading();
        dispatch({ type: 'LOAD_QUESTIONS', payload: QnaData });
        dispatch({ type: 'SET_CATEGORIES', payload: Object.entries(QnaCategories) });
        
    }, []);

    // Handle scroll to toggle "Go to Top" button
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        setShowGoTop(scrollY > documentHeight * 0.05);
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
    // Unset the loading state
    const setLoaded = () => dispatch({ type: 'SET_LOADED' }); 

    //Convert Listing from numbers to greek letters 
    const convertIdToGreekLetter = (id) => {
        const letters = ['α', 'β', 'γ'];
        return letters[id - 1] || '';
    };

    return (
        <QnaContext.Provider value={{ 
                ...state, 
                filterQuestions, 
                showGoTop, 
                scrollToTop,
                setLoading,
                setLoaded,
                convertIdToGreekLetter,
                isLoading: state.isLoading 
            }}>
            {children}
        </QnaContext.Provider>
    );

};


export default QnaContext;