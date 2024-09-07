"use client"
import React, { useState } from "react";
import Script from 'next/script'

export default function BuyModal({AMOUNT, REDIRECT_URL, CURRENCY}) {

    // ______________ Form Handling ______________
  // State to manage modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  // Function to toggle modal visibility
  const toggleModal = () => setIsOpen(prev => !prev);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  // __________________________________

  // __________ Payment Processing ___________
  const [isProcessing, setIsProcessing] = useState(false);

  const makePayment = async () => {
    setIsProcessing(true);
    try {
        // Make API call to the serverless API
        const response = await fetch("/api/razorpay", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: AMOUNT, currency: CURRENCY }),
        });

        const data = await response.json();

        if (response.ok) {
            const options = {
                key: process.env.RAZORPAY_ID,
                name: data.name,
                currency: data.currency,
                amount: data.amount,
                order_id: data.id,
                description: data.description,
                handler: function (response) {
                    console.log("Payment successful", response);
                    window.location.href = REDIRECT_URL;
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone,
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } else {
            console.error('Failed to create order:', data.error);
            alert("Failed to create payment order. Please try again.");
        }
    } catch (error) {
        console.error('Error during payment process:', error);
        alert("An error occurred. Please try again.");
    } finally {
        setIsProcessing(false);
    }
};

  return (
    <>
                <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />
      <button
        onClick={toggleModal}
        className="block text-gray-200 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Buy Now
      </button>

      {isOpen && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900/70 backdrop-blur-sm"
        >
          <div className="relative p-4 w-full max-w-md max-h-full bg-gray-900 rounded-lg shadow-lg">
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              onClick={toggleModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <h3 className="text-lg font-semibold text-white mb-4">
              Place Order
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                  placeholder="John"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Phone No
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                    placeholder="+919876543210"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                    placeholder="john@xyz.com"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="text-gray-900 inline-flex items-center bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={makePayment}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Purchase Now"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
