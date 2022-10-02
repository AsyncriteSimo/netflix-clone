import React from 'react'
import Banner from '../Banner/Banner'
import Nav from '../Nav/Nav'
import './homeScreen.css'

function Homescreen() {
  return (
    <div className="homeScreen" >
        {/**Nav */}
        <Nav />

        {/**Banner */}
        <Banner />

        {/**Row */}
    </div>
  )
}

export default Homescreen