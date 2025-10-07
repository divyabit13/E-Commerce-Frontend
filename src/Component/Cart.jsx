import React from "react";
import { useCart } from "./CartProvider"; // adjust path if needed

function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cartPage">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} className="cartItem">
            <img src={item.image} className="cartImage" />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(item.name)}>Remove</button>
          </div>
        ))
      )}
      {cart.length > 0 && <h2>Total: ₹{totalPrice}</h2>}
    </div>
  );
}

export default Cart;
