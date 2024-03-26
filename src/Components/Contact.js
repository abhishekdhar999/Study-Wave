import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function ContactUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p className='text-lg font-bold'>If you have any questions or inquiries, please feel free to reach out to us using the contact information provided below.</p>
      
      <div style={styles.contactInfo}>
        <div style={styles.contactItem}>
          <FaPhone style={ { ...styles.icon, transform: 'scaleX(-1)', color: '#0084ff' }} />
          <p><strong>Phone:</strong> +1234567890</p>
        </div>
        <div style={styles.contactItem}>
          <FaEnvelope style={{ ...styles.icon, color: '#ff0000' }} />
          <p><strong>Email:</strong> contact@example.com</p>
        </div>
        <div style={styles.contactItem}>
          <FaLinkedin style={{ ...styles.icon, color: '#0077b5' }} />
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>Company Name</a></p>
        </div>
        <div style={styles.contactItem}>
          <FaTwitter style={{ ...styles.icon, color: '#1da1f2' }} />
          <p><strong>Twitter:</strong> <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>@CompanyName</a></p>
        </div>
        <div style={styles.contactItem}>
          <FaFacebook style={{ ...styles.icon, color: '#1877f2' }} />
          <p><strong>Facebook:</strong> <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>Company Name</a></p>
        </div>
        <div style={styles.contactItem}>
          <FaInstagram style={{ ...styles.icon, color: '#c13584' }} />
          <p><strong>Instagram:</strong> <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>@CompanyName</a></p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '50px auto',
    padding: '20px',
    backgroundImage: 'linear-gradient(to bottom right, #ffffff, #f0f0f0)', // Updated backgroundImage
    borderRadius: '10px',
    boxShadow: '10px 20px 40px rgba(0, 0, 0, 0.2)', // Updated boxShadow
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6'
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center'
  },
  contactInfo: {
    marginTop: '30px',
    fontSize: '1.2rem',
    lineHeight: '2',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  icon: {
    marginRight: '10px',
    fontSize: '1.5rem',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out',
    marginLeft: '5px'
  }
};

export default ContactUs;