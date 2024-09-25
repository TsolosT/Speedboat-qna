import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';  // For consistent default styling

const theme = createTheme({
  palette: {
    primary: {
      main: '#00203F',    // Navy Blue
    },
    secondary: {
      main: '#FF6F3C',    // Sunset Orange
    },
    info: {
      main: '#56CCF2',    // Sky Blue
    },
    success: {
      main: '#00BFA6',    // Seafoam Green
    },
    background: {
      default: '#FFFFFF', // White (default background)
      paper: '#E3E3E3',   // Light Gray (for cards, panels)
    },
    text: {
      primary: '#00203F', // Dark text on light background
      secondary: '#FFFFFF' // White text on dark background
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>
  </StrictMode>,
)
