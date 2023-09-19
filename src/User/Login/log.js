import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logData } from '../../Redux/Authslice/AuthSlice';
import './log.css'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Log = () => {



    let dispatch=useDispatch();
    let navigate=useNavigate();
    

    let [inputData,setInputData]=useState({
        email:"",password:"",
    })

    let handleChange=(event)=>{
        event.persist();
        let{name,value}=event.target;
        setInputData({...inputData,[name]:value});
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log("submit data:",inputData);
        Swal.fire({
            title: 'log In Sucessfully ',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          }) ;
          
          
          let formdata=new FormData();
          formdata.append("email",inputData.email);
          formdata.append('password',inputData.password);
          
          dispatch(logData(formdata))
          
          navigate("/") 
    }



  return (
    <div className='logform'>
        <h2>Sign In</h2>


        <form onSubmit={handleSubmit}>

            <label htmlFor='email'>EMAIL ID</label>
            <input type="text" name='email' onChange={handleChange} />

            <label htmlFor="password">PASSWORD</label>
            <input type="text" name='password' onChange={handleChange}/>
            
            <input type='submit' value='submit'></input>

        </form>

        <p>Create An Acount </p>
        <Link to={"/reg"}>
            <button className='button1'>Sign Up</button>
        </Link>
    </div>
  )
}

export default Log