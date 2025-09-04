import React from 'react'
import End from './End'
import Nav from './Nav'

function About() {
  return (
    <div>

      <Nav/>
      <div className='ABOUT'>
        <h1 className='about1'>About GiftCraft</h1>
        <h2 className='about2'>We're passionate about helping you create meaningful, personalized gifts that capture your unique story and bring joy to those you love.</h2>
        </div>

        <div className='about3'> 
          <h1 className='a1'>Our Story</h1> <br/>
          <p className='a2'>Founded in 2020, GiftCraft began with a simple idea: everyone deserves to give and receive gifts that are as unique as they are. What started as a small project in a garage has grown into a trusted platform for custom gift creation.</p> <br/>
          <p className='a3'>We believe that the best gifts tell a story, evoke memories, and show how much you care. That's why we've dedicated ourselves to providing high-quality, customizable products that help you express your creativity and love.</p> <br/>
          <p className='a4'>Today, we're proud to have helped thousands of customers create meaningful gifts for birthdays, anniversaries, holidays, and life's special moments.</p>
        </div>

        <div className='about4'>
          <img src="/About image.jpg" className='aboutImage'/>
        </div>

      
      <h1 className='ab1'>Our Values</h1>
      
       <div className='AboutDivWhole'>
          <div className='aboutDiv1'>

                <div className='aboutIcon1'>
                <img src="/heart.png" height={30} width={30} className='aboutIcon'/>
                </div>

                <h3 className='a5'>Quality First</h3>
                <h4 className='a6'>We never compromise on quality. Every product is carefully crafted using premium materials and techniques.</h4>
            </div>

            <div className='aboutDiv2'>

                <div className='aboutIcon2'>
                <img src="/user.png" height={30} width={30} className='aboutIcon01'/>
                </div>

                <h3 className='a7'>Customer First</h3>
                <h4 className='a8'>Your satisfaction is our priority. We provide excellent support throughout your journey.</h4>
            </div>

            <div className='aboutDiv3'>

                <div className='aboutIcon3'>
                <img src="/badge.png" height={40} width={40} className='aboutIcon02'/>
                </div>

                <h3 className='a9'>Fast Delivery</h3>
                <h4 className='a10'>Quick turnaround times without compromising quality. Get your order when you need it.</h4>
            </div>

            <div className='aboutDiv4'>

                <div className='aboutIcon4'>
                <img src="/star.png" height={40} width={40} className='aboutIcon03'/>
                </div>

                <h3 className='a11'>Fast Delivery</h3>
                <h4 className='a12'>Quick turnaround times without compromising quality. Get your order when you need it.</h4>
            </div>
          </div>

          <h1 className='aboutTitle'>Meet Our Team</h1>
          

          <div className='wholediv'>
          <div className='wholediv1'>
          <img src="/Profile image1.jpg" height={100} width={100} className='aboutImg'/> 
          <div className='subAbout'>
          <h2>Sarah Johnson</h2>
          <h4>Founder & CEO</h4>
          <p>Passionate about creating meaningful connections through personalized gifts.</p>
          </div>
          </div>

           <div className='wholediv2'>
          <img src="/Profile image1.jpg" height={100} width={100} className='aboutImg'/> 
          <div className='subAbout1'>
          <h2>Mike Chen</h2>
          <h4>Head of Design</h4>
          <p>Brings creative visions to life with innovative design solutions.</p>
          </div>
          </div>

           <div className='wholediv3'>
          <img src="/Profile image1.jpg" height={100} width={100} className='aboutImg'/> 
          <div className='subAbout2'>
          <h2>Emma Davis</h2>
          <h4>Customer Success</h4>
          <p>Ensures every customer has an amazing experience from start to finish.</p>
          </div>
          </div>

           </div>

          <div className='aboutBox'>
            <div>
              <h2>10K+</h2>
              <p>Happy Customers</p>
            </div>

            <div>
              <h2>50K+</h2>
              <p>Products Created</p>
            </div>

            <div>
              <h2>99%</h2>
              <p>Satisfaction Rate</p>
            </div>

            <div>
              <h2>24/7</h2>
              <p>Customer Support</p>
            </div>
          </div>

          <End/>
    </div>
  )
}

export default About