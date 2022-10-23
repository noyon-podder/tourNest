import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css';
const Menubar = () => {
    return (
        <Container>
        <nav className='navbar py-3 '>          
            <div className="logo"> 
                <h2 className='fw-bold text-light'>TOUR<span className='base-color'>NEST</span></h2>
            </div>

            <div className="menu-section">
                <Link>Home</Link>
                <Link>Destination</Link>
                <Link>Packages</Link>
                <Link>Special Offer</Link>
                <Link>Blog</Link>
                <Link>Subscription</Link>
                <Button variant="info" className="px-4 py-2 text-light ms-3">Book Now</Button>
            </div>
        </nav>
            </Container>
    );
};

export default Menubar;