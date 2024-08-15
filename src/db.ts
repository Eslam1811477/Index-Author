import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI as string; // Use environment variables to store sensitive data

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default async function handler(req: any, res: any) {
  try {
    await client.connect();
    
    await client.db("admin").command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    res.status(200).json({ message: "Connected to MongoDB" });

  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    res.status(500).json({ message: "Failed to connect to MongoDB" });
  } finally {
    await client.close();
  }
}
