import React from 'react'
import { useState } from 'react';
import {User,Mail, Lock,Eye,EyeOff,Square,CheckSquare} from "lucide-react"
import {Link} from 'react-router-dom';


function Signup() {
    const [showPassword,setshowPassword] = useState(false);
    const [rememberMe,setRememberMe] = useState(false);


  return (
    <div className='WholeSignIn'>
        <div className='Signin'>
            <div className='SignInTitle'>
            <h2 className='SigninSub'>Create Account</h2>
            <p>Join GiftCraft today</p>
            </div>
            <br/>

            <form>
                <label className='SignupTitle'>Full Name</label> <br/>
                <div>
                <User className='signinIcon' size={20}/>
                <input
                placeholder='Enter your full name'
                className='signinLabel'/>
                </div>
                <br/>
  

                <label className='SignupTitle'>Email Address</label><br/>
                <div>
                <Mail className='signinIcon' size={20}/>
                <input
                placeholder='Enter your email'
                className='signinLabel'/>
                </div>
                <br/>
                

                <label className='SignupTitle'>Password</label><br/>
                <div>
                <Lock className='signinIcon' size={20}/>
                <input
                type={showPassword ? "text" : "password"}
                placeholder='Create a password'
                className='signinLabel'/>
                <span className='iconEye' 
                    onClick={()=>setshowPassword(!showPassword)}
                    style={{cursor:"pointer"}}>
                    {showPassword ? <EyeOff/> : <Eye/>}
                  </span>
                </div>
                

                <label className='SignupTitle'>Confirm Password</label><br/>
                <div>
                <Lock className='signinIcon' size={20}/>
                <input
                type={showPassword ? "text" : "password"}
                placeholder='Confirm your password'
                className='signinLabel'/>
                <span className='iconEye' 
                    onClick={()=>setshowPassword(!showPassword)}
                    style={{cursor:"pointer"}}>
                    {showPassword ? <EyeOff/> : <Eye/>}
                </span>
                </div>   
            </form>

            <div className='remember'
              onClick={()=>setRememberMe(!rememberMe)}  style={{cursor:"pointer" , color:"gray"}}>
              {rememberMe ? <CheckSquare size={20}/> : <Square size={20}/>}
            <span className='rememberMe'>I agree to the <a href="#" className='in'>Terms and Conditions</a></span>
            </div>

            <button className='createAccount'>Create Account</button>

            <p className='Signup-end'>Already have an account? <Link to={'/login'} className='in'>Sign in </Link> </p>

        </div>
    </div>
  )
}

export default Signup