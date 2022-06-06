import React from 'react'
import './home.css'
import Profile from '../../assets/home.png'

const Home = () => {
  return (
    <div id='home'>
      <div className="container">
        <div className="homepage grid2">
          <div className="pic">
            <img src={Profile} alt="picture_of_owner" />
          </div>
          <div className="banner_details"></div>
        </div>
      </div>
    </div>
  )
}

export default Home