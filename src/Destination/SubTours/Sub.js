
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TourJson from '../Tour.json';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Sub.css';

const Sub = () => {
  const { subId } = useParams();
  const [searchQuery, setSearchQuery] = useState(''); 

  const data = TourJson.travel.find((tour) => tour.id === subId);
  console.log('response data:', data);

  
  const filteredTourPlaces = data.tour_place.filter((pro) =>
    pro.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grandpa1">
      <Container>
       
        <input
          type="text"
          placeholder="Search for a place"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        className='searchbox'/>
        <Row>
          {filteredTourPlaces.map((pro) => (
            <Col key={pro.sub_id}>
              <Card style={{ width: '18rem' }} className="cardstyle">
                <Card.Img variant="top" src={pro.mainimage} className="mainimg" />
                <Card.Body>
                  <Card.Title className='placename'>{pro.name}</Card.Title>
                  <Card.Text className='placename'>{pro.price}</Card.Text>
                  <div className="mainbutton">
                    <Link to={`tourdetail/${pro.sub_id}`}>
                      <Button className="button1">Tour Details</Button>
                    </Link>
                    <Link to={`/booknow`}>
                      <Button className="button1">Book Now</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Sub;
