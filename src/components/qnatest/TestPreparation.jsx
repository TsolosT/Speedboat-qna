import { Box, Button, Divider, Typography, FormControlLabel, Checkbox, CardMedia } from '@mui/material';
import { useContext, useState } from 'react';
import takingTestImg from '../../assets/takingtest.png';
import { TestContext } from '../../context/TestContext';
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import InfoIcon from '@mui/icons-material/Info';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// eslint-disable-next-line react/prop-types
const TestPreparation = ({ onStartTest }) => {
    const [questionCount, setQuestionCount] = useState(null); // null means no selection yet
    const [showAnswers, setShowAnswers] = useState(null); // null means no selection yet
    const { startTest } = useContext(TestContext);
    const [shuffleAnswers, setShuffleAnswers] = useState(false);


    // Handler for starting the test
    const handleStartTest = () => {
        if (questionCount !== null && showAnswers !== null) {
            // Pass the selected test options to the context's startTest function
            startTest({
                useRandom20: questionCount === 20,  // If selected 20 questions, otherwise all
                showAnswersImmediately: showAnswers === 'immediately', // Show answers immediately or at the end
                shuffleAnswers
            });
            // Call onStartTest to trigger the parent to update testStarted state
            onStartTest({
                questionCount: questionCount,
                showAnswers: showAnswers
            });
        }
    };
    // Disable start button until both options are selected
    const isStartButtonEnabled = questionCount !== null && showAnswers !== null;

    return (
        <Box sx={{ textAlign: 'center', padding: 4, my:4, maxWidth:'800px', mx:'auto' }}>
            <CardMedia
                    component="img"
                    alt="Speedboat tests"
                    height="340"
                    image={takingTestImg}
                    sx={{borderRadius: '1 0', bgcolor: 'background.paper'}}
            />
            <Box sx={{py:2, borderRadius: '0 1', bgcolor: 'primary.main'} }>
                
                <Typography variant="h5"  color="textSecondary">Prepare for the Test</Typography>
                <Typography  color="textSecondary" sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }} >
                    <InfoIcon sx={{ marginRight: 1, fontSize: { xs: '0.85rem', sm: '1rem' } , verticalAlign: 'middle' }} />
                    Keep in mind, that the maximum wrong allowed answer is 2 to pass the test.
                </Typography>
                <Typography  color="textSecondary"  sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }} >
                    <ArrowRightAltIcon sx={{ marginRight: 1, fontSize: { xs: '0.85rem', sm: '1rem' } , verticalAlign: 'middle' }} />
                    Set your preferences and press start when ready.
                </Typography>
                <Divider aria-hidden="true" sx={{ mx:5 , bgcolor: 'secondary.main' }}/>
                {/* Checkbox for selecting number of questions */}
                <Box sx={{ marginTop: 2 }} >
                    <Typography variant="subtitle1"  color="textSecondary">Select number of questions:</Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={questionCount === 20}
                                onChange={() => setQuestionCount(20)}
                                sx={{
                                    color: 'white', // Default color (unchecked)
                                    '&.Mui-checked': {
                                        color: 'white', // Keep the color white when checked
                                    },
                                }}
                            />
                        }
                        label="20 Questions"
                        sx={{ color: 'text.secondary' }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={questionCount === 'all'}
                                onChange={() => setQuestionCount('all')}
                                sx={{
                                    color: 'white', // Default color (unchecked)
                                    '&.Mui-checked': {
                                        color: 'white', // Keep the color white when checked
                                    },
                                }}
                            />
                        }
                        label="All Questions"
                        sx={{ color: 'text.secondary' }}
                    />
                </Box>

                {/* Checkbox for selecting when to show the correct answers */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="subtitle1" color="textSecondary">Show correct answers:</Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={showAnswers === 'immediately'}
                                onChange={() => setShowAnswers('immediately')}
                                sx={{
                                    color: 'white', // Default color (unchecked)
                                    '&.Mui-checked': {
                                        color: 'white', // Keep the color white when checked
                                    },
                                }}
                            />
                        }
                        label="Immediately"
                        sx={{ color: 'text.secondary' }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={showAnswers === 'at_end'}
                                onChange={() => setShowAnswers('at_end')}
                                sx={{
                                    color: 'white', // Default color (unchecked)
                                    '&.Mui-checked': {
                                        color: 'white', // Keep the color white when checked
                                    },
                                }}
                            />
                        }
                        label="At the End"
                        sx={{ color: 'text.secondary' }}
                    />
                </Box>
                {/* Checkbox for selecting to shuffle anwsers at questions */}
                <Box sx={{ marginTop: 2 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => setShuffleAnswers(prev => !prev)}
                                sx={{
                                    color: 'white', 
                                    '&.Mui-checked': { color: 'white' }
                                }}
                            />
                        }
                        label="Shuffle Answers"
                        sx={{ color: 'text.secondary' }}
                    />   
                </Box>
                {/* Start button - only enabled if both options are selected */}
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleStartTest}
                    startIcon={<SailingOutlinedIcon sx={{ fontSize: '1.7rem', verticalAlign: 'middle' }}/>}
                    disabled={!isStartButtonEnabled}
                    sx={{ marginTop: 2,
                        '&:disabled': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white', 
                        },
                    }}
                >
                    Start Test
                </Button>
            </Box>
        </Box>
    );
};

export default TestPreparation;
