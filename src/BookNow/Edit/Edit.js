import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useNavigate, useParams, } from 'react-router-dom'

const Edit = () => {


    let { eid } = useParams();

    let [inputData, setInputData] = useState({
        name: "", phone: "", startdate: "", enddate: "", destination: ""
    });

    let navigate=useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:2000/Booking/${eid}`)
            .then((res) => {
                console.log("edit res:", res);
                setInputData(res.data)

            })
            .catch((error) => {
                console.log("error", error);
            })
    }, [])


    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit data:", inputData);

        axios.put(`http://localhost:2000/Booking/${inputData.id}`,inputData)
        .then((res)=>{
            alert("Successfully Update")
            console.log(" Suceesfully Suceesfully:",res);
            navigate("/bookingdetail")
        })
        .catch()

    }


    return (

        <div className='booknowform'>

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">NAME</label>
                <input type="text" name='name' value={inputData.name} onChange={(event) => setInputData((prev) => ({ ...prev, name: event.target.value }))} />

                <label htmlFor="email">EMAIL ID</label>
                <input type="text" name='email' value={inputData.email} onChange={(event) => setInputData((prev) => ({ ...prev, email: event.target.value }))} />

                <label htmlFor="phone">PHONE NO</label>
                <input type="text" name='phone' inputMode='numeric' value={inputData.phone} onChange={(event) => setInputData((prev) => ({ ...prev, phone: event.target.value }))}/>

                <label htmlFor="destination">DESTINATION</label>
                <input type="text" name='destination' value={inputData.destination} onChange={(event) => setInputData((prev) => ({ ...prev, destination: event.target.value }))}/>

                <label htmlFor="startdate">START DATE</label>
                <input type="date" name='startdate' value={inputData.startdate} onChange={(event) => setInputData((prev) => ({ ...prev, startdate: event.target.value }))}/>

                <label htmlFor="enddate">END DATE</label>
                <input type="date" name='enddate' value={inputData.enddate} onChange={(event) => setInputData((prev) => ({ ...prev, enddate: event.target.value }))} />

                <input type="submit" value='submit' />

            </form>
        </div>

    )
}

export default Edit