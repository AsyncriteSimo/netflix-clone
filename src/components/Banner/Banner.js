import React from 'react'
import './banner.css'

function Banner() {

    function truncate(string, n){
        return string?.length > n ? string.substring(0, n-1) + '...' : string;
    }

  return (
    <header className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
        backgroundPosition: "center center",
    }}> 
        <div className="banner__contents">
            <h1 className="banner_title" >Movie Name</h1>
            <div className="banner__buttons">
                <button className="banner__button" >Play</button>
                <button className="banner__button" >My List</button>
            </div>
            <h1 className="banner__description">
                {truncate(`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum 
            dolor sit amet. Lorem ipsum dolor sit 
            amet, consetetur sadipscing elitr, sed 
            diam nonumy eirmod tempor invidunt ut labore 
            et dolore magna aliquyam erat, sed diam voluptua.
             At vero eos et accusam et justo duo dolores et 
             ea rebum. Stet clita kasd gubergren, no sea 
             takimata sanctus
             est Lorem ipsum dolor sit amet.`, 150)}
            </h1>
        </div>

        <div className="banner__fadeBottom" />
    </header>
  )
}

export default Banner