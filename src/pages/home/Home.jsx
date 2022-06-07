import React from 'react'
import './home.css'

import Banner from '../../components/home/banner/Banner'
import Feature from '../../components/home/feature_list/Feature'
import About from '../../components/home/about/About'
import Services from '../../components/home/services/Services'
import Look from '../../components/home/look/Look'

const Home = () => {
  return (
    <div id='home'>
      <Banner/>
      <Feature/>
      <About/>
      <Services/>
      <Look/>
    </div>
  )
}

export default Home