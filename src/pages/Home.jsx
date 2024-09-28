import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import takingTestImg from '../assets/takingtest.png';
import studyTestImg from '../assets/studytest.png';
import { Link } from 'react-router-dom';


function Home() {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    return (
        <Container maxWidth="sm" sx={{ 
                width:'100vw', 
                height: '100vh' , 
                display: 'flex', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                flexDirection: 'column',
                mx:'auto',
                my:3,
                p: 3,      
            }}>
            <Typography variant="h3" component="div" sx={{ mt:'30px' }}>
                        SpeedBoat
            </Typography>
            <Typography variant="subtitle2" component="div" >
                Practise {bull}  Exam Q&A 
            </Typography>
            <Divider sx={{ width: '100%', my: 2 }} />
            <Stack spacing={2}  direction={{ xs: 'column', sm: 'row' }} >
                <Card sx={{ maxWidth: 345, backgroundColor: 'primary.main'}}>
                    <CardMedia
                        component="img"
                        alt="Speedboat tests"
                        height="140"
                        image={takingTestImg}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='info'>
                        Q&A Tests
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Practise Q&A with 20 question or all question by multiple choice test.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button 
                                component={Link} 
                                to="/take-test" 
                                size="small" 
                                variant="contained" 
                                color='secondary'
                            >
                                Start Practising
                            </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 , backgroundColor: 'primary.main'}}>
                    <CardMedia
                        component="img"
                        alt="Study tests"
                        height="140"
                        image={studyTestImg}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='info'>
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
                            color='secondary'
                            >
                                Start Studying
                            </Button>
                    </CardActions>
                </Card>
            </Stack>
        </Container>
    );
}

export default Home;