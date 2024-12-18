import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <nav>
      <div className='container nav_container'>
        <Link to='/' className='nav_logo'>
        <img src={Logo} alt="Navbar Logo" />
        </Link>

      </div>
    </nav>
  )
}

export default Header
