"use client";
import C1 from "./C1";
import C2 from "./C2";
import C3 from "./C3";
import C4 from "./C4";
import C5 from "./C5";
import React, { useState } from "react";



const Form = () => {
  const [currentNo, setCurrentNo] = useState(1);
  const [formCompelete, setFormComplete] = useState(false);

  const contactData = {
    date: "",
    name: "",
    email: "",
    phone: "",
    company_name: "",
    message: "",
  };

  async function storeData(data) {
    const response = await fetch('/api/MongoDB', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
    return result;
  }
  

  const [selectedRole, setSelectedRole] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [startdate, setStartDate] = useState("");
  const [contactInfo, setContactInfo] = useState(contactData);

  if (formCompelete) {
    // Handle Storage of Form
    // console.log(selectedRole);
    // console.log(selectedSize);
    // console.log(selectedType);
    // console.log(startdate);
    // console.log(contactInfo);
    const data = {
      date:contactInfo['date'],
      name: contactInfo['name'],
      email: contactInfo['email'],
      phone: contactInfo['phone'],
      company_name: contactInfo['company_name'],
      message: contactInfo['message'],
      what_to_build: selectedRole,
      no_of_company_emp: selectedSize,
      type_of_project: selectedType,
      startdate: startdate
    }
    storeData(data)
    console.log("Done!")
  }

  const trustedCompanies = [
    "MatchVision.AI",
    "QuantCore Ventures LLC",
    "Digial Acceleration Partners",
    "Indigo Financial A&C LLC",
    "Minutes Matter Transportation",
    "LK Holdings Group",
    "I-Venture Immersive",
    "MongoDB Cloud"
  ];

  const progressBar = () => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-green-600 h-2.5 rounded-full dark:bg-green-500"
          style={{ width: `${(currentNo*100)/5}%` }}
        ></div>
      </div>
    );
  };

  const QuestionComponent = () => {
    if (currentNo === 1)
      return (
        <C1
          setCurrentNo={setCurrentNo}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          progressBar={progressBar}
        />
      );
    else if (currentNo === 2)
      return (
        <C2
          setCurrentNo={setCurrentNo}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          progressBar={progressBar}
        />
      );
    else if (currentNo === 3)
      return (
        <C3
          setCurrentNo={setCurrentNo}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          progressBar={progressBar}
        />
      );
    else if (currentNo === 4)
      return (
        <C4
          setCurrentNo={setCurrentNo}
          startdate={startdate}
          setStartDate={setStartDate}
          progressBar={progressBar}
        />
      );
    else
      return (
        <C5
          setCurrentNo={setCurrentNo}
          setContactInfo={setContactInfo}
          formCompelete={formCompelete}
          setFormComplete={setFormComplete}
          progressBar={progressBar}
        />
      );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">

      <QuestionComponent />
      <div className="w-full md:w-1/3 bg-gray-800 p-8 flex flex-col justify-center">
        <h3 className="text-white text-lg font-semibold mb-6">Partner Ecosystem</h3>
        <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500"></div>
  
        <div className="grid grid-cols-2 gap-6">
          {trustedCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-gray-700 h-12 flex items-center justify-center rounded"
            >
              <span className="text-white text-sm">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  

export default Form;
