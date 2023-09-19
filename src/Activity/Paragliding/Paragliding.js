import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Paragliding = () => {
    return (
        <div className='grandpa'>
            <Container>
                <Row>
                    <Col>
                        <div className='trek'>
                            <figure>
                                <img src='../../../../assets/gangtok.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>GANGTOK PARAGLIDING </h2>
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
                                <img src='../../../../assets/nandihill.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>NANDI-HILL PARAGLIDING </h2>
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
                                <img src='../../../../assets/mussoorie.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>MUSSOORIE PARAGLIDING </h2>
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
                                <img src='../../../../assets/shillong.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>SHILLONG PARAGLIDING </h2>
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

export default Paragliding