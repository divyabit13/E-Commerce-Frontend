import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Get token fresh from storage whenever you need it
  const getToken = () =>
    localStorage.getItem("token") || sessionStorage.getItem("token");

  // Fetch cart when component mounts or token changes
  useEffect(() => {
    const token = getToken();
    if (!token) return;

    fetch("http://localhost:5050/cart", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.cart) setCart(data.cart);
      })
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  const addToCart = async (item) => {
    const token = getToken();
    if (!token) return alert("Please login first");

    try {
      const res = await fetch("http://localhost:5050/cart/add", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(item),
      });
      const data = await res.json();
      if (res.ok) setCart(data.cart);
      else alert(data.message);
    } catch (err) {
      console.error("Add to cart error:", err);
    }
  };

  const removeFromCart = async (name) => {
    const token = getToken();
    if (!token) return alert("Please login first");

    try {
      const res = await fetch(`http://localhost:5050/cart/remove/${name}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setCart(data.cart);
      else alert(data.message);
    } catch (err) {
      console.error("Remove from cart error:", err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
