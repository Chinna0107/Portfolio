import React, { useState } from 'react';
import Swal from 'sweetalert2';
import config from './config';

const apiUrl = process.env.NODE_ENV === 'development' 
  ? config.LOCAL_BASE_URL
  : config.BASE_URL;

function Contact() {
  const containerStyle = {
    margin: '2rem',
    padding: '2rem',
    background: '#003366',
    color: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    margin: '0.5rem 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.8rem 2rem',
    border: 'none',
    borderRadius: '25px',
    backgroundColor: '#ffffff',
    color: '#003366',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 3px 8px rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for reaching out. I will get back to you soon.',
          confirmButtonColor: '#003366',
        });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#003366',
      });
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations, projects, or any queries!</p>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          style={inputStyle}
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
