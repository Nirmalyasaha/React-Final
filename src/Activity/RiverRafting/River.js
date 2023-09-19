import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const River = () => {
    return (
        <div className='grandpa'>
            <Container>
                <Row>
                    <Col>
                        <div className='trek'>
                            <figure>
                                <img src='../../../../assets/bramhaputra.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>BRAMHAPUTRA RIVER </h2>
                                <span>
                                    <i className="fa-regular fa-clock fa-beat me-2"></i>
                                    4 days and 3 nights
                                </span>
                                <p>price:- 10000-15000 /- per person</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='trek'>
                            <figure>
                                <img src='../../../../assets/Gangariver.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>GANGA RIVER </h2>
                                <span>
                                    <i className="fa-regular fa-clock fa-beat me-2"></i>
                                    4 days and 3 nights
                                </span>
                                <p>price:- 10000-15000 /- per person</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='trek'>
                            <figure>
                                <img src='../../../../assets/tista.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>TISTA RIVER</h2>
                                <span>
                                    <i className="fa-regular fa-clock fa-beat me-2"></i>
                                    4 days and 3 nights
                                </span>
                                <p>price:- 10000-15000 /- per person</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='trek'>
                            <figure>
                                <img src='../../../../assets/spriti.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>SPRITI RIVER</h2>
                                <span>
                                    <i className="fa-regular fa-clock fa-beat me-2"></i>
                                    4 days and 3 nights
                                </span>
                                <p>price:- 10000-15000 /- per person</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default River