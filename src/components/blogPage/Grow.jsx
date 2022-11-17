import React from 'react'
import overlay from "../../assets/business-people.jpg"
const Grow = () => {
  return (
    <div className='grow-box'>
          <h2>Grow your business with Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, doloremque.</p>
          <img src={overlay} alt="" />
          <div className="image-overlay"></div>
          <div className="btn">
                 <a href="s">Get Started</a>
          </div>
    </div>
  )
}

export default Grow