import { useState, useContext } from 'react';
import { Box } from '@mui/material';
import TestPreparation from '../components/qnatest/TestPreparation';
import TestList from '../components/qnatest/TestList';
import { TestContext } from '../context/TestContext';

function TakeTest() {
    const [testStarted, setTestStarted] = useState(false);
    const [testSettings, setTestSettings] = useState({ questionCount: null, showAnswers: null });
    const { resetTest } = useContext(TestContext);

    const handleStartTest = (settings) => {
        setTestSettings(settings);
        setTestStarted(true);
    };

    const handleResetTest = () => {
        resetTest();
        setTestStarted(true);
    };

    const handleNewTest = () => {
        setTestStarted(false);
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