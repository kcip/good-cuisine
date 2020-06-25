import React from "react"
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './shared.scss';
import logo from '../../resources/logo.svg'
const Form = () => {

 return (
  <>
   <Header />
   <div className="login--wrapper">
    <div className='Login'>
     <div className="login--image">
      <img src={logo} alt="good cusine logo" className="logo" />
     </div>

     <form className="login--form">
      <label htmlFor="username">Username</label>
      <input type="text" name="username" placeholder="username" autoComplete="off" />
      <label htmlFor="password">Password</label>
      <input type="text" name="username" placeholder="username" autoComplete="off" />
      <button type='login' className="login-button">Let's Login in!
      </button>

     </form>

     <Link to='/' className="home-link">
      <label htmlFor="home" className="home">home</label>
     </Link>


    </div>
   </div>
   <Footer />
  </>
 )
}

export default Form


