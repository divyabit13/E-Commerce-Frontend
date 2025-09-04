import React, { useState } from 'react'

function Form() {
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormData({
          ...formData,[name]:value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      };


  return (
    <div className='formDiv'>

        <form onSubmit={handleSubmit}>
        <h2>Send us a Message</h2>
        <label>Your Name</label> <br/>
        <input type='text'
        name='name'
        placeholder='Enter your full name'
        className='label'
        value={formData.name}
        onChange={handleChange}
        />

        <br/>
        <br/>

        <label>Email Address</label><br/>
        <input type='email'
        name='email'
        placeholder='Enter your email'
        className='label'
        value={formData.email}
        onChange={handleChange}
        />
        <br/><br/>

        <label>Subject</label><br/>
        <input type='text'
        name='subject'
        placeholder='What is this about?'
        className='label'
        value={formData.subject}
        onChange={handleChange}
        />
        <br/><br/>

        <label> Message</label><br/>
        <input type='text'
        name='message'
        placeholder='Tell us how we can help you...'
        className='label2'
        value={formData.message}
        onChange={handleChange}
        />
        <br/><br/>

        <button type='submit' className='submitButton'>Submit</button>

        </form>
    </div>
  )
}

export default Form