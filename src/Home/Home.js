import React from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap';

import './Home.css'
import { Link } from 'react-router-dom';

import AllTourForHome from '../Destination/AllTours/AllToursForHome';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
            <div className='banner'>
                <figure >
                    <img
                        src="../../../Assets/Banner.png"
                    />
                </figure>
            </div>

            <section className='about'>
                <Container>
                    <Row>
                        <Col>
                            <figure >
                                <img src='../../../Assets/about1.png' className='img1' />
                            </figure>
                        </Col>
                        <Col>
                            <h1 >ABOUT US</h1>
                            <h2 ><b>Changing how the world travels</b></h2>
                            <p >We at  a journey to transform ordinary trips into extraordinary ones. We believe in making your travel easier and wholesome; creating beautiful memories for our travellers. Come Explore and discover the memerizing and alluring scenic beauty of Meghalya. Travel with us to get moments of unforgettable personal experiences on your trip</p>

                            <Link to="/about">
                                <button className='button1'>
                                    READ MORE
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col>
                            <img src='../../../assets/binoculars.png' />

                            <h1 className='why-h'>WHY CHOOSE US?</h1>
                            <p className='why-p'>It’s our passion and our expertise, and has been for over two decades. We know the trails and the towns inside and out. We know the hoteliers and their rooms, and restauranteurs and their menus. We don’t guide on any route we haven’t done many times before. Our expertise gives you a richer, more enjoyable experience, and we will makes better use of your time.



                                We provide a thorough and complete orientation, so you are fully prepared to make the most of your Swiss vacation or Alps hiking adventure. Your expert trip leader is with you for the entire trip.</p>

                        </Col>
                        <Col>
                            <figure>
                                <img src='../../../assets/mountain.jpg' className='why-img' />

                            </figure>

                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='experience mt-5'>
                <Container>
                    <Row>
                        <Col>

                            <figure className='icon'>
                                <img src="../../../assets/icon1.png" alt="icon1" />
                            </figure>

                            <h3 className=' icon-heading'>15 Years of Experiences</h3>
                            <p>Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin.</p>
                        </Col>
                        <Col>

                            <figure className='icon'>
                                <img src="../../../assets/icon2.png" alt="" />
                            </figure>

                            <h3 className=' icon-heading'>200+ Camps To Visit</h3>
                            <p>Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin.</p>
                        </Col>
                        <Col>

                            <figure className='icon'>
                                <img src="../../../assets/icon3.png" alt="" />
                            </figure>

                            <h3 className=' icon-heading'>Big Community</h3>
                            <p>Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin..</p>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className='activity'>

                <div>
                    <h2 className='text-center my-5'>ACTIVITIES</h2>
                    <Container>
                        <Row>
                            <Col>
                                <div className='Trek'>
                                    <figure className='trekimg1'>
                                        <img src='../../../../assets/trekkingmain.jpg' className='img-fluid ' />
                                    </figure>
                                    <div className='trek-content'>
                                        <div className='detail'>
                                            <h4>MOUNTAIN TREK</h4>
                                            <Link to="/trekking">
                                                <button className='button1'>Read More</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                            </Col>
                            <Col>
                                <div className='Trek'>
                                    <figure className='trekimg1'>
                                        <img src='../../../../assets/rivermain.jpg' className='img-fluid ' />
                                    </figure>
                                    <div className='trek-content'>
                                        <div className='detail'>
                                            <h4>RIVER RAFTING</h4>
                                            <Link to="/river">
                                                <button className='button1'>Read More</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='Trek'>
                                    <figure className='trekimg1'>
                                        <img src='../../../../assets/wildlifemain.webp' className='img-fluid ' />
                                    </figure>
                                    <div className='trek-content'>
                                        <div className='detail'>
                                            <h4>WILDLIFE SAFARI</h4>
                                            <Link to='/wildlife'>
                                                <button className='button1'>Read More</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='Trek'>
                                    <figure className='trekimg1'>
                                        <img src='../../../../assets/paraglidingmain.jpg' className='img-fluid ' />
                                    </figure>
                                    <div className='trek-content'>
                                        <div className='detail'>
                                            <h4 className='text-white'>PARAGLIDING</h4>
                                            <Link to='/paragliding'>
                                                <button className='button1'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </section>

            <section>
                <h2>Choose Your Destination</h2>
                <AllTourForHome />
            </section>

            <section className='contact mt-5'>
                
                <Contact/>
               
            </section>






        </>




    )
}

export default Home