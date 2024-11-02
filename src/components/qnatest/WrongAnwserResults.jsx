/* eslint-disable react/prop-types */
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext } from 'react';
import QnaContext from '../../context/QnaContext';


const WrongAnwserResults = ({ wrongQuestions }) => {
    const {convertIdToGreekLetter} = useContext(QnaContext);

    return (
        <Box sx={{ my: 4,padding:2 }}>
            <Typography variant="h6">Review Wrong Answers:</Typography>
            {wrongQuestions.map((question, index) => (
                <Accordion key={index} sx={{ marginBottom: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`}>
                        <Typography>{question.text}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {question.answers.map((answer) => (
                            <Typography
                                key={answer.id}
                                sx={{
                                    color: answer.isCorrect ? '#00BFA6' : (answer.isSelected ? 'red' : 'text.primary'),
                                    fontWeight: answer.isCorrect ? 'bold' : 'normal'
                                }}
                            >
                                {`${convertIdToGreekLetter(answer.id)}. ${answer.text}`}
                            </Typography>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default WrongAnwserResults;
