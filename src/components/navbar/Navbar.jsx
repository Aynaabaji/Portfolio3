import React from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BiCategory} from 'react-icons/bi'
import {GoThreeBars} from 'react-icons/go'

const Navbar = () => {
  return (
    <div id='navs'>
      <div className="container">
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" className='l_for_logo'/>
            </div>
            <div className="navz">
                <div className="nav_links">
                    <Link className="lin" to="/">Home</Link>
                    <Link className="lin" to="/">Pages</Link>
                    <Link className="lin" to="/">Blog</Link>
                    <Link className="lin" to="/">Portfolio</Link>
                    <Link className="lin" to="/">Shop</Link>
                    <Link className="lin" to="/">Contact</Link>
                    <a href="http://www.aynaabaji.com"><AiOutlineSearch className='nav_icons'/></a>
                    <a href="http://www.aynaabaji.com"><RiShoppingBagFill className='nav_icons'/></a>
                    <a href="http://www.aynaabaji.com"><BiCategory className='nav_icons'/></a>
                    <GoThreeBars className='icon_bar'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
