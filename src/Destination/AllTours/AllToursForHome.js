import React from 'react'
import TourJson from '../Tour.json'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './All.css'
import { Link } from 'react-router-dom';


const AllTourForHome = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row>
        {TourJson.travel.map((tour) => (
            <Col className="col-xl-6 col-lg-6 col-12" key={tour.id}>
              {/* <figure>
                <img className='img-fluid' src={tour.image}/>
                <h5>{tour.categeroy}</h5>
              </figure> */}

              <Card className="mx-auto mb-5 alldestination" style={{ width: '25rem' }}>

                <Card.Img variant="top" src={tour.image} className=' mx-auto tourimg'/>
                <Card.Body>
                  <Card.Title>{tour.categeroy}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Link to={`/alltour/subtour/${tour.id}`}>
                   <Button className='button1'>Go to Destination</Button>
                  </Link>                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </>
  )
}

export default AllTourForHome