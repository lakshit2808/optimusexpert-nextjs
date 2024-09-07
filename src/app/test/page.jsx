'use client'

import React, { useState } from 'react'
import Script from 'next/script'
import { Button } from '@nextui-org/react'

const Page = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const AMOUNT = 100;  // Amount in primary currency unit
    const CURRENCY = "INR";
    const REDIRECT_URL = "https://nesin.io/blog/integrate-razorpay-with-nextjs";

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
                        name: "John Doe",
                        email: "jdoe@example.com",
                        contact: "9876543210",
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
        <div>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />
            Pay Amount: ${AMOUNT}
            <Button
                onClick={makePayment}
                disabled={isProcessing}
                className='bg-green-800 mt-5 ml-5'
            >
                {isProcessing ? "Processing..." : "Buy Now"}
            </Button>
        </div>
    );
}

export default Page;
