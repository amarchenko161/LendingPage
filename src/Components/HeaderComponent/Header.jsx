import React from 'react'
import EnglishIcon from '../../Assets/icons/EnglishIcon.svg'
import Logo from '../../Assets/icons/Logo.svg'
import './style.css'

const Header = () => {
  return (
    <header className='header-container'>
      <main className='sub-container'>
        <section className='logo'>
          <img src={Logo} alt ='logo' />
         <span>Logo</span> 
        </section>
        <nav className='dropDown-menu'>
          <span>Food</span>
          <span>Candy</span>
          <span>Bread</span>
        </nav>
        <nav className='switch-language'>
          <img src={EnglishIcon} alt='translate' />
          <span className='languane-name'>English</span>
        </nav>
        <nav className='auth'>
          <article>Login</article>
          <button className='get-started'> 
            Get Started
          </button>
        </nav>
      </main>
    </header>
  )
}

export default Header