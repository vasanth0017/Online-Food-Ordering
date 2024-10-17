import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({setLogin}) => {
    const[current,setCurrent]=useState("Login")
  return (
    <div className='login'>
       <form  className="login-container">
            <div className="login-title">
                <h1>{current}</h1>
                <img onClick={()=>setLogin(false)} src={assets.cross_icon}/>
            </div>
            <div className="login-inputs">
                {current==="Login"?<></>:<input type="text" placeholder='Your Name' />}
                
                <input type="email" placeholder='Your Email' />
                <input type="password" placeholder='Your Password' />
            </div>
            <button>{current==="SignUp" ? "SingUp" :"Login" }</button>
            <div className="login-condition">
                <input type='checkbox' />
                <p>By Continuing,I Agree To The Terms Of Use & Privacy Policy</p>
            </div>
            {current==="Login"?
            <p>Create a new account?<span onClick={()=>setCurrent("SignUp")}>Click here</span></p>:
            <p>Already have a account?<span onClick={()=>setCurrent("Login")}>Login here</span></p>}
       </form>

    </div>
  )
}

export default Login
