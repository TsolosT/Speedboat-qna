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

function App() {

  return (
    <>
      <QnaProvider>
        <TestProvider>
          <Router>
            <Navbar/>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/take-test" element={<TakeTest />} />
                <Route path="/study-qna" element={<StudyQna />} />
                <Route path='/*' element={<NotFound/>} />
              </Routes>
            </main>
            <Footer/>
          </Router>
        </TestProvider>
      </QnaProvider>
    </>
  )
}

export default App
