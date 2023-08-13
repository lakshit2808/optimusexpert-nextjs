'use client'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer' 
import React, { useEffect } from 'react'
import Services from './components/Services'
import FeaturedBlogs from './components/FeaturedBlogs'
import Script from 'next/script'

export default function Home() {

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
    <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-Q7RFLX9WDB"/>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q7RFLX9WDB"></script>
    <Script id='google-analytics' strategy='afterInteractive'>
      {` window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-Q7RFLX9WDB');`}
    </Script>
    </>
  )
}
