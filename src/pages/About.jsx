import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider'
function About() {
    return (
        <Container 
            maxWidth="lg" // Increase the maxWidth to lg for larger layout
            sx={{ 
                width: '100%', 
                height: '100vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'flex-start', 
                p: 4, // Add padding for spacing
            }}
        >
            <Card 
                sx={{ 
                    minWidth: { xs: 300, sm: 500, md: 800 }, // Responsive widths
                    maxWidth: '100%', 
                    backgroundColor: '#f5f5f5', 
                    boxShadow: 3, // Add a subtle shadow for better appearance
                    p: 4, // Add internal padding for the card
                }}
            >
                <CardContent>
                    <Typography variant="h4" component="div" sx={{ mb: 1 }}>
                        SpeedBoat Exam Q&A 
                    </Typography>

                    <Typography sx={{ color: 'secondary.main'}} variant="h6">
                        Study Case
                    </Typography>
                    <Divider aria-hidden="true" sx={{  bgcolor: 'primary.main' , mb: 3}}/>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        A Vite React application for practicing Q&A tests for speedboat exams.
                        <br />
                        Course reference from: {' '}
                        <a 
                            style={{ color: '#56CCF2' }} 
                            href="https://sgouros-trainingboat.gr/"
                        >
                            Sgouros Training Boat
                        </a>
                        <br />
                        Note: The study and test content in the current version is available in Greek.
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Version <span>1.1.0</span>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default About;
