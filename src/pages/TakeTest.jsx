import Spinner from '../components/layouts/Spinner';
import { Box } from '@mui/material';

function TakeTest() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center', // Horizontally center
                alignItems: 'center', // Vertically center
                height: '100vh', // Full viewport height
                width: '100vw', // Full viewport width
            }}
        >
            <Spinner />
        </Box>
    );
}

export default TakeTest;