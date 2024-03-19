import React from 'react';
import imageSrc from './aboutus.svg'; // Import your image source

function AboutUs() {
  return (
    <>
    <div>
    <img className='rounded-lg p-4' src={imageSrc} alt="About Us" style={styles.image} />
    </div>
      <div style={styles.container}>
       
        <h1 style={styles.heading}>About Us</h1>
        <p className='text-lg'><b>Welcome to TheStudyWave</b></p>
        <br></br>
        <p>At TheStudyWave, we are passionate about providing exceptional educational experiences to students of all ages across the USA, UK, Canada, and Australia. Our mission is to empower learners to reach their full potential through personalized one-on-one classes, tailored to their unique learning styles and needs.</p>
        
        <h2 style={styles.subHeading}>Our Vision</h2>
        <p>Our vision is to revolutionize the way education is delivered by offering a dynamic platform where students can thrive academically, develop essential skills, and prepare for future success. We aim to be a trusted partner in every student's educational journey, providing the tools and support they need to excel in their studies and beyond.</p>
        
        <h2 style={styles.subHeading}>What Sets Us Apart</h2>
        <ul style={styles.list}>
            <li><strong>Personalized Learning:</strong> We believe that every student is unique, which is why we offer personalized one-on-one classes designed to meet the individual needs and goals of each learner.</li>
            <li><strong>Comprehensive Curriculum:</strong> Our curriculum covers a wide range of subjects, including math, science, coding, English and more, ensuring that students have access to a diverse and enriching educational experience.</li>
            <li><strong>Experienced Instructors:</strong> Our team of experienced instructors are dedicated professionals who are passionate about teaching and committed to helping students succeed. With their expertise and guidance, students can overcome challenges, build confidence, and achieve their academic goals.</li>
            <li><strong>Exam Preparation:</strong> Whether it's preparing for standardized tests such as the SAT, ACT, GCSE, ATAR, NAPLAN or provincial exams, we provide comprehensive exam preparation to help students excel and achieve their desired results.</li>
        </ul>
        
        <h2 style={styles.subHeading}>Our Commitment</h2>
        <p>At TheStudyWave, we are committed to excellence in education and to fostering a supportive and inclusive learning environment where every student can thrive. We prioritize skill mastery, critical thinking, and lifelong learning, empowering students to become confident, independent learners who are prepared to succeed in an ever-changing world.</p>
        
        <p>Join us at <strong>TheStudyWave</strong> and embark on a journey of discovery, growth, and academic achievement. Together, we'll make waves in the world of education!</p>
        
        <p><a href="#" style={styles.link}>Contact Us</a> to learn more or <a href="#" style={styles.link}>Book a Free Class</a> to start your personalized learning journey today!</p>
      </div>
    </>
  );
}

const styles = {
  container: {
    position: 'relative',
    zIndex: '1',
    maxWidth: '1000px',
    margin: '50px auto',
    padding: '20px',
    backgroundImage: 'linear-gradient(to bottom right, #ffffff, #f0f0f0)',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6'
  },
  image: {
    width: '100%',
    borderRadius: '40px 40px 40px 40px', // to match the top border radius of the containe
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#007bff'
  },
  subHeading: {
    fontSize: '1.8rem',
    marginTop: '30px',
    marginBottom: '15px',
    fontWeight: 'bold'
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '20px',
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#555'
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    marginRight: '10px'
  }
};

export default AboutUs;
