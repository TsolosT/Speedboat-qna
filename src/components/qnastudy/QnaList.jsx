/* eslint-disable react/prop-types */
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

function QnaList({ questions, convertIdToGreekLetter }) {
    return (
        <List>
            {questions.map((qna) => (
                <ListItem key={qna.id} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
                        {qna.category[0].title}
                    </Typography>
                    <Typography variant="h6">{qna.id}.{' '}{qna.question}</Typography>
                    <List>
                        {qna.answers.map((answer) => {
                            const isCorrect = answer.id === qna.correct_answer; // Check for correct answer
                            return (
                                <ListItemText key={answer.id}>
                                    <Box
                                        className={isCorrect ? 'correct-answer' : ''} // for testing
                                        sx={{
                                            padding: 1,
                                            border: isCorrect ? '1px solid #00BFA6' : 'none', 
                                            borderRadius: 2, 
                                            backgroundColor: isCorrect ? '#e0f7e017' : 'transparent', 
                                            color: isCorrect ? 'success.main' : 'inherit',
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
    );
}

export default QnaList;
