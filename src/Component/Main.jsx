import React from 'react'
import Home from './Home'
import Gifts from './Gifts';
import Review from './Review';
import End from './End';
import Nav from './Nav';

function Main() {

  const gift= [
  {
    id: 1,
    name: "Custom T-Shirt",
    image: "/T-shirt.jpg",
    description: "Premium quality cotton t-shirt with your custom design",
    price: 250,
    btn1: "Customize",
    btn2: "Order Now"
  },
  {
    id: 2,
    name: "Coffee Mug",
    image: "/coffeeMug.jpg",
    description: "Ceramic mug perfect for your morning coffee",
    price: 300,
    btn1: "Customize",
    btn2: "Order Now"
  },
  {
    id: 3,
    name: "Custom Pillow",
    image: "/Pillow.jpg",
    description: "Soft and comfortable pillow with custom print",
    price: 400,
    btn1: "Customize",
    btn2: "Order Now"
  },
  {
    id: 4,
    name: "Photo Frame",
    image: "/Frame.jpg",
    description: "Elegant wooden frame for your precious memories",
    price: 500,
    btn1: "Customize",
    btn2: "Order Now"
  },
  {
    id: 5,
    name: "Custom Phone Case",
    image: "/PhoneCase.jpg",
    description: "Protective case with your custom design",
    price: 450,
    btn1: "Customize",
    btn2: "Order Now"
  },
  {
    id: 6,
    name: "Gift Card",
    image: "/giftcard.jpg",
    description: "A little card, endless smiles.",
    price: 300,
    btn1: "Customize",
    btn2: "Order Now"
  }
];

const review =[
  {
    response:"Amazing quality and fast delivery! My custom t-shirt turned out exactly as I imagined.",
    name:"- Sarah Johnson"
  },
  {
    response:"Perfect gift for my mom's birthday. The photo frame was beautiful and arrived quickly.",
    name:"- Mike Chen"
  },
  {
    response:"Excellent customer service and the customization process was so easy to use!",
    name:"- Emma Davis"
  },
]




  return (
    <div>
        <Home/>
        <Gifts gift = {gift}/>
        <Review review = {review}/>
        <End/>
    </div>
  )
}

export default Main