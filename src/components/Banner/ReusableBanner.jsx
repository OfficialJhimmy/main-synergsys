import React from 'react'
import Navbar from '../Navigation/Navbar'
import './index.css'

const ReusableBanner = ({title, subText}) => {
  return (
    <>
      <div className="homehero__container">
        <Navbar/>

        <div className="homehero__content">
          <h2>{title}</h2>
          <p>
            {subText}
          </p>
          
        </div>
      </div>
    </>
  )
}

export default ReusableBanner