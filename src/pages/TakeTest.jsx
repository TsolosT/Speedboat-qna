import { useState } from 'react';
import { Box } from '@mui/material';
import TestPreparation from '../components/qnatest/TestPreparation';
import TestList from '../components/qnatest/TestList';

function TakeTest() {
    const [testStarted, setTestStarted] = useState(false);
    const [testSettings, setTestSettings] = useState({ questionCount: null, showAnswers: null });

    const handleStartTest = (settings) => {
        setTestSettings(settings);
        setTestStarted(true);
    };

    const handleResetTest = () => {
        setTestStarted(false);
    };

    const handleNewTest = () => {
        setTestStarted(false);
        // Logic for new test setup can be implemented here
    };

    return (
        <Box sx={{height:'100vh'}}>
            {!testStarted ? (
                <TestPreparation onStartTest={handleStartTest} />
            ) : (
                <TestList 
                    onResetTest={handleResetTest} 
                    onNewTest={handleNewTest} 
                    questionCount={testSettings.questionCount} 
                    showAnswers={testSettings.showAnswers} 
                />
            )}
        </Box>
    );

}

export default TakeTest;