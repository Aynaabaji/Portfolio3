import React from 'react'
import './banner.css'
import Profile from '../../../assets/home.png'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {AiOutlineYoutube} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'
import {AiOutlineDribbble} from 'react-icons/ai'

const Banner = () => {
  return (
    <div>
        <div className="container">
        <div className="homepage grid2">
          <div className="pic">
            <img src={Profile} alt="picture_of_owner" />
          </div>
          <div className="banner_details">
            <div className="banner_dets">
              <h1>I am a Web Designer</h1>
              <div className="banner_icons">
                <div className="ban-icon ic1"><FiFacebook/></div>
                <div className="ban-icon ic2"><BsInstagram/></div>
                <div className="ban-icon ic3"><FiTwitter/></div>
                <div className="ban-icon ic4"><AiOutlineYoutube/></div>
                <div className="ban-icon ic5"><FaPinterestP/></div>
                <div className="ban-icon ic6"><AiOutlineDribbble/></div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nesciunt quae nam quaerat accusamus iusto, deleniti optio ipsa ab vel? Est repellendus quidem itaque quae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              </p>
              <div className="banner_button">
                <button className="ban_but btn btn-primary">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner