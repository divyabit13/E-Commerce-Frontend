import React from 'react'
import End from './End'
import Form from './Form'
import Nav from './Nav'


function Contact() {

  return (
    <div>

      <Nav/>
        <div className='contactTitle'>
        <h1>Contact Us</h1>
        <p className='contactPara'>Have a question, need help with an order, or want to share feedback? We'd love to hear from you!</p>
        </div>


        <div className='contactTitle2'>
            <h2>Get in Touch</h2>
        </div>

        <div>
            <div className='contactDiv1'>
                <div className='contact'>
                <img src="/telephone.png" height={30} width={30} className='contactImage'/>
                </div>
                <div className='contactDisplay'>
                <h3 className=''>Phone</h3>
                <p className=''>+1 (555) 123-4567 <br/> Mon-Fri 9AM-6PM EST</p>
                </div>
            </div>

            <div className='contactDiv2'>
                <div className='contact'>
                <img src="/mail.png" height={30} width={30} className='contactImage'/>
                </div>
                <div className='contactDisplay'>
                <h3 className=''>Email</h3>
                <p className=''>hello@giftcraft.com <br/> We'll respond within 24 hours</p>
                </div>
            </div>

            <div className='contactDiv3'>
                <div className='contact'>
                <img src="/location.png" height={30} width={30} className='contactImage'/>
                </div>
                <div className='contactDisplay'>
                <h3 className=''>123 Craft Street</h3>
                <p className=''>hello@giftcraft.com <br/> Creative City, CC 12345</p>
                </div>
            </div>

            <div className='contactDiv4'>
                <div className='contact'>
                <img src="/location.png" height={30} width={30} className='contactImage'/>
                </div>
                <div className='contactDisplay'>
                <h3 className=''>Business Hours</h3>
                <p className=''>Monday - Friday: 9:00 AM - 6:00 PM <br/> Saturday: 10:00 AM - 4:00 PM <br/>Sunday: Closed</p>
                </div>
            </div>
        </div>

        
       
        <Form/>
     
        <div className='QuesTag'>
        <h1 className='quesTitle'>Frequently Asked Questions</h1>
        <div className='quesDiv'>
        <div className='contactQues'>
            <h2 className='ques1'>How long does customization take?</h2>
            <p className='ques2'>Most custom orders are completed within 3-5 business days. Rush orders can be accommodated for an additional fee.</p>
        </div>
        <div className='contactQues'>
            <h2 className='ques1'>What file formats do you accept?</h2>
            <p className='ques2'>We accept PNG, JPG, SVG, and PDF files. For best results, use high-resolution images (300 DPI or higher).</p>
        </div>
        </div>

        <div className='quesDiv2'>
        <div className='contactQues'>
            <h2 className='ques1'>Do you offer bulk discounts?</h2>
            <p className='ques2'>Yes! We offer discounts for orders of 10 or more items. Contact us for a custom quote.</p>
        </div>
        <div className='contactQues'>
            <h2 className='ques1'>What's your return policy?</h2>
            <p className='ques2'>We offer a 30-day satisfaction guarantee. If you're not happy with your order, we'll make it right.</p>
        </div>
        </div>
        </div>

        <div className='map'>
            <h2 className='mapTit'>Visit Our Store</h2>
            <div className='map1'>
                <img src="/Map.jpg" className='mapImage'/>
                <div className='mapContent'>
                <h5 className='mapTitle'>Interactive map would be integrated here</h5>
                <p>123 Creative Street, Design District, New York, NY 10001</p>
           </div>
            </div>
        </div>


       <div className='ContactAbout'>
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
       
       <div className='EndContact'>
        <End/>
        </div>
    </div>
  )
}

export default Contact