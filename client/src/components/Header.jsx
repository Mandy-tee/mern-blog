import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
// import {Fabars} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  return (
    <nav>
      <div className='container nav_container'>
        <Link to='/' className='nav_logo'>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className='nav_menu'>
          <li><Link to='/profile/sdfsdf'>Ernest Achiever</Link></li>
          <li><Link to='/create'>Create Post</Link></li>
          <li><Link to='/authors'>Authors</Link></li>
          <li><Link to='/logout'>Logout</Link></li>
        </ul>
        <button className='nav_toggle-btn'>
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  )
}

export default Header
