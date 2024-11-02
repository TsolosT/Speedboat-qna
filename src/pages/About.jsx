import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

function About() {
    return (
        <Container 
            maxWidth="lg" 
            sx={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'flex-start', 
                padding: 4,
                overflow: 'hidden',
            }}
        >
            <Card 
                sx={{ 
                    width: '100%', 
                    maxWidth: 800, 
                    backgroundColor: '#f5f5f5', 
                    boxShadow: 3, 
                    padding: { xs: 2, md: 4 }, 
                    overflow: 'auto',
                }}
            >
                <CardContent>
                    <Typography variant="h4" component="div" sx={{ mb: 1 }}>
                        SpeedBoat Exam Q&A
                    </Typography>

                    <Typography sx={{ color: 'secondary.main' }} variant="h6">
                        About the App
                    </Typography>
                    <Divider aria-hidden="true" sx={{ bgcolor: 'primary.main', mb: 3 }} />

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        **SpeedBoat Exam Q&A** is an interactive learning platform designed to help aspiring boat operators prepare for their speedboat exams. 
                        This app offers a convenient way to practice multiple-choice questions, track progress, and receive immediate feedback.
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Courier licenses - List of supporting documents{' '}
                        <a 
                            style={{ color: '#56CCF2' }} 
                            href="https://adeies.hcg.gr/adeies/dikaiologhtika/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            LS-ELAKT
                        </a>. 
                        <br/>
                        The app contains questions in Greek, aligned with the syllabus, and includes the option to shuffle answers or display immediate results.
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Key Features:
                        <ul>
                            <li>Practice random or complete question sets.</li>
                            <li>Immediate feedback on correct and incorrect answers.</li>
                            <li>Review incorrect answers and repeat tests to improve.</li>
                            <li>Progress tracking with visual indicators (progress bars).</li>
                            <li>Study learning content for test questions/answers and more.</li>
                        </ul>
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Whether you are preparing for an upcoming exam or just testing your knowledge, SpeedBoat Exam Q&A provides an easy-to-use platform to help you succeed.
                    </Typography>
                    <Divider aria-hidden="true" sx={{  bgcolor: 'primary.main' , mb: 3}}/>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Version: <span>1.1.0</span>
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Developed by: <a
                                    href='https://github.com/TsolosT'
                                    target="_blank"
                                    rel="noopener"
                                    style={{ color: '#56CCF2', textDecoration: 'none' }}
                                >
                                    T.Tsolovikos
                                </a>
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Future Updates: We plan to introduce more languages, more indebt syllabus content and AI chat Bot to ask any related to content question in upcoming versions.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default About;
