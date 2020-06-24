import React from 'react'
import logo from '../../resources/logo.svg'
import './shared.scss'
import Nav from './Nav'
import { Link } from 'react-router-dom'


const Header = () => {
 return (
  <header className="header">

   <Nav />
   <Link to='/' exact className="header--logo">
    <img src={logo} alt="good cusine logo" />
   </Link>
   <div className="header--links">
    <Link to="/recipecreate">
     <p className="header--create">Create Recipe</p>
    </Link>
    <Link to="/Login">
     <p className="header--login">Login</p>
    </Link>
   </div>

  </header>
 )
}
export default Header