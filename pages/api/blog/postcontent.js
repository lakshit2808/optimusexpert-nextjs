// /pages/api/blog/postcontent.js

import { MongoClient } from "mongodb";
import multer from "multer";

// Initialize multer for file uploads
const upload = multer({
    storage: multer.memoryStorage(), // Store the image in memory temporarily
});

// Create a MongoDB client instance
const client = new MongoClient(process.env.MONGODB_URL || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Connect to MongoDB
async function connectToDatabase() {
    if (!client.isConnected()) await client.connect();
    return client.db(process.env.MONGODB_NAME || '');
}

// API Route Handler
export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Use multer to parse the incoming form data
        upload.single('image')(req, res, async (err) => {
            if (err) {
                console.error("Multer Error:", err);
                return res.status(500).json({ error: "Image upload failed." });
            }

            const { title, author, avatar, date, duration, topics, content } = req.body;
            const image = req.file;
        

            if (!image) {
                return res.status(400).json({ message: "Image is required!" });
            }

            try {
                const database = await connectToDatabase();
                const collection = database.collection("blog-content");

                // Convert image to base64
                const imageBase64 = image.buffer.toString('base64');
                const imagePath = `data:${image.mimetype};base64,${imageBase64}`;

                const blogPost = {
                    id: title.toLowerCase().replace(/ /g, '-'),
                    title,
                    author,
                    avatar,
                    date,
                    duration,
                    image: imagePath,
                    topics: Array.isArray(JSON.parse(topics)) ? JSON.parse(topics) : [],
                    content,
                };

                await collection.insertOne(blogPost);
                res.status(201).json({ message: "Blog post with image saved successfully!" });
            } catch (error) {
                console.error("Error saving blog post:", error);
                res.status(500).json({ message: "Something went wrong while saving the blog post." });
            }
        });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// Disable the default body parser (this is necessary for multer)
export const config = {
    api: {
        bodyParser: false,
    },
};
