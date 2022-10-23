import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Hero.css';
const Hero = () => {
    return (
        <Container>
            <div className='hero-section'>
            <h1 className='hero-title'>Explore the Beauty of the Beautiful World</h1>
            <Button variant="info" className="explore-btn">Explore Now</Button>
        </div>
        </Container>
    );
};

export default Hero;