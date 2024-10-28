import { Container, Typography, Box, Divider, Stack, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { keyframes } from '@mui/system';
import takingTestImg from '../assets/takingtest.png';
import studyTestImg from '../assets/studytest.png';

// Define animations
const bounce = keyframes`
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
`;

function Home() {
    const bull = (
        <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
            •
        </Box>
    );

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh', 
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    flex: 1, // Pushes the footer to the bottom
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    p: 3,
                }}
            >
                <Typography variant="h3" component="div" sx={{ mt: '30px'}}>
                    SpeedBoat
                </Typography>
                <Typography variant="subtitle2" component="div" >
                    Practise {bull} Exam Q&A
                </Typography>
                <Divider sx={{ width: '100%', my: 2 }} />
                <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} sx={{ width: '100%' }}>
                    
                    {/* Card 1 - Q&A Tests */}
                    <Card
                        sx={{
                            width: { xs: '100%', sm: 345, md: 600, lg: 800 },
                            backgroundColor: 'primary.main',
                        }}
                    >
                        <CardMedia component="img" alt="Speedboat tests" image={takingTestImg}
                            sx={{
                                height: { xs: 140, lg: 500 }, 
                                objectFit: 'cover',
                            }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="info">
                                Q&A Tests
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Practise Q&A with 20 questions or all questions by multiple choice test.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                component={Link}
                                to="/take-test"
                                size="small"
                                variant="contained"
                                color="secondary"
                                sx={{
                                    '&:hover': {
                                        animation: `${bounce} 0.5s ease-in-out`,
                                    },
                                }}
                            >
                                Start Practising
                            </Button>
                        </CardActions>
                    </Card>

                    {/* Card 2 - Q&A Study */}
                    <Card
                        sx={{
                            width: { xs: '100%', sm: 345, md: 600, lg: 800 },
                            backgroundColor: 'primary.main',
                        }}
                    >
                        <CardMedia component="img" alt="Study tests" image={studyTestImg}
                            sx={{
                                height: { xs: 140, lg: 500 }, 
                                objectFit: 'cover',
                            }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="info">
                                Q&A Study
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                See all the questions with their correct answers to study them.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                component={Link}
                                to="/study-qna"
                                size="small"
                                variant="outlined"
                                color="secondary"
                                sx={{
                                    '&:hover': {
                                        animation: `${bounce} 0.5s ease-in-out`,
                                    },
                                }}
                            >
                                Start Studying
                            </Button>
                        </CardActions>
                    </Card>
                </Stack>
            </Container>
        </Box>
    );
}

export default Home;
