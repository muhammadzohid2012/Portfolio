import React from 'react'
import "./Input.css"

const Input = () => {
  return (
    <div className='input'>
        <p>Subscribe to get the Latest News</p>
        <h3>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</h3>
        <button>Subscribe</button>
        <input type="text" placeholder='Enter your email address'/>
       
    </div>
  )
}

export default Input