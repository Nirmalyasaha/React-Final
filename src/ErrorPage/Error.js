import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='errormain'>
        <div className='error'>
            <h1>You Need To Log In First !!</h1>
            <Link to='/log'>
                <button className='button1'>LOG IN</button>
            </Link>
        </div>
    </div>
  )
}

export default Error