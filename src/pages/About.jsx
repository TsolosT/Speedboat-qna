import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function About() {
    return (

        <Container maxWidth="sm" sx={{ width:'100vw', height: '100vh' , display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ minWidth: 275, backgroundColor:'#f5f5f5'}}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        SpeedBoat Exam Q&A 
                    </Typography>
                    <Typography sx={{ color: 'secondary.main', mb: 1.5 }}>Study Case</Typography>
                    <Typography variant="body2">
                        A React application for practising Q&A tests for speedboat exams.
                    <br />
                    <a  style={{ color: '#56CCF2'}}   href="https://sgouros-trainingboat.gr/">
                    {' '}
                        Sgouros Trainning Boat
                    {' '}
                    </a>
                    </Typography>
                    <br/>
                    <Typography variant="body2">
                        Version <span>1.0.0</span>
                        <br />
                        Layout used:
                        <a style={{ color: '#00203F', textDecoration: 'none'}} href="https://mui.com/"> MaterialUI</a>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default About;