import React from 'react'
import logo from '../../resources/logo.svg'
import './shared.scss'
import Nav from './Nav'
import { Link } from 'react-router-dom'


const Header = () => {
 return (
  <header className="header">
     <Nav />
     <img className="header--logo" src={logo} alt="good cusine logo" />
     <Link to="/recipecreate">
       <p className="header--create">Create Recipe</p>
     </Link>
     <Link to="/Login">
       <p className="header--login">LOGIN</p>
     </Link>
  </header>
 )
}
export default Header