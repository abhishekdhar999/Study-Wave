import React from 'react';
// import imageSrc from './aboutus.svg'; // Import your image source
import aboutimg from '../utils/images/about.png'
function AboutUs() {
  return (
    <>
    <div className='flex justify-center h-48 my-24 items-center'>
    <img  className='rounded-lg p-4  h-[400px]  md:w-[800px]  ' src={aboutimg} alt="About Us" style={styles.image} />
    </div>


      <div style={styles.container} >
       <div className='flex justify-center items-center'>
       <div className='h-1 bg-cyan-500 w-[20vw] mx-2' ></div>
       <h1 className=' font-extrabold text-5xl text-teal-600'>About Us</h1>
       <div className='h-1 bg-cyan-500 w-[20vw] mx-2'></div>
       </div>
        
        <p className='text-xl my-4'><b>Welcome to <span className='text-cyan-600 font-extrabold'>TheStudyWave</span></b></p>
        <br></br>
        <p className='text-teal-700 text-lg font-light'>At TheStudyWave, we are passionate about providing exceptional educational experiences to students of all ages across the USA, UK, Canada, and Australia. Our mission is to empower learners to reach their full potential through personalized one-on-one classes, tailored to their unique learning styles and needs.</p>
        
        <h2 style={styles.subHeading} className='text-orange-500'>Our Vision</h2>
        <p className='text-teal-700 text-lg font-light'>Our vision is to revolutionize the way education is delivered by offering a dynamic platform where students can thrive academically, develop essential skills, and prepare for future success. We aim to be a trusted partner in every student's educational journey, providing the tools and support they need to excel in their studies and beyond.</p>
        
        <h2 style={styles.subHeading} className='text-orange-500'>What Sets Us Apart</h2>
        <ul style={styles.list}>
            <li className='text-teal-700'><strong>Personalized Learning:</strong> We believe that every student is unique, which is why we offer personalized one-on-one classes designed to meet the individual needs and goals of each learner.</li>
            <li className='text-teal-700'><strong>Comprehensive Curriculum:</strong> Our curriculum covers a wide range of subjects, including math, science, coding, English and more, ensuring that students have access to a diverse and enriching educational experience.</li>
            <li className='text-teal-700'><strong>Experienced Instructors:</strong> Our team of experienced instructors are dedicated professionals who are passionate about teaching and committed to helping students succeed. With their expertise and guidance, students can overcome challenges, build confidence, and achieve their academic goals.</li>
            <li className='text-teal-700'><strong>Exam Preparation:</strong> Whether it's preparing for standardized tests such as the SAT, ACT, GCSE, ATAR, NAPLAN or provincial exams, we provide comprehensive exam preparation to help students excel and achieve their desired results.</li>
        </ul>
        
        <h2 style={styles.subHeading} className='text-orange-500'>Our Commitment</h2>
        <p className='text-teal-700 text-lg'>At TheStudyWave, we are committed to excellence in education and to fostering a supportive and inclusive learning environment where every student can thrive. We prioritize skill mastery, critical thinking, and lifelong learning, empowering students to become confident, independent learners who are prepared to succeed in an ever-changing world.</p>
        
        <p className='text-teal-700 text-lg'>Join us at <strong>TheStudyWave</strong> and embark on a journey of discovery, growth, and academic achievement. Together, we'll make waves in the world of education!</p>
        
        <p className='text-lg text-teal-700'><a href="/" style={styles.link}>Contact Us</a> to learn more or <a href="/" style={styles.link}>Book a Free Class</a> to start your personalized learning journey today!</p>
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
    //  backgroundImage: {aboutimg},
    borderRadius: '10px',
     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6'
  },
//   image: {
//     width: '100%',
//     borderRadius: '40px 40px 40px 40px', // to match the top border radius of the container
//   },
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