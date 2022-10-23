import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Places = ({tourist}) => {

    const {title, image, review, price} = tourist;
    return (

        <Col lg="4">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="info">Book Now</Button>
          </Card.Body>
        </Card>
        </Col>

      );
};

export default Places;