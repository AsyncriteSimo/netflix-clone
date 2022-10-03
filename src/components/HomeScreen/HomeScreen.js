import React from 'react'
import requests from '../../Request'
import Banner from '../Banner/Banner'
import Nav from '../Nav/Nav'
import Row from '../Row/Row'
import './homeScreen.css'

function Homescreen() {
  return (
    <div className="homeScreen" >
        {/**Nav */}
        <Nav />

        {/**Banner */}
        <Banner />

        {/**Row */}
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTopRated} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentary} />
    </div>
  )
}

export default Homescreen