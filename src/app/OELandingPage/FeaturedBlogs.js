'use client'
import React, {useEffect, useState} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles/style";
import { experiences } from "../constants";
import { SectionWrapper } from "../utils/hoc";
import { textVariant } from "../utils/motion";
import Image from "next/image";

const FeaturedBlogs = ({ experience }) => {

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className='w-[80%] h-[80%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 id="insights-title" className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          <a id="insights-readmore" href={experience.url} target="_blank" className="text-[##00008B] no-underline">Read More</a>
        </p>
      </div>

      <ul id="insights-bulletpts" className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div id="blog">
      <div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
      Unleashing the Power of Quantitative Strategies
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Quantitative Insights
      </h2>
      </div>  

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <FeaturedBlogs
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");