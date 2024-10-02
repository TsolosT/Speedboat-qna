import { useState, useEffect } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button, Divider } from '@mui/material';
import Confetti from 'react-confetti'; // Import the Confetti component
import failedExamImg from '../../assets/failed-exam.png';
import passedExamImg from '../../assets/passed-exam.png';

const TestResult = ({ score, total, onResetTest, onNewTest }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const isPassed = (score >= 18 && total === 20) || (score >= 95 && total === 97);
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

    return (
        <Card sx={{ maxWidth: '50%', margin: 'auto', textAlign: 'center' }}>
            {isPassed && <Confetti width={width} height={height} />} {/* Render Confetti only if passed */}
            <CardMedia
                component="img"
                alt="Results"
                height="340" 
                image={ResultImage} 
            />
            <CardContent>
                <Typography variant="h3">Results</Typography>
                <Divider aria-hidden="true" sx={{ mx: 5, marginBottom: 4, bgcolor: 'secondary.main' }} />
                <Typography variant='h4' sx={{ color: isPassed ? 'green' : 'red' }}>{ResultText}</Typography>
                <Typography variant='h5'>You got {score} out of {total} correct!</Typography>

                <Box sx={{ marginTop: 4 }}>
                    <Button 
                        variant="outlined" 
                        onClick={onResetTest} 
                        sx={{ bgcolor: 'primary.main', color: 'text.secondary', marginRight: 2 }}
                    >
                        Restart Test
                    </Button>
                    <Button 
                        variant="outlined" 
                        onClick={onNewTest} 
                        sx={{ borderColor: 'secondary.main', color: 'secondary.main' }}
                    >
                        Set New Test
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TestResult;
