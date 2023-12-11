import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MOGODB_URI);
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};
