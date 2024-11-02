import { 
    AppBar, 
    Tabs, 
    Tab, 
    Box, 
    Typography, 
    Container 
} from '@mui/material';
import { useState } from 'react';

// TabPanel Component to render content conditionally based on the selected tab
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function WindCompass() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '100vh',
                backgroundColor: '#f0f4f8',
                textAlign: 'center',
            }}
        >
            {/* Tab Bar */}
            <AppBar position="static" sx={{ backgroundColor: 'primary.main', width: '100%' }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    textColor="inherit"
                    indicatorColor="secondary"
                >
                    <Tab label="Compass" />
                    <Tab label="Winds" />
                    <Tab label="Navigation through Winds" />
                </Tabs>
            </AppBar>

            {/* Tab Panels for each section */}
            <TabPanel value={selectedTab} index={0}>
                <Box
                    sx={{
                        border: '2px dashed #56CCF2',
                        borderRadius: '8px',
                        p: 4,
                        backgroundColor: 'white',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>
                        Compass Section
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Content coming soon!
                    </Typography>
                </Box>
            </TabPanel>

            <TabPanel value={selectedTab} index={1}>
                <Box
                    sx={{
                        border: '2px dashed #FFA726',
                        borderRadius: '8px',
                        p: 4,
                        backgroundColor: 'white',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>
                        Winds Section
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Detailed content about winds will be added here soon.
                    </Typography>
                </Box>
            </TabPanel>

            <TabPanel value={selectedTab} index={2}>
                <Box
                    sx={{
                        border: '2px dashed #AB47BC',
                        borderRadius: '8px',
                        p: 4,
                        backgroundColor: 'white',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>
                        Navigation through Winds
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        This section will cover navigation strategies using wind patterns.
                    </Typography>
                </Box>
            </TabPanel>
        </Container>
    );
}

export default WindCompass;