import React from 'react';

function Projects() {
  const containerStyle = {
    margin: '2rem auto',
    padding: '3rem',
    maxWidth: '700px',
    background: 'radial-gradient(circle at top left, #ffba00, #f7971e)',
    borderRadius: '20px',
    boxShadow: '0 12px 40px rgba(255, 185, 0, 0.5)',
    color: '#1a1a1a',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '900',
    marginBottom: '1.5rem',
    textShadow: '2px 2px 6px rgba(0,0,0,0.15)',
  };

  const descStyle = {
    fontSize: '1.2rem',
    lineHeight: 1.7,
    marginBottom: '2rem',
    fontWeight: '500',
  };

  const linkStyle = {
    padding: '0.75rem 2rem',
    background: 'linear-gradient(45deg, #ff9a00, #ffba00)',
    borderRadius: '50px',
    color: '#fff',
    fontWeight: '700',
    fontSize: '1.1rem',
    textDecoration: 'none',
    boxShadow: '0 6px 12px rgba(255, 186, 0, 0.6)',
    transition: 'all 0.3s ease',
    display: 'inline-block',
  };

  const linkHoverStyle = {
    background: 'linear-gradient(45deg, #ffba00, #ff9a00)',
    boxShadow: '0 8px 18px rgba(255, 186, 0, 0.8)',
    transform: 'scale(1.05)',
  };

  // For handling hover inline, use React state:
  const [hover, setHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>ChinnaMart</h2>
      <p style={descStyle}>
        An e-commerce platform for fresh groceries, vegetables, and dairy products built with React, Node.js, PostgreSQL, and Razorpay integration.
      </p>
      <a
        href="https://www.chinnamart.in"
        target="_blank"
        rel="noopener noreferrer"
        style={hover ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Visit ChinnaMart.in
      </a>
    </div>
  );
}

export default Projects;
