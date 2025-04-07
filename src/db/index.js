<<<<<<< HEAD
import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log('MONGODB connection FAILED ', error);
    process.exit(1);
  }
};

export default connectDB;
=======
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
         const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
         console.log(` \n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
         

    } catch (error) {
        console.log("MONGODB connection failed",error);
        process.exit(1) // method
        
    }
}

export default connectDB
>>>>>>> 2c1a56955f3282938aff2c48c49bdbd80b74cf72
