import React from 'react'
import ProdJSon from '../prod.json'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Allprod.css'
import { Link } from 'react-router-dom';

const Allprod = () => {
    return (
        <div className='prodmain'>

            <Container>
                <Row>
                    {ProdJSon.product.map((prod) => (
                        <Col key={prod.prod_id}>
                            <Card style={{ width: '18rem' }} className='prodcard'>
                                <Card.Img variant="top" src={prod.prod_image} className='prodimage'/>
                                <Card.Body>
                                    <Card.Title>{prod.prod_name}</Card.Title>
                                    <Card.Text>
                                       Price:- {prod.prod_price}
                                    </Card.Text>
                                    <Link to={`proddetail/${prod.prod_id}`}>
                                    <Button variant="primary">Details</Button>
                                    </Link>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>


        </div>
    )
}

export default Allprod