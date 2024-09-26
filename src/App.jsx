import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TakeTest from './pages/TakeTest';
import StudyQna from './pages/StudyQna';
import NotFound from './pages/NotFound';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/take-test" element={<TakeTest />} />
          <Route path="/study-qna" element={<StudyQna />} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
