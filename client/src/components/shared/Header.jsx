import React from 'react'
import logo from '../../resources/logo.svg'
import './shared.scss'
import Nav from './Nav'
const Header = () => {
 return (
  <header className="header">
   <Nav />
   <img className="header--logo" src={logo} alt="good cusine logo" />
   <p className="header--login">LOGIN</p>
  </header>
 )
}
export default Header