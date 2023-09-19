import React, { useState } from 'react'
import './Booknow.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const BookNow = () => {

let navigate=useNavigate();

let booking_api="http://localhost:2000/Booking"


    let [inputData, setInputData] = useState({
        name: "", phone: "", startdate: "", enddate: "", destination: ""
    });

    let handleChange = (event) => {
        event.persist();
        let { name, value } = event.target;
        setInputData({ ...inputData, [name]: value });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("booknow data:", inputData);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Booking Added Sucessfully',
            showConfirmButton: false,
            timer: 1500
          })
        

        
        let data=
        {
            name:inputData.name,
            phone:inputData.phone,
            destination:inputData.destination,
            startdate:inputData.startdate,
            enddate:inputData.enddate,
            email:inputData.email


        }
        axios.post(booking_api,data)
        .then((res)=>{
            console.log("api responce:",res);
            alert("booking successfully:");
            navigate("/profile")

        })
        .catch((err)=>{
            console.log(err);
        })
    }


    return (
        <div className='booknowform'>

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">NAME</label>
                <input type="text" name='name' onChange={handleChange} />

                <label htmlFor="email">EMAIL ID</label>
                <input type="text" name='email'onChange={handleChange} />

                <label htmlFor="phone">PHONE NO</label>
                <input type="text" name='phone' inputMode='numeric' onChange={handleChange} />

                <label htmlFor="destination">DESTINATION</label>
                <input type="text" name='destination' onChange={handleChange} />

                <label htmlFor="startdate">START DATE</label>
                <input type="date" name='startdate' onChange={handleChange} />

                <label htmlFor="enddate">END DATE</label>
                <input type="date" name='enddate' onChange={handleChange} />

                <input type="submit" value='submit' />

            </form>
        </div>
    )
}

export default BookNow