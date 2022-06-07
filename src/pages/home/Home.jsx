import React from 'react'
import './home.css'

import Banner from '../../components/home/banner/Banner'
import Feature from '../../components/home/feature_list/Feature'
import About from '../../components/home/about/About'

const Home = () => {
  return (
    <div id='home'>
      <Banner/>
      <Feature/>
      <About/>
    </div>
  )
}

export default Home