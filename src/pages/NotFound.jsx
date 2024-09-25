// import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import { Container, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RowingIcon from '@mui/icons-material/Rowing';

function NotFound() {
    return (
        <Container 
            sx={{ 
            mx: 'auto', 
            textAlign: 'center', 
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            minHeight: '100vh', 
            }}
        >   
            <RowingIcon sx={{width:146,height:146}} />
            <Typography variant="h2" color="primary" gutterBottom>
            404 - Page Not Found
            </Typography>
            <Typography variant="body1" color="secondary" gutterBottom>
            Oops! The page you're looking for doesn't exist.
            </Typography>
            <Button 
                size="medium"
                component={Link} 
                to="/" 
                variant="contained" 
                color="primary"
                startIcon={<HomeIcon />}
                sx={{width: 1/2, mx:2,  }}
            >
                Back To Home
            </Button>
        </Container>
    );
}

export default NotFound;