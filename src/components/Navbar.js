import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const styles = {
    navContainer: {
      backgroundColor: '#222',
      color: '#fff',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1000,
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLink: {
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      padding: '5px 10px',
    },
    hamburger: {
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '24px',
      cursor: 'pointer',
      zIndex: 1100,
    },
    mobileMenu: {
  position: 'fixed',
  top: '60px',
  right: menuOpen ? '0' : '-60%',
  width: '50vw',
  backgroundColor: '#333',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1rem',
  gap: '15px',
  borderRadius: '10px 0 0 10px',
  transition: 'right 0.3s ease-in-out',
  zIndex: 1001,
  height: 'auto', // 👈 This will make height depend on content
  boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
},

  };

  return (
    <nav style={styles.navContainer}>
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Kancharla Hemanth</div>
      {isMobile ? (
        <>
          <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <div style={styles.mobileMenu}>
            <button style={styles.navLink} onClick={() => handleNav('/')}>Home</button>
            <button style={styles.navLink} onClick={() => handleNav('/skills')}>Skills</button>
            <button style={styles.navLink} onClick={() => handleNav('/projects')}>Projects</button>
            <button style={styles.navLink} onClick={() => handleNav('/edu')}>Education</button>
            <button style={styles.navLink} onClick={() => handleNav('/contact')}>Contact</button>
          </div>
        </>
      ) : (
        <ul style={styles.navLinks}>
          <li><button style={styles.navLink} onClick={() => handleNav('/')}>Home</button></li>
          <li><button style={styles.navLink} onClick={() => handleNav('/skills')}>Skills</button></li>
          <li><button style={styles.navLink} onClick={() => handleNav('/projects')}>Projects</button></li>
          <li><button style={styles.navLink} onClick={() => handleNav('/edu')}>Education</button></li>
          <li><button style={styles.navLink} onClick={() => handleNav('/contact')}>Contact</button></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
