import React from 'react';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'JavaScript', level: 88 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'MongoDB', level: 80 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'Git', level: 85 },
  { name: 'GitHub', level: 90 },
  { name: 'VS Code', level: 95 },
  { name: 'C Programming', level: 70 },
  { name: 'Python', level: 75 },
  { name: 'Java', level: 80 },
  { name: 'SQL', level: 78 },
];

const barContainer = {
  height: '14px',
  background: '#e0e0e0',
  borderRadius: '7px',
  overflow: 'hidden',
};

const Skills = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>My Skills</h2>
      <div style={styles.grid}>
        {skills.map(({ name, level }, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.header}>
              <span style={styles.skillName}>{name}</span>
              <span style={styles.levelText}>{level}%</span>
            </div>
            <div style={barContainer} title={`${name} skill level: ${level}%`}>
              <div
                style={{
                  ...styles.progress,
                  width: `${level}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '2rem 1rem',
    background: '#1e1e2f',
    minHeight: '100vh',
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  card: {
    background: '#2c2f4a',
    padding: '1rem 1.5rem',
    borderRadius: '15px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    fontWeight: '600',
    fontSize: '1rem',
  },
  skillName: {
    flex: 1,
  },
  levelText: {
    flexShrink: 0,
  },
  progress: {
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    height: '100%',
    borderRadius: '7px',
    transition: 'width 1s ease-in-out',
  },
};

// Optional: Media Query for Larger Screens
if (window.innerWidth >= 768) {
  styles.grid.gridTemplateColumns = '1fr 1fr';
}

export default Skills;
