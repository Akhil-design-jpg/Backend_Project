import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from '../src/db/index.js';

dotenv.config({
  path: './env',
});

const PORT = process.env.port || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at PORT: ${PORT}`);
    });
  })

  .catch((err) => {
    console.log(`MONGO DB connection failed!!!, ${err}`);
  });
