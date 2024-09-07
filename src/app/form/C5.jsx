"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/img/Logo/logo_black.png";
import Link from "next/link";

const ContactForm = ({ setCurrentNo, setContactInfo, setFormComplete, progressBar }) => {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      console.log('Form is already submitting. Exiting...');
      return; // Prevent multiple submissions
    }

    console.log('Starting form submission...');
    setIsSubmitting(true);

    // Update contact info and set form complete
    setContactInfo({
      date: new Date().toISOString(),
      name: contactName,
      email: email,
      phone: phone,
      company_name: companyName,
      message: desc,
    });

    setFormComplete(true);

    // Reset form fields
    setEmail("");
    setCompanyName("");
    setContactName("");
    setPhone("");
    setDesc("");

    // Optionally, you can send data to the server here
    // await storeData({
    //   date: new Date().toISOString(),
    //   name: contactName,
    //   email: email,
    //   phone: phone,
    //   company_name: companyName,
    //   message: desc,
    // });

    console.log('Form submission complete.');
    setIsSubmitting(false);
  };



  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex justify-center p-6 bg-white">
        <div className="w-10 h-11 transform">
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div className='ml-10 mr-10'>
        {progressBar()}
      </div>
      <h2 className="text-3xl font-bold mb-8 text-black-100 text-center">
        Success! Let&apos;s connect you with our Team
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@xyz.com"
            className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="XYZ LLC"
            className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Contact Name
          </label>
          <input
            type="text"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+91999221234"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Message"
            className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-sm text-gray-500 mb-4">
          By completing the form, you agree to Optimus Expert&apos;s{" "}
          <Link rel="preload" as="document" href="/terms-conditions" className="text-blue-600">
            Terms of Service
          </Link>
          ,{" "}
          <Link rel="preload" as="document" href="/privacy-policy" className="text-blue-600">
            Privacy Policy
          </Link>
          , and that audio or video meetings and email conversations with
          Optimus Expert&apos;s systems may be recorded or monitored for quality
          assurance, training, and compliance purposes or for your convenience.
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition duration-300"
          disabled={isSubmitting} // Disable button while submitting
        >
          Connect Me
        </button>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={() => setCurrentNo(4)}
            className="px-6 py-2 text-blue-600 font-semibold hover:bg-gray-100 rounded"
          >
            ← Back
          </button>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
