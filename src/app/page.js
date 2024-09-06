'use client'
import { NavBar } from './OELandingPage/NavBar'
import { Banner } from './OELandingPage/Banner'
import { Projects } from './OELandingPage/Projects'
import { Contact } from './OELandingPage/Contact'
import { Footer } from './OELandingPage/Footer' 
import React, { useEffect } from 'react'
import Services from './OELandingPage/Services'
import FeaturedBlogs from './OELandingPage/FeaturedBlogs'
import Script from 'next/script'
import { NextUIProvider } from '@nextui-org/react'

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
    <NextUIProvider>
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
    </NextUIProvider>
    </>
  )
}
