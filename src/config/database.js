import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://marcelol:porcoaranha@api-clients.wrsuazq.mongodb.net/?retryWrites=true&w=majority&appName=api-clients');
    console.log('MongoDB Connected...')
  } catch (err) {
    console.error('MongoDB Connection Error:', err)
    process.exit(1)
  }
}

export default connectDB
