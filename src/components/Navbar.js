import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#222',
    color: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'default',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1.8rem',
    margin: 0,
    padding: 0,
  };

  const navLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  };

  const dotsStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '25px',
    height: '18px',
    cursor: 'pointer',
  };

  const dotStyle = {
    width: '5px',
    height: '5px',
    backgroundColor: '#fff',
    borderRadius: '50%',
  };

  const mobileNavLinksStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100vh',
    width: '50vw',
    backgroundColor: '#222',
    flexDirection: 'column',
    gap: '1.8rem',
    padding: '4rem 2rem 2rem 2rem',
    display: 'flex',
    zIndex: 999,
    boxShadow: '-2px 0 8px rgba(0,0,0,0.7)',
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: isOpen ? 'block' : 'none',
    zIndex: 998,
  };

  // Close menu and navigate
  function handleNav(path) {
    setIsOpen(false);
    navigate(path);
  }

  return (
    <>
      <nav style={navStyle}>
        <h2 style={logoStyle}>HEMANTH KANCHARLA</h2>

        {isMobile && (
          <div
            style={dotsStyle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
          >
            <span style={dotStyle} />
            <span style={dotStyle} />
            <span style={dotStyle} />
          </div>
        )}

        <ul style={isMobile ? mobileNavLinksStyle : navLinksStyle}>
          <li>
            <button style={navLinkStyle} onClick={() => handleNav('/')}>
              Home
            </button>
          </li>
          <li>
            <button style={navLinkStyle} onClick={() => handleNav('/skills')}>
              Skills
            </button>
          </li>
          <li>
            <button style={navLinkStyle} onClick={() => handleNav('/projects')}>
              Projects
            </button>
          </li>
          <li>
            <button style={navLinkStyle} onClick={() => handleNav('/contact')}>
              Contact
            </button>
          </li>
          <li>
            <button style={navLinkStyle} onClick={() => handleNav('/edu')}>
              Education
            </button>
          </li>
        </ul>
      </nav>

      {isMobile && <div style={overlayStyle} onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default Navbar;
