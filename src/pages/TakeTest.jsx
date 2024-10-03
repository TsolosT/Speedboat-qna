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

    const handleNewTest = () => {
        setTestStarted(false);
    };

    return (
        <Box >
            {!testStarted ? (
                <TestPreparation onStartTest={handleStartTest} />
            ) : (
                <TestList 
                    onNewTest={handleNewTest} 
                    questionCount={testSettings.questionCount} 
                    showAnswers={testSettings.showAnswers} 
                />
            )}
        </Box>
    );

}

export default TakeTest;