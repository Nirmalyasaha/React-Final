import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Trekking.css'

const Trekking = () => {
    return (

<>
        <div className='grandpa'>            
            <Container>
                <Row>
                    <Col >
                        <div className='trek'>
                            <figure>
                                <img src='../../../../assets/sandkfu.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>SANDKFU TREKKING </h2>
                                <span>
                                    <i className="fa-regular fa-clock fa-beat me-2"></i>
                                    4 days and 3 nights
                                </span>
                                <p>price:- 10000-15000 /- per person</p>
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <div className='trek'>
                            <figure>
                                <img src='../../../../assets/kedarkantha.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>KEDARKANTHA TREKKING </h2>
                                <span>
                                    <i className="fa-regular fa-clock fa-beat me-2"></i>
                                    4 days and 3 nights
                                </span>
                                <p>price:- 10000-15000 /- per person</p>
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <div className='trek'>
                            <figure>
                                <img src='../../../../assets/Dzongri.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>DZONGRI TREKKING </h2>
                                <span>
                                    <i className="fa-regular fa-clock fa-beat me-2"></i>
                                    4 days and 3 nights
                                </span>
                                <p>price:- 10000-15000 /- per person</p>
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <div className='trek'>
                            <figure>
                                <img src='../../../../assets/bramhatal.jpg' className='img-fluid trekimg' />
                            </figure>
                            <div>
                                <h2 className='heading'>BRAHATAL TREKKING </h2>
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
        </>
    )
}

export default Trekking