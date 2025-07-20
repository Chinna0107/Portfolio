import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const footerStyle = {
    backgroundColor: '#222',
    color: '#fff',
    padding: '2rem 1rem',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    marginTop: 'auto',
  };

  const iconContainer = {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    fontSize: '1.5rem',
  };

  const iconStyle = {
    color: '#ffb700',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const iconHover = (e) => {
    e.target.style.color = '#ffa500';
  };

  const iconLeave = (e) => {
    e.target.style.color = '#ffb700';
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Hemanth Kancharla. All rights reserved.</p>
      <div style={iconContainer}>
        <a
          href="https://github.com/Chinna0107"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={iconHover}
          onMouseLeave={iconLeave}
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kancharla-hemanth-650215308/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={iconHover}
          onMouseLeave={iconLeave}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/kancharlaHeman4"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={iconHover}
          onMouseLeave={iconLeave}
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
