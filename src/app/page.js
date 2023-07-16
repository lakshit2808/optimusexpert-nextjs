'use client'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer' 
import React, { useEffect } from 'react'
import Services from './components/Services'
import FeaturedBlogs from './components/FeaturedBlogs'
// import Feedback from './components/Feedback'

export default function Home() {

  // await new Promise(resolve => setTimeout(resolve , 3000) ); // for splash screen

useEffect(() => {
  const script = document.createElement('script');

  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;

  document.body.appendChild(script);

  return () => {
    
    document.body.removeChild(script);
  }
}, []);

  return (
    <>
    <NavBar/>
    <Banner/>
    <Services/>
    <FeaturedBlogs/>
    {/* <Feedback/> */}
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}
