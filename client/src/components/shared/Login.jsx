import React from "react"
import { Link } from 'react-router-dom'


const Form = () => {

  return (
    <div className='Login'>
      <form className="username">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="username" />
      </form>
      <form className="password">
        <label htmlFor="password">Password</label>
        <input type="text" name="username" placeholder="username" />
      </form>
      <button type='login' className="login-button">Let's Login in!</button>
      <Link to='/'>
        <label htmlFor="home" className="home">home</label>
      </Link>
    </div>
  )
}

export default Form

