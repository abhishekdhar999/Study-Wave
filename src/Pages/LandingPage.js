import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import CallingAbout from '../Components/CallingAbout';
import MostPopular from '../Components/MostPopular';
import Review from '../Components/Review';
import ContactUs from '../Components/Contact';
export default function LandingPage() {
  return (
    <>
    <div>

    
      <Home></Home>
      <CallingAbout></CallingAbout>
      <MostPopular></MostPopular>
      <Review></Review>
     
    <ContactUs/>

    </div>
      
    </>
  )
}
