import mongoose from 'mongoose';

const MONGO_URI: string = process.env.MONGO_URI!;

async function connectDB(): Promise<void> {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log('⚡ Already connected to DB');
      return;
    }

    mongoose.set('strictQuery', false);

    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to DB');
  } catch (error) {
    console.error('❌ Error connecting to DB:', error);
    throw error;
  }
}

export default connectDB;
