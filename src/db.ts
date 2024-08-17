import mongoose from "mongoose";

export const DBConnect = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("Already connected to the database.");
      return true;
    }
    
    const mongoKey = process.env.MONGODB_URI as string;
    if (!mongoKey) {
      throw new Error("MongoDB URI is not defined in the environment variables.");
    }

    await mongoose.connect(mongoKey);

    console.log("Connected to the database.");
    return true;
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return false;
  }
};
