import { useState, useEffect } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button, Divider } from '@mui/material';
import Confetti from 'react-confetti'; 
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import failedExamImg from '../../assets/failed-exam.png';
import passedExamImg from '../../assets/passed-exam.png';
import WrongAnwserResults from './WrongAnwserResults';

const TestResult = ({ score, total, onResetTest, onNewTest, showAnswers, answeredQuestions }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const isPassed = (score >= 18 && total === 20) || (score >= 95 && total === 97);
    // const isPassed = (score >= 3 && total === 5) ; //testing propose
    const ResultText = isPassed ? 'Passed' : 'Failed';
    const ResultImage = isPassed ? passedExamImg : failedExamImg;

    // Update the window dimensions
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Find wrong questions to pass to the dropdown
    const wrongQuestions = answeredQuestions.filter(q => !q.isCorrect).map(q => ({
        text: `${q.question.id}.${q.question.question}`,
        answers: q.question.answers.map(a => ({
            id: a.id,
            text: a.text,
            isCorrect: a.id === q.question.correct_answer,
            isSelected: q.selectedAnswer === a.id,
        })),
    }));
    console.log(score);
    return (
        <Box sx={{ overflow: 'hidden', position: 'relative', height: !showAnswers ? '100%' : '100vh' }}>
            <Card 
                sx={{ 
                    maxWidth: { xs: '90%', sm: '80%', md: '50%' }, 
                    margin: 'auto', 
                    textAlign: 'center' 
                }}
            >
                {isPassed && (
                    <Confetti 
                        width={width} 
                        height={height} 
                        style={{ position: 'absolute', top: 0, left: 0 }} 
                    /> 
                )}
                <CardMedia
                    component="img"
                    alt="Results"
                    height="auto" 
                    sx={{ 
                        maxHeight: '540px', 
                        objectFit: 'cover',
                        width: '100%',
                    }} 
                    image={ResultImage} 
                />
                <CardContent>
                    <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>Results</Typography>
                    <Divider aria-hidden="true" sx={{ mx: 2, marginBottom: 4, bgcolor: 'secondary.main' }} />
                    <Typography variant='h5' sx={{ color: isPassed ? 'green' : 'red', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
                        {ResultText}
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                        You got {score} out of {total} correct!
                    </Typography>
        
                    <Box sx={{ marginTop: 4, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center' }}>
                        <Button 
                            variant="outlined" 
                            onClick={onResetTest} 
                            startIcon={<RestartAltIcon sx={{ fontSize: '1.7rem', verticalAlign: 'middle' }}/> }
                            sx={{ bgcolor: 'primary.main', color: 'text.secondary', marginBottom: { xs: 2, sm: 0 }, marginRight: { sm: 2 } }}
                        >
                            Repeat Test
                        </Button>
                        <Button 
                            variant="outlined" 
                            onClick={onNewTest} 
                            startIcon={<NoteAddOutlinedIcon sx={{ fontSize: '1.7rem', verticalAlign: 'middle' }}/> }
                            sx={{ borderColor: 'secondary.main', color: 'secondary.main' }}
                        >
                            Set New Test
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        
            {/* Wrong Answer Results should be rendered here */}
            {!showAnswers && <WrongAnwserResults wrongQuestions={wrongQuestions} />}
    </Box>
    
    );
};

export default TestResult;
