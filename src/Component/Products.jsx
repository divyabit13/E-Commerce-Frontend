import React from 'react'

function Products(props) {

    const {image,name,description,price,btn1,btn2} = props.gift

  return (
    <>
    <div className='menu'>
    <div>
        <img src={image} className='image'/>
        <h3 className='name'>{name}</h3>
        <p className='description'>{description}</p>
        <h2 className='price'>₹ {price}</h2>
        <div className='btns'>
        <button className='button1'>{btn1}</button>
        <button className='button2'>{btn2}</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Products