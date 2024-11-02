// Home.test.jsx

import { render, screen } from '@testing-library/react';
import Home from '/src/pages/Home'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import { describe, it, expect } from 'vitest';

describe('Home Component', () => {
    it('renders correctly with the expected content', () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        // Check for main title
        expect(screen.getByText('SpeedBoat')).toBeInTheDocument();

        // Check for the Q&A Tests card
        const qaCard = screen.getByText('Q&A Tests');
        expect(qaCard).toBeInTheDocument();
        
        // Check the Q&A Tests button
        const qaButton = screen.getByText('Start Practising');
        expect(qaButton).toBeInTheDocument();
        expect(qaButton).toHaveAttribute('href', '/take-test'); 

        // Check for the Q&A Study card
        const studyCard = screen.getByText('Q&A Study');
        expect(studyCard).toBeInTheDocument();
        expect(screen.getByText('See all the questions with their correct answers to study them.')).toBeInTheDocument();

        // Check the Q&A Study button
        const studyButton = screen.getByText('Start Studying');
        expect(studyButton).toBeInTheDocument();
        expect(studyButton).toHaveAttribute('href', '/study-qna');
    });

    it('displays images for each card', () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        // Check for images in each card
        const qaImage = screen.getByAltText(/speedboat tests/i);
        const studyImage = screen.getByAltText(/study tests/i);
        
        expect(qaImage).toBeInTheDocument();
        expect(studyImage).toBeInTheDocument();
    });
});
