// pages/api/razorpay.js
const Razorpay = require("razorpay");
const shortid = require("shortid");

// Initialize razorpay object
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});

async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Extract amount and currency from the request body
            const { amount, currency } = req.body;

            // Validate the inputs
            if (!amount || isNaN(amount) || amount <= 0) {
                return res.status(400).json({ error: 'Invalid amount' });
            }
            if (!currency || typeof currency !== 'string') {
                return res.status(400).json({ error: 'Invalid currency' });
            }

            // Create an order
            const payment_capture = 1;
            const options = {
                amount: (amount * 100).toString(), // Convert amount to paisa
                currency,
                receipt: shortid.generate(),
                payment_capture,
            };

            const response = await razorpay.orders.create(options);
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;
