'use client'
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles/style";
import { services } from "../constants";
import { SectionWrapper } from "../utils/hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";


const UnMotionServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full service-box'>
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[0.8rem] font-bold text-center'>
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);


const UnMotionComponent = () =>{
  const [Popup, setPopup] = useState(false);
  const [InfoIndex, setInfoIndex] = useState(0);
  return (<>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Services</p>
        <h2 className={styles.sectionHeadText}>Tech Stack & Technology we use.</h2>
      </div>

      <p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-full leading-[30px]'
>
  At the very center of our business lies the powerful, modern technology stack we use to create high-performance SaaS development in generative AI products and automated trading systems. Our tech stack is built to scale, ensure security, and provide an easy interface for integration with other platforms. Here is a glimpse of what we use:

  Programming Languages: Python, JavaScript (Node.js, React) and C++ to develop complex applications, trading algorithms, and data processing systems.

  Cloud Platforms: AWS and Google Cloud are used for hosting, data storage, and deployment of scalable SaaS applications with global availability.

  Machine Learning & AI: TensorFlow, PyTorch, and OpenAI APIs power our AI and deep learning models used in generative AI products and automated trading.

  Data Management: PostgreSQL, MongoDB, Redis ensure well-architected and reliable data storage for highly-available performance-critical applications.

  Backtesting & Quant Dev: Custom backtesting frameworks with libraries such as Pandas, NumPy, backtrader enable efficient simulation and evaluation of trading strategies.

  DevOps & CI/CD: Technologies such as Docker, Kubernetes, Jenkins, and GitLab CI are applied to ensure streamlined deployments and rapid iteration on continuous integration.

  APIs & Automation: Core to a real-time, automated trading experience is the use of RESTful APIs, WebSocket, and third-party integration, including financial data APIs.

  We build innovative, reliable, and scalable solutions tailored to the needs of our clients in the fintech, AI, and quantitative development areas by integrating the most state-of-the-art technologies.
</p>


      {Popup ? (
      <div id="info-popup" className="mt-10 flex justify-center relative left-[18rem] items-center flex-col w-1/2 rounded-lg shadow-xl h-auto p-2 border-2">
                <h1 className="text-base mt-2 font-semibold text-center mx-4 text-white">
                    {services[InfoIndex].title}
          </h1>
        <h2 className="text-base mt-2 text-gray-400 font-semibold text-center mx-4">
            {services[InfoIndex].description}
          </h2>
          <div className="flex gap-5">
            <a
              className="my-5 w-auto px-8 h-10 bg-blue-600 no-underline text-white rounded-md shadow hover:shadow-lg font-semibold"
              href="/form"
            >
              <p className="relative top-2 info-box-button">Get in Touch</p>
            </a>
            <button
              className=" w-auto px-12 my-5 border border-red-100 h-10 hover:bg-red-700 hover:text-white   rounded-md text-red-600  hover:shadow-lg font-semibold"
              onClick={() => setPopup(false)}
            >
              Close
            </button>
          </div>
      </div>
      ) : null}      

      <a className='mt-20 flex flex-wrap gap-10 no-underline' onClick={() => setPopup(true)} href="#info-popup" >
        {services.map((service, index) => (
          <div key={service} onClick={()=> setInfoIndex(index)}>
          <UnMotionServiceCard key={service.title} index={index} {...service} />
          </div>
        ))
        }
      </a>  
  </>  
)};

const MotionServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full service-box'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[0.8rem] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const MotionComponent = () =>{
  const [Popup, setPopup] = useState(false);
  const [InfoIndex, setInfoIndex] = useState(0);
  return (<>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Services</p>
        <h2 className={styles.sectionHeadText}>Tech Stack & Technology we use.</h2>
      </motion.div>

      <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-full leading-[30px]'
>
  At the very center of our business lies the powerful, modern technology stack we use to create high-performance SaaS development in generative AI products and automated trading systems. Our tech stack is built to scale, ensure security, and provide an easy interface for integration with other platforms. Here is a glimpse of what we use:

  Programming Languages: Python, JavaScript (Node.js, React) and C++ to develop complex applications, trading algorithms, and data processing systems.

  Cloud Platforms: AWS and Google Cloud are used for hosting, data storage, and deployment of scalable SaaS applications with global availability.

  Machine Learning & AI: TensorFlow, PyTorch, and OpenAI APIs power our AI and deep learning models used in generative AI products and automated trading.

  Data Management: PostgreSQL, MongoDB, Redis ensure well-architected and reliable data storage for highly-available performance-critical applications.

  Backtesting & Quant Dev: Custom backtesting frameworks with libraries such as Pandas, NumPy, backtrader enable efficient simulation and evaluation of trading strategies.

  DevOps & CI/CD: Technologies such as Docker, Kubernetes, Jenkins, and GitLab CI are applied to ensure streamlined deployments and rapid iteration on continuous integration.

  APIs & Automation: Core to a real-time, automated trading experience is the use of RESTful APIs, WebSocket, and third-party integration, including financial data APIs.

  We build innovative, reliable, and scalable solutions tailored to the needs of our clients in the fintech, AI, and quantitative development areas by integrating the most state-of-the-art technologies.
</motion.p>


      {Popup ? (
      <div id="info-popup" className="mt-10 flex justify-center relative left-[18rem] items-center flex-col w-1/2 rounded-lg shadow-xl h-auto p-2 border-2">
                <h1 className="text-base mt-2 font-semibold text-center mx-4 text-white">
                    {services[InfoIndex].title}
          </h1>
        <h2 className="text-base mt-2 text-gray-400 font-semibold text-center mx-4">
            {services[InfoIndex].description}
          </h2>
          <div className="flex gap-5">
            <a
              className="my-5 w-auto px-8 h-10 bg-blue-600 no-underline text-white rounded-md shadow hover:shadow-lg font-semibold"
              href="#connect"
            >
              <p className="relative top-2 info-box-button">Get in Touch</p>
            </a>
            <button
              className=" w-auto px-12 my-5 border border-red-100 h-10 hover:bg-red-700 hover:text-white   rounded-md text-red-600  hover:shadow-lg font-semibold"
              onClick={() => setPopup(false)}
            >
              Close
            </button>
          </div>
      </div>
      ) : null}      

      <a className='mt-20 flex flex-wrap gap-10 no-underline' onClick={() => setPopup(true)} href="#info-popup" >
        {services.map((service, index) => (
          <div key={service} onClick={()=> setInfoIndex(index)}>
          <MotionServiceCard key={service.title} index={index} {...service} />
          </div>
        ))
        }
      </a>  
  </>  
)};

const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  

  return (
    <div id="services">
      {isSmallScreen ? <UnMotionComponent/>: <MotionComponent/>}
    </div>
  );
};

export default SectionWrapper(About, "about");