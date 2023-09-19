import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import './Profile.css'


const Profile = () => {

  let profile_api = "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details"


  let [inputData, setInputData] = useState({
    first_name: "", last_name: "", email: "", register_type: "", profile_pic: ""
  });

  let valid_token = window.sessionStorage.getItem("token");
  console.log("colleted token:", valid_token);


  useEffect(() => {
    axios.get(profile_api, {
      headers:
      {
        "x-access-token": valid_token,
        "Content-Type": "application/x-www-form-urlencoded",
      }
    })
      .then((res) => {
        console.log("profile res:", res);
        if (res.data.status === 200) {

          let base_url = "https://wtsacademy.dedicateddevelopers.us/";
          let folder_path = "uploads/user/profile_pic/";
          let img_url = base_url + folder_path + res.data.data.profile_pic;
          // console.log("profile pic ",img_url);

          setInputData({
            ...inputData,
            first_name: res.data.data.first_name,
            last_name: res.data.data.last_name,
            email: res.data.data.email,
            register_type: res.data.data.register_type,
            profile_pic: img_url
          })
        }
      })
      .catch((error) => {
        console.log("profile error:", error);

      })
  }, [setInputData])

  return (
    <div className='mainprofile1'>
      {/* <Card style={{ width: '18rem' }}>

        <Card.Img variant="top" src={inputData.profile_pic} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            {inputData.first_name}.{inputData.last_name}.{inputData.email}
          </Card.Text>
          <Link to={"/bookingdetail"}>
          <Button variant="primary">My Bookings</Button></Link>
         
        </Card.Body>
      </Card> */}
      <div>
        <figure>
          <img src='../../../../assets/profilepage.png' className='profilebanner'/>
        </figure>
      </div>
      <Container>
        <Row>
          <h1 className='profile-h'>Your Profile Details</h1>
        <div className='profileparent'>
        <Col>
          <figure>
            <img src={inputData.profile_pic} className='profileimg'/>
          </figure>
          </Col>
          <Col>
          <div className='profile-content'>
            <h2 > Name:   {inputData.first_name}{inputData.last_name}</h2><br />           
            <h2> Email-Id:  {inputData.email}</h2>
            <Link to={"/bookingdetail"}>
            <button>
              My Booking             
            </button>
            </Link>

          </div>
          </Col>
        </div>
        </Row>
      </Container>
    </div>
  )
}

export default Profile