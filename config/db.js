import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB:", process.env.MONGODBURI);
    await mongoose.connect(process.env.MONGODBURI);
    console.log('MongoDB connected ✅');
  } catch (err) {
    console.error('DB connection error:', err);
    process.exit(1);
  }
};
