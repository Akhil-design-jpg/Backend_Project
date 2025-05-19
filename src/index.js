// require('dotenv').config({path:'./env'})

// import mongoose from "mongoose"
// import { DB_NAME } from "./constants";
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

// use try catch to access the database
// const PORT = process.env.PORT

dotenv.config({
    path: './env'
})


// defined connectDb() in other file so imported it here
connectDB()











// IFFE
// import express from 'express'
// const app = express()

// (async ()=>{
//     try {
//     const connectionINS =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.log(`\n MongoDB connected !! DB Host: ${connectionINS}`);
     
//     app.on("error",(err)=>{
//             console.log('Application not able to talk to database',err);
            
//         })

        
//         app.listen(PORT,()=>{
//             console.log(`App listening to port: ${PORT}`);
            
//         })
//     } catch (error) {
//      console.error("ERROR: ",error);
        
//     }

// })()