import React from 'react';
import { 
  FaGraduationCap, 
  FaCertificate, 
  FaTrophy, 
  FaRobot,
  FaFlask,
  FaLinkedin,
  FaGithub,
  FaCode
} from 'react-icons/fa';

const EducationAchievements = () => {
  // Gradient background colors
  const bgGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  const cardGradient = 'linear-gradient(to right, #ffffff, #f8f9fa)';

  // Education Data
  const educationData = [
    {
      icon: <FaGraduationCap style={{ color: '#667eea' }} />,
      institution: "Annamacharya Institute of Technology and Science, Tirupati",
      degree: "B.Tech in Electronics and Communication Engineering",
      details: "CGPA: 9.44 (Pursuing)",
      year: "2022-2026"
    },
    {
      icon: <FaGraduationCap style={{ color: '#667eea' }} />,
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate (MPC)",
      details: "Percentage: 96.2%",
      year: "2020-2022"
    },
    {
      icon: <FaGraduationCap style={{ color: '#667eea' }} />,
      institution: "Sri Chaitanya School",
      degree: "Secondary School Certificate (SSC)",
      details: "Percentage: 97.1%",
      year: "2019-2020"
    }
  ];

  // Certifications Data
  const certificationsData = [
    {
      icon: <FaCertificate style={{ color: '#f6d365' }} />,
      title: "Python Programming",
      issuer: "IIT Bombay (Spoken Tutorial)",
      year: "2023"
    },
    {
      icon: <FaCode style={{ color: '#f6d365' }} />,
      title: "Frontend Development",
      issuer: "Udemy (HTML, CSS, JS, React)",
      year: "2024"
    },
    {
      icon: <FaCertificate style={{ color: '#f6d365' }} />,
      title: "Project Management",
      issuer: "Great Learning",
      year: "2023"
    }
  ];

  // Achievements Data
  const achievementsData = [
    {
      icon: <FaTrophy style={{ color: '#ff9a9e' }} />,
      title: "Organized CODEATHON 2K25",
      details: "450+ participants | Annamacharya Institute",
      year: "2025"
    },
    {
      icon: <FaRobot style={{ color: '#a18cd1' }} />,
      title: "UAV Drone Workshop",
      details: "Hands-on training with flight simulations",
      year: "2024"
    },
    {
      icon: <FaFlask style={{ color: '#84fab0' }} />,
      title: "National Science Day Expo",
      details: "Award-winning IoT project presentation",
      year: "2023"
    }
  ];

  // Animation styles
  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
  };

  return (
    <div style={{
      background: bgGradient,
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: "'Poppins', sans-serif",
      color: '#fff'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        opacity: 1,
        transition: 'opacity 0.8s ease'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700',
            marginBottom: '10px',
            background: 'linear-gradient(to right, #fff, #f6d365)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            HEMANTH KANCHARLA
          </h1>
          <p style={{ 
            fontSize: '1.2rem',
            opacity: 0.9
          }}>
            Electronics Engineer & Frontend Developer
          </p>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginTop: '15px'
          }}>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ color: '#fff', fontSize: '1.5rem', transition: 'transform 0.3s', ':hover': { transform: 'scale(1.2)' } }} />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ color: '#fff', fontSize: '1.5rem', transition: 'transform 0.3s', ':hover': { transform: 'scale(1.2)' } }} />
            </a>
          </div>
        </div>

        {/* Education Section */}
        <section style={{ 
          marginBottom: '40px',
          transform: 'translateY(0)',
          transition: 'transform 0.5s ease, opacity 0.5s ease'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff'
          }}>
            <FaGraduationCap /> EDUCATION
          </h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {educationData.map((edu, index) => (
              <div
                key={`edu-${index}`}
                style={{
                  background: cardGradient,
                  padding: '25px',
                  borderRadius: '15px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  ':hover': cardHoverStyle
                }}
              >
                <div style={{ 
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  background: 'rgba(102, 126, 234, 0.1)',
                  padding: '5px 15px',
                  borderRadius: '0 0 0 15px',
                  fontSize: '0.9rem',
                  color: '#667eea',
                  fontWeight: '600'
                }}>
                  {edu.year}
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ 
                    fontSize: '2rem',
                    background: 'rgba(102, 126, 234, 0.1)',
                    padding: '15px',
                    borderRadius: '12px',
                    transition: 'transform 0.3s',
                    ':hover': {
                      transform: 'rotate(5deg)'
                    }
                  }}>
                    {edu.icon}
                  </div>
                  <div>
                    <h3 style={{ 
                      color: '#2c3e50', 
                      margin: '0 0 8px 0',
                      fontSize: '1.3rem',
                      fontWeight: '600'
                    }}>
                      {edu.institution}
                    </h3>
                    <p style={{ 
                      color: '#667eea', 
                      margin: '0 0 5px 0',
                      fontWeight: '500',
                      fontStyle: 'italic'
                    }}>
                      {edu.degree}
                    </p>
                    <p style={{ 
                      color: '#7f8c8d', 
                      margin: '5px 0 0 0',
                      fontSize: '0.95rem'
                    }}>
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Two-column layout for Certifications & Achievements */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr'
          }
        }}>
          {/* Certifications Section */}
          <section style={{
            transform: 'translateY(0)',
            transition: 'transform 0.5s ease 0.2s, opacity 0.5s ease 0.2s'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#fff'
            }}>
              <FaCertificate /> CERTIFICATIONS
            </h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              {certificationsData.map((cert, index) => (
                <div
                  key={`cert-${index}`}
                  style={{
                    background: cardGradient,
                    padding: '25px',
                    borderRadius: '15px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    ':hover': cardHoverStyle
                  }}
                >
                  <div style={{ 
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    background: 'rgba(246, 211, 101, 0.1)',
                    padding: '5px 15px',
                    borderRadius: '0 0 0 15px',
                    fontSize: '0.9rem',
                    color: '#f6d365',
                    fontWeight: '600'
                  }}>
                    {cert.year}
                  </div>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ 
                      fontSize: '2rem',
                      background: 'rgba(246, 211, 101, 0.1)',
                      padding: '15px',
                      borderRadius: '12px',
                      transition: 'transform 0.3s',
                      ':hover': {
                        transform: 'rotate(5deg)'
                      }
                    }}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 style={{ 
                        color: '#2c3e50', 
                        margin: '0 0 8px 0',
                        fontSize: '1.2rem',
                        fontWeight: '600'
                      }}>
                        {cert.title}
                      </h3>
                      <p style={{ 
                        color: '#7f8c8d', 
                        margin: '0',
                        fontSize: '0.95rem'
                      }}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section style={{
            transform: 'translateY(0)',
            transition: 'transform 0.5s ease 0.4s, opacity 0.5s ease 0.4s'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#fff'
            }}>
              <FaTrophy /> ACHIEVEMENTS
            </h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              {achievementsData.map((ach, index) => (
                <div
                  key={`ach-${index}`}
                  style={{
                    background: cardGradient,
                    padding: '25px',
                    borderRadius: '15px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    ':hover': cardHoverStyle
                  }}
                >
                  <div style={{ 
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    background: 'rgba(255, 154, 158, 0.1)',
                    padding: '5px 15px',
                    borderRadius: '0 0 0 15px',
                    fontSize: '0.9rem',
                    color: '#ff9a9e',
                    fontWeight: '600'
                  }}>
                    {ach.year}
                  </div>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ 
                      fontSize: '2rem',
                      background: 'rgba(255, 154, 158, 0.1)',
                      padding: '15px',
                      borderRadius: '12px',
                      transition: 'transform 0.3s',
                      ':hover': {
                        transform: 'rotate(5deg)'
                      }
                    }}>
                      {ach.icon}
                    </div>
                    <div>
                      <h3 style={{ 
                        color: '#2c3e50', 
                        margin: '0 0 8px 0',
                        fontSize: '1.2rem',
                        fontWeight: '600'
                      }}>
                        {ach.title}
                      </h3>
                      <p style={{ 
                        color: '#7f8c8d', 
                        margin: '0',
                        fontSize: '0.95rem'
                      }}>
                        {ach.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EducationAchievements;