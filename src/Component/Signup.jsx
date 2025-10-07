import React from 'react'
import { useState } from 'react';
import {User,Mail, Lock,Eye,EyeOff,Square,CheckSquare} from "lucide-react"
import {Link, useNavigate} from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';


function Signup() {

  const navigate = useNavigate();

  const [showPassword,setshowPassword] = useState(false);
  const [rememberMe,setRememberMe] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();


    if (!fullName || !email || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }
     if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!rememberMe) {
      toast.error("You must agree to the Terms and Conditions");
      return;
    }
        try {
      const response = await fetch("http://localhost:5050/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("User registered successfully ✅");
        setTimeout(() => navigate("/login"), 1500); 
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (err) {
      toast.error("Error connecting to server");
    }
  };

  return (
    <div className='WholeSignIn'>
            <Toaster position="top-center" reverseOrder={false} />
        <div className='Signin'>
            <div className='SignInTitle'>
            <h2 className='SigninSub'>Create Account</h2>
            <p>Join GiftCraft today</p>
            </div>
            <br/>

            <form onSubmit={handleSignup}>
                <label className='SignupTitle'>Full Name</label> <br/>
                <div>
                <User className='signinIcon' size={20}/>
                <input
                placeholder='Enter your full name'
                className='signinLabel'
                value={fullName}
                  onChange={(e)=> setFullName(e.target.value)}
                />
                </div>
                <br/>
  

                <label className='SignupTitle'>Email Address</label><br/>
                <div>
                <Mail className='signinIcon' size={20}/>
                <input
                placeholder='Enter your email'
                className='signinLabel'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <br/>
                

                <label className='SignupTitle'>Password</label><br/>
                <div>
                <Lock className='signinIcon' size={20}/>
                <input
                type={showPassword ? "text" : "password"}
                placeholder='Create a password'
                className='signinLabel'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />

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
                className='signinLabel'
                value={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value)}
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
            <span className='rememberMe'>I agree to the <a href="#" className='in'>Terms and Conditions</a>
            </span>
            </div>
                <button className='createAccount'type='submit'>Create Account</button>
            </form>

           

            

            <p className='Signup-end'>Already have an account? <Link to={'/login'} className='in'>Sign in </Link> 
            </p>

        </div>
    </div>
  )
}

export default Signup;