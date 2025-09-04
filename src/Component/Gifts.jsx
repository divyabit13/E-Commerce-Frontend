import React from 'react'
import Products from './Products'

function Gifts(props) {
  
  return (
    <>
    <h2 className='gift-name'>Featured Products</h2>
    <h3 className='gift-sub'>Discover our most popular customizable items</h3>
    <div className='product'>
      {props.gift.map((item)=>(
        <Products gift={item} />
      ))}
    </div>
    </>
  )
}

export default Gifts