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
app.use()

export {app}



