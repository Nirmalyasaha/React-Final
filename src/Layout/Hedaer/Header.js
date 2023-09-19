import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Hedaer.css'
import { Link, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Swal from 'sweetalert2';



const Header = () => {

  let navigate = useNavigate();
  let authToken = window.sessionStorage.getItem("token")
  let handleLogout = () => {
    window.sessionStorage.clear()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'you have been logged out successfully',
      showConfirmButton: false,
      timer: 15000
    })
    navigate("/")
  }
  return (
    <div>
      <Navbar className='main'>
        <Container fluid>

          <Navbar.Brand as={Link} to="/" className='navbrand'>

            <img src='../../../../Assets/logo3.png' alt='nimu' className='logo'></img>

          </Navbar.Brand>

          <Nav className="me-auto navmenu">

            <div className='menu1'>

              <Nav.Link className='menu' as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="menu" as={Link} to="/about">About</Nav.Link>
              <Nav.Link className='menu ' as={Link} to="/alltour">Destinations</Nav.Link>
              {/* <Nav.Link className='menu ' as={Link} to="/allprod">Trekking Products</Nav.Link> */}
              <Nav.Link className='menu ' as={Link} to="/booknow">Book Now</Nav.Link>             
              <Nav.Link className='menu ' as={Link} to="/contact">Contacts</Nav.Link>
              <Nav.Link className='menu ' as={Link} to="/profile">Profile</Nav.Link>



            </div>




            <div className='logcss'>
              <NavDropdown title="login " id="basic-nav-dropdown" className='text-dark'>
                {authToken ? <NavDropdown.Item href="/log" style={{ background: "black" }} className='text-warning' onClick={handleLogout}>logout</NavDropdown.Item> : <>
                  <NavDropdown.Item href="/log" style={{ background: "black" }} className='text-warning'>login</NavDropdown.Item>
                  <NavDropdown.Item href="/reg" style={{ background: "black" }} className='text-warning'>
                    Registration</NavDropdown.Item>
                </>
                }




              </NavDropdown>
            </div>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header