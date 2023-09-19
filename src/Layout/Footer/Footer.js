import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
          <figure>
            <img src="../../../../assets/logo3.png" className='logo1' />
          </figure>
          <h2>World Wide Travel </h2>
          </Col>
          <Col>
          <h2>Our Service</h2>
          <li>Home</li>
          <li>About</li>
          <li>Destination</li>
          <li>Contact</li>
          </Col>
          <Col>
          <h3>useful Links</h3>
            <ul>
             <li>facebook</li>
              <li>instagram</li>
              <li>youtube</li>
              <li>linkdin</li>
            </ul>
          </Col>
          <Col>
          <h3>Address</h3>
          <p>Malda Town , pincode : 7321017</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer