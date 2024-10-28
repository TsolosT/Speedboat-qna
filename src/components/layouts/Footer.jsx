import { Box, Typography, Container } from '@mui/material';
import logo from '../../assets/speedboat-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear(); 
    const githubUrl = 'https://github.com/TsolosT';

    return (
        <Box
        component="footer"
        sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            py: 2,
            width: '100%',
            position: 'sticky',  
            bottom: 0,        
            mt: 'auto',        
        }}
        >
        <Container
            maxWidth="lg"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
                src={logo}
                alt="Logo"
                style={{ width: '40px', height: '40px', marginRight: '8px' }}
            />
            </Box>
            <Typography variant="body2">
            © {currentYear} , Developed by{' '}
            <Link
                href={githubUrl}
                target="_blank"
                rel="noopener"
                style={{ color: '#56CCF2', textDecoration: 'none' }}
            >
                T.Tsolovikos
            </Link>
            </Typography>
        </Container>
        </Box>
    );
};

export default Footer;
