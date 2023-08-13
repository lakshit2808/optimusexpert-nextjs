import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

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
        <div>Test</div>

    </div>
  );
};

export default SectionWrapper(About, "about");