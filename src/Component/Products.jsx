import React from 'react';
import { useCart } from './CartProvider'; 

function Products(props) {

    const {image,name,description,price,btn1,btn2} = props.gift;
    const { addToCart} = useCart();

    const customizeProduct = () => {
    const customItem = {
      name: name + " (Customized)",
      price: price + 50, 
      image,
    };
    addToCart(customItem);
  };

  return (
    <>
    <div className='menu'>
    <div>
        <img src={image} className='image'/>
        <h3 className='name'>{name}</h3>
        <p className='description'>{description}</p>
        <h2 className='price'>₹ {price}</h2>
        <div className='btns'>
          <button className="button2" onClick={customizeProduct}>
          Customize
        </button>
        <button className="button1" onClick={() => addToCart({ name, price, image })}>
          Add to Cart
        </button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Products