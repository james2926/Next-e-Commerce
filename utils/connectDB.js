import mongoose from 'mongoose';

// connecting to database
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false); // Set this option before connecting
    await mongoose.connect("mongodb://127.0.0.1:27017/store", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Database connected successfully`);
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
  }
};

export default connectDB;
