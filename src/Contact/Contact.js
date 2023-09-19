import React, { useState } from 'react'
import './Contact.css'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {




  return (
    <div className='contactmain'>

      <h2 className='contact-heading'>CONTACT WITH US</h2><br />
      <Container>
        <Row>
          <Col xl={4}>
            <div className='contact-parent'>
              <h2>DON'T BE SHY</h2>
              <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>

            <div className='contact-parent'>
              <span className='contact-icon'>
              <i className="fa-solid fa-envelope mail"  ></i>
              </span>
              <h2>Mail Us</h2>
              <p>nirmalyasaha1999@gmail.com</p>

            </div>

          </Col>

          <Col xl={8}>

            <div className='contact-parent'>
            <form action='https://formspree.io/f/moqodbjv' method='POST' className='contactform'>

              <label htmlFor='fullname'></label>
              <input type="text" name='fullname' autoComplete='off' placeholder='Enter Your Name'/>

              <label htmlFor="email"></label>
              <input type="text" name='email' autoComplete='off' placeholder='Enter Your Email Id'/>

              <textarea name='message' autoComplete='off' className='textarea'placeholder='Enter Your Message' ></textarea>

              <input type="submit" value='submit' />

            </form>
            </div>

          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default Contact