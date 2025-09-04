import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Mail, Lock,Eye,EyeOff,Square,CheckSquare} from "lucide-react"
import {Link} from 'react-router-dom';

function Login() {

  const navigate = useNavigate(); 
  const [showPassword,setshowPassword] = useState(false);
  const [rememberMe,setRememberMe] = useState(false);

  return (
    <div className='LoginPageDiv'>
        <div className='loginPage'>
            <div className='loginTitle'>
            <h3 className='loginTitle1'>Welcome Back</h3>
            <p>Sign in to your account</p>
            </div>

            <div className='loginForm'>
            <form>
                <label className='loginSub'>Email Address</label><br/>
                <div className="input-container">
                <Mail className="icon"/>
                <input type='email'
                placeholder='Enter your email'
                className='placeholder'
                />
                </div>
                <br/>
    
                <label className='loginSub'>Password</label><br/>
                <div className="input-container">
                <Lock className='icon'/>
                <input 
                type={showPassword ? "text" : "password"}
                placeholder='Enter your password'
                className='placeholder'
                />
                <span className='iconEye' 
                onClick={()=>setshowPassword(!showPassword)}
                style={{cursor:"pointer"}}>
                {showPassword ? <EyeOff/> : <Eye/>}
                </span>
                
                </div>

                <div className='remember'
                onClick={()=>setRememberMe(!rememberMe)}  style={{cursor:"pointer" , color:"gray"}}>
                  {rememberMe ? <CheckSquare size={20}/> : <Square size={20}/>}
                  <span className='rememberMe' >Remember Me</span>
                </div>

            </form>
            </div>

            <a href="#" className='forget'>Forget your password?</a>

            <button onClick={()=>navigate('/')} className='signIn' >Sign in</button>

            <p className='loginEnd'>Don't have an account? <Link to="/signup" className='in'> Sign up</Link> </p>
        </div>
    </div>
  )
}

export default Login

