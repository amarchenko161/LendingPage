import React from 'react'

import './style.css'
import EnglishIcon from '../../Assets/EnglishIcon.svg'
import Logo from '../../Assets/Logo.svg'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='sub-container'>
        <div className='logo'>
          <img src={Logo} alt ='logo' />
          Logo
        </div>
        <div className='dropDown-menu'>
          <span>Food</span>
          <span>Candy</span>
          <span>Bread</span>
        </div>
        <div className='switch-language'>
          <img src={EnglishIcon} alt='translate' />
          <span className='languane-name'>English</span>
        </div>
        <div className='auth'>
          <span>Login</span>
          <div className='get-started'> 
            Get Started
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header