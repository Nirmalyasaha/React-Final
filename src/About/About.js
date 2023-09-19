import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'

const About = () => {
  return (
    <div>
      <figure>
        <img src='../../../Assets/aboutbanner.png' className='aboutbanner' />

      </figure><br></br>

      <Container>
        <Row>
          <Col>
            <h2 className='content'><b>ABOUT US</b></h2><br></br>
            <h1 className='content-h1'><b>Changing how the world travels</b></h1>
            <p className='content-p'>We at a journey to transform ordinary trips into extraordinary ones. We believe in making your travel easier and wholesome; creating beautiful memories for our travellers. Come Explore and discover the memerizing and alluring scenic beauty of Meghalya. Travel with us to get moments of unforgettable personal experiences on your trip</p>
          </Col>
          <Col>
            <figure>
              <img src='../../../Assets/about1.png' className='img' />

            </figure>
          </Col>
        </Row>
      </Container>

      <section className='about1'>


        <h1>TRANSPORT SERVICES</h1><br></br>

        <p className='p'>Our transport services include pick up and drop from Airport/ Railway station,
          Sightseeing and specialized packaged tours to popular and offbeat destinations.
          We do try to provide vehicle of your choice as per the size and need of the group.
          Customer safety and comfort is our priority
        </p>

        <div className=''>
          <Container>
            <Row>
              <Col>
              <figure>
                <img src='../../../assets/inova.jpg' className='img-fluid carimg'/>
              </figure>
              <h2>Innova 7 seater</h2>
              </Col>
              <Col>
              <figure>
                <img src='../../../assets/tata_car.webp' className='img-fluid carimg'/>
              </figure>
              <h2>Tata Harrier 5 seater</h2>
              </Col>
              <Col>
              <figure>
                <img src="../../../assets/force_car.webp" className='img-fluid carimg'  />
              </figure>
              <h2>Force Traveller 15 seater</h2>
              </Col>
            </Row>
          </Container>
        </div>

        
      </section>


    </div>
  )
}

export default About