import { useEffect, useState } from 'react';
import { QnaData, QnaCategories } from '../data/speedboat-qna-a'; // Import your data
import {
        AppBar,
        Box,
        Toolbar,
        Typography,
        FormControl,
        Select,
        MenuItem,
        List,
        ListItem,
        ListItemText,
        Container,
        IconButton
    } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function StudyQna() {
    // Define state for current category (set default as "All")
    const [category, setCategory] = useState('All');
    const [showGoTop, setShowGoTop] = useState(false);
    // Filter questions based on the category selected
    const filterQuestions = () => {
        if (category === 'All') return QnaData; // Return all if 'All' selected
        if (category === 'BoatEngine') return QnaData.filter(q => q.id <= 8);
        if (category === 'WeatherWarningLights') return QnaData.filter(q => q.id > 8 && q.id <= 21);
        if (category === 'PreparingSailSafePlus') return QnaData.filter(q => q.id > 21 && q.id <= 46);
        if (category === 'IcfrPriority') return QnaData.filter(q => q.id > 46 && q.id <= 68);
        if (category === 'DayPatterns') return QnaData.filter(q => q.id > 68 && q.id <= 73);
        if (category === 'NavigationLights') return QnaData.filter(q => q.id > 73 && q.id <= 91);
        if (category === 'Maps') return QnaData.filter(q => q.id > 91);
        return QnaData.filter(q => q.category.some(cat => cat.title === category));
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };
    // Function to convert answer ID to Greek letters
    const convertIdToGreekLetter = (id) => {
        const letters = ['α', 'β', 'γ'];
        return letters[id - 1] || ''; // Adjust for zero-based index
    };
       // Scroll event handler to show/hide the Go to Top button
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;

        // Show button if scrolled down 10% of the page
        if (scrollY > documentHeight * 0.1) {
            setShowGoTop(true);
        } else {
            setShowGoTop(false);
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            {/* Top AppBar with category select */}
            <AppBar position="sticky" sx={{py: '8px'}}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Study Q&A
                    </Typography>
                    <FormControl>
                        <Select
                            value={category}
                            onChange={handleCategoryChange}
                            sx={{ color: 'info.main', border: '1px solid #56CCF2'}}
                            IconComponent={() => (
                                <FilterAltIcon sx={{ color: 'info.main' , mr:'2px' }} /> 
                            )}
                        >
                            {Object.entries(QnaCategories).map(([key, value]) => (
                                <MenuItem key={key} value={key}>
                                    {value}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>

            {/* List of questions */}
            <Container sx={{ marginTop: 2 }}>
                <List>
                {filterQuestions().map((qna) => (
                    <ListItem key={qna.id} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
                            { qna.category[0].title} {/* Display the category name */}
                    </Typography>
                    <Typography variant="h6">{qna.id}.{' '}{qna.question}</Typography>
                    <List>
                        {qna.answers.map((answer) => {
                                // Check if this answer is the correct one
                                const isCorrect = answer.id === qna.correct_answer;
                                return (
                                    <ListItemText key={answer.id}>
                                        <Box
                                            sx={{
                                                padding: 1,
                                                border: isCorrect ? '1px solid #00BFA6' : 'none', // Green border for correct answer
                                                borderRadius: 2, // Rounded corners
                                                backgroundColor: isCorrect ? '##e0f7e017' : 'transparent', // Light green background for correct answer
                                                color: isCorrect ? 'success.main' : 'inherit', // Change text color for correct answer
                                            }}
                                        >
                                            {convertIdToGreekLetter(answer.id)}. {answer.text}
                                        </Box>
                                    </ListItemText>
                                );
                            })}
                    </List>
                    </ListItem>
                ))}
                </List>
            </Container>
            {/* Go to Top Button */}
            {showGoTop && (
                <IconButton 
                    aria-label="Go to top"
                    variant="contained"
                    onClick={scrollToTop}
                    sx={{
                        position: 'fixed',
                        bottom: 10,
                        right: 10,
                        backgroundColor: 'primary.main', 
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'primary.main', 
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    <ArrowUpwardIcon/>
                </IconButton>
            )}

        </div>
    );
}

export default StudyQna;