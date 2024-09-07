"use client";
import C1 from "./C1";
import C2 from "./C2";
import C3 from "./C3";
import C4 from "./C4";
import C5 from "./C5";
import React, { useState, useEffect } from "react";
import Link from "next/link";


const Form = () => {
  const [currentNo, setCurrentNo] = useState(1);
  const [formComplete, setFormComplete] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const contactData = {
    date: "",
    name: "",
    email: "",
    phone: "",
    company_name: "",
    message: "",
  };


  const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          {children}
        </div>
      </div>
    );
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

  useEffect(() => {
    if (formComplete) {
      const data = {
        date: contactInfo.date,
        name: contactInfo.name,
        email: contactInfo.email,
        phone: contactInfo.phone,
        company_name: contactInfo.company_name,
        message: contactInfo.message,
        what_to_build: selectedRole,
        no_of_company_emp: selectedSize,
        type_of_project: selectedType,
        startdate: startdate
      };

      const submitData = async () => {
        await storeData(data);
        setShowModal(true); // Show the modal on successful submission
        setFormComplete(false);
      };

      submitData();
    }
  }, [formComplete]);

  const trustedCompanies = [
    "MatchVision.AI",
    "QuantCore Ventures LLC",
    "Digital Acceleration Partners",
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
          style={{ width: `${(currentNo * 100) / 5}%` }}
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
          setFormComplete={setFormComplete}
          progressBar={progressBar}
        />
      );
  };

  const SuccessModalContent = ({ onClose }) => (
    <div className="relative p-6">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        <a rel="preload" as="document" href="/">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </a>
      </button>
      <div className="flex items-center">
        <svg className="flex-shrink-0 w-6 h-6 text-green-500 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <h3 className="text-lg font-medium text-green-700">Submission Successful! Your Request Has Been Received</h3>
      </div>
      <div className="mt-2 text-sm text-gray-700">
        Thank you for reaching out to Optimus Expert. Your request has been successfully submitted. We’ll review your requirements and get back to you shortly with the next steps.
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <QuestionComponent />
      <div className="w-full md:w-1/3 bg-gray-800 p-8 flex flex-col justify-center">
        <h3 className="text-white text-lg font-semibold mb-6">Partner Ecosystem</h3>
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
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <SuccessModalContent onClose={() => setShowModal(false)} />
      </Modal>

    </div>
  );
};

export default Form;
