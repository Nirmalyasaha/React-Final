import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Wildlife.css'

const Widlife = () => {
    return (
        <div className='grandpa'>
            <Container>
                <Row>
                    <Col>
                        <div className='trek'>
                            <figure>
                                <img src='../../../../assets/duyars.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>DUYARS NATIONAL PARK </h2>
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
                                <img src='../../../../assets/madhumalai.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>MUDUMALAI NATIONAL PARK </h2>
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
                                <img src='../../../../assets/bandipur.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>BANDIPUR NATIONAL PARK </h2>
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
                                <img src='../../../../assets/periyar.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>PERIYAR NATIONAL PARK</h2>
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

export default Widlife