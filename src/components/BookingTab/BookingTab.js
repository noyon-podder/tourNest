import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Places from '../Places/Places';

const BookingTab = () => {
    const touristPlaces = useLoaderData();
    return (
       <div>
        <Container>
            <Row className="g-5">
            
            {
            touristPlaces.map(tourist => <Places
            key={tourist.id} tourist={tourist}
            ></Places>)
        }
        </Row>
        </Container>
       </div>
    );
};

export default BookingTab;