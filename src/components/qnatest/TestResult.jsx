import { Box, Button, Typography } from '@mui/material';

const TestResult = ({ score, total, onResetTest, onNewTest }) => {
    return (
        <Box sx={{ textAlign: 'center', padding: 4 }}>
            <Typography variant="h4">Results</Typography>
            <Typography>You got {score} out of {total} correct!</Typography>

            <Box sx={{ marginTop: 4 }}>
                <Button variant="outlined" onClick={onResetTest} sx={{ marginRight: 2 }}>
                    Restart Test
                </Button>
                <Button variant="outlined" onClick={onNewTest}>
                    Set New Test
                </Button>
            </Box>
        </Box>
    );
};

export default TestResult;