import React from 'react'
import { Link } from "react-router-dom";
import Nav from './Nav';

function Home() {
  return (
    <div>
        
        <Nav/>
        <div className='images'>
             <h1 className='con1'>Create Unique Gifts That Tell Your Story</h1>
             <h2 className='con2'>Customize t-shirts,pillows and more with your personal touch. Perfect <br/> for gifts,memories, or treating yourself</h2>
             <button className='btn2'>Shop Now</button>
        </div>

        <div className='con3'>
            <h2 className='tit1'>Why Choose GiftCraft</h2>
            <h3 className='tit2'>We're committed to delivering high-quality custom products that exceed your <br/> expectations</h3>
        </div>
            

            <div className='div'>

            <div className='div1'>

                <div className='icon2'>
                <img src="/heart.png" height={30} width={30} className='icon22'/>
                </div>

                <h3 className='h1'>Premium Quality</h3>
                <h4 className='h2'>We use only the finest materials and printing techniques to ensure your custom products last.</h4>
            </div>

            <div className='div2'>

                <div className='icon3'>
                <img src="/user.png" height={30} width={30} className='icon23'/>
                </div>

                <h3 className='h3'>Customer First</h3>
                <h4 className='h4'>Your satisfaction is our priority. We provide excellent support throughout your journey.</h4>
            </div>

            <div className='div3'>

                <div className='icon4'>
                <img src="/badge.png" height={40} width={40} className='icon24'/>
                </div>

                <h3 className='h5'>Fast Delivery</h3>
                <h4 className='h6'>Quick turnaround times without compromising quality. Get your order when you need it.</h4>
            </div>
         
            </div>

    </div>
  )
}

export default Home