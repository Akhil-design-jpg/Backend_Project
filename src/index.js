// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

// 2nd Method
// in Db file

connectDB()



// import express from "express"

// const app = express()

// ( async function asyncCall(){
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
          
//             // listner
//              app.on("Error",()=>{
//                 console.log("Not able to talk to the databse", error);
//                 throw error
                
//             })

//             const PORT  = process.env.PORT
//             app.listen(PORT, ()=>{
//                 console.log(`Appilication is listening on ${PORT}`);
                
//             })
//         } catch (error) {
//             console.error("ERROR",error)
//             throw error
//         }
// })()