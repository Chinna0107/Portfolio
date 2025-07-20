import React from 'react';
import Skills from './Skills'; // Adjust path if it's inside /components or /pages
import chinna from './chinna3.png';
import Projects from './Projects';
import Contact from './Contact';


function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <img
          src={chinna}
          alt="Chinna"
          style={styles.image}
        />
        <div style={styles.textBox}>
          <h1 style={styles.title}>Hi, I'm Hemanth Kancharla 👋</h1>
          <h2 style={styles.subtitle}>Founder & CEO of ChinnaMart.in</h2>
          <h3 style={styles.role}>Full Stack Web Developer</h3>
          <p style={styles.desc}>
            Passionate about building scalable web apps, automating e-commerce websites.
          </p>
        </div>
      </div>

      <div style={styles.educationSection}>
        <h2 style={styles.sectionTitle}>🎓 Education</h2>
        <ul style={styles.educationList}>
          <li>B.Tech in ECE, Annamacharya Institute of Technology And Sciences-Tirupathi (2022 - 2026)</li>
          <li>Intermediate: Sri Chaitanya Jr College (2020 - 2022)</li>
          <li>10th Grade: Sri Chaitanya School (2019 - 2020)</li>
        </ul>
      </div>

      {/* 👇 Include the Skills component here */}
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#1e1e2f',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem 1rem',
    fontFamily: 'sans-serif',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1.5rem',
  },
  image: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    border: '4px solid #ffb700',
    objectFit: 'cover',
    boxShadow: '0 0 20px rgba(255, 183, 0, 0.5)',
  },
  textBox: {
    maxWidth: '700px',
    padding: '0 1rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#ffb700',
  },
  subtitle: {
    fontSize: '1.6rem',
    margin: '0.3rem 0',
  },
  role: {
    fontSize: '1.3rem',
    color: '#ffa500',
  },
  desc: {
    fontSize: '1rem',
    marginTop: '0.6rem',
    color: '#ccc',
  },
  educationSection: {
    marginTop: '3rem',
    background: '#292947',
    padding: '1.5rem',
    borderRadius: '12px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0 0 12px rgba(255, 185, 0, 0.2)',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#ffb700',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  educationList: {
    listStyle: 'none',
    paddingLeft: '0',
    textAlign: 'left',
    lineHeight: '1.8rem',
    color: '#ddd',
  },
};

export default Home;
