import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Mail, Lock,Eye,EyeOff,Square,CheckSquare} from "lucide-react"
import {Link} from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';

function Login() {

  const navigate = useNavigate(); 
  const [showPassword,setshowPassword] = useState(false);
  const [rememberMe,setRememberMe] = useState(false);

  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5050/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        if (rememberMe) {
          localStorage.setItem("token", data.token);
        } else {
          sessionStorage.setItem("token", data.token);
        }
        toast.success("Login Successful ✅");
        navigate("/");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      toast.error("Error connecting to server");
    }
  };


  return (
    <div className='LoginPageDiv'>
      <Toaster position="center" reverseOrder={false} />
        <div className='loginPage'>
            <div className='loginTitle'>
            <h3 className='loginTitle1'>Welcome Back</h3>
            <p>Sign in to your account</p>
            </div>

            <div className='loginForm'>
            <form onSubmit={(e)=> e.preventDefault()}>
                <label className='loginSub'>Email Address</label><br/>
                <div className="input-container">
                <Mail className="icon"/>

                <input type='email'
                placeholder='Enter your email'
                className='placeholder'
                value={ email}
                onChange={(e)=>setEmail(e.target.value)}
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
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                <span className='iconEye' 
                onClick={()=>setshowPassword(!showPassword)}
                style={{cursor:"pointer"}}>
                {showPassword ? <EyeOff/> : <Eye/>}
                </span>
                
                </div>

                <div className='remember'
                onClick={()=>setRememberMe(!rememberMe)} 
                 style={{cursor:"pointer" , color:"gray"}}>
                  {rememberMe ? <CheckSquare size={20}/> : <Square size={20}/>}

                  <span className='rememberMe' >Remember Me</span>
                </div>

            </form>
            </div>

            <a href="#" className='forget'>Forget your password?</a>

            <button onClick={handleLogin} className='signIn' >Sign in</button>

            <p className='loginEnd'>Don't have an account? <Link to="/signup" className='in'> Sign up</Link> </p>
        </div>
    </div>
  )
}

export default Login

