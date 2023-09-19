import React, { useState } from 'react'
import './reg.css'
import { useDispatch } from 'react-redux'
import { regData } from '../../Redux/Authslice/AuthSlice';




const Reg = () => {



    let dispatch = useDispatch();

    let [inputdata, setInputData] = useState({
        firstname: "", lastname: "", email: "", password: "",
        isError: { firstname: "", lastname: "", email: "" }
    })

    let [inputImage, setInputImage] = useState();  // for image 


    let valid_email = RegExp('^([a-z0-9.-]+)@([a-z]{2,15}).([a-z.]{2,10})$')


    let handleChange = (event) => {
        event.persist();
        let { name, value } = event.target;
        let err = { ...inputdata.isError }

        switch (name) {

            //// for email
            case 'email':
                if (value.length <= 0) err.email = "required field !! ";
                else if (!valid_email.test(value))
                    err.email = "wrong patern"
                else err.email = "";
                break;


            //// for first name
            case 'firstname':
                if (value.length <= 0) err.firstname = 'Required Filed !!'
                else err.firstname = "";
                break;


                //// for last name

                case 'lastname':
                    if(value.length <=0) err.lastname="Required Filed !!"
                    else err.lastname="";
                    break;

        }
        setInputData({ ...inputdata, [name]: value, isError: err });
        console.log("validation error:", inputdata.isError);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted data:", inputdata, inputImage);

        let formData = new FormData();
        formData.append("first_name", inputdata.firstname);
        formData.append("last_name", inputdata.lastname);
        formData.append("email", inputdata.email);
        formData.append("password", inputdata.password);
        formData.append("profile_pic", inputImage)


        dispatch(regData(formData))
    }




    return (
        <div className='regform'>
            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit}>

                <label htmlFor='firstname'>FIRST NAME</label>
                <input type='text' name='firstname' onChange={handleChange}></input>
                {inputdata.isError.firstname.length > 0 ? <p className='regerror'>{inputdata.isError.firstname}</p> : ""}

                <label htmlFor='lastname'>LAST NAME</label>
                <input type='text' name='lastname' onChange={handleChange}></input>
                {inputdata.isError.lastname.length > 0 ? <p className='regerror'>{inputdata.isError.lastname}</p> : ""}


                <label htmlFor='email'>EMAIL</label>
                <input type='text' name='email' onChange={handleChange}></input>
                {inputdata.isError.email.length > 0 ? <p className='regerror'>{inputdata.isError.email}</p> : ""}

                <label htmlFor='password'> PASSWORD</label>
                <input type='text' name='password' onChange={handleChange}></input>

                <label htmlFor='image'>IMAGE</label>
                <input type="file" name='image' onChange={(event) => setInputImage(event.target.files[0])} accept='image/*'></input>

                <input type="submit" value='submit' />
            </form>
        </div>
    )
}

export default Reg