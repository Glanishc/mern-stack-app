import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Contact = () => {
  const [dlno, setDLno] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const contactUser = async (e) => {
    e.preventDefault();
    try {
      if (dlno.length !== 16) {
        alert("Driver's License Number must be exactly 16 characters.");
        return;
      }
  
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      const response = await axios.post('http://localhost:3000/contact/', {
        dlno: dlno,
        email: email,
        message: message,
      });
      console.log(response.data.data);
      alert('Message sent successfully');
    } catch (error) {
      console.log(error);
      alert('Failed to send Message');
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setMessage(value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <div className='loginbox'>
      <img src='operator.png' className='avatar' />
      <form>
        <label htmlFor="">Driver License Number:</label><br />
        <input type='text' placeholder='Type DL Number' onChange={(e) => setDLno(e.target.value)} minLength={16} maxLength={16} required/><br />
        <label htmlFor="">Email:</label><br />
        <input type='email' placeholder='Type email' onChange={(e) => setEmail(e.target.value)} minLength={3} required/><br />
        <label htmlFor="">Message:</label>
          <textarea className="expanding-textarea" value={message} onChange={handleInputChange} placeholder="Type here..." style={{ height: 'auto' }} required/>
          <input type="submit" className="loginn" onClick={contactUser} value="Send Message" />
      </form>
    </div>
  );
};

export default Contact;
