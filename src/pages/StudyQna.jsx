import { useContext, useState } from 'react';
import Spinner from '../components/layouts/Spinner';
import QnaContext from '../context/QnaContext';
import QnaList from '../components/qnastudy/QnaList'; 
import BasicRules from '../components/qnastudy/BasicRules';
import WindCompass from '../components/qnastudy/WindCompass';

import {
    AppBar,
    Box,
    FormControl,
    Select,
    MenuItem,
    Container,
    IconButton,
    Tabs,
    Tab,
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
        scrollToTop,
        convertIdToGreekLetter,
    } = useContext(QnaContext);

    const basicCategories = [
        [0, 'Κανόνες Προτεραίοτητας'],
        [1, 'Πριν από τον Απόπλου'],
        [2, 'Σε Λιμάνι'],
        [3, 'Κατά τον Πλου'],
        [4, 'Διεθνής Ναυτικός Κώδικας'],
    ];
    const [selectedBasicSection, setSelectedBasicSection] = useState(0); // Track selected on basic rules section
    const [selectedSection, setSelectedSection] = useState(0); // Track selected tab

    // Handle section (tab) change
    const handleSectionChange = (event, newValue) => {
        setSelectedSection(newValue);
    };

    // Handle category change for filtering
    const handleCategoryChange = (e) => {
        filterQuestions(e.target.value);
        setSelectedBasicSection(e.target.value);
    };

    if (!isLoading) {
        return (
            <div>
                <AppBar position="sticky" sx={{ py: '8px', backgroundColor:'background.default' }}>
                        {/* Tabs for switching sections */}
                        <Tabs value={selectedSection} onChange={handleSectionChange} 
                            textColor="secondary"
                            indicatorColor="secondary"
                            centered
                            sx={{pb:"5px"}}
                        >
                            <Tab label="Basic Rules" sx={{color:'primary.main'}}/>
                            <Tab label="In Dept" disabled/>
                            <Tab label="Q&A" sx={{color:'primary.main'}}/>
                        </Tabs>
                        {/* Render the category filter only if BaSIC tab is selected */}
                        {selectedSection === 0 && (
                            <FormControl sx={{ mx: 1 }}>
                                <Select
                                    value={selectedBasicSection}
                                    onChange={handleCategoryChange}
                                    sx={{ color: 'info.main', border: '1px solid #56CCF2' }}
                                    IconComponent={() => (
                                        <FilterAltIcon sx={{ color: 'info.main', mr: '2px' }} />
                                    )}
                                >
                                    {basicCategories.map(([key, value]) => (
                                        <MenuItem key={key} value={key}>
                                            {value}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                        {/* Render the category filter only if Q&A tab is selected */}
                        {selectedSection === 2 && (
                            <FormControl sx={{ mx: 1 }}>
                                <Select
                                    value={selectedCategory}
                                    onChange={handleCategoryChange}
                                    sx={{ color: 'info.main', border: '1px solid #56CCF2' }}
                                    IconComponent={() => (
                                        <FilterAltIcon sx={{ color: 'info.main', mr: '2px' }} />
                                    )}
                                >
                                    {categories.map(([key, value]) => (
                                        <MenuItem key={key} value={key}>
                                            {value}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                </AppBar>

                {/* Render the content based on the selected tab */}
                <Container sx={{ marginTop: 2 }}>
                    { selectedSection === 0 && (
                            <BasicRules selectedCategory={selectedBasicSection} />
                    )}
                    {selectedSection === 1 && (
                        <WindCompass/>
                    )}   
                    {selectedSection === 2 && (
                        <QnaList 
                            questions={filteredQuestions} 
                            convertIdToGreekLetter={convertIdToGreekLetter} 
                        />
                    )}
                </Container>

                {/* Go to Top Button */}
                {showGoTop && (
                    <IconButton
                        aria-label="Go to top"
                        variant="contained"
                        onClick={scrollToTop}
                        sx={{
                            position: 'fixed',
                            bottom: 120,
                            right: 10,
                            backgroundColor: 'primary.main',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <ArrowUpwardIcon />
                    </IconButton>
                )}
            </div>
        );
    } else {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                }}
            >
                <Spinner />
            </Box>
        );
    }
}

export default StudyQna;
