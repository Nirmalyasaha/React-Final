import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Booking.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BookingDetail = () => {

    // let{email}=useSelector(state=>state.data);
    // console.log("email",email);

    let valid_email = window.sessionStorage.getItem("email");


    let booking_api = "http://localhost:2000/Booking"

    let [data, setData] = useState([]);

    let fetchData = () => {
        axios.get(booking_api)
            .then((res) => {
                console.log("booking api res:", res.data);
                setData(res.data);

            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchData();
    }, [])

    let matchData = data.filter((id) => id.email === valid_email)
    console.log("matching email:", matchData);




    return (


        // <div className='detailbook'>
        //     <Container>
        //         <Row>
        //             <Col>
        //                 <div className='bookingdetail'>
        //                     <h1>Lets Journey on And Make Memories</h1>
        //                     <figure>
        //                         <img src='../../../../assets/logo3.png' />
        //                     </figure>
        //                 </div>
        //             </Col>

        //             <Col>
        //                 <div className='bookingDetailContent'>
        //                     {
        //                         matchData.map((userdetail) => (
        //                             <>
        //                                 <div key={userdetail.id}>
        //                                     <h2>Name : {userdetail.name}</h2><hr></hr>
        //                                     <h3>Phone No: {userdetail.phone}</h3><hr></hr>
        //                                     <h3>Destination: {userdetail.destination}</h3><hr></hr>
        //                                     <h3>Start Date: {userdetail.startdate}</h3><hr></hr>
        //                                     <h3>End Date: {userdetail.enddate}</h3><hr></hr>
        //                                 </div>
        //                                 <Link to={`/edit/${userdetail.id}`}>
        //                                     <button className='button2'>
        //                                         Edit Your Details
        //                                     </button>
        //                                 </Link>
        //                             </>

        //                         ))
        //                     }
        //                 </div>
        //             </Col>
        //         </Row>
        //     </Container>

        // </div>

        <div className='tablemain'>
            <h2>Your Booking Details</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Destination</th>
                        <th scope="col">StartDate</th>
                        <th scope="col">EndDate</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        matchData.map(data=>(
                            <tr key={data.id}>
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.destination}</td>
                            <td>{data.startdate}</td>
                            <td>{data.enddate}</td>
                            <td>
                                <Link to={`/edit/${data.id}`}>
                                <button className='button1'>
                                Edit </button>
                                </Link>
                               
                                </td>
                        </tr>
                        ))
                    }
                 
                    
                  
                </tbody>
            </table>
        </div>
    )
}

export default BookingDetail