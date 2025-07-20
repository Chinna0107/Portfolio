import React from 'react';

function Contact() {
  const containerStyle = {
    margin: '2rem',
    padding: '2rem',
    background: 'linear-gradient(135deg, #c30a76ff, #f21d5dff)', // matched to Home page
    color: '#fff',
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
    border: 'none',
    fontSize: '1rem',
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.8rem 2rem',
    border: 'none',
    borderRadius: '25px',
    backgroundColor: '#fff',
    color: '#1e1e2f',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 3px 8px rgba(228, 17, 17, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations, projects, or any queries!</p>
      <form>
        <input style={inputStyle} type="text" placeholder="Your Name" required />
        <input style={inputStyle} type="email" placeholder="Your Email" required />
        <textarea style={inputStyle} rows="5" placeholder="Your Message" required />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
