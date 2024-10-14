import { useState, useContext, useEffect } from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { Box, Divider, Button, Typography, LinearProgress, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import TestResult from './TestResult';
import { TestContext } from '../../context/TestContext';
import Spinner from '../layouts/Spinner';
import QnaContext from '../../context/QnaContext';


const TestList = ({ onNewTest }) => {
    const { isLoading, convertIdToGreekLetter } = useContext(QnaContext);
    const { currentTest, currentQuestion, incrementQuestion, resetTest  } = useContext(TestContext); 
    const { selectedQuestions, showAnswersImmediately } = currentTest || {}; 
    const totalQuestions = selectedQuestions ? selectedQuestions.length : 0;
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [answerCorrect, setAnswerCorrect] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const progress = (currentQuestion / totalQuestions) * 100;

    useEffect(() => {
        // Check if selectedQuestions is defined and has data before rendering
        if (!selectedQuestions || selectedQuestions.length === 0) {
            console.error("No questions available for the test.");
        }
    }, [selectedQuestions]);
    const handleAnswerChange = (event) => {
        const selected = parseInt(event.target.value, 10);
        setSelectedAnswer(selected); // Update the selected answer state
    
        // Remove correctness check here
        // Remove the immediate updating of answered questions here
    };
    
    const handleNextQuestion = () => {
        // Calculate if the selected answer is correct only when moving to the next question
        const isCorrect = selectedAnswer === selectedQuestions[currentQuestion].correct_answer;
    
        // Update answered questions with the current question's details
        const updatedAnsweredQuestions = [
            ...answeredQuestions,
            { question: selectedQuestions[currentQuestion], isCorrect, selectedAnswer } // Save selected answer for review
        ];
        setAnsweredQuestions(updatedAnsweredQuestions); // Update answered questions
    
        // Update score here based on answered questions
        setAnswers([...answers, selectedAnswer]); // Track all selected answers (optional)
    
        if (currentQuestion < totalQuestions - 1) {
            incrementQuestion();
            setSelectedAnswer(null); // Reset selected answer for the next question
        } else {
            setShowResults(true); // Show results when reaching the last question
        }
    };
    const handleResetTest = () => {
        setShowResults(false); 
        setSelectedAnswer(null); 
        setAnsweredQuestions([]); 
        setAnswers([]); 
        resetTest();
    };

    const calculateResults = () => {
        const correctAnswers = answeredQuestions.filter(q => q.isCorrect).length;
        return correctAnswers;
    };

    if(isLoading || !selectedQuestions) { // Check for both loading and question data availability
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100vh', 
                }}
            >
                <Spinner />
            </Box>
        );
    }  else {
        return (
            <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100vh', // Ensure it fills the entire viewport height
                overflowY: 'auto', // Enable scrolling if content overflows
                }}
            >
                {!showResults ? (
                    <Box sx={{  padding: 4, height:'100vh' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h6">Question {currentQuestion + 1}/{totalQuestions}</Typography>
                            <LinearProgress variant="determinate" value={progress} sx={{ flexGrow: 1, margin: '0 16px' }} />
                        </Box>

                        <Typography variant="h5" sx={{ marginTop: 3 }}>
                            {selectedQuestions[currentQuestion].question}
                        </Typography>

                        <RadioGroup value={selectedAnswer} onChange={handleAnswerChange} sx={{ marginTop: 2 }}>
                            {selectedQuestions[currentQuestion].answers.map((answer, index) => {
                                const isSelected = selectedAnswer === index + 1;
                                const isCorrect = index + 1 === selectedQuestions[currentQuestion].correct_answer;

                                return (
                                    <FormControlLabel
                                        key={answer.id}
                                        value={(index + 1).toString()}
                                        control={
                                            <Radio
                                                sx={{
                                                    color: isSelected
                                                        ? showAnswersImmediately
                                                            ? isCorrect
                                                                ? '#00BFA6'
                                                                : 'red'
                                                            : 'primary.main'
                                                        : 'primary.main',
                                                    '&.Mui-checked': {
                                                        color: isSelected
                                                            ? showAnswersImmediately
                                                                ? isCorrect
                                                                    ? '#00BFA6'
                                                                    : 'red'
                                                                : 'primary.main'
                                                            : 'primary.main',
                                                    },
                                                }}
                                            />
                                        }
                                        label={`${convertIdToGreekLetter(index + 1)}. ${answer.text}`}
                                        sx={{
                                            color: isSelected
                                                ? showAnswersImmediately
                                                    ? isCorrect
                                                        ? '#00BFA6'
                                                        : 'red'
                                                    : 'text.primary'
                                                : 'primary.main',
                                            textDecoration: isSelected ? 'underline' : 'none',
                                            marginBottom: 2,
                                        }}
                                    />
                                );
                            })}
                        </RadioGroup>

                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={handleNextQuestion} 
                            disabled={!selectedAnswer}
                            sx={{ marginTop: 2 }}
                        >
                            {currentQuestion < totalQuestions - 1 ? "Next" : "See Results"}
                        </Button>
                        <Divider aria-hidden="true" sx={{ my: 5, bgcolor: 'secondary.main' }} />

                        <Box 
                            sx={{ 
                                marginTop: 4, 
                                paddingBottom: 2, 
                                display: 'flex', 
                                gap: 2, // Adds spacing between buttons
                                flexWrap: 'wrap', // Ensures buttons wrap on smaller screens
                            }}
                        >
                            <Button variant="outlined" onClick={handleResetTest}
                                startIcon={<RestartAltIcon sx={{ fontSize: '1.7rem', verticalAlign: 'middle' }}/>}
                                sx={{ marginRight: 2, borderColor: 'primary.main', color: 'primary.main' }}
                                disabled={currentQuestion === 0}
                            >
                                Restart Test
                            </Button>
                            <Button variant="outlined" onClick={onNewTest}  
                                startIcon={<NoteAddOutlinedIcon sx={{ fontSize: '1.7rem', verticalAlign: 'middle' }}/>}
                                sx={{ borderColor: 'secondary.main', color: 'secondary.main' }}>
                                Set New Test
                            </Button>
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{  padding: 1}}>
                        <TestResult
                            score={calculateResults()} 
                            total={totalQuestions} 
                            onResetTest={handleResetTest} 
                            onNewTest={onNewTest} 
                            showAnswers={showAnswersImmediately}
                            answeredQuestions={answeredQuestions}
                        />
                    </Box>
                )}
            </Box>
        );
    }
};

export default TestList;
