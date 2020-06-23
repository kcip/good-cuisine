import React from "react"


const Form = () => {
  
    return(
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
    </div>
    )
}
 
export default Form

