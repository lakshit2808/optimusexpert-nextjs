
import { MongoClient } from 'mongodb';
let cachedClient = null;
let cachedDb = null;

// Function to connect to the MongoDB database
async function connectToDatabase(uri) {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  const db = client.db(process.env.MONGODB_NAME); // Replace with your database name

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

// API Route to store data in MongoDB
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase(process.env.MONGODB_URL);

      const data = req.body;

      const collection = db.collection('contact-via-form'); // Replace with your collection name

      const result = await collection.insertOne(data);

      res.status(200).json({ success: true, data: result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to store data' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
