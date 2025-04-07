<<<<<<< HEAD
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

//routes import

import userRouter from './routes/user.routes.js';

// routes declaration
// we used to write app.get in routers but routers are in separate files we should first call middleware
app.use('/api/v1/users', userRouter);

// http://localhost:8000/api/v1/users/register

export { app };
=======
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// configuration
app.use(express.json({limit: "16kb"}))
// url encoded for names such as AKhil Verma - in url it can be Akhil+Verma or maybe Akhil%20Verma
app.use(express.urlencoded({extended: true, limit: '16kb'}))
app.use(express.static("public"))
app.use(cookieParser())



export {app}



>>>>>>> 2c1a56955f3282938aff2c48c49bdbd80b74cf72
