import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TakeTest from './pages/TakeTest';
import StudyQna from './pages/StudyQna';
import NotFound from './pages/NotFound';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import { QnaProvider } from './context/QnaContext';
import { TestProvider } from './context/TestContext';
import { Box } from '@mui/material'; // Import Box

function App() {
  return (
    <QnaProvider>
      <TestProvider>
        <Router>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              minHeight: '100vh' 
            }}
          >
            <Navbar />
            <Box component="main" sx={{ flex: 1 }}>
              <Routes>
                <Route path="/Speedboat-qna" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/take-test" element={<TakeTest />} />
                <Route path="/study-qna" element={<StudyQna />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </TestProvider>
    </QnaProvider>
  );
}

export default App;
