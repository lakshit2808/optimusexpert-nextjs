'use client'
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import React, { useState } from "react";

const ServiceCard = ({ index, title, icon }) => (
  

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

const About = () => {
  const [Popup, setPopup] = useState(false);
  const [InfoIndex, setInfoIndex] = useState(0);

  return (
    <div id="services">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Services</p>
        <h2 className={styles.sectionHeadText}>Tech Stack & Technology we use.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      We provide the Full Stack Application Solution for you. Our developers have developed countless projects successfully and have extensive knowledge of HTML5, CSS Frameworks(Tailwind, BootStrap), JS Frameworks (React JS, Express, NextJs,Angular), Python (Django, Flask, FastAPI), Java, and Node JS for the front end. For the creation of cross-platform mobile apps, React Native is our primary coding language. We operate with most non-relational databases like Firebase, MongoDB and DynamoDB as well as traditional ones like PostgreSQL, MSSQL, etc. Our team has experience with Devops using Docker, Nginx, and other tools on AWS, Google Cloud, etc.
      </motion.p>

      {Popup ? (
      <div id="info-popup" className="mt-10 flex justify-center relative left-[18rem] items-center flex-col w-1/2 rounded-lg shadow-xl h-auto p-2 border-2">
                <h1 className="text-base mt-2 font-semibold text-center mx-4 text-lg text-white">
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
          <ServiceCard key={service.title} index={index} {...service} />
          </div>
        ))
        }
      </a>




    </div>
  );
};

export default SectionWrapper(About, "about");