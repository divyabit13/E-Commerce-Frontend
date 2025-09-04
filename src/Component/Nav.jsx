import React from 'react'
import {useNavigate} from 'react-router-dom';



function Nav() {

    const navigate = useNavigate();

  return (
    <div className='navigation'>
        <div className='title'>
        <img src="/box.svg" width={50} height={50} className='iconShop'/>
        <h2 className='title2'>GiftCraft</h2>
        </div>
        <div className='Nav-bar'>
        <button onClick={()=>navigate('/')}  className="nav1">Home</button>
        <button onClick={()=>navigate('/about')}  className="nav2">About</button>
        <button onClick={()=>navigate('/contact')}  className="nav3">Contact</button>
        </div>
         <div className='end'>
            <img src="/shopping-cart.png" width={40} height={40}/>
            <button onClick={()=>navigate('/login')} className='btn1'>Login</button>
        </div>
    </div>
  )
}

export default Nav;