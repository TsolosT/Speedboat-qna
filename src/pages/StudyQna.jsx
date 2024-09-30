import { useContext } from 'react';
import Spinner from '../components/layouts/Spinner';
import QnaContext  from '../context/QnaContext';

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
    const {
        filteredQuestions,
        isLoading,
        categories,
        selectedCategory,
        filterQuestions,
        showGoTop,
        scrollToTop
    } = useContext(QnaContext);

    // Filter the questions when category changes
    const handleCategoryChange = (e) => {
        filterQuestions(e.target.value);
    };
    //Convert Listing from numbers to greek letters 
    const convertIdToGreekLetter = (id) => {
        const letters = ['α', 'β', 'γ'];
        return letters[id - 1] || '';
    };

    if(!isLoading) {
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
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                sx={{ color: 'info.main', border: '1px solid #56CCF2'}}
                                IconComponent={() => (
                                    <FilterAltIcon sx={{ color: 'info.main' , mr:'2px' }} /> 
                                )}
                            >
                                {categories.map(([key, value]) => (
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
                    {filteredQuestions.map((qna) => (
                        <ListItem key={qna.id} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
                                {qna.category[0].title} {/* Display the category name */}
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
    } else {
        return <Spinner/>
    }
}

export default StudyQna;